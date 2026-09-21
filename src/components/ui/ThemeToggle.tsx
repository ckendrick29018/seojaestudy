"use client";

import { useT } from "@/components/providers/LanguageProvider";
import { usePreferences, type ReadingTheme } from "@/components/providers/PreferencesProvider";
import { ThemeIcon } from "@/components/ui/icons";

const THEME_LABEL: Record<ReadingTheme, "themeLight" | "themeSepia" | "themeDark"> = {
  light: "themeLight",
  sepia: "themeSepia",
  dark: "themeDark",
};

/** One-tap reading-theme switch (light → sepia → dark) for the reader toolbar. */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const t = useT();
  const { readingTheme, cycleReadingTheme } = usePreferences();
  const label = `${t("changeReadingTheme")}: ${t(THEME_LABEL[readingTheme])}`;

  return (
    <button
      type="button"
      onClick={cycleReadingTheme}
      aria-label={label}
      title={label}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-rose-soft/40 bg-white/70 text-rose transition hover:bg-rose-light/30 ${className}`}
    >
      <ThemeIcon className="h-4 w-4" />
    </button>
  );
}
