"use client";

import Link from "next/link";
import type { dict } from "@/lib/i18n";
import { fill } from "@/lib/utils";
import { useT } from "@/components/providers/LanguageProvider";
import { READING_THEMES, usePreferences, type ReadingTheme } from "@/components/providers/PreferencesProvider";

/**
 * Landing-page showcase for the three reading themes. The images are real
 * captures of the lesson reader (tap a word, reveal a line), one per theme, each
 * from a story whose mood suits it — regenerate them with
 * `node scripts/capture-landing-shots.mjs` after a visual change to the reader.
 * Because they are pictures, they keep their own theme's colours whichever theme
 * the visitor is currently browsing in.
 */
type Key = keyof typeof dict;

const SHOTS: Record<ReadingTheme, { label: Key; note: Key; story: { slug: string; title: string } }> = {
  light: {
    label: "themeLight",
    note: "landingThemeLightNote",
    story: { slug: "story-of-an-hour", title: "The Story of an Hour" },
  },
  sepia: {
    label: "themeSepia",
    note: "landingThemeSepiaNote",
    story: { slug: "pride-and-prejudice-letter", title: "Pride and Prejudice: Darcy's Letter" },
  },
  dark: {
    label: "themeDark",
    note: "landingThemeDarkNote",
    story: { slug: "dracula-the-castle", title: "Dracula: The Castle" },
  },
};

/** Capture size (CSS px × 3), so the browser can reserve the space before the image loads. */
const SHOT_WIDTH = 1170;
const SHOT_HEIGHT = 2340;

export function ThemeShowcase() {
  const t = useT();
  const { readingTheme, setReadingTheme } = usePreferences();

  return (
    <section className="border-t border-rose-light/40 px-6 py-12 lg:py-16" aria-labelledby="landing-themes-heading">
      <div className="mx-auto w-full max-w-6xl lg:px-8">
        <h2
          id="landing-themes-heading"
          className="mb-1.5 text-center font-serif text-2xl font-semibold text-charcoal lg:text-3xl"
        >
          {t("landingThemesTitle")}
        </h2>
        <p className="mx-auto mb-6 max-w-[38ch] text-center text-sm leading-relaxed text-charcoal/55 lg:mb-8 lg:max-w-[52ch]">
          {t("landingThemesBody")}
        </p>

        <div className="mb-8 flex flex-col items-center gap-2 lg:mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-rose/70">{t("landingThemesTry")}</p>
          <div role="group" aria-label={t("settingsThemeTitle")} className="inline-flex rounded-full border border-rose-soft/50 bg-white/60 p-1">
            {READING_THEMES.map((theme) => {
              const active = readingTheme === theme;
              return (
                <button
                  key={theme}
                  type="button"
                  onClick={() => setReadingTheme(theme)}
                  aria-pressed={active}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    active ? "bg-rose text-cream shadow-soft" : "text-charcoal/60 hover:text-charcoal"
                  }`}
                >
                  {t(SHOTS[theme].label)}
                </button>
              );
            })}
          </div>
        </div>

        {/* A swipeable strip on phones (the next shot peeks in), three across on desktop. */}
        <div
          role="group"
          aria-label={t("landingThemesShots")}
          tabIndex={0}
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 lg:mx-auto lg:grid lg:max-w-4xl lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {READING_THEMES.map((theme) => {
            const { label, note, story } = SHOTS[theme];
            return (
              <figure key={theme} className="w-[72%] max-w-[17rem] shrink-0 snap-center lg:w-auto lg:max-w-none">
                {/* Local static asset; a plain <img> like the covers (next/image adds nothing here). */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/landing/reader-${theme}.webp`}
                  alt={fill(t("landingThemesAlt"), { theme: t(label), title: story.title })}
                  width={SHOT_WIDTH}
                  height={SHOT_HEIGHT}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full rounded-3xl border border-rose-light/60 shadow-frame"
                />
                <figcaption className="mt-3 text-center">
                  <p className="font-serif text-lg font-semibold text-charcoal">{t(label)}</p>
                  <p className="mx-auto mt-0.5 max-w-[26ch] text-xs leading-relaxed text-charcoal/55">{t(note)}</p>
                  <Link
                    href={`/lesson/${story.slug}`}
                    className="mt-1.5 inline-block text-xs font-medium text-rose underline-offset-4 hover:underline"
                  >
                    {fill(t("landingThemesFrom"), { title: story.title })} →
                  </Link>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
