"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { useAuth } from "@/components/providers/AuthProvider";
import { useStudyPlan } from "@/components/providers/StudyPlanProvider";
import { useDaily } from "@/components/providers/DailyProvider";
import { BookOpenIcon, CardsIcon, SettingsIcon, UserIcon } from "@/components/ui/icons";
import { SignOutButton } from "@/components/auth/SignOutButton";

export function SiteHeader() {
  const { lang, toggleLang } = useLanguage();
  const t = useT();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { user, authAvailable } = useAuth();
  const { dueItems } = useStudyPlan();
  const { streak } = useDaily();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-rose-light/50 bg-cream/90 px-5 py-4 backdrop-blur">
      <Link href="/" className="flex items-baseline gap-2">
        <span className="font-serif text-xl font-semibold tracking-tight text-charcoal">{t("appName")}</span>
        {isHome && <span className="hidden text-xs text-charcoal/50 sm:inline">{t("tagline")}</span>}
      </Link>
      <nav className="flex items-center gap-1.5">
        {streak > 0 && (
          <span
            className="mr-0.5 inline-flex items-center gap-1 rounded-full bg-rose-light/40 px-2 py-1 text-xs font-semibold text-rose"
            aria-label={`${streak} ${t("dayStreak")}`}
            title={`${streak} ${t("dayStreak")}`}
          >
            <span aria-hidden>🔥</span>
            {streak}
          </span>
        )}
        <Link
          href="/saved"
          className="rounded-full p-2 text-charcoal/60 transition hover:bg-sage/40 hover:text-charcoal"
          aria-label={t("savedWords")}
        >
          <BookOpenIcon className="h-5 w-5" />
        </Link>
        <Link
          href="/study"
          className="relative rounded-full p-2 text-charcoal/60 transition hover:bg-sage/40 hover:text-charcoal"
          aria-label={t("studyPlan")}
        >
          <CardsIcon className="h-5 w-5" />
          {dueItems.length > 0 && (
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose ring-2 ring-cream" />
          )}
        </Link>
        <Link
          href="/settings"
          className="rounded-full p-2 text-charcoal/60 transition hover:bg-sage/40 hover:text-charcoal"
          aria-label={t("settings")}
        >
          <SettingsIcon className="h-5 w-5" />
        </Link>
        {authAvailable &&
          (user ? (
            <SignOutButton />
          ) : (
            <Link
              href="/login"
              className="rounded-full p-2 text-charcoal/60 transition hover:bg-sage/40 hover:text-charcoal"
              aria-label={t("signIn")}
            >
              <UserIcon className="h-5 w-5" />
            </Link>
          ))}
        <button
          onClick={toggleLang}
          className="rounded-full border border-rose-soft/40 px-3 py-1.5 text-xs font-medium tracking-wide text-rose transition hover:bg-rose-light/40"
          aria-label="Toggle interface language"
        >
          {lang === "en" ? "한국어" : "EN"}
        </button>
      </nav>
    </header>
  );
}
