import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isActiveSubscription } from "@/lib/subscription";
import { SubscribeView } from "@/components/billing/SubscribeView";

export default async function SubscribePage() {
  const authConfigured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  if (!authConfigured) redirect("/library");

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/subscribe");

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_subscribed, subscription_current_period_end, cancel_at_period_end")
    .eq("id", user.id)
    .maybeSingle();

  return (
    <SubscribeView
      userId={user.id}
      email={user.email ?? null}
      active={isActiveSubscription(profile)}
      cancelAtPeriodEnd={profile?.cancel_at_period_end ?? false}
      periodEnd={profile?.subscription_current_period_end ?? null}
    />
  );
}
