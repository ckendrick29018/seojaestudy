"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lessonIndex as lessons } from "@/lib/data/lessons-index.generated";
import { ClassicCard } from "@/components/home/ClassicCard";
import { LandingBottom } from "@/components/home/LandingBottom";
import { LandingPreview } from "@/components/home/LandingPreview";
import { CTA_BASE, WRAP } from "@/components/home/landing-styles";
import { ThemeShowcase } from "@/components/home/ThemeShowcase";
import { useT } from "@/components/providers/LanguageProvider";
import { SITE_NAME } from "@/lib/site";
import { SHOW_AUTH_PROMPTS } from "@/lib/beta";
import { localizePath } from "@/lib/locale-path";
import { TapIcon } from "@/components/ui/icons";
import { trackCtaStartReadingClicked } from "@/lib/analytics";

/** A handful of Classics to show the product on the landing page itself. */
const FEATURED = lessons.filter((l) => l.collection === "classics");
const CLASSICS_COUNT = FEATURED.length;

/** Korean-origin folktales — the reverse direction from Classics, shown to
 * make clear the library isn't only Western literature translated one way. */
const FOLKTALES_FEATURED = lessons.filter((l) => l.collection === "folktales");
const FOLKTALES_COUNT = FOLKTALES_FEATURED.length;

// WebSite/Organization/WebApplication JSON-LD lives in `landingJsonLd()`
// (src/lib/seo.ts), rendered by the server wrapper (src/app/page.tsx and
// src/app/ko/page.tsx) — a client component can't export locale-branched
// JSON-LD as cleanly as those two thin wrappers can each call it directly.

export function LandingClient() {
  const t = useT();
  const pathname = usePathname();
  const href = (path: string) => localizePath(path, pathname);

  // A small fanned stack of real covers for the desktop hero — shows a first-
  // time visitor actual books instead of asking them to scroll for proof.
  const HERO_COVERS = FEATURED.slice(0, 3);
  const HERO_ROTATIONS = ["-rotate-6", "rotate-3", "-rotate-1"];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="px-6 pb-12 pt-14 text-center lg:pb-20 lg:pt-20">
        <div className={`${WRAP} lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:text-left`}>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-rose/70">
              {t("landingEyebrow")}
            </p>
            <h1 className="font-serif text-[2rem] font-semibold leading-tight text-charcoal lg:text-5xl lg:leading-[1.1]">
              {t("landingHeadline")}
            </h1>
            <p className="mx-auto mt-4 max-w-[34ch] text-sm leading-relaxed text-charcoal/60 lg:mx-0 lg:max-w-[42ch] lg:text-base">
              {t("landingSubhead")}
            </p>

            <div className="mx-auto mt-6 flex max-w-[30rem] items-start gap-3 rounded-xl2 border border-sage-dark/40 bg-sage/25 px-4 py-3 text-left lg:mx-0 lg:max-w-[28rem]">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/70 text-charcoal/70"
                aria-hidden
              >
                <TapIcon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-charcoal">{t("landingTapCalloutTitle")}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-charcoal/60">{t("landingTapCalloutBody")}</p>
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/library"
                onClick={() => trackCtaStartReadingClicked()}
                className={`${CTA_BASE} w-full bg-rose text-cream shadow-soft hover:bg-rose/90 sm:w-auto`}
              >
                {t("landingCtaPrimary")}
              </Link>
              <Link
                href={href("/classics")}
                className={`${CTA_BASE} w-full border border-rose-soft/50 text-rose hover:bg-rose-light/30 sm:w-auto`}
              >
                {t("landingCtaSecondary")}
              </Link>
            </div>
            {CLASSICS_COUNT > 0 && (
              <p className="mt-4 text-sm font-medium text-rose/80">
                {t("landingHeroCount").replace("{count}", String(CLASSICS_COUNT))}
              </p>
            )}
            <p className="mt-2 text-xs text-charcoal/45">{t("landingTrust")}</p>
          </div>

          {HERO_COVERS.length > 0 && (
            <div className="relative mt-16 hidden h-72 items-center justify-center lg:mt-0 lg:flex">
              {HERO_COVERS.map((lesson, i) => (
                <Link
                  key={lesson.slug}
                  href={href(`/lesson/${lesson.slug}`)}
                  style={{
                    zIndex: i,
                    marginLeft: i === 0 ? 0 : -64,
                  }}
                  className={`${HERO_ROTATIONS[i % HERO_ROTATIONS.length]} h-64 w-[10.7rem] shrink-0 overflow-hidden rounded-xl2 border border-rose-light/60 bg-white shadow-frame transition hover:-translate-y-2 hover:rotate-0`}
                >
                  {lesson.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={lesson.coverImage}
                      alt={lesson.author ? `${lesson.title} by ${lesson.author}` : lesson.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-4xl">{lesson.coverEmoji}</div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Start with a classic — the core product, right after the hero so a
          first-time visitor sees real books before anything else. */}
      {FEATURED.length > 0 && (
        <section className="border-t border-rose-light/40 bg-white/40 px-6 py-12 lg:py-16">
          <div className={WRAP}>
            <h2 className="text-center font-serif text-2xl font-semibold text-charcoal lg:text-3xl">
              {t("landingClassicsTitle")}
            </h2>
            <p className="mx-auto mt-1.5 max-w-[36ch] text-center text-sm font-medium text-rose/80">
              {t("landingClassicsPopular")}
            </p>
            <p className="mx-auto mb-6 mt-1.5 max-w-[42ch] text-center text-sm text-charcoal/55 lg:mb-10">
              {t("landingClassicsBody").replace("{count}", String(CLASSICS_COUNT))}
            </p>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
              {FEATURED.slice(0, 4).map((lesson) => (
                <ClassicCard key={lesson.slug} lesson={lesson} complete={false} />
              ))}
            </div>
            <Link
              href={href("/classics")}
              className="mt-6 block text-center text-sm font-medium text-rose underline-offset-4 hover:underline lg:mt-10"
            >
              {t("landingClassicsSeeAll").replace("{count}", String(CLASSICS_COUNT))}
            </Link>
          </div>
        </section>
      )}

      {/* Or read the other way — Korean-origin folktales, the reverse
          direction from Classics, right beside it so the bilingual range is
          obvious immediately. */}
      {FOLKTALES_FEATURED.length > 0 && (
        <section className="border-t border-rose-light/40 bg-sage/10 px-6 py-12 lg:py-16">
          <div className={WRAP}>
            <h2 className="text-center font-serif text-2xl font-semibold text-charcoal lg:text-3xl">
              {t("landingFolktalesTitle")}
            </h2>
            <p className="mx-auto mt-1.5 max-w-[36ch] text-center text-sm font-medium text-rose/80">
              {t("landingFolktalesPopular")}
            </p>
            <p className="mx-auto mb-6 mt-1.5 max-w-[46ch] text-center text-sm text-charcoal/55 lg:mb-10">
              {t("landingFolktalesBody").replace("{count}", String(FOLKTALES_COUNT))}
            </p>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
              {FOLKTALES_FEATURED.slice(0, 4).map((lesson) => (
                <ClassicCard key={lesson.slug} lesson={lesson} complete={false} />
              ))}
            </div>
            <Link
              href="/folktales"
              className="mt-6 block text-center text-sm font-medium text-rose underline-offset-4 hover:underline lg:mt-10"
            >
              {t("landingFolktalesSeeAll").replace("{count}", String(FOLKTALES_COUNT))}
            </Link>
          </div>
        </section>
      )}

      {/* A look at the reader + flashcards */}
      <LandingPreview />

      {/* Light / sepia / dark, shown on real story screens */}
      <ThemeShowcase />

      {/* How it works, the feature bento, book club, closing call to action */}
      <LandingBottom />

      {/* Footer */}
      <footer className="border-t border-rose-light/40 px-6 py-8 text-center lg:py-10">
        <p className="font-serif text-lg font-semibold text-charcoal">{SITE_NAME}</p>
        <p className="mt-1 text-xs text-charcoal/50">{t("tagline")}</p>
        <nav className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-charcoal/60">
          <Link href="/library" className="hover:text-charcoal">{t("library")}</Link>
          <Link href={href("/classics")} className="hover:text-charcoal">{t("classics")}</Link>
          <Link href="/learn" className="hover:text-charcoal">{t("learnGuides")}</Link>
          <Link href="/faq" className="hover:text-charcoal">{t("faq")}</Link>
          {SHOW_AUTH_PROMPTS && (
            <Link href="/login?next=/library" className="hover:text-charcoal">{t("signIn")}</Link>
          )}
          <Link href="/settings" className="hover:text-charcoal">{t("settings")}</Link>
        </nav>
        <p className="mx-auto mt-5 max-w-[40ch] text-[11px] leading-relaxed text-charcoal/40">
          {t("landingFooterRights")}
        </p>
      </footer>
    </div>
  );
}
