"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import { useClub } from "@/components/providers/ClubProvider";
import { useT } from "@/components/providers/LanguageProvider";
import { lessons } from "@/lib/data/lessons";
import { MAX_CLUB_MEMBERS, clubJoinUrl } from "@/lib/club";
import { SITE_URL } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Toast } from "@/components/ui/Toast";
import { CheckIcon, TrashIcon, UsersIcon } from "@/components/ui/icons";

export default function ClubPage() {
  const t = useT();
  const router = useRouter();
  const { user, authAvailable, loading: authLoading } = useAuth();
  const {
    hydrated,
    club,
    isOwner,
    memberCount,
    createClub,
    renameClub,
    deleteClub,
    unshareChapter,
    removeMember,
    leaveClub,
  } = useClub();

  const [toast, setToast] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [name, setName] = useState("");
  const [editingName, setEditingName] = useState(false);
  const [nameDraft, setNameDraft] = useState("");

  const sharedLessons = useMemo(() => {
    const bySlug = new Map(lessons.map((l) => [l.slug, l]));
    return (club?.sharedSlugs ?? []).map((slug) => ({ slug, lesson: bySlug.get(slug) ?? null }));
  }, [club]);

  const notify = (msg: string) => setToast(msg);

  // Plain JSX composition (not a nested component) so inputs keep focus across renders.
  const frame = (children: ReactNode) => (
    <div className="px-5 py-8">
      <h1 className="mb-1 flex items-center gap-2 font-serif text-2xl font-semibold text-charcoal">
        <UsersIcon className="h-6 w-6 text-rose-soft" aria-hidden />
        {t("myBookClub")}
      </h1>
      <div className="mt-6">{children}</div>
      <Link href="/library" className="mt-10 inline-block text-sm text-rose underline-offset-4 hover:underline">
        {t("backToLibrary")}
      </Link>
      <Toast message={toast} onDone={() => setToast(null)} />
    </div>
  );

  if (!authAvailable) {
    return frame(
      <p className="rounded-xl2 border border-dashed border-rose-light/60 p-6 text-center text-sm text-charcoal/50">
        {t("clubUnavailable")}
      </p>,
    );
  }

  if (authLoading || (user && !hydrated)) {
    return frame(<div className="h-40 animate-pulse rounded-xl2 bg-sage/20" />);
  }

  if (!user) {
    return frame(
      <>
        <p className="mb-4 text-sm text-charcoal/60">{t("clubSignedOutBody")}</p>
        <Link href="/login?next=/club">
          <Button>{t("clubSignInCta")}</Button>
        </Link>
      </>,
    );
  }

  if (!club) {
    return frame(
      <>
        <p className="mb-4 text-sm text-charcoal/60">{t("clubStartBody")}</p>
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
          <Button
            disabled={busy}
            onClick={async () => {
              setBusy(true);
              const err = await createClub(name);
              setBusy(false);
              if (err) notify(t("clubGenericError"));
            }}
          >
            {busy ? "…" : t("clubStart")}
          </Button>
        </div>
      </>,
    );
  }

  const inviteUrl = clubJoinUrl(club.club.joinCode, undefined, SITE_URL);

  const copyInvite = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({ title: club.club.name, url: inviteUrl });
        return;
      }
    } catch {
      /* dismissed — fall through to copy */
    }
    try {
      await navigator.clipboard.writeText(inviteUrl);
      notify(t("clubLinkCopied"));
    } catch {
      notify(inviteUrl);
    }
  };

  return frame(
    <>
      {/* Header */}
      <div className="mb-6 rounded-xl2 border border-rose-light/50 bg-white/60 p-5 shadow-soft">
        {editingName ? (
          <div className="flex flex-col gap-2 sm:max-w-sm">
            <input
              value={nameDraft}
              onChange={(e) => setNameDraft(e.target.value)}
              maxLength={60}
              className="rounded-xl border border-rose-light/50 bg-white/70 px-3.5 py-2.5 text-sm text-charcoal outline-none focus:border-rose-soft focus:ring-2 focus:ring-rose-light/50"
            />
            <div className="flex gap-2">
              <Button
                disabled={busy}
                onClick={async () => {
                  setBusy(true);
                  const err = await renameClub(nameDraft);
                  setBusy(false);
                  if (err) notify(t("clubGenericError"));
                  else setEditingName(false);
                }}
              >
                {t("clubSave")}
              </Button>
              <Button variant="ghost" onClick={() => setEditingName(false)} disabled={busy}>
                {t("clubCancel")}
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-serif text-xl font-semibold text-charcoal">{club.club.name}</p>
              <p className="mt-0.5 text-sm text-charcoal/50">
                {t("clubMembersCount")
                  .replace("{count}", String(memberCount))
                  .replace("{max}", String(MAX_CLUB_MEMBERS))}
              </p>
            </div>
            {isOwner && (
              <button
                onClick={() => {
                  setNameDraft(club.club.name);
                  setEditingName(true);
                }}
                className="shrink-0 rounded-full px-2.5 py-1 text-xs text-rose transition hover:bg-rose-light/30"
              >
                {t("clubRename")}
              </button>
            )}
          </div>
        )}
      </div>

      {/* Invite link — owner only */}
      {isOwner && (
        <section className="mb-6">
          <SectionHeading title={t("clubInviteTitle")} />
          <div className="flex flex-col gap-2 rounded-xl2 border border-rose-light/50 bg-white/60 p-4">
            <code className="block truncate rounded-lg bg-cream/70 px-3 py-2 text-xs text-charcoal/70">{inviteUrl}</code>
            <div>
              <Button onClick={copyInvite}>{t("clubCopyLink")}</Button>
            </div>
            <p className="text-xs text-charcoal/45">{t("clubInviteHint")}</p>
          </div>
        </section>
      )}

      {/* Members */}
      <section className="mb-6">
        <SectionHeading title={t("clubMembersTitle")} />
        <ul className="space-y-2">
          {club.members.map((m) => (
            <li
              key={m.userId}
              className="flex items-center justify-between gap-3 rounded-xl2 border border-rose-light/50 bg-white/60 p-3"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-light/40 text-sm font-semibold text-rose">
                  {(m.displayName ?? "?").slice(0, 1).toUpperCase()}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-charcoal">
                    {m.displayName ?? "—"}
                    {m.userId === user.id && (
                      <span className="ml-1.5 text-xs font-normal text-charcoal/40">({t("clubYouBadge")})</span>
                    )}
                  </p>
                  {m.email && <p className="truncate text-xs text-charcoal/40">{m.email}</p>}
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {m.role === "owner" ? (
                  <span className="rounded-full bg-sage/50 px-2 py-0.5 text-[11px] font-medium text-charcoal/60">
                    {t("clubOwnerBadge")}
                  </span>
                ) : (
                  isOwner && (
                    <button
                      onClick={async () => {
                        const err = await removeMember(m.userId);
                        if (err) notify(t("clubGenericError"));
                      }}
                      aria-label={t("clubRemoveMember")}
                      className="rounded-full p-1.5 text-charcoal/35 transition hover:bg-sage/30 hover:text-charcoal/70"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  )
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Shared chapters */}
      <section className="mb-8">
        <SectionHeading title={t("clubSharedChaptersTitle")} />
        {sharedLessons.length === 0 ? (
          <p className="rounded-xl2 border border-dashed border-rose-light/60 p-5 text-center text-sm text-charcoal/50">
            {t("clubNoSharedChapters")}
          </p>
        ) : (
          <ul className="space-y-2">
            {sharedLessons.map(({ slug, lesson }) => (
              <li
                key={slug}
                className="flex items-center justify-between gap-3 rounded-xl2 border border-rose-light/50 bg-white/60 p-3"
              >
                <Link href={`/lesson/${slug}`} className="flex min-w-0 items-center gap-2">
                  <CheckIcon className="h-4 w-4 shrink-0 text-sage-dark" aria-hidden />
                  <span className="truncate text-sm text-charcoal/80">{lesson?.title ?? slug}</span>
                </Link>
                {isOwner && (
                  <button
                    onClick={async () => {
                      const err = await unshareChapter(slug);
                      if (err) notify(t("clubGenericError"));
                    }}
                    className="shrink-0 rounded-full px-2.5 py-1 text-xs text-charcoal/40 transition hover:bg-sage/30"
                  >
                    {t("clubUnshare")}
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Danger zone */}
      <div className="border-t border-rose-light/40 pt-5">
        {isOwner ? (
          <button
            onClick={async () => {
              if (!window.confirm(t("clubDeleteConfirm"))) return;
              const err = await deleteClub();
              if (err) notify(t("clubGenericError"));
            }}
            className="text-sm text-rose/80 underline-offset-4 hover:underline"
          >
            {t("clubDelete")}
          </button>
        ) : (
          <button
            onClick={async () => {
              if (!window.confirm(t("clubLeaveConfirm"))) return;
              const err = await leaveClub();
              if (err) notify(t("clubGenericError"));
              else router.push("/library");
            }}
            className="text-sm text-rose/80 underline-offset-4 hover:underline"
          >
            {t("clubLeave")}
          </button>
        )}
      </div>
    </>,
  );
}
