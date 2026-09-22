/**
 * Helpers for the additive `/ko` route tree (Korean-locale SEO).
 *
 * `/ko/...` mirrors a curated subset of the English marketing surface — home,
 * classics (+levels), biographies, lessons, books — reusing the same
 * components with Korean metadata and chrome forced on.
 *
 * This is deliberately NOT a general-purpose locale router: `localizePath`
 * only prefixes paths that actually have a `/ko` counterpart today. Every
 * other destination (/library, /learn, /faq, /folktales, the gated app
 * pages...) intentionally still points at English — a graceful fallback, not
 * a bug. Extend `KO_PATH_PREFIXES` as more of the site grows a Korean side.
 */

const KO_PREFIX = "/ko";

/** English-side path prefixes that have a `/ko` counterpart today. */
const KO_PATH_PREFIXES = ["/classics", "/biographies", "/book", "/lesson"];

/** True for `/ko` itself and every path nested under it. */
export function isKoPath(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  return pathname === KO_PREFIX || pathname.startsWith(`${KO_PREFIX}/`);
}

/**
 * Prefixes `path` with `/ko` when the current location (`pathname`) is
 * itself under `/ko` *and* `path` is one of the destinations that actually
 * has a `/ko` counterpart. Otherwise returns `path` unchanged — e.g. a link
 * to `/faq` stays `/faq` even while browsing under `/ko`, since no Korean
 * FAQ page exists yet.
 */
export function localizePath(path: string, pathname: string | null | undefined): string {
  if (!isKoPath(pathname)) return path;
  if (path.startsWith(KO_PREFIX)) return path; // already localized
  if (path === "/") return KO_PREFIX;
  const hasKoCounterpart = KO_PATH_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
  return hasKoCounterpart ? `${KO_PREFIX}${path}` : path;
}
