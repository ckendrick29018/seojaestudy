"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import type { Lesson } from "@/lib/types";
import { useT } from "@/components/providers/LanguageProvider";
import { useAuth } from "@/components/providers/AuthProvider";
import { useClub } from "@/components/providers/ClubProvider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Toast } from "@/components/ui/Toast";
import { CheckIcon, UsersIcon } from "@/components/ui/icons";
import { MAX_CLUB_MEMBERS, clubJoinUrl } from "@/lib/club";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { SHOW_AUTH_PROMPTS } from "@/lib/beta";

/**
 * Bottom-of-lesson card: share this chapter into your book club so its members
 * can open it (free, while your membership is active) and discuss it. Only
 * renders inside <LessonView>, i.e. when the chapter is already readable.
 */
export function ShareWithClub({ lesson }: { lesson: Lesson }) {
  const t = useT();
  const { user, authAvailable } = useAuth();
  const { hydrated, club, isOwner, memberCount, isChapterShared, createClub, shareChapter, unshareChapter } =
    useClub();

  const [toast, setToast] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState("");

  // Feature needs accounts — stay quiet where auth isn't configured.
  if (!authAvailable) return null;
  // During closed testing, don't surface a sign-in nudge to signed-out readers.
  if (!user && !SHOW_AUTH_PROMPTS) return null;

  const shell = (body: ReactNode) => (
    <section className="border-t border-rose-light/40 px-5 py-8">
      <SectionHeading title={t("clubShareTitle")} />
      <p className="mb-4 flex items-start gap-2 text-sm text-charcoal/60">
        <UsersIcon className="mt-0.5 h-4 w-4 shrink-0 text-rose-soft" aria-hidden />
        {t("clubShareBody")}
      </p>
      {body}
      <Toast message={toast} onDone={() => setToast(null)} />
    </section>
  );

  if (!user) {
    return shell(
      <Link href={`/login?next=${encodeURIComponent(`/lesson/${lesson.slug}`)}`}>
        <Button variant="outline">{t("clubSignInToShare")}</Button>
      </Link>,
    );
  }

  if (!hydrated) {
    return shell(<div className="h-10 w-40 animate-pulse rounded-full bg-sage/25" />);
  }

  async function shareLink() {
    const code = club?.club.joinCode;
    if (!code) return;
    const url = clubJoinUrl(code, lesson.slug, SITE_URL);
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({
          title: `${lesson.title} · ${SITE_NAME}`,
          text: t("clubShareInviteText"),
          url,
        });
        return;
      }
    } catch {
      // user dismissed the share sheet — fall through to copy
    }
    try {
      await navigator.clipboard.writeText(url);
      setToast(t("clubLinkCopied"));
    } catch {
      setToast(url);
    }
  }

  if (!club) {
    return shell(
      creating ? (
        <div className="flex flex-col gap-3 sm:max-w-sm">
          <label htmlFor="club-name" className="text-xs font-medium text-charcoal/70">
            {t("clubNameLabel")}
          </label>
          <input
            id="club-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("clubNamePlaceholder")}
            maxLength={60}
            className="rounded-xl border border-rose-light/50 bg-white/70 px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-rose-soft focus:ring-2 focus:ring-rose-light/50"
          />
          <div className="flex gap-2">
            <Button
              disabled={busy}
              onClick={async () => {
                setBusy(true);
                const err = await createClub(name);
                setBusy(false);
                if (err) {
                  setToast(t("clubGenericError"));
                  return;
                }
                setCreating(false);
                setName("");
                // Add this chapter to the new club right away; the owner can
                // then tap "Copy link" from the shared state that renders next.
                await shareChapter(lesson.slug);
              }}
            >
              {busy ? "…" : t("clubCreate")}
            </Button>
            <Button variant="ghost" onClick={() => setCreating(false)} disabled={busy}>
              {t("clubCancel")}
            </Button>
          </div>
        </div>
      ) : (
        <>
          <p className="mb-3 text-sm text-charcoal/55">{t("clubStartBody")}</p>
          <Button onClick={() => setCreating(true)}>{t("clubStart")}</Button>
        </>
      ),
    );
  }

  const shared = isChapterShared(lesson.slug);
  const clubName = club.club.name;

  if (!isOwner) {
    return shell(
      <div className="text-sm text-charcoal/60">
        {shared ? <p className="mb-2">{t("clubMemberChapterNote")}</p> : <p className="mb-2">{t("clubOwnerOnlyShare")}</p>}
        <Link href="/club" className="text-rose underline-offset-4 hover:underline">
          {t("clubOpen").replace("{name}", clubName)}
        </Link>
      </div>,
    );
  }

  const freeNote = club.club.ownerSubscribed
    ? t("clubMembersReadFree")
    : t("clubMembersReadFreeWhenSubscribed");

  return shell(
    <div className="space-y-3">
      {shared ? (
        <p className="flex items-center gap-1.5 text-sm font-medium text-sage-dark">
          <CheckIcon className="h-4 w-4" aria-hidden />
          {t("clubShareStatusShared").replace("{name}", clubName)}
          <span className="font-normal text-charcoal/45">
            · {memberCount}/{MAX_CLUB_MEMBERS}
          </span>
        </p>
      ) : (
        <p className="text-sm text-charcoal/55">{freeNote}</p>
      )}

      <div className="flex flex-wrap gap-2">
        {shared ? (
          <>
            <Button onClick={shareLink}>{t("clubCopyLink")}</Button>
            <Button
              variant="ghost"
              disabled={busy}
              onClick={async () => {
                setBusy(true);
                const err = await unshareChapter(lesson.slug);
                setBusy(false);
                if (err) setToast(t("clubGenericError"));
              }}
            >
              {t("clubUnshare")}
            </Button>
          </>
        ) : (
          <Button
            disabled={busy}
            onClick={async () => {
              setBusy(true);
              const err = await shareChapter(lesson.slug);
              setBusy(false);
              if (err) {
                setToast(t("clubGenericError"));
                return;
              }
              shareLink();
            }}
          >
            {busy ? "…" : t("clubShareCta")}
          </Button>
        )}
        <Link href="/club" className="inline-flex items-center px-1 text-sm text-rose underline-offset-4 hover:underline">
          {t("clubOpen").replace("{name}", clubName)}
        </Link>
      </div>
    </div>,
  );
}
