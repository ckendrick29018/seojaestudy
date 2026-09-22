import type { MetadataRoute } from "next";
import { lessonIndex as lessons } from "@/lib/data/lessons-index.generated";
import { BOOKS } from "@/lib/data/books";
import { ARTICLES } from "@/lib/articles";
import { QUOTES } from "@/lib/quotes";
import { localeAlternates } from "@/lib/seo";
import { CONTENT_LAST_MODIFIED, SITE_URL } from "@/lib/site";

/**
 * Generates /sitemap.xml — the public reading surface only. Per-user app
 * screens (settings, saved, study, bookshelf) and gated/auth routes are
 * deliberately left out; they're also disallowed in robots.ts.
 *
 * Real reciprocal hreflang (via `localeAlternates`, src/lib/seo.ts) for the
 * pages that actually have a `/ko` counterpart today — home, classics (+4
 * levels), biographies, every lesson, every book — each also listed as its
 * own `/ko/...` sitemap entry with the same reciprocal pair pointing back.
 * Everything else (library, learn + articles, quotes, folktales, faq,
 * privacy) gets an English-only self-reference: still correct hreflang, just
 * without a Korean alternate, since no Korean version of that content exists
 * yet — see the Korean-locale SEO plan for what's deferred and why.
 *
 * `lastModified` is a fixed content stamp (see `CONTENT_LAST_MODIFIED`), not
 * `new Date()`: a sitemap where every URL claims to have changed on every
 * request is a signal crawlers learn to ignore.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = CONTENT_LAST_MODIFIED;

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1, alternates: localeAlternates("/", true) },
    { url: `${SITE_URL}/library`, lastModified, changeFrequency: "weekly", priority: 0.9, alternates: localeAlternates("/library", false) },
    { url: `${SITE_URL}/classics`, lastModified, changeFrequency: "weekly", priority: 0.8, alternates: localeAlternates("/classics", true) },
    { url: `${SITE_URL}/biographies`, lastModified, changeFrequency: "weekly", priority: 0.7, alternates: localeAlternates("/biographies", true) },
    { url: `${SITE_URL}/folktales`, lastModified, changeFrequency: "weekly", priority: 0.7, alternates: localeAlternates("/folktales", false) },
    { url: `${SITE_URL}/learn`, lastModified, changeFrequency: "monthly", priority: 0.7, alternates: localeAlternates("/learn", false) },
    { url: `${SITE_URL}/quotes`, lastModified, changeFrequency: "monthly", priority: 0.7, alternates: localeAlternates("/quotes", false) },
    { url: `${SITE_URL}/faq`, lastModified, changeFrequency: "monthly", priority: 0.5, alternates: localeAlternates("/faq", false) },
    { url: `${SITE_URL}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3, alternates: localeAlternates("/privacy", false) },
    ...["a1", "a2", "b1", "b2"].map((level) => ({
      url: `${SITE_URL}/classics/${level}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
      alternates: localeAlternates(`/classics/${level}`, true),
    })),
  ];

  // The `/ko` counterparts of the entries above that have one. Each lists the
  // same reciprocal pair as its English sibling (hreflang clusters cite every
  // member, including themselves).
  const koStaticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/ko`, lastModified, changeFrequency: "weekly", priority: 1, alternates: localeAlternates("/", true) },
    { url: `${SITE_URL}/ko/classics`, lastModified, changeFrequency: "weekly", priority: 0.8, alternates: localeAlternates("/classics", true) },
    { url: `${SITE_URL}/ko/biographies`, lastModified, changeFrequency: "weekly", priority: 0.7, alternates: localeAlternates("/biographies", true) },
    ...["a1", "a2", "b1", "b2"].map((level) => ({
      url: `${SITE_URL}/ko/classics/${level}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
      alternates: localeAlternates(`/classics/${level}`, true),
    })),
  ];

  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${SITE_URL}/learn/${article.slug}`,
    lastModified: article.dateModified,
    changeFrequency: "yearly",
    priority: 0.6,
    alternates: localeAlternates(`/learn/${article.slug}`, false),
  }));

  const quoteEntries: MetadataRoute.Sitemap = QUOTES.map((quote) => ({
    url: `${SITE_URL}/quote/${quote.slug}`,
    lastModified: quote.dateModified,
    changeFrequency: "yearly",
    priority: 0.6,
    alternates: localeAlternates(`/quote/${quote.slug}`, false),
  }));

  const bookEntries: MetadataRoute.Sitemap = BOOKS.map((book) => ({
    url: `${SITE_URL}/book/${book.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: localeAlternates(`/book/${book.id}`, true),
  }));

  const koBookEntries: MetadataRoute.Sitemap = BOOKS.map((book) => ({
    url: `${SITE_URL}/ko/book/${book.id}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: localeAlternates(`/book/${book.id}`, true),
  }));

  const lessonEntries: MetadataRoute.Sitemap = lessons.map((lesson) => ({
    url: `${SITE_URL}/lesson/${lesson.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: localeAlternates(`/lesson/${lesson.slug}`, true),
  }));

  const koLessonEntries: MetadataRoute.Sitemap = lessons.map((lesson) => ({
    url: `${SITE_URL}/ko/lesson/${lesson.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: localeAlternates(`/lesson/${lesson.slug}`, true),
  }));

  return [
    ...staticEntries,
    ...koStaticEntries,
    ...articleEntries,
    ...quoteEntries,
    ...bookEntries,
    ...koBookEntries,
    ...lessonEntries,
    ...koLessonEntries,
  ];
}
