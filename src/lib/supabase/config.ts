/**
 * Whether Supabase auth is configured for this deployment (env vars present).
 * Every auth-dependent code path checks this first and falls back to a
 * guest/local-only or signed-out-equivalent behavior when it's false — see
 * ProgressProvider's guest path, the lesson paywall, club/actions.ts, etc.
 *
 * Centralized here so the exact set of required vars can't drift between
 * call sites — this used to be `Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL
 * && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)` copy-pasted verbatim into
 * six different files. Safe to call from the client, a Server Component, a
 * Server Action, or the Edge middleware: `NEXT_PUBLIC_*` vars are inlined at
 * build time everywhere, not just in the browser bundle.
 */
export function isAuthConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}
