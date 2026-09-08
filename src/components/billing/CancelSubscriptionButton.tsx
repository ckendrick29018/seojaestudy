"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cancelSubscription } from "@/app/subscribe/actions";
import { useT } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui/Button";

export function CancelSubscriptionButton() {
  const t = useT();
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCancel() {
    setLoading(true);
    setError(null);
    try {
      await cancelSubscription();
      router.refresh();
      setConfirming(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }

  if (!confirming) {
    return (
      <button onClick={() => setConfirming(true)} className="text-xs text-charcoal/50 underline-offset-4 hover:underline">
        {t("cancelSubscription")}
      </button>
    );
  }

  return (
    <div className="rounded-xl2 border border-rose-light/50 bg-white/60 p-4 text-sm">
      <p className="mb-3 text-charcoal/70">{t("cancelConfirm")}</p>
      <div className="flex gap-2">
        <Button variant="outline" onClick={handleCancel} disabled={loading}>
          {loading ? "..." : t("cancelSubscription")}
        </Button>
        <Button variant="ghost" onClick={() => setConfirming(false)} disabled={loading}>
          {t("keepSubscription")}
        </Button>
      </div>
      {error && <p className="mt-2 text-rose">{error}</p>}
    </div>
  );
}
