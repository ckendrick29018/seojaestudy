"use client";

import Link from "next/link";
import { lessons } from "@/lib/data/lessons";
import { ClassicCard } from "@/components/home/ClassicCard";
import { LandingPreview } from "@/components/home/LandingPreview";
import { useT } from "@/components/providers/LanguageProvider";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { SHOW_AUTH_PROMPTS } from "@/lib/beta";
import {
  BookOpenIcon,
  BooksIcon,
  CardsIcon,
  CheckIcon,
  GlobeIcon,
  SpeakerIcon,
  StarIcon,
  TapIcon,
  UsersIcon,
} from "@/components/ui/icons";

/** A handful of Classics to show the product on the landing page itself. */
const FEATURED = lessons.filter((l) => l.collection === "classics");
const CLASSICS_COUNT = FEATURED.length;

/** Korean-origin folktales — the reverse direction from Classics, shown to
 * make clear the library isn't only Western literature translated one way. */
const FOLKTALES_FEATURED = lessons.filter((l) => l.collection === "folktales");
const FOLKTALES_COUNT = FOLKTALES_FEATURED.length;

const CTA_BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition";

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: ["en", "ko"],
      publisher: { "@id": `${SITE_URL}/#org` },
      hasPart: [
        { "@id": `${SITE_URL}/classics#page` },
        { "@id": `${SITE_URL}/library#page` },
        { "@id": `${SITE_URL}/folktales#page` },
        { "@id": `${SITE_URL}/learn#page` },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icons/icon-512.png`,
    },
    {
      "@type": "WebApplication",
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web, Android",
      inLanguage: ["en", "ko"],
      description: SITE_DESCRIPTION,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free first lessons; optional Premium subscription unlocks the full library.",
      },
    },
  ],
};

/** Container used inside every full-bleed section band to cap line length on
 * wide desktop screens without touching the section's own background/border. */
const WRAP = "mx-auto w-full max-w-6xl px-6 lg:px-8";

export function LandingClient() {
  const t = useT();

  const steps = [
    { Icon: BookOpenIcon, title: t("landingStep1Title"), body: t("landingStep1Body") },
    { Icon: GlobeIcon, title: t("landingStep2Title"), body: t("landingStep2Body") },
    { Icon: CheckIcon, title: t("landingStep3Title"), body: t("landingStep3Body") },
  ];

  const features = [
    { Icon: StarIcon, title: t("landingFeatureLevelTitle"), body: t("landingFeatureLevelBody") },
    { Icon: GlobeIcon, title: t("landingFeatureDictTitle"), body: t("landingFeatureDictBody") },
    { Icon: CardsIcon, title: t("landingFeatureFlashcardsTitle"), body: t("landingFeatureFlashcardsBody") },
    { Icon: CheckIcon, title: t("landingFeatureCheckTitle"), body: t("landingFeatureCheckBody") },
    { Icon: SpeakerIcon, title: t("landingFeatureListenTitle"), body: t("landingFeatureListenBody") },
    { Icon: BookOpenIcon, title: t("landingFeatureBilingualTitle"), body: t("landingFeatureBilingualBody") },
  ];

  // A small fanned stack of real covers for the desktop hero — shows a first-
  // time visitor actual books instead of asking them to scroll for proof.
  const HERO_COVERS = FEATURED.slice(0, 3);
  const HERO_ROTATIONS = ["-rotate-6", "rotate-3", "-rotate-1"];

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

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
              <Link href="/library" className={`${CTA_BASE} w-full bg-rose text-cream shadow-soft hover:bg-rose/90 sm:w-auto`}>
                {t("landingCtaPrimary")}
              </Link>
              <Link
                href="/classics"
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
                  href={`/lesson/${lesson.slug}`}
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
              href="/classics"
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

      {/* How a lesson works */}
      <section className="border-t border-rose-light/40 bg-white/40 px-6 py-12 lg:py-16">
        <div className={WRAP}>
          <h2 className="mb-6 text-center font-serif text-2xl font-semibold text-charcoal lg:mb-10 lg:text-3xl">
            {t("landingHowTitle")}
          </h2>
          <ol className="space-y-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
            {steps.map(({ Icon, title, body }, i) => (
              <li
                key={title}
                className="flex gap-4 rounded-xl2 border border-rose-light/50 bg-cream/70 p-4 lg:flex-col lg:gap-3 lg:p-6"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl2 bg-sage/50 text-charcoal/70"
                  aria-hidden
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-charcoal">
                    <span className="text-rose/60">{i + 1}.</span> {title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/60">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What makes it a language course */}
      <section className="px-6 py-12 lg:py-16">
        <div className={WRAP}>
          <h2 className="text-center font-serif text-2xl font-semibold text-charcoal lg:text-3xl">
            {t("landingFeaturesTitle")}
          </h2>
          <p className="mx-auto mb-6 mt-1.5 max-w-[38ch] text-center text-sm leading-relaxed text-charcoal/55 lg:mb-10">
            {t("landingFeaturesLead")}
          </p>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-6">
            {features.map(({ Icon, title, body }) => (
              <div key={title} className="rounded-xl2 border border-rose-light/50 bg-white/60 p-4 shadow-soft lg:p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl2 bg-sage/50 text-charcoal/70" aria-hidden>
                  <Icon className="h-4 w-4" />
                </span>
                <p className="mt-2 text-sm font-semibold text-charcoal">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-charcoal/55">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Read it together — book club */}
      <section className="border-t border-rose-light/40 px-6 py-12 text-center lg:py-16">
        <div className={WRAP}>
          <UsersIcon className="mx-auto h-8 w-8 text-rose/50" aria-hidden />
          <h2 className="mt-3 font-serif text-2xl font-semibold text-charcoal lg:text-3xl">{t("landingClubTitle")}</h2>
          <p className="mx-auto mb-6 mt-1.5 max-w-[38ch] text-sm leading-relaxed text-charcoal/55">
            {t("landingClubBody")}
          </p>
          <Link
            href="/club"
            className={`${CTA_BASE} border border-rose-soft/50 text-rose hover:bg-rose-light/30`}
          >
            {t("myBookClub")}
          </Link>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-14 text-center lg:py-20">
        <BooksIcon className="mx-auto h-8 w-8 text-rose/50" aria-hidden />
        <h2 className="mt-3 font-serif text-2xl font-semibold text-charcoal lg:text-3xl">
          {t("landingClosingTitle")}
        </h2>
        <Link
          href="/library"
          className={`${CTA_BASE} mt-5 bg-rose text-cream shadow-soft hover:bg-rose/90`}
        >
          {t("landingClosingCta")}
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-rose-light/40 px-6 py-8 text-center lg:py-10">
        <p className="font-serif text-lg font-semibold text-charcoal">{SITE_NAME}</p>
        <p className="mt-1 text-xs text-charcoal/50">{t("tagline")}</p>
        <nav className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-charcoal/60">
          <Link href="/library" className="hover:text-charcoal">{t("library")}</Link>
          <Link href="/classics" className="hover:text-charcoal">{t("classics")}</Link>
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
