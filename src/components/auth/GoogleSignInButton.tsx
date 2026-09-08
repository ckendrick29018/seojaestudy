"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useT } from "@/components/providers/LanguageProvider";

function GoogleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M19.6 10.23c0-.68-.06-1.36-.17-2H10v3.79h5.4a4.63 4.63 0 0 1-2 3.04v2.5h3.24c1.9-1.75 2.96-4.34 2.96-7.33z" />
      <path fill="#34A853" d="M10 20c2.7 0 4.96-.89 6.62-2.42l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.75-5.59-4.11H1.06v2.58A10 10 0 0 0 10 20z" />
      <path fill="#FBBC05" d="M4.41 11.93A5.99 5.99 0 0 1 4.1 10c0-.67.12-1.32.31-1.93V5.49H1.06A10 10 0 0 0 0 10c0 1.61.39 3.14 1.06 4.51l3.35-2.58z" />
      <path fill="#EA4335" d="M10 3.96c1.47 0 2.79.5 3.82 1.49l2.87-2.87C14.95.99 12.7 0 10 0 6.09 0 2.7 2.24 1.06 5.49l3.35 2.58C5.2 5.71 7.4 3.96 10 3.96z" />
    </svg>
  );
}

export function GoogleSignInButton({ next = "/" }: { next?: string }) {
  const t = useT();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}` },
    });
    // On success the browser navigates to Google, so there's no further
    // local state to update — only the error path needs handling here.
    if (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <div className="flex w-full flex-col gap-2">
      <button
        onClick={handleClick}
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-rose-light/60 bg-white px-5 py-2.5 text-sm font-medium text-charcoal shadow-soft transition hover:bg-sage/20 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <GoogleGlyph className="h-4 w-4" />
        {t("continueWithGoogle")}
      </button>
      {error && <p className="text-center text-xs text-rose">{error}</p>}
    </div>
  );
}
