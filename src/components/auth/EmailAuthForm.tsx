"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "@/lib/supabase/client";
import { useLanguage, useT } from "@/components/providers/LanguageProvider";
import { Button } from "@/components/ui/Button";

const ERROR_MESSAGES: Record<string, { en: string; ko: string }> = {
  "Invalid login credentials": {
    en: "That email or password isn't right.",
    ko: "이메일 또는 비밀번호가 올바르지 않아요.",
  },
  "User already registered": {
    en: "That email is already registered — try signing in instead.",
    ko: "이미 가입된 이메일이에요. 로그인을 시도해 주세요.",
  },
  "Email not confirmed": {
    en: "Please confirm your email first — check your inbox.",
    ko: "이메일 인증이 아직 완료되지 않았어요. 받은 편지함을 확인해 주세요.",
  },
};

export function EmailAuthForm({ next = "/" }: { next?: string }) {
  const { lang } = useLanguage();
  const t = useT();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  function describeError(message: string): string {
    return ERROR_MESSAGES[message]?.[lang] ?? message;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const supabase = createClient();

    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(describeError(error.message));
        setLoading(false);
        return;
      }
      window.location.href = next;
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}` },
    });
    if (error) {
      setError(describeError(error.message));
      setLoading(false);
      return;
    }
    if (!data.session) {
      // Email confirmation is required before a session is issued.
      setConfirmationSent(true);
      setLoading(false);
      return;
    }
    window.location.href = next;
  }

  async function handleForgotPassword() {
    if (!email) {
      setError(t("enterEmailFirst"));
      return;
    }
    setLoading(true);
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/library`,
    });
    setLoading(false);
    if (error) {
      setError(describeError(error.message));
      return;
    }
    setResetSent(true);
  }

  if (confirmationSent) {
    return (
      <p className="text-center text-sm text-charcoal/60">
        {lang === "ko" ? `${email}로 확인 이메일을 보냈어요. 이메일의 링크를 눌러 가입을 완료해 주세요.` : `We sent a confirmation email to ${email}. Click the link to finish signing up.`}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-medium text-charcoal/70">
          {t("emailLabel")}
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-rose-light/50 bg-white/70 px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-rose-soft focus:ring-2 focus:ring-rose-light/50"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-xs font-medium text-charcoal/70">
          {t("passwordLabel")}
        </label>
        <input
          id="password"
          type="password"
          autoComplete={mode === "signin" ? "current-password" : "new-password"}
          minLength={6}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-xl border border-rose-light/50 bg-white/70 px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-rose-soft focus:ring-2 focus:ring-rose-light/50"
        />
      </div>

      {mode === "signin" &&
        (resetSent ? (
          <p className="self-end text-xs text-charcoal/50">{t("resetLinkSent")}</p>
        ) : (
          <button type="button" onClick={handleForgotPassword} className="self-end text-xs text-charcoal/50 hover:underline">
            {t("forgotPassword")}
          </button>
        ))}

      {error && <p className="text-sm text-rose">{error}</p>}

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "..." : mode === "signin" ? t("signIn") : t("signUp")}
      </Button>

      <button
        type="button"
        onClick={() => {
          setMode(mode === "signin" ? "signup" : "signin");
          setError(null);
        }}
        className="text-xs text-charcoal/50 hover:underline"
      >
        {mode === "signin" ? t("noAccount") : t("haveAccount")}
      </button>
    </form>
  );
}
