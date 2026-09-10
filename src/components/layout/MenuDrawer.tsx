"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { useAuth } from "@/components/providers/AuthProvider";
import { useStudyPlan } from "@/components/providers/StudyPlanProvider";
import type { UiLang } from "@/lib/i18n";
import {
  BookOpenIcon,
  BooksIcon,
  CardsIcon,
  CatIcon,
  HomeIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
  XIcon,
} from "@/components/ui/icons";

const UI_LANGS: { code: UiLang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ko", label: "한국어" },
];

/**
 * Right-side slide-over that holds everything that used to be crammed into the
 * header bar: primary navigation, the interface-language switch, and account
 * actions. The bar itself keeps only the wordmark, the streak, and the button
 * that opens this.
 */
export function MenuDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useT();
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const { user, authAvailable, signOut } = useAuth();
  const { dueItems } = useStudyPlan();

  // Stay mounted through the slide-out: `render` controls presence in the tree,
  // `shown` drives the transform and is flipped one frame after mount.
  const [render, setRender] = useState(open);
  const [shown, setShown] = useState(false);

  // Set synchronously (before onClose) when the drawer is closing because the
  // user is navigating away via one of its links — tells the history effect's
  // cleanup NOT to swallow that navigation with a history.back().
  const closingToNavigateRef = useRef(false);
  const closeForNavigation = () => {
    closingToNavigateRef.current = true;
    onClose();
  };

  useEffect(() => {
    if (open) {
      setRender(true);
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }
    setShown(false);
    const id = window.setTimeout(() => setRender(false), 200);
    return () => window.clearTimeout(id);
  }, [open]);

  // While open: close on Escape, and stop the page behind from scrolling.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  // Make the phone Back button (and browser back) close the drawer instead of
  // navigating the page behind it. On open we push a throwaway history entry;
  // a `popstate` while open then means "Back was pressed" → just close. If the
  // drawer is closed any other way (Escape, backdrop, the X, a nav link) we pop
  // that entry back off so it doesn't pile up — a client-side <Link> nav will
  // have replaced history.state, so that check leaves real nav history intact.
  useEffect(() => {
    if (!open) return;
    const base = window.history.state ?? {};
    window.history.pushState({ ...base, __menuDrawer: true }, "");
    let poppedByBack = false;
    const onPopState = () => {
      poppedByBack = true;
      onClose();
    };
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
      const state = window.history.state as { __menuDrawer?: boolean } | null;
      if (!poppedByBack && !closingToNavigateRef.current && state?.__menuDrawer) {
        window.history.back();
      }
      closingToNavigateRef.current = false;
    };
  }, [open, onClose]);

  if (!render) return null;

  const navItems = [
    { href: "/library", label: t("library"), Icon: HomeIcon, badge: 0 },
    { href: "/classics", label: t("classics"), Icon: BooksIcon, badge: 0 },
    { href: "/bookshelf", label: t("bookshelf"), Icon: CatIcon, badge: 0 },
    { href: "/saved", label: t("savedWords"), Icon: BookOpenIcon, badge: 0 },
    { href: "/study", label: t("studyPlan"), Icon: CardsIcon, badge: dueItems.length },
    { href: "/club", label: t("myBookClub"), Icon: UsersIcon, badge: 0 },
    { href: "/settings", label: t("settings"), Icon: SettingsIcon, badge: 0 },
  ];

  const isActive = (href: string) =>
    href === "/library" ? pathname === "/library" : pathname === href || pathname.startsWith(`${href}/`);

  const rowClass =
    "flex items-center gap-3 rounded-xl2 px-3 py-2.5 text-sm font-medium transition text-charcoal/70 hover:bg-sage/40 hover:text-charcoal";

  return (
    <div className="fixed inset-0 z-50">
      <div
        className={`absolute inset-0 bg-charcoal/30 backdrop-blur-[2px] transition-opacity duration-200 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Constrain to the app column so the panel hugs the card's right edge on
          desktop; inset matches the frame's sm:my-8 so the rounded corners line up. */}
      <div className="pointer-events-none absolute inset-x-0 inset-y-0 mx-auto max-w-app sm:inset-y-8">
        <aside
          role="dialog"
          aria-modal="true"
          aria-label={t("menu")}
          className={`pointer-events-auto absolute inset-y-0 right-0 flex w-[82%] max-w-[320px] flex-col border-l border-rose-light/60 bg-cream shadow-drawer transition-transform duration-200 ease-out sm:rounded-l-xl2 ${
            shown ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-rose-light/50 px-5 py-4">
            <span className="font-serif text-lg font-semibold text-charcoal">{t("menu")}</span>
            <button
              onClick={onClose}
              aria-label={t("close")}
              className="rounded-full p-1.5 text-charcoal/50 transition hover:bg-sage/40 hover:text-charcoal"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-0.5 p-3">
            {navItems.map(({ href, label, Icon, badge }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={closeForNavigation}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-xl2 px-3 py-2.5 text-sm font-medium transition ${
                    active
                      ? "bg-rose-light/40 text-charcoal"
                      : "text-charcoal/70 hover:bg-sage/40 hover:text-charcoal"
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0 text-charcoal/55" />
                  <span className="flex-1">{label}</span>
                  {badge > 0 && (
                    <span
                      className="inline-flex min-w-[1.25rem] items-center justify-center rounded-full bg-rose px-1.5 py-0.5 text-xs font-semibold text-cream"
                      aria-label={`${badge} ${t("dueToday")}`}
                    >
                      {badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto space-y-2 border-t border-rose-light/50 p-3">
            <div>
              <p className="px-3 pb-1.5 text-xs font-semibold uppercase tracking-wide text-charcoal/40">
                {t("settingsLanguageTitle")}
              </p>
              <div
                role="group"
                aria-label={t("settingsLanguageTitle")}
                className="mx-3 inline-flex rounded-full border border-rose-soft/40 bg-white/70 p-0.5 text-xs font-medium"
              >
                {UI_LANGS.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    className={`rounded-full px-3 py-1 transition ${
                      lang === code ? "bg-rose text-cream" : "text-charcoal/50 hover:text-charcoal/80"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {authAvailable && (
              <div className="border-t border-rose-light/40 pt-2">
                {user ? (
                  <>
                    {user.email && (
                      <p className="truncate px-3 pb-0.5 text-xs text-charcoal/45">
                        {t("signedInAs")} {user.email}
                      </p>
                    )}
                    <button
                      onClick={() => {
                        closeForNavigation();
                        signOut().then(() => window.location.assign("/library"));
                      }}
                      className={`w-full ${rowClass}`}
                    >
                      <UserIcon className="h-5 w-5 shrink-0 text-charcoal/55" />
                      {t("signOut")}
                    </button>
                  </>
                ) : (
                  <Link href="/login" onClick={closeForNavigation} className={rowClass}>
                    <UserIcon className="h-5 w-5 shrink-0 text-charcoal/55" />
                    {t("signIn")}
                  </Link>
                )}
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
