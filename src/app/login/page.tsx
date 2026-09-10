"use client";

import { Suspense, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { GoogleSignInButton } from "@/components/auth/GoogleSignInButton";
import { EmailAuthForm } from "@/components/auth/EmailAuthForm";
import { useT } from "@/components/providers/LanguageProvider";
import { useAuth } from "@/components/providers/AuthProvider";

function LoginContent() {
  const t = useT();
  const { user, authAvailable } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/library";
  const hadError = searchParams.get("error") === "auth";

  useEffect(() => {
    if (user) router.replace(next);
  }, [user, router, next]);

  return (
    <div className="flex flex-col items-center px-6 py-10">
      <div className="mb-6 text-4xl">📖</div>
      <h1 className="mb-1 text-center font-serif text-2xl font-semibold text-charcoal">{t("signInTitle")}</h1>
      <p className="mb-8 max-w-xs text-center text-sm text-charcoal/60">{t("signInSubtitle")}</p>

      {hadError && authAvailable && (
        <p className="mb-4 w-full max-w-sm rounded-xl2 border border-rose/30 bg-rose-light/20 px-4 py-3 text-center text-sm text-rose">
          {t("signInError")}
        </p>
      )}

      {!authAvailable ? (
        <p className="max-w-sm rounded-xl2 border border-dashed border-rose-light/60 p-4 text-center text-sm text-charcoal/50">
          {t("authNotConfigured")}
        </p>
      ) : (
        <div className="w-full max-w-sm space-y-4">
          <GoogleSignInButton next={next} />
          <div className="flex items-center gap-3 text-xs text-charcoal/40">
            <span className="h-px flex-1 bg-rose-light/50" />
            {t("orContinueWithEmail")}
            <span className="h-px flex-1 bg-rose-light/50" />
          </div>
          <EmailAuthForm next={next} />
        </div>
      )}

      <Link href="/library" className="mt-8 text-sm text-rose underline-offset-4 hover:underline">
        {t("backToLibrary")}
      </Link>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginContent />
    </Suspense>
  );
}
