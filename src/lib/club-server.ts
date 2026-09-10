import "server-only";
import { createClient } from "@/lib/supabase/server";

/**
 * The book-club side of the lesson paywall: true when the signed-in visitor
 * is a member of some club whose owner currently has an active subscription
 * and that has this chapter shared into it.
 *
 * All the logic lives in the SECURITY DEFINER SQL function
 * public.user_has_club_unlock (see supabase/migrations) so there's exactly
 * one definition of the rule and no service-role key is needed on the
 * lesson-render path — it runs as the requesting user via auth.uid().
 */
export async function hasClubUnlockForLesson(lessonSlug: string): Promise<boolean> {
  const authConfigured = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
  if (!authConfigured) return false;

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;

  const { data, error } = await supabase.rpc("user_has_club_unlock", {
    p_lesson_slug: lessonSlug,
  });
  if (error) {
    console.error("club: user_has_club_unlock rpc failed", error);
    return false;
  }
  return data === true;
}
