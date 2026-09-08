/**
 * Pricing constants + display copy. The authoritative amount lives in the
 * Paddle dashboard (see NEXT_PUBLIC_PADDLE_PRICE_MONTHLY / src/lib/paddle.ts
 * for the actual price id) — this file is display-only, kept in one place
 * so the paywall and subscribe page can't drift from each other.
 *
 * v1 ships a single monthly subscription. An annual pass, gift codes, and
 * promo discounts (Pulja/Suneung.Ai has all three) are deliberately left
 * out for now — add them here + in lib/paddle.ts + lib/paddle-provisioning.ts
 * together if/when you want them.
 */
export const SUBSCRIPTION_PRICE_DISPLAY = "$4.99";

/** How many lessons in the library are readable without a subscription.
 *  Lessons are gated by their own `isFree` flag in lib/data/lessons.ts —
 *  this constant is just the number shown in marketing copy. */
export const FREE_LESSON_LIMIT = 1;
