"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "./SiteHeader";
import { MarketingHeader } from "./MarketingHeader";

// Routes that get the wide marketing layout instead of the ~480px app frame.
// Just the homepage for now; other marketing/SEO pages (classics, library,
// learn, faq hubs) can move here once they get their own desktop layout.
const MARKETING_ROUTES = new Set(["/"]);

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (MARKETING_ROUTES.has(pathname)) {
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
