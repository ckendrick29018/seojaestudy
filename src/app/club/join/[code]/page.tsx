"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import { useClub } from "@/components/providers/ClubProvider";
import { useT } from "@/components/providers/LanguageProvider";
import { clubJoinPath, type ClubActionError } from "@/lib/club";
import { joinClub } from "@/app/club/actions";
import { Button } from "@/components/ui/Button";

type Phase = "working" | "joined" | "error";

function JoinFlow({ code }: { code: string }) {
  const t = useT();
  const router = useRouter();
  const searchParams = useSearchParams();
  const chapter = searchParams.get("chapter") || undefined;
  const { user, authAvailable, loading } = useAuth();
  const { refresh } = useClub();

  const [phase, setPhase] = useState<Phase>("working");
  const [clubName, setClubName] = useState("");
  const [errorCode, setErrorCode] = useState<ClubActionError | null>(null);
  const attempted = useRef(false);

  const nextPath = chapter ? `/lesson/${chapter}` : "/club";

  // Not signed in → send to login, then straight back here.
  useEffect(() => {
    if (!authAvailable || loading || user) return;
    router.replace(`/login?next=${encodeURIComponent(clubJoinPath(code, chapter))}`);
  }, [authAvailable, loading, user, router, code, chapter]);

  // Signed in → attempt the join exactly once.
  useEffect(() => {
    if (!user || attempted.current) return;
    attempted.current = true;
    joinClub(code)
      .then((res) => {
        if (res.ok) {
          setClubName(res.data.name);
          setPhase("joined");
          refresh();
          window.setTimeout(() => router.replace(nextPath), 1200);
        } else {
          setErrorCode(res.error);
          setPhase("error");
        }
      })
      .catch(() => {
        setErrorCode("failed");
        setPhase("error");
      });
  }, [user, code, router, nextPath, refresh]);

  const errorMessage = (c: ClubActionError | null): string => {
    switch (c) {
      case "invalid-code":
        return t("clubJoinInvalid");
      case "club-full":
        return t("clubJoinFull");
      case "already-in-club":
        return t("clubJoinAlready");
      case "not-available":
        return t("clubUnavailable");
      default:
        return t("clubGenericError");
    }
  };

  if (authAvailable && !loading && !user) {
    return <p className="text-sm text-charcoal/60">{t("clubSignInCta")}…</p>;
  }

  if (!authAvailable) {
    return (
      <>
        <p className="mb-4 text-sm text-charcoal/60">{t("clubNeedsAccount")}</p>
        <Link href="/library" className="text-sm text-rose underline-offset-4 hover:underline">
          {t("backToLibrary")}
        </Link>
      </>
    );
  }

  if (phase === "working") {
    return <p className="text-sm text-charcoal/60">{t("clubJoinLoading")}</p>;
  }

  if (phase === "joined") {
    return (
      <>
        <p className="mb-4 text-sm text-charcoal/70">{t("clubJoined").replace("{name}", clubName)}</p>
        <Button onClick={() => router.replace(nextPath)}>{t("clubJoinContinue")}</Button>
      </>
    );
  }

  return (
    <>
      <p className="mb-4 text-sm text-charcoal/70">{errorMessage(errorCode)}</p>
      <div className="flex gap-2">
        {errorCode === "already-in-club" && (
          <Link href="/club">
            <Button variant="outline">{t("myBookClub")}</Button>
          </Link>
        )}
        <Link href="/library">
          <Button variant="ghost">{t("backToLibrary")}</Button>
        </Link>
      </div>
    </>
  );
}

export default function ClubJoinPage({ params }: { params: { code: string } }) {
  const t = useT();
  return (
    <div className="px-5 py-12">
      <h1 className="mb-6 font-serif text-2xl font-semibold text-charcoal">{t("myBookClub")}</h1>
      <Suspense fallback={<p className="text-sm text-charcoal/50">{t("clubJoinLoading")}</p>}>
        <JoinFlow code={params.code} />
      </Suspense>
    </div>
  );
}
