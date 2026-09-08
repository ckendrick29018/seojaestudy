/**
 * True when the page is running inside the Android Trusted Web Activity
 * (TWA) wrapper — Chrome sets `document.referrer` to `android-app://<package>`
 * for pages opened that way. Browser-only; always false during SSR.
 *
 * Why this matters: Google Play's payments policy generally requires apps
 * that sell digital content consumed *within* the app to use Google Play's
 * own billing system, not a third-party processor like Paddle. To avoid
 * that conflict, the Android build of this app doesn't offer the Paddle
 * checkout at all — see components/billing/SubscribeView.tsx — instead
 * pointing people to subscribe from the website. This is a policy area
 * worth double-checking against Google Play's current terms (and ideally a
 * quick read of the policy yourself, or a developer/lawyer familiar with
 * it) before your Play Store submission — Claude isn't a substitute for
 * that review.
 */
export function isRunningInTwa(): boolean {
  return typeof document !== "undefined" && document.referrer.startsWith("android-app://");
}
