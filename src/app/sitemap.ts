import type { MetadataRoute } from "next";
import { courses, curricula, listResources } from "@/lib/catalog";
import { SITE_URL } from "@/lib/site";

/** Every public page from the catalog; hidden resources are excluded. */
export default function sitemap(): MetadataRoute.Sitemap {
  const seen = new Map<string, string | undefined>();
  const add = (path: string, lastModified?: string) => {
    const p = path.split("#")[0];
    const prev = seen.get(p);
    if (!seen.has(p) || (lastModified && (!prev || lastModified > prev))) seen.set(p, lastModified);
  };
  ["/", "/browse", "/practice", "/reference", "/worksheets", "/review", "/ib/aa-vs-ai"].forEach((p) => add(p));
  curricula.forEach((c) => add(`/curricula/${c.id}`));
  courses.forEach((c) => add(c.href));
  listResources()
    .filter((r) => r.status === "available")
    .forEach((r) => add(r.href, r.addedOn));
  return [...seen].map(([path, lastModified]) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    ...(lastModified ? { lastModified } : {}),
  }));
}
