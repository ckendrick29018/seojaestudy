import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * Supabase redirects here after Google OAuth, an email confirmation link,
 * or a password-reset link, with a `code` to exchange for a session.
 *
 * Any failure path lands on /login?error=auth (surfaced there as a retry
 * prompt) and carries `next` through so a second attempt still deep-links
 * to where the user was headed. The real cause is logged server-side so a
 * recurring failure is diagnosable from the Vercel function logs.
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/library";
  const providerError = searchParams.get("error");

  const bounce = () =>
    NextResponse.redirect(`${origin}/login?error=auth&next=${encodeURIComponent(next)}`);

  if (providerError) {
    // Supabase/Google handed the flow back with an error (user dismissed the
    // consent screen, provider misconfig, etc.) rather than a code.
    console.error("auth/callback: provider returned an error", {
      error: providerError,
      description: searchParams.get("error_description"),
    });
    return bounce();
  }

  if (!code) {
    console.error("auth/callback: reached with no code and no error param");
    return bounce();
  }

  const supabase = createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    console.error("auth/callback: exchangeCodeForSession failed", {
      message: error.message,
      status: error.status,
      next,
    });
    return bounce();
  }

  return NextResponse.redirect(`${origin}${next}`);
}
