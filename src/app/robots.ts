import type { MetadataRoute } from "next";
import { listResources } from "@/lib/catalog";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const hidden = listResources({ includeHidden: true }).filter((r) => r.hidden).map((r) => r.href);
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/search", ...hidden] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
