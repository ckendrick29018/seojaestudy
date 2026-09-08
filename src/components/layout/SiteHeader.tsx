"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { useAuth } from "@/components/providers/AuthProvider";
import { BookOpenIcon, UserIcon } from "@/components/ui/icons";
import { SignOutButton } from "@/components/auth/SignOutButton";

export function SiteHeader() {
  const { lang, toggleLang } = useLanguage();
  const t = useT();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { user, authAvailable } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-rose-light/50 bg-cream/90 px-5 py-4 backdrop-blur">
      <Link href="/" className="flex items-baseline gap-2">
        <span className="font-serif text-xl font-semibold tracking-tight text-charcoal">{t("appName")}</span>
        {isHome && <span className="hidden text-xs text-charcoal/50 sm:inline">{t("tagline")}</span>}
      </Link>
      <nav className="flex items-center gap-1.5">
        <Link
          href="/saved"
          className="rounded-full p-2 text-charcoal/60 transition hover:bg-sage/40 hover:text-charcoal"
          aria-label={t("savedWords")}
        >
          <BookOpenIcon className="h-5 w-5" />
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
