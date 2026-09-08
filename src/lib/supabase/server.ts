import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "./database.types";

/**
 * Supabase client for use in Server Components, Server Actions, and Route
 * Handlers. Create a fresh one per request (it reads the request's cookies).
 *
 * Note: this targets Next.js 14, where `cookies()` is synchronous. If you
 * upgrade to Next.js 15+, `cookies()` becomes async and this (and every
 * caller) needs `await cookies()`.
 */
export function createClient() {
  const cookieStore = cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
          } catch {
            // Called from a Server Component render — safe to ignore because
            // src/middleware.ts refreshes the session on every request.
          }
        },
      },
    }
  );
}
