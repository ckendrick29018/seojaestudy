import { notFound } from "next/navigation";
import { lessons } from "@/lib/data/lessons";
import { getBookContext } from "@/lib/books";
import { LessonView } from "@/components/lesson/LessonView";
import { LessonPaywall } from "@/components/lesson/LessonPaywall";
import { createClient } from "@/lib/supabase/server";
import { isActiveSubscription } from "@/lib/subscription";
import { hasClubUnlockForLesson } from "@/lib/club-server";
import { lessonJsonLd } from "@/lib/seo";

async function hasActiveSubscription(): Promise<boolean> {
  const authConfigured = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  if (!authConfigured) return false;

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;

  const { data: profile } = await supabase
    .from("profiles")
    .select("is_subscribed, subscription_current_period_end")
    .eq("id", user.id)
    .maybeSingle();

  return isActiveSubscription(profile);
}

/**
 * Shared body for both `/lesson/[slug]` and `/ko/lesson/[slug]` — the
 * paywall check, JSON-LD, and `LessonView`/`LessonPaywall` render. Kept in
 * exactly one place so this auth-sensitive logic can't drift between the two
 * routes; only each route's own `generateMetadata` (genuinely
 * locale-specific) stays separate.
 */
export async function renderLessonPage(slug: string) {
  const lesson = lessons.find((l) => l.slug === slug);
  if (!lesson) notFound();

  const locked =
    !lesson.isFree &&
    !(await hasActiveSubscription()) &&
    !(await hasClubUnlockForLesson(lesson.slug));

  const bookContext = getBookContext(lesson.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lessonJsonLd(lesson)) }}
      />
      {locked ? (
        <LessonPaywall lesson={lesson} bookContext={bookContext} />
      ) : (
        <LessonView lesson={lesson} bookContext={bookContext} />
      )}
    </>
  );
}
