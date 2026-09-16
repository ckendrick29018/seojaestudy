import { Capacitor } from "@capacitor/core";

/**
 * True when the page is running inside the native Android app (the
 * Capacitor wrapper), false on the regular website. Safe to call during
 * SSR — Capacitor's platform check falls back to a plain `global` object on
 * the server and reports "web" there, so this returns false rather than
 * throwing.
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
export function isRunningInNativeApp(): boolean {
  return Capacitor.isNativePlatform();
}
