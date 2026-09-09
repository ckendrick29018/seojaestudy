"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/components/providers/LanguageProvider";
import { useStudyPlan } from "@/components/providers/StudyPlanProvider";
import { useDaily } from "@/components/providers/DailyProvider";
import { MenuIcon, StarIcon } from "@/components/ui/icons";
import { MenuDrawer } from "./MenuDrawer";

export function SiteHeader() {
  const t = useT();
  const pathname = usePathname();
  const isHome = pathname === "/library";
  const { dueItems } = useStudyPlan();
  const { streak } = useDaily();
  const [menuOpen, setMenuOpen] = useState(false);
  // Stable identity so MenuDrawer's open/close effects don't re-run on every
  // header re-render (streak, due-count, …).
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-rose-light/50 bg-cream/90 px-5 py-4 backdrop-blur">
        <Link href="/library" className="flex items-baseline gap-2">
          <span className="font-serif text-xl font-semibold tracking-tight text-charcoal">
            {t("appName")}
          </span>
          {isHome && (
            <span className="hidden text-xs text-charcoal/50 sm:inline">{t("tagline")}</span>
          )}
        </Link>

        <div className="flex items-center gap-1.5">
          {streak > 0 && (
            <span
              className="inline-flex items-center gap-1 rounded-full bg-rose-light/40 px-2 py-1 text-xs font-semibold text-rose"
              aria-label={`${streak} ${t("dayStreak")}`}
              title={`${streak} ${t("dayStreak")}`}
            >
              <StarIcon className="h-3 w-3" aria-hidden />
              {streak}
            </span>
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
      </header>

      <MenuDrawer open={menuOpen} onClose={closeMenu} />
    </>
  );
}
