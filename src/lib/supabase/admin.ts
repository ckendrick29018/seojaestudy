import "server-only";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

/**
 * Service-role client that bypasses row-level security. Only call this from
 * server code that has already verified the write is legitimate (e.g. a
 * signature-checked Paddle webhook) — never from a path that writes
 * user-supplied values directly.
 */
export function createAdminClient() {
  return createSupabaseClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}
