"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { t, type UiLang } from "@/lib/i18n";

interface LanguageContextValue {
  lang: UiLang;
  setLang: (lang: UiLang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "luminaread:ui-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<UiLang>("en");
  const [hydrated, setHydrated] = useState(false);

  // Load the saved choice once, before we start persisting changes.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "ko") setLangState(stored);
    } catch {
      // localStorage unavailable (private mode, some WebViews) — fall back to default.
    }
    setHydrated(true);
  }, []);

  // Keep <html lang> in sync every render — cheap and not persisted.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Persist, but not until the initial load above has run. Otherwise the
  // first commit's default ("en") would overwrite a saved choice before we
  // ever read it — and a React StrictMode remount would then read that back.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // best-effort persistence only
    }
  }, [lang, hydrated]);

  const value: LanguageContextValue = {
    lang,
    setLang: setLangState,
    toggleLang: () => setLangState((prev) => (prev === "en" ? "ko" : "en")),
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}

/** Returns a translate function bound to the current interface language. */
export function useT() {
  const { lang } = useLanguage();
  return (key: Parameters<typeof t>[0]) => t(key, lang);
}
