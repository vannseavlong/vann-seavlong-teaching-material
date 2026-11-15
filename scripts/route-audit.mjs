#!/usr/bin/env node
// Route audit: crawls the running site from "/", follows every internal link, and checks
// (1) each page returns 200, (2) each "#anchor" exists on its page, (3) every route that
// existed at a given git ref still returns 200.
//
// Usage: npm run build && npx next start -p 4817   (in another shell)
//        node scripts/route-audit.mjs http://localhost:4817 <git-ref-before-migration>
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const BASE = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const REF = process.argv[3];

const pages = new Map(); // path -> { status, ids:Set, from }
const anchors = []; // { path, id, from }
const queue = [["/", "(start)"]];

const idsOf = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
const linksOf = (html) =>
  [...html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)]
    .map((m) => m[1].replace(/&amp;/g, "&"))
    .filter((h) => h.startsWith("/") && !h.startsWith("//"));

async function visit(path, from) {
  const res = await fetch(BASE + path, { redirect: "follow" });
  const html = res.headers.get("content-type")?.includes("text/html") ? await res.text() : "";
  pages.set(path, { status: res.status, ids: idsOf(html), from });
  return html;
}

while (queue.length) {
  const [path, from] = queue.shift();
  if (pages.has(path)) continue;
  const html = await visit(path, from);
  for (const href of linksOf(html)) {
    const [pathAndQuery, hash] = href.split("#");
    const p = pathAndQuery.split("?")[0] || path;
    if (hash) anchors.push({ path: p, id: decodeURIComponent(hash), from: path });
    if (!pages.has(p) && !queue.some((q) => q[0] === p)) queue.push([p, path]);
  }
}

// Routes that existed before the migration (from the git tree; dynamic segments expanded from this build).
const legacy = [];
if (REF) {
  const files = execSync(`git ls-tree -r --name-only ${REF} src/app`, { encoding: "utf8" })
    .split("\n")
    .filter((f) => /\/page\.tsx$/.test(f));
  const prerendered = Object.keys(JSON.parse(readFileSync(".next/prerender-manifest.json", "utf8")).routes);
  for (const f of files) {
    const route = f.replace(/^src\/app/, "").replace(/\/page\.tsx$/, "") || "/";
    if (route.includes("[")) {
      const re = new RegExp("^" + route.replace(/\[[^\]]+\]/g, "[^/]+") + "$");
      legacy.push(...prerendered.filter((r) => re.test(r)));
    } else legacy.push(route);
  }
  for (const r of legacy) if (!pages.has(r)) await visit(r, "(legacy route)");
}

const bad = [...pages].filter(([, v]) => v.status !== 200);
const missing = anchors.filter((a) => pages.get(a.path)?.status === 200 && !pages.get(a.path).ids.has(a.id));
const uniqMissing = [...new Map(missing.map((m) => [`${m.path}#${m.id}`, m])).values()];

console.log(`Pages checked: ${pages.size}  (legacy routes: ${legacy.length})  anchor links: ${anchors.length}`);
console.log(`Non-200 pages: ${bad.length}`);
for (const [p, v] of bad) console.log(`  ${v.status}  ${p}   (linked from ${v.from})`);
console.log(`Missing anchors: ${uniqMissing.length}`);
for (const m of uniqMissing) console.log(`  ${m.path}#${m.id}   (linked from ${m.from})`);
process.exit(bad.length || uniqMissing.length ? 1 : 0);
