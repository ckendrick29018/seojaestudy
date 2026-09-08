import "server-only";
import { createAdminClient } from "@/lib/supabase/admin";
import type { Database } from "@/lib/supabase/database.types";

type ProfileUpdate = Database["public"]["Tables"]["profiles"]["Update"];

// Loose shapes — the Paddle SDK's webhook `*Notification` entities and its
// REST `*` entities carry the same fields we need but are nominally
// different types, so we read them structurally rather than importing the
// SDK's own (much larger) types.
interface PaddleSubscriptionLike {
  id: string;
  status: string;
  customerId: string;
  nextBilledAt?: string | null;
  currentBillingPeriod?: { endsAt?: string | null } | null;
  scheduledChange?: { action?: string | null } | null;
  customData?: Record<string, unknown> | null;
}

/** Pulls our Supabase user id out of Paddle customData (set when the
 *  checkout was opened — see components/billing/PaddleCheckout.tsx). */
export function resolveUserId(customData: Record<string, unknown> | null | undefined): string | null {
  const raw = customData?.user_id;
  return typeof raw === "string" && raw.length > 0 ? raw : null;
}

/**
 * Monthly subscription lifecycle. `active`/`trialing` turns access on and
 * (re)sets the period end from Paddle; `past_due`/`canceled`/`paused` stop
 * future billing but leave access until subscription_current_period_end
 * lapses (see lib/subscription.ts's isActiveSubscription).
 *
 * Both the webhook (app/api/webhooks/paddle/route.ts) and the synchronous
 * post-checkout sync (app/subscribe/actions.ts) funnel through here so the
 * two paths can't diverge, and so a redelivered webhook is a no-op.
 */
export async function provisionSubscription(sub: PaddleSubscriptionLike, userIdOverride?: string): Promise<void> {
  const userId = userIdOverride ?? resolveUserId(sub.customData);
  const admin = createAdminClient();

  // Prefer the user id from customData; fall back to matching the row that
  // already stores this subscription id (renewals, dashboard edits).
  const match = async (patch: ProfileUpdate) => {
    if (userId) {
      await admin.from("profiles").update(patch).eq("id", userId);
    } else {
      await admin.from("profiles").update(patch).eq("paddle_subscription_id", sub.id);
    }
  };

  const active = sub.status === "active" || sub.status === "trialing";
  const periodEnd = sub.currentBillingPeriod?.endsAt ?? sub.nextBilledAt ?? null;
  const scheduledCancel = sub.scheduledChange?.action === "cancel";

  if (active) {
    const patch: ProfileUpdate = {
      is_subscribed: true,
      cancel_at_period_end: scheduledCancel,
      paddle_subscription_id: sub.id,
      paddle_customer_id: sub.customerId,
    };
    // Never blank out a known period end if Paddle omitted it on this event.
    if (periodEnd) patch.subscription_current_period_end = periodEnd;
    await match(patch);
    return;
  }

  // canceled (effective at period end) or a dunning failure — flag it but
  // keep access until subscription_current_period_end lapses. If billing
  // later recovers, the next `active` event clears the flag again.
  if (sub.status === "canceled" || sub.status === "past_due") {
    await match({ cancel_at_period_end: true });
  }
  // `paused` / anything else: don't touch the profile.
}

interface PaddleAdjustmentLike {
  id: string;
  /** 'refund' | 'chargeback' | 'credit' | '*_reverse' | ... */
  action: string;
  /** 'full' | 'partial' | 'tax' | 'proration' */
  type: string;
  /** 'pending_approval' | 'approved' | 'rejected' | 'reversed' */
  status: string;
  subscriptionId?: string | null;
}

/**
 * A refund or chargeback came back from Paddle (webhook `adjustment.created`
 * / `adjustment.updated`). Paddle only cancels a refunded subscription at
 * period end on its own — so without this, a refunded customer keeps
 * access for the rest of the paid period.
 *
 * Only a full refund / chargeback revokes access here. A partial refund is
 * treated as a goodwill credit and left alone (the subscription's own
 * lifecycle events own real cancellation). This is a deliberately simpler
 * policy than Pulja's (no annual pass / gift proration to consider here —
 * v1 is subscription-only).
 */
export async function revokeAccessForAdjustment(adj: PaddleAdjustmentLike): Promise<boolean> {
  const isChargeback = adj.action === "chargeback";
  const isRefund = adj.action === "refund";
  if (!isRefund && !isChargeback) return false;
  if (adj.status === "rejected" || adj.status === "reversed") return false;
  // A refund is only real once Paddle approves it; a chargeback has already
  // pulled the funds, so act on it even while it's pending_approval.
  if (isRefund && adj.status !== "approved") return false;
  if (!adj.subscriptionId) return false;

  const isFull = isChargeback || adj.type === "full";
  if (!isFull) return false; // partial / tax / proration — leave access intact

  const admin = createAdminClient();
  const nowISO = new Date().toISOString();
  const { data, error } = await admin
    .from("profiles")
    .update({
      is_subscribed: false,
      cancel_at_period_end: false,
      subscription_current_period_end: nowISO,
    })
    .eq("paddle_subscription_id", adj.subscriptionId)
    .select("id");
  if (error) throw error;

  if (data && data.length > 0) {
    console.warn(`paddle: revoked access — ${adj.action}/${adj.type} ${adj.id}`);
    return true;
  }
  return false;
}
