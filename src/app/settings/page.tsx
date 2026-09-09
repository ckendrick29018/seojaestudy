"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { useOnboarding } from "@/components/providers/OnboardingProvider";
import { FONT_SCALES, usePreferences, type FontScale } from "@/components/providers/PreferencesProvider";
import {
  DIRECTION_BADGE,
  GOALS,
  INTERESTS,
  LEVELS,
  emojiFor,
  labelFor,
} from "@/lib/onboarding";
import type { UiLang } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FONT_SIZE_LABEL: Record<FontScale, "fontSizeSm" | "fontSizeMd" | "fontSizeLg" | "fontSizeXl"> = {
  sm: "fontSizeSm",
  md: "fontSizeMd",
  lg: "fontSizeLg",
  xl: "fontSizeXl",
};

export default function SettingsPage() {
  const t = useT();
  const { lang, setLang } = useLanguage();
  const { fontScale, setFontScale } = usePreferences();
  const { hydrated, data, restart } = useOnboarding();
  const router = useRouter();

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
    <div className="px-5 py-8">
      <h1 className="mb-1 font-serif text-2xl font-semibold text-charcoal">{t("settings")}</h1>
      <p className="mb-6 text-sm text-charcoal/50">{t("settingsSubtitle")}</p>

      <div className="space-y-4">
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
      </div>

      <Link href="/library" className="mt-10 inline-block text-sm text-rose underline-offset-4 hover:underline">
        {t("backToLibrary")}
      </Link>
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
