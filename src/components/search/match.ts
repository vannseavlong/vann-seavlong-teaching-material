import type { SearchEntry } from "@/lib/catalog/types";

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ");

/** Every query word must appear; title hits rank above context or keyword hits. */
export function searchEntries(entries: SearchEntry[], query: string): SearchEntry[] {
  const words = norm(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  const scored: { e: SearchEntry; score: number }[] = [];
  for (const e of entries) {
    const title = norm(e.title);
    const hay = `${title} ${norm(e.context)} ${norm(e.keywords ?? "")}`;
    if (!words.every((w) => hay.includes(w))) continue;
    let score = 0;
    for (const w of words) {
      if (title.startsWith(w)) score += 4;
      else if (new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).test(title)) score += 3;
      else if (title.includes(w)) score += 2;
    }
    if (e.type === "course") score += 1;
    scored.push({ e, score });
  }
  return scored.sort((a, b) => b.score - a.score || a.e.title.localeCompare(b.e.title)).map((s) => s.e);
}

export const TYPE_HEADING: Record<SearchEntry["type"], string> = {
  course: "Courses",
  topic: "Lesson topics",
  resource: "Materials",
};

/** Group results by type in a fixed order, at most `per` each. */
export function groupResults(results: SearchEntry[], per = Infinity) {
  return (["course", "topic", "resource"] as const)
    .map((type) => ({ type, items: results.filter((r) => r.type === type).slice(0, per) }))
    .filter((g) => g.items.length > 0);
}
