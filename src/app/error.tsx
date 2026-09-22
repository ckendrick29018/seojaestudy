"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/components/providers/LanguageProvider";
import { localizePath } from "@/lib/locale-path";
import { WarningIcon } from "@/components/ui/icons";

/**
 * Root error boundary — catches a render/runtime error anywhere below
 * RootLayout that doesn't have a more specific error.tsx of its own. Next
 * requires this to be a Client Component. RootLayout (and AppShell's header)
 * keeps rendering around this, only the page body is replaced, so `useT()`
 * and navigation still work normally.
 *
 * No error-tracking service is wired up yet (flagged separately in the
 * architecture review) — this at least lands the error in the console
 * instead of it disappearing silently behind the default Next.js screen.
 */
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const pathname = usePathname();
  const t = useT();

  useEffect(() => {
    console.error("Unhandled route error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-light/50 text-rose">
        <WarningIcon className="h-7 w-7" />
      </div>
      <h1 className="font-serif text-2xl font-semibold text-charcoal">{t("errorTitle")}</h1>
      <p className="max-w-sm text-sm text-charcoal/60">{t("errorBody")}</p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-sm font-medium text-cream shadow-soft transition hover:bg-rose/90"
        >
          {t("errorRetry")}
        </button>
        <Link
          href={localizePath("/", pathname)}
          className="inline-flex items-center justify-center rounded-full border border-rose-soft/50 px-5 py-2.5 text-sm font-medium text-rose transition hover:bg-rose-light/30"
        >
          {t("errorGoHome")}
        </Link>
      </div>
    </div>
  );
}
