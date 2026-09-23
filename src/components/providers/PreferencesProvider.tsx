"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { SystemBars, SystemBarsStyle } from "@capacitor/core";
import { LocalNotifications } from "@capacitor/local-notifications";
import { isRunningInNativeApp } from "@/lib/platform";
import { useT } from "./LanguageProvider";

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

/** Reading theme. `light` is the original cream look; the others re-colour the whole app. */
export type ReadingTheme = "light" | "sepia" | "dark";

export const READING_THEMES: ReadingTheme[] = ["light", "sepia", "dark"];

/** Browser/PWA chrome colour for each theme — matches that theme's page (`cream`) colour. */
const THEME_CHROME: Record<ReadingTheme, string> = {
  light: "#FDFBF7",
  sepia: "#F4ECD8",
  dark: "#1C1A17",
};

interface PreferencesContextValue {
  hydrated: boolean;
  fontScale: FontScale;
  setFontScale: (scale: FontScale) => void;
  readingTheme: ReadingTheme;
  setReadingTheme: (theme: ReadingTheme) => void;
  /** Step light → sepia → dark → light; the reader's one-tap control. */
  cycleReadingTheme: () => void;
  /** Opt-in daily local notification (native app only). Off by default. */
  readingReminder: boolean;
  /**
   * Turns the reminder on/off. Requests OS notification permission the first
   * time it's enabled; if that's denied, the reminder stays off and this
   * resolves to `false` so the caller can tell the user why.
   */
  setReadingReminder: (enabled: boolean) => Promise<boolean>;
}

const PreferencesContext = createContext<PreferencesContextValue | null>(null);
const STORAGE_KEY = "luminaread:font-scale";
// Also read by the boot script in app/layout.tsx — change both together.
const THEME_STORAGE_KEY = "luminaread:reading-theme";
const REMINDER_STORAGE_KEY = "luminaread:reading-reminder";
// Arbitrary fixed id for the one recurring reminder notification this app schedules.
const REMINDER_NOTIFICATION_ID = 1001;
const REMINDER_HOUR = 19; // 7 PM local time — not user-configurable yet.

/** The next 7 PM, local time — today's if it hasn't passed yet, else tomorrow's. */
function nextReminderTime(): Date {
  const next = new Date();
  next.setHours(REMINDER_HOUR, 0, 0, 0);
  if (next.getTime() <= Date.now()) next.setDate(next.getDate() + 1);
  return next;
}

function isFontScale(value: unknown): value is FontScale {
  return value === "sm" || value === "md" || value === "lg" || value === "xl";
}

function isReadingTheme(value: unknown): value is ReadingTheme {
  return value === "light" || value === "sepia" || value === "dark";
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const t = useT();
  const [fontScale, setFontScaleState] = useState<FontScale>("md");
  const [readingTheme, setReadingThemeState] = useState<ReadingTheme>("light");
  const [readingReminder, setReadingReminderState] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load the saved choices once, before we start persisting changes.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isFontScale(stored)) setFontScaleState(stored);
      const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (isReadingTheme(storedTheme)) setReadingThemeState(storedTheme);
      setReadingReminderState(window.localStorage.getItem(REMINDER_STORAGE_KEY) === "true");
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

  // Apply the theme to <html> (the palette lives in CSS variables keyed off
  // data-theme). Skipped until hydrated: on the first commit the state is still the
  // "light" default, which would strip the saved theme the boot script already set.
  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.setAttribute("data-theme", readingTheme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_CHROME[readingTheme]);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, readingTheme);
    } catch {
      // best-effort persistence only
    }
    // In the Android app the status/nav bar icons are dark by default; on the dark
    // theme they'd vanish into the page, so flip them to light.
    if (isRunningInNativeApp()) {
      SystemBars.setStyle({
        style: readingTheme === "dark" ? SystemBarsStyle.Dark : SystemBarsStyle.Light,
      }).catch(() => {});
    }
  }, [readingTheme, hydrated]);

  const cycleReadingTheme = useCallback(() => {
    setReadingThemeState((current) => READING_THEMES[(READING_THEMES.indexOf(current) + 1) % READING_THEMES.length]);
  }, []);

  // Persist the reminder choice the same best-effort way as the other prefs.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(REMINDER_STORAGE_KEY, String(readingReminder));
    } catch {
      // best-effort persistence only
    }
  }, [readingReminder, hydrated]);

  const setReadingReminder = useCallback(
    async (enabled: boolean): Promise<boolean> => {
      if (!isRunningInNativeApp()) {
        // No native scheduler on the web build — just remember the choice.
        setReadingReminderState(enabled);
        return enabled;
      }

      if (!enabled) {
        await LocalNotifications.cancel({ notifications: [{ id: REMINDER_NOTIFICATION_ID }] }).catch(() => {});
        setReadingReminderState(false);
        return false;
      }

      const permission = await LocalNotifications.requestPermissions().catch(() => ({ display: "denied" as const }));
      if (permission.display !== "granted") {
        setReadingReminderState(false);
        return false;
      }

      await LocalNotifications.schedule({
        notifications: [
          {
            id: REMINDER_NOTIFICATION_ID,
            title: t("readingReminderNotifTitle"),
            body: t("readingReminderNotifBody"),
            schedule: { at: nextReminderTime(), every: "day", allowWhileIdle: true },
          },
        ],
      }).catch(() => {});
      setReadingReminderState(true);
      return true;
    },
    [t],
  );

  const value: PreferencesContextValue = {
    hydrated,
    fontScale,
    setFontScale: setFontScaleState,
    readingTheme,
    setReadingTheme: setReadingThemeState,
    cycleReadingTheme,
    readingReminder,
    setReadingReminder,
  };

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences(): PreferencesContextValue {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error("usePreferences must be used within a PreferencesProvider");
  return ctx;
}
