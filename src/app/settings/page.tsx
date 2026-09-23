"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { useOnboarding } from "@/components/providers/OnboardingProvider";
import {
  FONT_SCALES,
  READING_THEMES,
  usePreferences,
  type FontScale,
  type ReadingTheme,
} from "@/components/providers/PreferencesProvider";
import {
  DIRECTION_BADGE,
  GOALS,
  INTERESTS,
  LEVELS,
  emojiFor,
  labelFor,
} from "@/lib/onboarding";
import type { UiLang } from "@/lib/i18n";
import { isRunningInNativeApp } from "@/lib/platform";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Toast } from "@/components/ui/Toast";

const FONT_SIZE_LABEL: Record<FontScale, "fontSizeSm" | "fontSizeMd" | "fontSizeLg" | "fontSizeXl"> = {
  sm: "fontSizeSm",
  md: "fontSizeMd",
  lg: "fontSizeLg",
  xl: "fontSizeXl",
};

const THEME_LABEL: Record<ReadingTheme, "themeLight" | "themeSepia" | "themeDark"> = {
  light: "themeLight",
  sepia: "themeSepia",
  dark: "themeDark",
};

// Fixed swatch colours (page / ink / accent per theme) so each option previews
// itself no matter which theme is currently active.
const THEME_SWATCH: Record<ReadingTheme, { page: string; ink: string; accent: string }> = {
  light: { page: "#FDFBF7", ink: "#2C2C2C", accent: "#C57B57" },
  sepia: { page: "#F4ECD8", ink: "#3A2C1E", accent: "#A65834" },
  dark: { page: "#1C1A17", ink: "#E9E3D8", accent: "#DE9670" },
};

export default function SettingsPage() {
  const t = useT();
  const { lang, setLang } = useLanguage();
  const {
    hydrated: prefsHydrated,
    fontScale,
    setFontScale,
    readingTheme,
    setReadingTheme,
    readingReminder,
    setReadingReminder,
  } = usePreferences();
  const { hydrated, data, restart } = useOnboarding();
  const router = useRouter();
  const [reminderBusy, setReminderBusy] = useState(false);
  const [reminderToast, setReminderToast] = useState<string | null>(null);

  async function toggleReminder(next: boolean) {
    setReminderBusy(true);
    const result = await setReadingReminder(next);
    setReminderBusy(false);
    if (next && !result) setReminderToast(t("settingsReminderPermissionDenied"));
  }

  function redoOnboarding() {
    restart();
    router.push("/library");
  }

  const directionLabel =
    data.direction === "ko-en"
      ? "한국어 → English"
      : data.direction === "en-ko"
        ? "English → 한국어"
        : "—";

  const levelLabel = data.level
    ? `${data.level} · ${labelFor(
        LEVELS.map((l) => ({ id: l.id, en: l.en, ko: l.ko })),
        data.level,
        lang,
      )}`
    : "—";

  const goalLabel = labelFor(GOALS, data.goal, lang) ?? "—";

  return (
    <div className="px-5 py-8 lg:mx-auto lg:max-w-3xl lg:px-8 lg:py-12">
      <h1 className="mb-1 font-serif text-2xl font-semibold text-charcoal lg:text-4xl">{t("settings")}</h1>
      <p className="mb-6 text-sm text-charcoal/50 lg:text-base">{t("settingsSubtitle")}</p>

      <div className="space-y-4 lg:space-y-5">
        {/* Your learning */}
        <section className="rounded-xl2 border border-rose-light/50 bg-white/60 p-5 shadow-soft">
          <SectionHeading title={t("settingsLearningTitle")} />

          {!hydrated ? (
            <div className="h-24 animate-pulse rounded-xl2 bg-sage/20" />
          ) : data.completed ? (
            <>
              <div className="grid grid-cols-3 gap-2.5">
                <RecapTile
                  emoji={data.direction ? DIRECTION_BADGE[data.direction] : "🌍"}
                  label={t("onbRecapLearning")}
                  value={directionLabel}
                />
                <RecapTile
                  emoji={emojiFor(LEVELS, data.level) || "🎯"}
                  label={t("onbRecapLevel")}
                  value={levelLabel}
                />
                <RecapTile
                  emoji={emojiFor(GOALS, data.goal) || "✨"}
                  label={t("onbRecapGoal")}
                  value={goalLabel}
                />
              </div>

              <p className="mb-2 mt-5 text-xs font-semibold uppercase tracking-widest text-rose/60">
                {t("onbRecapInterests")}
              </p>
              {data.interests.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {data.interests.map((id) => (
                    <span
                      key={id}
                      className="inline-flex items-center gap-1.5 rounded-full border border-rose-light/60 bg-rose-light/20 px-3 py-1.5 text-xs text-charcoal/70"
                    >
                      <span aria-hidden>{emojiFor(INTERESTS, id)}</span>
                      {labelFor(INTERESTS, id, lang)}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-charcoal/40">{t("settingsNoInterests")}</p>
              )}

              <Button variant="outline" className="mt-5 w-full" onClick={redoOnboarding}>
                {t("redoOnboarding")}
              </Button>
              <p className="mt-2 text-xs text-charcoal/45">{t("redoOnboardingHint")}</p>
            </>
          ) : (
            <>
              <p className="text-sm text-charcoal/55">{t("settingsNotOnboarded")}</p>
              <Button className="mt-4 w-full" onClick={redoOnboarding}>
                {t("startOnboarding")}
              </Button>
            </>
          )}
        </section>

        {/* Interface language */}
        <section className="rounded-xl2 border border-rose-light/50 bg-white/60 p-5 shadow-soft">
          <SectionHeading title={t("settingsLanguageTitle")} />
          <div className="inline-flex rounded-full border border-rose-light/60 p-1">
            {(["en", "ko"] as UiLang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  lang === l
                    ? "bg-rose text-cream shadow-soft"
                    : "text-charcoal/50 hover:text-charcoal/80"
                }`}
              >
                {l === "en" ? "English" : "한국어"}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-charcoal/45">{t("settingsLanguageHint")}</p>
        </section>

        {/* Reading theme */}
        <section className="rounded-xl2 border border-rose-light/50 bg-white/60 p-5 shadow-soft">
          <SectionHeading title={t("settingsThemeTitle")} />
          <div role="group" aria-label={t("settingsThemeTitle")} className="grid grid-cols-3 gap-2.5">
            {READING_THEMES.map((theme) => {
              const swatch = THEME_SWATCH[theme];
              const selected = readingTheme === theme;
              return (
                <button
                  key={theme}
                  onClick={() => setReadingTheme(theme)}
                  aria-pressed={selected}
                  className={`flex flex-col items-center gap-2 rounded-xl2 border-2 p-2.5 text-sm font-medium transition ${
                    selected ? "border-rose text-charcoal" : "border-rose-light/60 text-charcoal/60 hover:border-rose-soft"
                  }`}
                >
                  <span
                    aria-hidden
                    className="flex h-14 w-full items-center justify-center rounded-lg border border-black/10 font-serif text-xl font-semibold"
                    style={{ backgroundColor: swatch.page, color: swatch.ink }}
                  >
                    Aa
                    <span className="ml-1 h-2 w-2 rounded-full" style={{ backgroundColor: swatch.accent }} />
                  </span>
                  {t(THEME_LABEL[theme])}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-charcoal/45">{t("settingsThemeHint")}</p>
        </section>

        {/* Text size */}
        <section className="rounded-xl2 border border-rose-light/50 bg-white/60 p-5 shadow-soft">
          <SectionHeading title={t("settingsFontSizeTitle")} />
          <div
            role="group"
            aria-label={t("settingsFontSizeTitle")}
            className="inline-flex flex-wrap gap-1 rounded-xl2 border border-rose-light/60 p-1"
          >
            {FONT_SCALES.map((scale) => (
              <button
                key={scale}
                onClick={() => setFontScale(scale)}
                aria-pressed={fontScale === scale}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                  fontScale === scale
                    ? "bg-rose text-cream shadow-soft"
                    : "text-charcoal/50 hover:text-charcoal/80"
                }`}
              >
                {t(FONT_SIZE_LABEL[scale])}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-charcoal/45">{t("settingsFontSizeHint")}</p>
        </section>

        {/* Daily reading reminder — native app only, opt-in local notification */}
        {prefsHydrated && isRunningInNativeApp() && (
          <section className="rounded-xl2 border border-rose-light/50 bg-white/60 p-5 shadow-soft">
            <div className="flex items-center justify-between gap-3">
              <SectionHeading title={t("settingsReminderTitle")} />
              <div role="group" aria-label={t("settingsReminderTitle")} className="inline-flex shrink-0 rounded-full border border-rose-light/60 p-1">
                {[false, true].map((option) => (
                  <button
                    key={String(option)}
                    onClick={() => toggleReminder(option)}
                    disabled={reminderBusy}
                    aria-pressed={readingReminder === option}
                    className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition disabled:opacity-50 ${
                      readingReminder === option
                        ? "bg-rose text-cream shadow-soft"
                        : "text-charcoal/50 hover:text-charcoal/80"
                    }`}
                  >
                    {t(option ? "settingsReminderOn" : "settingsReminderOff")}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs text-charcoal/45">{t("settingsReminderHint")}</p>
          </section>
        )}
      </div>

      <Link href="/library" className="mt-10 inline-block text-sm text-rose underline-offset-4 hover:underline">
        {t("backToLibrary")}
      </Link>
      <div className="mt-4">
        <Link href="/privacy" className="text-xs text-charcoal/40 underline-offset-4 hover:underline">
          Privacy Policy
        </Link>
      </div>
      <Toast message={reminderToast} onDone={() => setReminderToast(null)} />
    </div>
  );
}

function RecapTile({ emoji, label, value }: { emoji: string; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-xl2 border border-rose-light/50 bg-cream/60 px-2 py-3 text-center">
      <span className="text-2xl" aria-hidden>
        {emoji}
      </span>
      <span className="text-[10px] uppercase tracking-wide text-charcoal/40">{label}</span>
      <span className="text-xs font-medium leading-snug text-charcoal/80">{value}</span>
    </div>
  );
}
