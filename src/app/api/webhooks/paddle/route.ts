import { NextResponse } from "next/server";
import { getPaddle } from "@/lib/paddle";
import { provisionSubscription, revokeAccessForAdjustment } from "@/lib/paddle-provisioning";

/**
 * Paddle webhook. Paddle is the source of truth for billing state — this is
 * the primary path that flips subscription access on/off. The
 * /subscribe/thanks page (app/subscribe/actions.ts) re-runs the same
 * provisioning synchronously right after checkout so the UI doesn't wait on
 * the webhook; both are idempotent.
 *
 * Signature is verified with the notification-setting secret via the SDK's
 * `webhooks.unmarshal`, which throws on a bad/expired signature.
 */
export async function POST(request: Request) {
  const signature = request.headers.get("paddle-signature") ?? "";
  const rawBody = await request.text();
  const secret = process.env.PADDLE_WEBHOOK_SECRET;
  if (!secret) {
    console.error("PADDLE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "not configured" }, { status: 500 });
  }

  const paddle = getPaddle();
  let event;
  try {
    event = await paddle.webhooks.unmarshal(rawBody, secret, signature);
  } catch {
    return NextResponse.json({ error: "invalid signature" }, { status: 400 });
  }
  if (!event) return NextResponse.json({ ok: true });

  try {
    switch (event.eventType) {
      case "subscription.activated":
      case "subscription.created":
      case "subscription.updated":
      case "subscription.canceled":
      case "subscription.past_due":
      case "subscription.paused":
      case "subscription.resumed": {
        await provisionSubscription(event.data as never);
        break;
      }

      case "adjustment.created":
      case "adjustment.updated": {
        // Refund / chargeback — Paddle doesn't pull access on its own, so we do.
        await revokeAccessForAdjustment(event.data as never);
        break;
      }

      default:
        // Acknowledged and ignored.
        break;
    }
  } catch (err) {
    console.error(`paddle webhook: failed to handle ${event.eventType}`, err);
    // 500 so Paddle retries rather than dropping the event.
    return NextResponse.json({ error: "processing failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
