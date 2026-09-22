"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useT } from "@/components/providers/LanguageProvider";
import { localizePath } from "@/lib/locale-path";
import { BookOpenIcon } from "@/components/ui/icons";

/**
 * Root 404 — used both for a URL that matches no route at all and for any
 * `notFound()` call (lesson/book/article/quote pages) that doesn't have a
 * more specific not-found.tsx of its own. Renders inside the normal
 * RootLayout/AppShell chrome (header + nav still work), just with this as
 * the page body — see the architecture review that flagged this file as
 * missing entirely.
 */
export default function NotFound() {
  const pathname = usePathname();
  const t = useT();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/40 text-rose">
        <BookOpenIcon className="h-7 w-7" />
      </div>
      <h1 className="font-serif text-2xl font-semibold text-charcoal">{t("notFoundTitle")}</h1>
      <p className="max-w-sm text-sm text-charcoal/60">{t("notFoundBody")}</p>
      <Link
        href={localizePath("/", pathname)}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-rose px-5 py-2.5 text-sm font-medium text-cream shadow-soft transition hover:bg-rose/90"
      >
        {t("notFoundCta")}
      </Link>
    </div>
  );
}
