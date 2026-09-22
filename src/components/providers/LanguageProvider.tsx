"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { t, type UiLang } from "@/lib/i18n";
import { isKoPath } from "@/lib/locale-path";

interface LanguageContextValue {
  lang: UiLang;
  setLang: (lang: UiLang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "luminaread:ui-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [lang, setLangState] = useState<UiLang>(() => (isKoPath(pathname) ? "ko" : "en"));
  const [hydrated, setHydrated] = useState(false);
  // Tracks whether the *previous* pathname was under /ko, so the effect below
  // can tell "just left /ko" apart from "moving between two English pages".
  const wasKoPath = useRef(isKoPath(pathname));

  // Load the saved choice once, before we start persisting changes. Skipped
  // when the first-loaded page is under /ko: that subtree's chrome language
  // is locked to Korean regardless of any stored preference (see the effect
  // below, and setLang/toggleLang further down).
  useEffect(() => {
    if (!isKoPath(pathname)) {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === "en" || stored === "ko") setLangState(stored);
      } catch {
        // localStorage unavailable (private mode, some WebViews) — fall back to default.
      }
    }
    setHydrated(true);
    // Mount-only, deliberately: this loads the visitor's stored preference
    // once, the same way it always has. Navigating into/out of /ko afterward
    // is handled by the pathname-keyed effect below, not by re-running this.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keeps chrome language locked to Korean for the whole /ko/* subtree, and
  // restores the visitor's own preference the moment they leave it. Runs on
  // every client-side navigation (not just mount), so clicking between /ko
  // and an unlocalized English page (e.g. /faq) never leaves the chrome
  // language stuck on the wrong side of that trip.
  useEffect(() => {
    const nowKo = isKoPath(pathname);
    if (nowKo) {
      setLangState("ko");
    } else if (wasKoPath.current) {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        setLangState(stored === "en" || stored === "ko" ? stored : "en");
      } catch {
        setLangState("en");
      }
    }
    wasKoPath.current = nowKo;
  }, [pathname]);

  // Keep <html lang> in sync every render — cheap and not persisted.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Persist, but not until the initial load above has run, and never while
  // under /ko — that lock is URL-driven, not a preference to remember.
  // Otherwise the first commit's default would overwrite a saved choice
  // before we ever read it — and a React StrictMode remount would then read
  // that back.
  useEffect(() => {
    if (!hydrated || isKoPath(pathname)) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // best-effort persistence only
    }
  }, [lang, hydrated, pathname]);

  const value: LanguageContextValue = {
    lang,
    // Locked while under /ko: no code path (the manual toggle, onboarding's
    // direction picker, anything future) can flip chrome away from Korean on
    // a Korean URL.
    setLang: (next) => {
      if (isKoPath(pathname)) return;
      setLangState(next);
    },
    toggleLang: () => {
      if (isKoPath(pathname)) return;
      setLangState((prev) => (prev === "en" ? "ko" : "en"));
    },
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
