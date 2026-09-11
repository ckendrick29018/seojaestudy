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
  UsersIcon,
} from "@/components/ui/icons";

/** A handful of Classics to show the product on the landing page itself. */
const FEATURED = lessons.filter((l) => l.collection === "classics");
const CLASSICS_COUNT = FEATURED.length;

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

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      {/* Hero */}
      <section className="px-6 pb-12 pt-14 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-rose/70">
          {t("landingEyebrow")}
        </p>
        <h1 className="font-serif text-[2rem] font-semibold leading-tight text-charcoal">
          {t("landingHeadline")}
        </h1>
        <p className="mx-auto mt-4 max-w-[34ch] text-sm leading-relaxed text-charcoal/60">
          {t("landingSubhead")}
        </p>

        <div className="mt-7 flex flex-col items-center gap-3">
          <Link href="/library" className={`${CTA_BASE} w-full bg-rose text-cream shadow-soft hover:bg-rose/90`}>
            {t("landingCtaPrimary")}
          </Link>
          <Link
            href="/classics"
            className={`${CTA_BASE} w-full border border-rose-soft/50 text-rose hover:bg-rose-light/30`}
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
      </section>

      {/* A look at the reader + flashcards */}
      <LandingPreview />

      {/* How a lesson works */}
      <section className="border-t border-rose-light/40 bg-white/40 px-6 py-12">
        <h2 className="mb-6 text-center font-serif text-2xl font-semibold text-charcoal">
          {t("landingHowTitle")}
        </h2>
        <ol className="space-y-4">
          {steps.map(({ Icon, title, body }, i) => (
            <li
              key={title}
              className="flex gap-4 rounded-xl2 border border-rose-light/50 bg-cream/70 p-4"
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
      </section>

      {/* What makes it a language course */}
      <section className="px-6 py-12">
        <h2 className="text-center font-serif text-2xl font-semibold text-charcoal">
          {t("landingFeaturesTitle")}
        </h2>
        <p className="mx-auto mb-6 mt-1.5 max-w-[38ch] text-center text-sm leading-relaxed text-charcoal/55">
          {t("landingFeaturesLead")}
        </p>
        <div className="grid grid-cols-2 gap-3">
          {features.map(({ Icon, title, body }) => (
            <div key={title} className="rounded-xl2 border border-rose-light/50 bg-white/60 p-4 shadow-soft">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl2 bg-sage/50 text-charcoal/70" aria-hidden>
                <Icon className="h-4 w-4" />
              </span>
              <p className="mt-2 text-sm font-semibold text-charcoal">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-charcoal/55">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Start with a classic */}
      {FEATURED.length > 0 && (
        <section className="border-t border-rose-light/40 bg-white/40 px-6 py-12">
          <h2 className="text-center font-serif text-2xl font-semibold text-charcoal">
            {t("landingClassicsTitle")}
          </h2>
          <p className="mx-auto mt-1.5 max-w-[36ch] text-center text-sm font-medium text-rose/80">
            {t("landingClassicsPopular")}
          </p>
          <p className="mx-auto mb-6 mt-1.5 max-w-[42ch] text-center text-sm text-charcoal/55">
            {t("landingClassicsBody").replace("{count}", String(CLASSICS_COUNT))}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {FEATURED.slice(0, 4).map((lesson) => (
              <ClassicCard key={lesson.slug} lesson={lesson} complete={false} />
            ))}
          </div>
          <Link
            href="/classics"
            className="mt-6 block text-center text-sm font-medium text-rose underline-offset-4 hover:underline"
          >
            {t("landingClassicsSeeAll").replace("{count}", String(CLASSICS_COUNT))}
          </Link>
        </section>
      )}

      {/* Read it together — book club */}
      <section className="border-t border-rose-light/40 px-6 py-12 text-center">
        <UsersIcon className="mx-auto h-8 w-8 text-rose/50" aria-hidden />
        <h2 className="mt-3 font-serif text-2xl font-semibold text-charcoal">{t("landingClubTitle")}</h2>
        <p className="mx-auto mb-6 mt-1.5 max-w-[38ch] text-sm leading-relaxed text-charcoal/55">
          {t("landingClubBody")}
        </p>
        <Link
          href="/club"
          className={`${CTA_BASE} border border-rose-soft/50 text-rose hover:bg-rose-light/30`}
        >
          {t("myBookClub")}
        </Link>
      </section>

      {/* Closing CTA */}
      <section className="px-6 py-14 text-center">
        <BooksIcon className="mx-auto h-8 w-8 text-rose/50" aria-hidden />
        <h2 className="mt-3 font-serif text-2xl font-semibold text-charcoal">
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
      <footer className="border-t border-rose-light/40 px-6 py-8 text-center">
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
