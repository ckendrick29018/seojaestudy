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

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "ko") setLangState(stored);
    } catch {
      // localStorage unavailable (private mode, some WebViews) — fall back to default.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // best-effort persistence only
    }
  }, [lang]);

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
