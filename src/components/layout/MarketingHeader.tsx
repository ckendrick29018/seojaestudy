"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/components/providers/LanguageProvider";
import { useStudyPlan } from "@/components/providers/StudyPlanProvider";
import { BrandMark, MenuIcon } from "@/components/ui/icons";
import { MenuDrawer } from "./MenuDrawer";

/**
 * Header for marketing/SEO + hub pages (`/`, `/library`, `/classics`,
 * `/folktales`, `/bookshelf`, `/learn`, `/faq`, `/club`, `/settings`,
 * `/quotes`) — a normal wide nav bar, not the ~480px app frame's SiteHeader.
 * The desktop nav links are hidden below `md`, so the menu button (opening
 * the same MenuDrawer the app frame uses) is the only nav a mobile visitor
 * has on any of these routes — including signed-in dashboard use of
 * `/library`, not just logged-out marketing traffic.
 */
export function MarketingHeader() {
  const t = useT();
  const pathname = usePathname();
  const { dueItems } = useStudyPlan();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  // Once a visitor has actually clicked into the library, the "Start
  // reading" nudge just points at the page they're already on.
  const inLibrary = pathname === "/library" || pathname.startsWith("/library/");

  const navLinks = [
    { href: "/classics", label: t("classics") },
    { href: "/library", label: t("library") },
    { href: "/learn", label: t("learnGuides") },
    { href: "/faq", label: t("faq") },
  ];

  return (
    <>
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

          <div className="flex shrink-0 items-center gap-2">
            {!inLibrary && (
              <Link
                href="/library"
                className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2 text-sm font-semibold text-cream shadow-soft transition hover:bg-rose/90"
              >
                {t("navStart")}
              </Link>
            )}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label={t("menu")}
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              className="relative rounded-full p-2 text-charcoal/60 transition hover:bg-sage/40 hover:text-charcoal"
            >
              <MenuIcon className="h-5 w-5" />
              {dueItems.length > 0 && (
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose ring-2 ring-cream" />
              )}
            </button>
          </div>
        </div>
      </header>

      <MenuDrawer open={menuOpen} onClose={closeMenu} />
    </>
  );
}
