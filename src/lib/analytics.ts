import { track } from "@vercel/analytics";

/**
 * Custom Vercel Analytics events, funneled through one typed call site per
 * event so a name can't drift or typo between where it's fired and where
 * it's read on the dashboard. Add new events here, not as raw `track(...)`
 * calls scattered through components.
 */

type Props = Record<string, string | number | boolean | null>;

/** How long to keep retrying before giving up on a too-early event. */
const READY_RETRY_MS = 100;
const READY_RETRY_LIMIT = 20; // ~2s

/**
 * `track()` silently no-ops if `window.va` hasn't been defined yet by the
 * <Analytics/> script (it's `window.va?.(...)`, not a queue — unlike
 * `pageview`, an early `track()` call is just lost, not deferred). The
 * events fired from a lesson page's very first mount effect (e.g.
 * first_lesson_opened) can easily race that script load, so retry briefly
 * instead of trusting the call to have landed.
 */
function send(name: string, properties?: Props, attempt = 0): void {
  if (typeof window === "undefined") return;
  if (!window.va && attempt < READY_RETRY_LIMIT) {
    setTimeout(() => send(name, properties, attempt + 1), READY_RETRY_MS);
    return;
  }
  try {
    track(name, properties);
  } catch {
    // best-effort only — analytics must never break the app
  }
}

/** The landing hero's primary CTA ("Start reading — it's free") was clicked. */
export function trackCtaStartReadingClicked(): void {
  send("cta_start_reading_clicked");
}

/** The full-screen onboarding quiz became visible (first show, or a restart from Settings). */
export function trackOnboardingShown(): void {
  send("onboarding_shown");
}

/** The visitor dismissed onboarding via "Skip" before reaching the summary step. */
export function trackOnboardingSkipped(atStep: string): void {
  send("onboarding_skipped", { atStep });
}

/** The visitor answered every step and finished from the summary screen. */
export function trackOnboardingCompleted(): void {
  send("onboarding_completed");
}

/** The very first lesson this device has ever opened — the reading-log was empty before this. */
export function trackFirstLessonOpened(slug: string): void {
  send("first_lesson_opened", { slug });
}
