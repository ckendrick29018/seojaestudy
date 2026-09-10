"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useAuth } from "./AuthProvider";
import type { ClubActionError, MyClub } from "@/lib/club";
import {
  createClub as createClubAction,
  deleteClub as deleteClubAction,
  getMyClub,
  leaveClub as leaveClubAction,
  removeMember as removeMemberAction,
  renameClub as renameClubAction,
  shareChapter as shareChapterAction,
  unshareChapter as unshareChapterAction,
} from "@/app/club/actions";

interface ClubContextValue {
  /** False until the first load for the current auth state resolves. */
  hydrated: boolean;
  club: MyClub | null;
  isOwner: boolean;
  memberCount: number;
  isChapterShared: (slug: string) => boolean;
  refresh: () => Promise<void>;
  createClub: (name: string) => Promise<ClubActionError | null>;
  renameClub: (name: string) => Promise<ClubActionError | null>;
  deleteClub: () => Promise<ClubActionError | null>;
  shareChapter: (slug: string) => Promise<ClubActionError | null>;
  unshareChapter: (slug: string) => Promise<ClubActionError | null>;
  removeMember: (userId: string) => Promise<ClubActionError | null>;
  leaveClub: () => Promise<ClubActionError | null>;
}

const ClubContext = createContext<ClubContextValue | null>(null);

export function ClubProvider({ children }: { children: ReactNode }) {
  const { user, authAvailable, loading: authLoading } = useAuth();
  const [club, setClub] = useState<MyClub | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const loadedForUser = useRef<string | null>(null);

  useEffect(() => {
    if (!authAvailable || authLoading) return;

    if (!user) {
      loadedForUser.current = null;
      setClub(null);
      setHydrated(true);
      return;
    }
    if (loadedForUser.current === user.id) return;
    loadedForUser.current = user.id;
    setHydrated(false);
    getMyClub()
      .then((res) => {
        if (res.ok) setClub(res.data);
        else setClub(null);
      })
      .catch((err) => {
        console.error("club: initial load failed", err);
        setClub(null);
      })
      .finally(() => setHydrated(true));
  }, [user, authAvailable, authLoading]);

  const refresh = useCallback(async () => {
    if (!user) return;
    const res = await getMyClub();
    if (res.ok) setClub(res.data);
  }, [user]);

  const run = useCallback(
    async (
      fn: () => Promise<{ ok: true; data: MyClub } | { ok: false; error: ClubActionError }>,
    ): Promise<ClubActionError | null> => {
      try {
        const res = await fn();
        if (res.ok) {
          setClub(res.data);
          return null;
        }
        return res.error;
      } catch (err) {
        console.error("club: action failed", err);
        return "failed";
      }
    },
    [],
  );

  const createClub = useCallback((name: string) => run(() => createClubAction(name)), [run]);
  const renameClub = useCallback((name: string) => run(() => renameClubAction(name)), [run]);
  const shareChapter = useCallback((slug: string) => run(() => shareChapterAction(slug)), [run]);
  const unshareChapter = useCallback((slug: string) => run(() => unshareChapterAction(slug)), [run]);
  const removeMember = useCallback((userId: string) => run(() => removeMemberAction(userId)), [run]);

  const deleteClub = useCallback(async (): Promise<ClubActionError | null> => {
    const res = await deleteClubAction();
    if (res.ok) {
      setClub(null);
      return null;
    }
    return res.error;
  }, []);

  const leaveClub = useCallback(async (): Promise<ClubActionError | null> => {
    const res = await leaveClubAction();
    if (res.ok) {
      setClub(null);
      return null;
    }
    return res.error;
  }, []);

  const isChapterShared = useCallback(
    (slug: string) => (club?.sharedSlugs ?? []).includes(slug),
    [club],
  );

  const value: ClubContextValue = {
    hydrated,
    club,
    isOwner: club?.role === "owner",
    memberCount: club?.members.filter((m) => m.role === "member").length ?? 0,
    isChapterShared,
    refresh,
    createClub,
    renameClub,
    deleteClub,
    shareChapter,
    unshareChapter,
    removeMember,
    leaveClub,
  };

  return <ClubContext.Provider value={value}>{children}</ClubContext.Provider>;
}

export function useClub(): ClubContextValue {
  const ctx = useContext(ClubContext);
  if (!ctx) throw new Error("useClub must be used within a ClubProvider");
  return ctx;
}
