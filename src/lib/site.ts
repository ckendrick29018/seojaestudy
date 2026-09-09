/**
 * Canonical site identity, shared by metadata, the sitemap, robots, and JSON-LD.
 *
 * `NEXT_PUBLIC_SITE_URL` is set in the Vercel project; the fallback is the
 * production domain so local builds and previews still resolve absolute URLs.
 * Any trailing slash is trimmed so callers can safely do `${SITE_URL}/path`.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.seojaestory.app").replace(/\/+$/, "");

export const SITE_NAME = "SeoJae Story";

export const SITE_DESCRIPTION =
  "Learn English or Korean through short stories, with instant translations, listening practice, vocabulary flashcards, and gentle writing feedback.";
