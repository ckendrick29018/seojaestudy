"use client";

import { useAuth } from "@/components/providers/AuthProvider";
import { useT } from "@/components/providers/LanguageProvider";

export function SignOutButton() {
  const { signOut } = useAuth();
  const t = useT();

  return (
    <button
      onClick={() => signOut().then(() => window.location.assign("/"))}
      className="rounded-full px-3 py-1.5 text-xs font-medium text-charcoal/60 transition hover:bg-sage/30"
    >
      {t("signOut")}
    </button>
  );
}
