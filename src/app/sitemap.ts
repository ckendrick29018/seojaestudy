import type { MetadataRoute } from "next";
import { lessons } from "@/lib/data/lessons";
import { SITE_URL } from "@/lib/site";

/**
 * Generates /sitemap.xml — the public reading surface only. Per-user app
 * screens (settings, saved, study, bookshelf) and gated/auth routes are
 * deliberately left out; they're also disallowed in robots.ts.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/library`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/classics`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...["a1", "a2", "b1", "b2"].map((level) => ({
      url: `${SITE_URL}/classics/${level}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];

  const lessonEntries: MetadataRoute.Sitemap = lessons.map((lesson) => ({
    url: `${SITE_URL}/lesson/${lesson.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...lessonEntries];
}
