"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { initializePaddle, type Paddle } from "@paddle/paddle-js";
import { useT } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui/Button";

/** sessionStorage key holding the in-flight Paddle transaction id, so the
 *  thanks page can still provision if Paddle's redirect drops `?_ptxn=`. */
export const PADDLE_PTXN_KEY = "luminaread:paddle-ptxn";

const PADDLE_ENV = process.env.NEXT_PUBLIC_PADDLE_ENV === "production" ? "production" : "sandbox";
const CLIENT_TOKEN = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN ?? "";
const PRICE_MONTHLY = process.env.NEXT_PUBLIC_PADDLE_PRICE_MONTHLY ?? "";

interface PaddleCheckoutProps {
  /** Supabase auth user id — travels in Paddle customData so the webhook
   *  and post-checkout sync know whose profile to update. */
  userId: string;
  /** Prefills the Paddle checkout email field when we have a verified one. */
  email?: string;
}

/**
 * Opens Paddle's hosted Checkout overlay for the monthly subscription.
 * Paddle collects name/address/payment method itself (and offers local
 * payment methods automatically per region) — there's no card form here.
 *
 * On success Paddle redirects to /subscribe/thanks, which provisions access
 * synchronously; the webhook is the backstop.
 */
export function PaddleCheckout({ userId, email }: PaddleCheckoutProps) {
  const t = useT();
  const router = useRouter();
  const paddleRef = useRef<Paddle | null>(null);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const misconfigured = !CLIENT_TOKEN || !PRICE_MONTHLY;

  useEffect(() => {
    if (misconfigured) return;
    let cancelled = false;
    initializePaddle({
      environment: PADDLE_ENV,
      token: CLIENT_TOKEN,
      eventCallback: (e) => {
        const txnId = (e.data as unknown as { transaction_id?: string } | undefined)?.transaction_id;
        if (txnId) {
          try {
            sessionStorage.setItem(PADDLE_PTXN_KEY, txnId);
          } catch {
            // private mode / storage disabled — the URL param still carries it
          }
        }
        if (e.name !== "checkout.completed") return;
        router.push(`/subscribe/thanks${txnId ? `?_ptxn=${encodeURIComponent(txnId)}` : ""}`);
      },
    })
      .then((p) => {
        if (cancelled || !p) return;
        paddleRef.current = p;
        setReady(true);
      })
      .catch(() => {
        if (!cancelled) setError(t("checkoutLoadFailed"));
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function openCheckout() {
    const paddle = paddleRef.current;
    if (!paddle || !PRICE_MONTHLY) {
      setError(t("checkoutStartFailed"));
      return;
    }
    setError(null);
    setLoading(true);
    try {
      paddle.Checkout.open({
        items: [{ priceId: PRICE_MONTHLY, quantity: 1 }],
        customer: email ? { email } : undefined,
        customData: { user_id: userId },
        settings: {
          displayMode: "overlay",
          allowLogout: false,
          successUrl: `${window.location.origin}/subscribe/thanks`,
        },
      });
    } catch {
      setError(t("checkoutOpenFailed"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <Button onClick={openCheckout} disabled={loading || !ready || misconfigured} className="w-full">
        {misconfigured ? t("checkoutNotConfigured") : loading || !ready ? "..." : t("subscribeNow")}
      </Button>
      {misconfigured && <p className="text-center text-xs text-charcoal/50">{t("checkoutNotConfiguredHint")}</p>}
      {error && <p className="text-center text-xs text-rose">{error}</p>}
    </div>
  );
}
