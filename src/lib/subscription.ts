import type { Database } from "./supabase/database.types";

type ProfileSubscriptionFields = Pick<
  Database["public"]["Tables"]["profiles"]["Row"],
  "is_subscribed" | "subscription_current_period_end"
>;

/**
 * Whether a profile currently has paid access. `is_subscribed` is the flag
 * Paddle events flip (see lib/paddle-provisioning.ts); a canceled
 * subscription keeps `is_subscribed` true with `cancel_at_period_end` set
 * until `subscription_current_period_end` actually lapses — so check the
 * date too rather than the flag alone.
 */
export function isActiveSubscription(profile: ProfileSubscriptionFields | null | undefined): boolean {
  if (!profile?.is_subscribed) return false;
  if (!profile.subscription_current_period_end) return true;
  return new Date(profile.subscription_current_period_end).getTime() > Date.now();
}
