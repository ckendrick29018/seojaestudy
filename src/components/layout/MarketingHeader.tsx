"use client";

import Link from "next/link";
import { useT } from "@/components/providers/LanguageProvider";
import { BrandMark } from "@/components/ui/icons";

/**
 * Header for marketing/SEO pages (currently just `/`) — a normal wide nav
 * bar, not the ~480px app frame's SiteHeader. No streak/menu-drawer/now-
 * playing chrome: those are app-state features a logged-out search visitor
 * has no use for yet.
 */
export function MarketingHeader() {
  const t = useT();

  const navLinks = [
    { href: "/classics", label: t("classics") },
    { href: "/library", label: t("library") },
    { href: "/learn", label: t("learnGuides") },
    { href: "/faq", label: t("faq") },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-rose-light/50 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl2 bg-rose-light/50 text-rose">
            <BrandMark className="h-5 w-5" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-charcoal">
            {t("appName")}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-charcoal/65 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-charcoal">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/library"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-rose px-5 py-2 text-sm font-semibold text-cream shadow-soft transition hover:bg-rose/90"
        >
          {t("navStart")}
        </Link>
      </div>
    </header>
  );
}
