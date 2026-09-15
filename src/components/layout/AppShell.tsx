"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "./SiteHeader";
import { MarketingHeader } from "./MarketingHeader";

// Routes that get the wide marketing layout instead of the ~480px app frame:
// the homepage, every SEO/marketing hub (and their sub-routes, e.g.
// /classics/a1 or /learn/cefr-levels-explained), plus the personal
// collection/account pages (/folktales, /bookshelf, /club, /settings) that
// share the same hub styling.
const MARKETING_PREFIXES = ["/classics", "/library", "/learn", "/faq", "/folktales", "/bookshelf", "/club", "/settings"];

function isMarketingRoute(pathname: string) {
  if (pathname === "/") return true;
  return MARKETING_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (isMarketingRoute(pathname)) {
    return (
      <div className="flex min-h-dvh flex-col bg-cream">
        <MarketingHeader />
        <main className="flex-1">{children}</main>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-app flex-col bg-cream sm:my-8 sm:min-h-[calc(100dvh-4rem)] sm:rounded-xl2 sm:border sm:border-rose-light sm:shadow-frame">
      <SiteHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}
