"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

/** Accessibility text-size choice. `md` is the untouched browser default. */
export type FontScale = "sm" | "md" | "lg" | "xl";

export const FONT_SCALES: FontScale[] = ["sm", "md", "lg", "xl"];

/** Root font-size, in %, for each choice. Every rem-based size scales with it. */
const SCALE_PERCENT: Record<FontScale, number> = {
  sm: 90,
  md: 100,
  lg: 115,
  xl: 130,
};

interface PreferencesContextValue {
  hydrated: boolean;
  fontScale: FontScale;
  setFontScale: (scale: FontScale) => void;
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null);
const STORAGE_KEY = "luminaread:font-scale";

function isFontScale(value: unknown): value is FontScale {
  return value === "sm" || value === "md" || value === "lg" || value === "xl";
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [fontScale, setFontScaleState] = useState<FontScale>("md");
  const [hydrated, setHydrated] = useState(false);

  // Load the saved choice once, before we start persisting changes.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isFontScale(stored)) setFontScaleState(stored);
    } catch {
      // localStorage unavailable (private mode, some WebViews) — keep the default.
    }
    setHydrated(true);
  }, []);

  // Scale the whole UI by nudging the root font size; Tailwind's text and
  // spacing scales are rem-based, so everything grows/shrinks together.
  useEffect(() => {
    document.documentElement.style.fontSize = `${SCALE_PERCENT[fontScale]}%`;
  }, [fontScale]);

  // Persist, but not until the initial load above has run — otherwise the
  // first commit's default ("md") would overwrite a saved choice.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, fontScale);
    } catch {
      // best-effort persistence only
    }
  }, [fontScale, hydrated]);

  const value: PreferencesContextValue = {
    hydrated,
    fontScale,
    setFontScale: setFontScaleState,
  };

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences(): PreferencesContextValue {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error("usePreferences must be used within a PreferencesProvider");
  return ctx;
}
