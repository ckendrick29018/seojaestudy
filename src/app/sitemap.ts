import type { MetadataRoute } from "next";
import { lessons } from "@/lib/data/lessons";
import { ARTICLES } from "@/lib/articles";
import { CONTENT_LAST_MODIFIED, SITE_URL } from "@/lib/site";

/**
 * Generates /sitemap.xml — the public reading surface only. Per-user app
 * screens (settings, saved, study, bookshelf) and gated/auth routes are
 * deliberately left out; they're also disallowed in robots.ts.
 *
 * Every URL serves the same page in English and Korean (the reader has a
 * language toggle), so each entry advertises both via hreflang + an
 * x-default, pointing at the one canonical URL.
 *
 * `lastModified` is a fixed content stamp (see `CONTENT_LAST_MODIFIED`), not
 * `new Date()`: a sitemap where every URL claims to have changed on every
 * request is a signal crawlers learn to ignore.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = CONTENT_LAST_MODIFIED;

  /** Both languages resolve to the same URL, plus x-default. */
  const bilingual = (path: string) => ({
    languages: {
      en: `${SITE_URL}${path}`,
      ko: `${SITE_URL}${path}`,
      "x-default": `${SITE_URL}${path}`,
    },
  });

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1, alternates: bilingual("/") },
    { url: `${SITE_URL}/library`, lastModified, changeFrequency: "weekly", priority: 0.9, alternates: bilingual("/library") },
    { url: `${SITE_URL}/classics`, lastModified, changeFrequency: "weekly", priority: 0.8, alternates: bilingual("/classics") },
    { url: `${SITE_URL}/folktales`, lastModified, changeFrequency: "weekly", priority: 0.7, alternates: bilingual("/folktales") },
    { url: `${SITE_URL}/learn`, lastModified, changeFrequency: "monthly", priority: 0.7, alternates: bilingual("/learn") },
    { url: `${SITE_URL}/faq`, lastModified, changeFrequency: "monthly", priority: 0.5, alternates: bilingual("/faq") },
    ...["a1", "a2", "b1", "b2"].map((level) => ({
      url: `${SITE_URL}/classics/${level}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
      alternates: bilingual(`/classics/${level}`),
    })),
  ];

  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${SITE_URL}/learn/${article.slug}`,
    lastModified: article.dateModified,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const lessonEntries: MetadataRoute.Sitemap = lessons.map((lesson) => ({
    url: `${SITE_URL}/lesson/${lesson.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: bilingual(`/lesson/${lesson.slug}`),
  }));

  return [...staticEntries, ...articleEntries, ...lessonEntries];
}
