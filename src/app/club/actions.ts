"use server";

import { revalidatePath } from "next/cache";
import type { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { isActiveSubscription } from "@/lib/subscription";
import type { Database } from "@/lib/supabase/database.types";
import type { ClubActionError, ClubMember, MyClub } from "@/lib/club";

/**
 * Book club server actions. Authorization is done here in TypeScript (mirroring
 * src/app/subscribe/actions.ts): `createClient()` answers "who is calling",
 * then the service-role `createAdminClient()` does the actual table I/O. The
 * club tables have no RLS write policies, so this is the only way in.
 *
 * Creating a club and sharing chapters are intentionally NOT gated on a
 * subscription — they work during Beta. The subscription only decides whether
 * the free-unlock fires (public.user_has_club_unlock).
 */

type Result<T> = { ok: true; data: T } | { ok: false; error: ClubActionError };

type Admin = SupabaseClient<Database>;

function getAdmin(): Admin | null {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) return null;
  return createAdminClient();
}

async function currentUserId(): Promise<string | null> {
  const authConfigured = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
  if (!authConfigured) return null;
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user?.id ?? null;
}

async function isSubscribed(db: Admin, userId: string): Promise<boolean> {
  const { data } = await db
    .from("profiles")
    .select("is_subscribed, subscription_current_period_end")
    .eq("id", userId)
    .maybeSingle();
  return isActiveSubscription(data);
}

async function membershipFor(db: Admin, userId: string) {
  const { data } = await db
    .from("book_club_members")
    .select("club_id, role")
    .eq("user_id", userId)
    .maybeSingle();
  return data;
}

/** Assemble the full club view (roster + shared chapters) for one member. */
async function assembleMyClub(db: Admin, userId: string): Promise<MyClub | null> {
  const membership = await membershipFor(db, userId);
  if (!membership) return null;

  const { data: club } = await db
    .from("book_clubs")
    .select("id, name, join_code, owner_id, created_at")
    .eq("id", membership.club_id)
    .maybeSingle();
  if (!club) return null;

  const [{ data: memberRows }, { data: sharedRows }] = await Promise.all([
    db.from("book_club_members").select("user_id, role, joined_at").eq("club_id", club.id),
    db.from("shared_chapters").select("lesson_slug, shared_at").eq("club_id", club.id).order("shared_at"),
  ]);

  const viewerIsOwner = membership.role === "owner";
  const ids = (memberRows ?? []).map((m) => m.user_id);
  const userRecords = await Promise.all(
    ids.map((id) =>
      db.auth.admin
        .getUserById(id)
        .then((r) => r.data.user)
        .catch(() => null),
    ),
  );
  const byId = new Map(userRecords.filter((u): u is NonNullable<typeof u> => Boolean(u)).map((u) => [u.id, u]));

  const members: ClubMember[] = (memberRows ?? [])
    .map((m) => {
      const u = byId.get(m.user_id);
      const meta = (u?.user_metadata ?? {}) as Record<string, unknown>;
      const fullName =
        (typeof meta.full_name === "string" && meta.full_name.trim()) ||
        (typeof meta.name === "string" && meta.name.trim()) ||
        "";
      const email = u?.email ?? null;
      return {
        userId: m.user_id,
        role: m.role,
        displayName: fullName || (email ? email.split("@")[0] : null),
        email: viewerIsOwner ? email : null,
        joinedAt: new Date(m.joined_at).getTime(),
      };
    })
    .sort((a, b) => {
      if (a.role !== b.role) return a.role === "owner" ? -1 : 1;
      return a.joinedAt - b.joinedAt;
    });

  return {
    club: {
      id: club.id,
      name: club.name,
      joinCode: club.join_code,
      ownerId: club.owner_id,
      ownerSubscribed: await isSubscribed(db, club.owner_id),
      createdAt: new Date(club.created_at).getTime(),
    },
    role: membership.role,
    members,
    sharedSlugs: (sharedRows ?? []).map((s) => s.lesson_slug),
  };
}

export async function getMyClub(): Promise<Result<MyClub | null>> {
  const userId = await currentUserId();
  if (!userId) return { ok: false, error: "sign-in-required" };
  const db = getAdmin();
  if (!db) return { ok: false, error: "not-available" };
  try {
    return { ok: true, data: await assembleMyClub(db, userId) };
  } catch (err) {
    console.error("club: getMyClub failed", err);
    return { ok: false, error: "failed" };
  }
}

export async function createClub(name: string): Promise<Result<MyClub>> {
  const userId = await currentUserId();
  if (!userId) return { ok: false, error: "sign-in-required" };
  const db = getAdmin();
  if (!db) return { ok: false, error: "not-available" };

  if (await membershipFor(db, userId)) return { ok: false, error: "already-in-club" };

  const trimmed = name.trim().slice(0, 60) || "My Book Club";
  try {
    const { data: club, error } = await db
      .from("book_clubs")
      .insert({ owner_id: userId, name: trimmed })
      .select("id")
      .single();
    if (error || !club) throw error ?? new Error("no club row");

    const { error: memberErr } = await db
      .from("book_club_members")
      .insert({ club_id: club.id, user_id: userId, role: "owner" });
    if (memberErr) {
      await db.from("book_clubs").delete().eq("id", club.id);
      throw memberErr;
    }

    const assembled = await assembleMyClub(db, userId);
    if (!assembled) throw new Error("assemble failed after create");
    revalidatePath("/club");
    return { ok: true, data: assembled };
  } catch (err) {
    console.error("club: createClub failed", err);
    return { ok: false, error: "failed" };
  }
}

export async function joinClub(joinCode: string): Promise<Result<{ clubId: string; name: string }>> {
  const userId = await currentUserId();
  if (!userId) return { ok: false, error: "sign-in-required" };
  const db = getAdmin();
  if (!db) return { ok: false, error: "not-available" };

  const { data: club } = await db
    .from("book_clubs")
    .select("id, name")
    .eq("join_code", joinCode)
    .maybeSingle();
  if (!club) return { ok: false, error: "invalid-code" };

  const existing = await membershipFor(db, userId);
  if (existing) {
    if (existing.club_id === club.id) return { ok: true, data: { clubId: club.id, name: club.name } };
    return { ok: false, error: "already-in-club" };
  }

  const { error } = await db
    .from("book_club_members")
    .insert({ club_id: club.id, user_id: userId, role: "member" });
  if (error) {
    if (error.code === "23514" || /full/i.test(error.message)) return { ok: false, error: "club-full" };
    console.error("club: joinClub failed", error);
    return { ok: false, error: "failed" };
  }

  revalidatePath("/club");
  return { ok: true, data: { clubId: club.id, name: club.name } };
}

async function requireOwner(db: Admin, userId: string): Promise<string | ClubActionError> {
  const membership = await membershipFor(db, userId);
  if (!membership) return "not-in-club";
  if (membership.role !== "owner") return "owner-only";
  return membership.club_id;
}

export async function shareChapter(lessonSlug: string): Promise<Result<MyClub>> {
  const userId = await currentUserId();
  if (!userId) return { ok: false, error: "sign-in-required" };
  const db = getAdmin();
  if (!db) return { ok: false, error: "not-available" };

  const clubId = await requireOwner(db, userId);
  if (typeof clubId !== "string") return { ok: false, error: clubId };

  try {
    const { error } = await db
      .from("shared_chapters")
      .upsert(
        { club_id: clubId, lesson_slug: lessonSlug, shared_by: userId },
        { onConflict: "club_id,lesson_slug" },
      );
    if (error) throw error;

    const assembled = await assembleMyClub(db, userId);
    if (!assembled) throw new Error("assemble failed after share");
    revalidatePath("/club");
    revalidatePath(`/lesson/${lessonSlug}`);
    return { ok: true, data: assembled };
  } catch (err) {
    console.error("club: shareChapter failed", err);
    return { ok: false, error: "failed" };
  }
}

export async function unshareChapter(lessonSlug: string): Promise<Result<MyClub>> {
  const userId = await currentUserId();
  if (!userId) return { ok: false, error: "sign-in-required" };
  const db = getAdmin();
  if (!db) return { ok: false, error: "not-available" };

  const clubId = await requireOwner(db, userId);
  if (typeof clubId !== "string") return { ok: false, error: clubId };

  try {
    const { error } = await db
      .from("shared_chapters")
      .delete()
      .eq("club_id", clubId)
      .eq("lesson_slug", lessonSlug);
    if (error) throw error;

    const assembled = await assembleMyClub(db, userId);
    if (!assembled) throw new Error("assemble failed after unshare");
    revalidatePath("/club");
    revalidatePath(`/lesson/${lessonSlug}`);
    return { ok: true, data: assembled };
  } catch (err) {
    console.error("club: unshareChapter failed", err);
    return { ok: false, error: "failed" };
  }
}

export async function renameClub(name: string): Promise<Result<MyClub>> {
  const userId = await currentUserId();
  if (!userId) return { ok: false, error: "sign-in-required" };
  const db = getAdmin();
  if (!db) return { ok: false, error: "not-available" };

  const clubId = await requireOwner(db, userId);
  if (typeof clubId !== "string") return { ok: false, error: clubId };

  const trimmed = name.trim().slice(0, 60);
  if (!trimmed) return { ok: false, error: "failed" };

  try {
    const { error } = await db.from("book_clubs").update({ name: trimmed }).eq("id", clubId);
    if (error) throw error;
    const assembled = await assembleMyClub(db, userId);
    if (!assembled) throw new Error("assemble failed after rename");
    revalidatePath("/club");
    return { ok: true, data: assembled };
  } catch (err) {
    console.error("club: renameClub failed", err);
    return { ok: false, error: "failed" };
  }
}

export async function removeMember(memberUserId: string): Promise<Result<MyClub>> {
  const userId = await currentUserId();
  if (!userId) return { ok: false, error: "sign-in-required" };
  const db = getAdmin();
  if (!db) return { ok: false, error: "not-available" };

  const clubId = await requireOwner(db, userId);
  if (typeof clubId !== "string") return { ok: false, error: clubId };
  if (memberUserId === userId) return { ok: false, error: "failed" }; // owner can't remove self

  try {
    const { error } = await db
      .from("book_club_members")
      .delete()
      .eq("club_id", clubId)
      .eq("user_id", memberUserId)
      .eq("role", "member");
    if (error) throw error;
    const assembled = await assembleMyClub(db, userId);
    if (!assembled) throw new Error("assemble failed after removeMember");
    revalidatePath("/club");
    return { ok: true, data: assembled };
  } catch (err) {
    console.error("club: removeMember failed", err);
    return { ok: false, error: "failed" };
  }
}

export async function leaveClub(): Promise<Result<null>> {
  const userId = await currentUserId();
  if (!userId) return { ok: false, error: "sign-in-required" };
  const db = getAdmin();
  if (!db) return { ok: false, error: "not-available" };

  const membership = await membershipFor(db, userId);
  if (!membership) return { ok: false, error: "not-in-club" };
  if (membership.role === "owner") return { ok: false, error: "owner-cannot-leave" };

  try {
    const { error } = await db
      .from("book_club_members")
      .delete()
      .eq("club_id", membership.club_id)
      .eq("user_id", userId);
    if (error) throw error;
    revalidatePath("/club");
    return { ok: true, data: null };
  } catch (err) {
    console.error("club: leaveClub failed", err);
    return { ok: false, error: "failed" };
  }
}

export async function deleteClub(): Promise<Result<null>> {
  const userId = await currentUserId();
  if (!userId) return { ok: false, error: "sign-in-required" };
  const db = getAdmin();
  if (!db) return { ok: false, error: "not-available" };

  const clubId = await requireOwner(db, userId);
  if (typeof clubId !== "string") return { ok: false, error: clubId };

  try {
    // Cascades to book_club_members + shared_chapters.
    const { error } = await db.from("book_clubs").delete().eq("id", clubId).eq("owner_id", userId);
    if (error) throw error;
    revalidatePath("/club");
    return { ok: true, data: null };
  } catch (err) {
    console.error("club: deleteClub failed", err);
    return { ok: false, error: "failed" };
  }
}
