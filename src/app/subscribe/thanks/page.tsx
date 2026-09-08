"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { syncAfterCheckout } from "@/app/subscribe/actions";
import { PADDLE_PTXN_KEY } from "@/components/billing/PaddleCheckout";
import { useT } from "@/components/providers/LanguageProvider";

function ThanksContent() {
  const t = useT();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"checking" | "done" | "pending">("checking");

  useEffect(() => {
    let txnId = searchParams.get("_ptxn");
    if (!txnId) {
      try {
        txnId = sessionStorage.getItem(PADDLE_PTXN_KEY);
      } catch {
        txnId = null;
      }
    }

    if (!txnId) {
      setStatus("pending");
      return;
    }

    syncAfterCheckout(txnId)
      .then((ok) => setStatus(ok ? "done" : "pending"))
      .catch(() => setStatus("pending"));
  }, [searchParams]);

  return (
    <div className="flex flex-col items-center px-6 py-16 text-center">
      <div className="mb-4 text-4xl">{status === "done" ? "🎉" : "⏳"}</div>
      <h1 className="mb-2 font-serif text-2xl font-semibold text-charcoal">
        {status === "done" ? t("subscriptionActive") : t("subscriptionPending")}
      </h1>
      <p className="mb-8 max-w-xs text-sm text-charcoal/60">
        {status === "done" ? t("subscriptionActiveBody") : t("subscriptionPendingBody")}
      </p>
      <Link href="/" className="text-sm text-rose underline-offset-4 hover:underline">
        {t("backToLibrary")}
      </Link>
    </div>
  );
}

export default function SubscribeThanksPage() {
  return (
    <Suspense fallback={null}>
      <ThanksContent />
    </Suspense>
  );
}
