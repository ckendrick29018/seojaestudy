import "server-only";
import { Environment, Paddle } from "@paddle/paddle-node-sdk";

/**
 * Server-side Paddle SDK client. Paddle is the Merchant of Record — it owns
 * the subscription object, recurring billing, tax and refunds. This app
 * only: opens Paddle Checkout from the client
 * (components/billing/PaddleCheckout.tsx), reacts to Paddle webhooks
 * (app/api/webhooks/paddle/route.ts), and calls the API to cancel a
 * subscription / re-fetch a transaction right after checkout
 * (lib/paddle-provisioning.ts, app/subscribe/actions.ts).
 *
 * NEXT_PUBLIC_PADDLE_ENV switches the SDK + the price id between the
 * sandbox and live Paddle accounts — they're entirely separate (separate
 * keys, catalog, dashboards).
 */
export const PADDLE_ENV: Environment =
  process.env.NEXT_PUBLIC_PADDLE_ENV === "production" ? Environment.production : Environment.sandbox;

let cached: Paddle | null = null;

export function getPaddle(): Paddle {
  if (!cached) {
    const key = process.env.PADDLE_API_KEY;
    if (!key) throw new Error("PADDLE_API_KEY is not set");
    cached = new Paddle(key, { environment: PADDLE_ENV });
  }
  return cached;
}

/** Paddle price id (`pri_...`) for the monthly subscription, from the
 *  dashboard catalog. Differs between sandbox and live, so it comes from
 *  env, not code. */
export const PADDLE_PRICE_MONTHLY = process.env.NEXT_PUBLIC_PADDLE_PRICE_MONTHLY ?? "";
