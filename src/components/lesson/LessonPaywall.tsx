"use client";

import Link from "next/link";
import type { Lesson } from "@/lib/types";
import { LessonHero } from "./LessonHero";
import { useT } from "@/components/providers/LanguageProvider";
import { LockIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";

/** Shown instead of <LessonView> when a lesson isn't free and the visitor
 *  doesn't currently have an active subscription. */
export function LessonPaywall({ lesson }: { lesson: Lesson }) {
  const t = useT();

  return (
    <article className="pb-16">
      <LessonHero lesson={lesson} />
      <div className="mx-5 flex flex-col items-center gap-3 rounded-xl2 border border-rose-light/50 bg-white/60 p-8 text-center shadow-soft">
        <LockIcon className="h-8 w-8 text-rose-soft" />
        <h2 className="font-serif text-xl font-semibold text-charcoal">{t("premiumLockedTitle")}</h2>
        <p className="text-sm text-charcoal/60">{t("premiumLockedBody")}</p>
        <Link href="/subscribe">
          <Button>{t("subscribeNow")}</Button>
        </Link>
      </div>
    </article>
  );
}
