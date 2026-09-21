"use client";

import Link from "next/link";
import type { ComponentType, ReactNode, SVGProps } from "react";
import { lessonIndex as lessons } from "@/lib/data/lessons-index.generated";
import { findBookForLesson } from "@/lib/data/books";
import type { LessonMeta } from "@/lib/types";
import { useT } from "@/components/providers/LanguageProvider";
import { WRAP } from "./landing-styles";
import {
  BookOpenIcon,
  CardsIcon,
  CheckIcon,
  GlobeIcon,
  PlayIcon,
  SpeakerIcon,
  StarIcon,
  TapIcon,
  UsersIcon,
} from "@/components/ui/icons";

/**
 * The lower half of the landing page: how a lesson works, the feature bento,
 * the book-club panel and the closing call to action.
 *
 * Every colour is a theme token (never a raw hex), so it holds up in light,
 * sepia and dark. Small text stays on charcoal — cream-on-rose is only used for
 * large or decorative elements, where it clears contrast.
 */

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

/** One cover per book (its first chapter), so a row of covers never repeats a novel. */
const COVERED = lessons.filter((l) => {
  if (l.collection !== "classics" || !l.coverImage) return false;
  const pos = findBookForLesson(l.slug);
  return !pos || pos.index === 0;
});

/** Hand-picked, in display order, so the closing row is a spread of famous titles in different palettes. */
const CLOSING_SLUGS = ["jane-eyre", "alice-in-wonderland", "the-great-gatsby", "treasure-island", "dracula"];
const CLOSING_COVERS = CLOSING_SLUGS.map((slug) => COVERED.find((l) => l.slug === slug)).filter(
  (l): l is LessonMeta => Boolean(l),
);
const CLUB_COVER = COVERED.find((l) => l.slug === "little-women") ?? COVERED[0];

// Static so Tailwind can see every class.
const CLOSING_TILTS = [
  "hidden -rotate-6 translate-y-3 sm:block",
  "-rotate-3 translate-y-1",
  "z-10 -translate-y-2",
  "rotate-3 translate-y-1",
  "hidden rotate-6 translate-y-3 sm:block",
];

const WAVE = [30, 55, 40, 75, 95, 60, 35, 80, 100, 65, 45, 70, 90, 50, 30, 60, 85, 55, 40, 70, 45, 25, 50, 35];

function SwapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 7h11m0 0-3-3m3 3-3 3M16 13H5m0 0 3-3m-3 3 3 3" />
    </svg>
  );
}

function Cover({ lesson, className }: { lesson: LessonMeta; className: string }) {
  return (
    // will-change-transform gives each cover its own compositor layer. Without it the tilted,
    // rounded-clipped, heavy-shadowed cover was re-rasterised on every scroll frame, which made
    // the club panel and closing row stutter.
    <div
      className={`shrink-0 overflow-hidden rounded-xl2 border border-rose-light/60 bg-white shadow-frame will-change-transform ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={lesson.coverImage}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* How a lesson works                                                   */
/* ------------------------------------------------------------------ */

function HowItWorks() {
  const t = useT();
  const steps = [
    { title: t("landingStep1Title"), body: t("landingStep1Body") },
    { title: t("landingStep2Title"), body: t("landingStep2Body") },
    { title: t("landingStep3Title"), body: t("landingStep3Body") },
  ];
  const stats = [
    { value: String(lessons.length), label: t("landingStatStories") },
    { value: "A1–B2", label: t("landingStatLevels") },
    { value: "2", label: t("landingStatDirections") },
    { value: "3", label: t("landingStatThemes") },
  ];

  return (
    <section className="border-t border-rose-light/40 px-6 py-14 lg:py-24">
      <div className={WRAP}>
        <h2 className="text-center font-serif text-3xl font-semibold text-charcoal lg:text-4xl">
          {t("landingHowTitle")}
        </h2>

        <ol className="mx-auto mt-10 max-w-md space-y-9 lg:mt-14 lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-10 lg:space-y-0">
          {steps.map(({ title, body }, i) => (
            <li key={title} className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-4 lg:text-center">
              {i < steps.length - 1 && (
                <>
                  {/* Dashed thread to the next step: down the side on phones, across on desktop. */}
                  <span
                    aria-hidden
                    className="absolute bottom-[-2.25rem] left-6 top-14 border-l-2 border-dashed border-rose-soft/60 lg:hidden"
                  />
                  <span
                    aria-hidden
                    className="absolute left-[calc(50%+2rem)] top-6 hidden w-[calc(100%-1.5rem)] border-t-2 border-dashed border-rose-soft/60 lg:block"
                  />
                </>
              )}
              <span
                aria-hidden
                className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose font-serif text-xl font-bold text-cream shadow-soft"
              >
                {i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="font-serif text-xl font-semibold text-charcoal lg:text-2xl">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal/70 lg:mx-auto lg:max-w-[32ch]">{body}</p>
              </div>
            </li>
          ))}
        </ol>

        <dl className="mt-14 grid grid-cols-2 gap-y-8 rounded-3xl border border-rose-light/60 bg-white/60 px-4 py-8 shadow-soft lg:mt-20 lg:grid-cols-4 lg:divide-x lg:divide-rose-light/60 lg:py-10">
          {stats.map(({ value, label }) => (
            <div key={label} className="px-2 text-center">
              <dt className="whitespace-nowrap font-serif text-3xl font-semibold text-rose sm:text-4xl lg:text-5xl">{value}</dt>
              <dd className="mt-1.5 text-xs font-medium leading-snug text-charcoal/70 lg:text-sm">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Feature bento                                                        */
/* ------------------------------------------------------------------ */

function Tile({ className, children }: { className: string; children: ReactNode }) {
  return (
    <article
      className={`relative overflow-hidden rounded-3xl border border-rose-light/50 p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-soft lg:p-8 ${className}`}
    >
      {children}
    </article>
  );
}

function TileText({ Icon, title, body }: { Icon: IconType; title: string; body: string }) {
  return (
    <div>
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-rose shadow-soft" aria-hidden>
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-serif text-xl font-semibold text-charcoal lg:text-2xl">{title}</h3>
      <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-charcoal/70">{body}</p>
    </div>
  );
}

function FeatureBento() {
  const t = useT();

  return (
    <section className="border-t border-rose-light/40 bg-cream-dark/60 px-6 py-14 lg:py-24">
      <div className={WRAP}>
        <h2 className="text-center font-serif text-3xl font-semibold text-charcoal lg:text-4xl">
          {t("landingFeaturesTitle")}
        </h2>
        <p className="mx-auto mb-9 mt-2 max-w-[40ch] text-center text-sm leading-relaxed text-charcoal/65 lg:mb-14 lg:text-base">
          {t("landingFeaturesLead")}
        </p>

        <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
          {/* A dictionary on every word */}
          <Tile className="bg-rose-light/50 lg:col-span-2 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <TileText Icon={GlobeIcon} title={t("landingFeatureDictTitle")} body={t("landingFeatureDictBody")} />
            <div aria-hidden className="mt-6 rounded-2xl border border-rose-light/60 bg-cream p-5 shadow-soft lg:mt-0">
              <p className="font-reading text-lg leading-8 text-charcoal">
                She lit the <span className="rounded bg-sage px-1 font-medium">lantern</span> and stepped outside.
              </p>
              <div className="mt-3 flex items-center gap-3 rounded-xl2 bg-sage/50 px-3 py-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80 text-charcoal/70">
                  <TapIcon className="h-4 w-4" />
                </span>
                <p className="text-sm text-charcoal/80">
                  <span className="font-serif font-semibold text-charcoal">lantern</span>
                  <span className="text-charcoal/40"> — </span>
                  등불, 손전등
                </p>
              </div>
            </div>
          </Tile>

          {/* Matched to your level */}
          <Tile className="bg-gold/20">
            <TileText Icon={StarIcon} title={t("landingFeatureLevelTitle")} body={t("landingFeatureLevelBody")} />
            <div aria-hidden className="mt-7 flex items-end gap-2">
              {["A1", "A2", "B1", "B2"].map((level, i) => (
                <div key={level} className="flex flex-1 flex-col items-center gap-1.5">
                  <div
                    className={`w-full rounded-t-xl ${["bg-rose/25", "bg-rose/45", "bg-rose/70", "bg-rose"][i]}`}
                    style={{ height: 24 + i * 18 }}
                  />
                  <span className="text-xs font-semibold text-charcoal/70">{level}</span>
                </div>
              ))}
            </div>
          </Tile>

          {/* Vocabulary that sticks */}
          <Tile className="bg-sage/50">
            <TileText Icon={CardsIcon} title={t("landingFeatureFlashcardsTitle")} body={t("landingFeatureFlashcardsBody")} />
            <div aria-hidden className="relative mx-auto mt-7 h-36 w-full max-w-[15rem]">
              <div className="absolute inset-y-0 left-0 right-8 top-1 h-28 -rotate-6 rounded-2xl border border-rose-light/70 bg-rose-light/80" />
              <div className="absolute inset-y-0 left-8 right-0 top-0 h-28 rotate-6 rounded-2xl border border-rose-light/60 bg-gold/30" />
              <div className="absolute inset-x-2 top-5 flex h-28 flex-col items-center justify-center rounded-2xl border border-rose-light/60 bg-white shadow-soft">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-rose/70">noun</p>
                <p className="font-serif text-2xl font-semibold text-charcoal">lantern</p>
                <p className="text-sm text-charcoal/60">등불</p>
              </div>
            </div>
          </Tile>

          {/* Check that it landed */}
          <Tile className="bg-white">
            <TileText Icon={CheckIcon} title={t("landingFeatureCheckTitle")} body={t("landingFeatureCheckBody")} />
            <div aria-hidden className="mt-7 space-y-2">
              {[
                { width: "w-3/4", ok: false },
                { width: "w-2/3", ok: true },
                { width: "w-4/5", ok: false },
              ].map(({ width, ok }, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-xl2 border px-3 py-2.5 ${
                    ok ? "border-sage-dark/70 bg-sage/60" : "border-rose-light/60 bg-cream/60"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      ok ? "bg-rose text-cream" : "border border-charcoal/25"
                    }`}
                  >
                    {ok && <CheckIcon className="h-3 w-3" />}
                  </span>
                  <span className={`h-2 rounded-full bg-charcoal/15 ${width}`} />
                </div>
              ))}
            </div>
          </Tile>

          {/* Listening practice */}
          <Tile className="bg-rose-light/50">
            <TileText Icon={SpeakerIcon} title={t("landingFeatureListenTitle")} body={t("landingFeatureListenBody")} />
            <div
              aria-hidden
              className="mt-7 flex items-center gap-3 rounded-2xl border border-rose-light/60 bg-cream px-3 py-3 shadow-soft"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose text-cream">
                <PlayIcon className="ml-0.5 h-4 w-4" />
              </span>
              <div className="flex h-10 flex-1 items-center justify-between">
                {WAVE.map((h, i) => (
                  <span
                    key={i}
                    className="w-[3px] origin-center rounded-full bg-rose/70 motion-safe:animate-wave"
                    style={{ height: `${h}%`, animationDelay: `${(i % 8) * 0.13}s` }}
                  />
                ))}
              </div>
            </div>
          </Tile>

          {/* Both directions */}
          <Tile className="bg-gradient-to-r from-sage/50 via-rose-light/40 to-sage/50 lg:col-span-3 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">
            <TileText
              Icon={BookOpenIcon}
              title={t("landingFeatureBilingualTitle")}
              body={t("landingFeatureBilingualBody")}
            />
            <div aria-hidden className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:mt-0">
              <div className="flex-1 rounded-2xl border border-rose-light/60 bg-cream p-4 text-center shadow-soft">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-rose/70">English</p>
                <p className="mt-1 font-reading text-base text-charcoal lg:text-lg">The lantern is lit.</p>
              </div>
              <span className="mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose text-cream shadow-soft">
                <SwapIcon className="h-5 w-5 rotate-90 sm:rotate-0" />
              </span>
              <div className="flex-1 rounded-2xl border border-rose-light/60 bg-cream p-4 text-center shadow-soft">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-rose/70">한국어</p>
                <p className="mt-1 font-reading text-base text-charcoal lg:text-lg">등불이 켜졌어요.</p>
              </div>
            </div>
          </Tile>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Book club                                                            */
/* ------------------------------------------------------------------ */

const AVATARS = [
  { letter: "S", tone: "bg-rose-light text-charcoal" },
  { letter: "J", tone: "bg-sage text-charcoal" },
  { letter: "M", tone: "bg-gold/50 text-charcoal" },
  { letter: "A", tone: "bg-rose-soft/60 text-charcoal" },
];

function BookClub() {
  const t = useT();

  return (
    <section className="border-t border-rose-light/40 px-6 py-14 lg:py-24">
      <div className={WRAP}>
        <div className="overflow-hidden rounded-[2rem] border border-rose-light/60 bg-gradient-to-br from-rose-light/60 via-cream-dark to-sage/50 px-6 py-10 shadow-soft lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-14 lg:py-14">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-charcoal/80">
              <UsersIcon className="h-4 w-4 text-rose" aria-hidden />
              {t("landingClubChip")}
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-charcoal lg:text-4xl">{t("landingClubTitle")}</h2>
            <p className="mx-auto mt-3 max-w-[40ch] text-sm leading-relaxed text-charcoal/70 lg:mx-0 lg:text-base">
              {t("landingClubBody")}
            </p>
            <Link
              href="/club"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-rose px-7 py-3.5 text-sm font-semibold text-cream shadow-soft transition hover:bg-rose/90"
            >
              {t("myBookClub")}
            </Link>
          </div>

          <div aria-hidden className="mt-12 flex flex-col items-center gap-5 lg:mt-0">
            <div className="relative">
              {CLUB_COVER && <Cover lesson={CLUB_COVER} className="h-56 w-[9.5rem] -rotate-3 lg:h-64 lg:w-44" />}
              <span className="absolute -right-8 top-4 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-sage-dark/60 bg-cream px-3 py-1.5 text-[11px] font-semibold text-charcoal shadow-soft lg:-right-16 lg:-top-3">
                <CheckIcon className="h-3.5 w-3.5 text-rose" />
                {t("landingClubShared")}
              </span>
            </div>
            <div className="flex items-center">
              {AVATARS.map(({ letter, tone }, i) => (
                <span
                  key={letter}
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-serif text-sm font-semibold ring-2 ring-cream ${tone} ${
                    i > 0 ? "-ml-2.5" : ""
                  }`}
                >
                  {letter}
                </span>
              ))}
              <span className="-ml-2.5 flex h-10 min-w-10 items-center justify-center rounded-full bg-charcoal px-2 text-xs font-semibold text-cream ring-2 ring-cream">
                +6
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Closing call to action                                               */
/* ------------------------------------------------------------------ */

function ClosingBand() {
  const t = useT();

  return (
    <section className="overflow-hidden border-t border-rose-light/40 bg-rose-light/50 px-6 pb-16 pt-14 text-center lg:pb-24 lg:pt-20">
      {CLOSING_COVERS.length > 0 && (
        <div aria-hidden className="mx-auto mb-10 flex items-end justify-center lg:mb-14">
          {CLOSING_COVERS.map((lesson, i) => (
            <Cover
              key={lesson.slug}
              lesson={lesson}
              className={`relative h-36 w-24 sm:h-44 sm:w-[7.5rem] lg:h-56 lg:w-40 ${i > 0 ? "-ml-4 lg:-ml-6" : ""} ${
                CLOSING_TILTS[i % CLOSING_TILTS.length]
              }`}
            />
          ))}
        </div>
      )}
      <h2 className="mx-auto max-w-[18ch] font-serif text-4xl font-semibold leading-tight text-charcoal lg:max-w-none lg:text-5xl">
        {t("landingClosingTitle")}
      </h2>
      <Link
        href="/library"
        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-rose px-9 py-4 text-base font-semibold text-cream shadow-soft transition hover:bg-rose/90"
      >
        {t("landingClosingCta")}
      </Link>
      <p className="mt-4 text-xs text-charcoal/65">{t("landingTrust")}</p>
    </section>
  );
}

export function LandingBottom() {
  return (
    <>
      <HowItWorks />
      <FeatureBento />
      <BookClub />
      <ClosingBand />
    </>
  );
}
