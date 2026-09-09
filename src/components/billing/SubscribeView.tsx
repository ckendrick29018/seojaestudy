"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useT } from "@/components/providers/LanguageProvider";
import { SUBSCRIPTION_PRICE_DISPLAY } from "@/lib/pricing";
import { isRunningInTwa } from "@/lib/platform";
import { CheckIcon } from "@/components/ui/icons";
import { PaddleCheckout } from "./PaddleCheckout";
import { CancelSubscriptionButton } from "./CancelSubscriptionButton";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "";

interface SubscribeViewProps {
  userId: string;
  email: string | null;
  active: boolean;
  cancelAtPeriodEnd: boolean;
  periodEnd: string | null;
}

export function SubscribeView({ userId, email, active, cancelAtPeriodEnd, periodEnd }: SubscribeViewProps) {
  const t = useT();
  // Checked client-side only (see lib/platform.ts) — defaults to false so
  // server and first client render match, then flips right after mount if
  // we're actually inside the Android app wrapper.
  const [inTwa, setInTwa] = useState(false);
  useEffect(() => setInTwa(isRunningInTwa()), []);

  return (
    <div className="px-5 py-8">
      <h1 className="mb-1 font-serif text-2xl font-semibold text-charcoal">{t("premiumTitle")}</h1>
      <p className="mb-6 text-sm text-charcoal/60">{t("subscribeSubtitle")}</p>

      <ul className="mb-6 space-y-2 text-sm text-charcoal/70">
        {(["subscribeFeature1", "subscribeFeature2", "subscribeFeature3"] as const).map((key) => (
          <li key={key} className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 shrink-0 text-sage-dark" />
            {t(key)}
          </li>
        ))}
      </ul>

      {active ? (
        <div className="space-y-3 rounded-xl2 border border-sage-dark/40 bg-sage/25 p-4 text-sm text-charcoal/80">
          <p className="font-medium">{t("currentlySubscribed")}</p>
          {periodEnd && (
            <p className="text-charcoal/60">
              {cancelAtPeriodEnd ? t("cancelScheduled") : t("renewsOn")}{" "}
              {new Date(periodEnd).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
            </p>
          )}
          {!cancelAtPeriodEnd && <CancelSubscriptionButton />}
        </div>
      ) : (
        <div className="rounded-xl2 border border-rose-light/50 bg-white/60 p-4">
          <p className="mb-4 text-center font-serif text-3xl font-semibold text-charcoal">
            {SUBSCRIPTION_PRICE_DISPLAY}
            <span className="text-sm font-normal text-charcoal/50"> / {t("perMonth")}</span>
          </p>
          {inTwa ? (
            // Google Play's payments policy generally requires in-app
            // purchases of content consumed in the app to go through Google
            // Play Billing, not a third-party processor — so the Android
            // app doesn't sell the subscription itself. See lib/platform.ts.
            <p className="text-center text-sm text-charcoal/60">
              {t("subscribeOnWebsite")}
              {SITE_URL && (
                <>
                  {" "}
                  <span className="font-medium text-charcoal">{SITE_URL.replace(/^https?:\/\//, "")}</span>
                </>
              )}
            </p>
          ) : (
            <PaddleCheckout userId={userId} email={email ?? undefined} />
          )}
        </div>
      )}

      <Link href="/library" className="mt-8 inline-block text-sm text-rose underline-offset-4 hover:underline">
        {t("backToLibrary")}
      </Link>
    </div>
  );
}
