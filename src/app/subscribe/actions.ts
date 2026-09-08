"use server";

import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getPaddle } from "@/lib/paddle";
import { provisionSubscription, resolveUserId } from "@/lib/paddle-provisioning";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Runs right after Paddle Checkout redirects back to /subscribe/thanks with
 * `?_ptxn=<transaction id>`. Re-fetches Paddle's authoritative subscription
 * record and provisions access synchronously, so the UI doesn't have to
 * wait on the webhook. Both this and the webhook funnel through
 * lib/paddle-provisioning and are idempotent.
 *
 * Returns whether the subscription is now active.
 */
export async function syncAfterCheckout(transactionId: string): Promise<boolean> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Sign in required.");

  const paddle = getPaddle();

  // A checkout.completed self-redirect can reach us a beat before Paddle
  // finishes settling the transaction / activating the subscription.
  // provisionSubscription is idempotent, so retry briefly before giving up
  // (the webhook is the longer-term backstop).
  for (let attempt = 0; attempt < 4; attempt++) {
    let tx;
    try {
      tx = await paddle.transactions.get(transactionId);
    } catch {
      return false;
    }
    if (!tx.subscriptionId) return false;

    let sub;
    try {
      sub = await paddle.subscriptions.get(tx.subscriptionId);
    } catch {
      return false;
    }

    const subUserId = resolveUserId(sub.customData as Record<string, unknown> | null);
    if (subUserId && subUserId !== user.id) return false; // belongs to someone else

    const active = sub.status === "active" || sub.status === "trialing";
    if (!active) {
      if (attempt < 3) {
        await sleep(1500);
        continue;
      }
      return false; // not active yet — the webhook will settle it
    }

    await provisionSubscription(sub as never, user.id);
    return true;
  }
  return false;
}

/**
 * Stops future auto-charges via Paddle. Does not refund the current paid
 * period and does not cut off access early — access stays on until
 * subscription_current_period_end (see src/lib/subscription.ts). The
 * `subscription.canceled` webhook confirms it later; setting the flag here
 * makes the UI responsive immediately.
 */
export async function cancelSubscription(): Promise<void> {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Sign in required.");

  const { data: profile } = await supabase
    .from("profiles")
    .select("paddle_subscription_id")
    .eq("id", user.id)
    .single();

  if (profile?.paddle_subscription_id) {
    try {
      await getPaddle().subscriptions.cancel(profile.paddle_subscription_id, {
        effectiveFrom: "next_billing_period",
      });
    } catch (err) {
      // A subscription that's already canceled / gone is fine — the flag +
      // webhook settle it. Any other error (auth scope, network, 5xx) means
      // the cancel did NOT register at Paddle, so we must not tell the user
      // it's scheduled while they keep getting billed.
      const code = (err as { code?: string })?.code;
      const benign =
        code === "entity_not_found" ||
        code === "subscription_update_when_canceled" ||
        code === "subscription_is_canceled";
      if (!benign) {
        console.error("paddle: cancel subscription failed", err);
        throw new Error("We couldn't process the cancellation. Please try again, or contact support if it keeps happening.");
      }
    }
  }

  await createAdminClient().from("profiles").update({ cancel_at_period_end: true }).eq("id", user.id);
}
