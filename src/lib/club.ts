/**
 * Book club shared types + helpers. Client-safe — no server-only imports, so
 * both the /club UI and the server actions can pull from here.
 *
 * The rule the whole feature turns on: while a club owner has an active
 * subscription, every chapter they share into the club is readable free by
 * its members. Creating a club and sharing chapters are NOT gated on a
 * subscription — only the free-unlock is (enforced in the SQL function
 * public.user_has_club_unlock and read back here as `ownerSubscribed`).
 */

/** Members besides the owner. Owner + MAX_CLUB_MEMBERS people total. */
export const MAX_CLUB_MEMBERS = 10;

/** Failure codes returned by the /club server actions. */
export type ClubActionError =
  | "not-available" // Supabase service role not configured
  | "sign-in-required"
  | "already-in-club"
  | "not-in-club"
  | "owner-only"
  | "owner-cannot-leave"
  | "invalid-code"
  | "club-full"
  | "failed";

export interface ClubMember {
  userId: string;
  role: "owner" | "member";
  /** Full name from the auth provider, else the email local-part, else null. */
  displayName: string | null;
  /** Only populated for the club owner's view of the roster. */
  email: string | null;
  joinedAt: number;
}

export interface ClubSummary {
  id: string;
  name: string;
  /** Token for the invite link; see clubJoinPath. */
  joinCode: string;
  ownerId: string;
  /** Whether the owner currently has an active subscription. */
  ownerSubscribed: boolean;
  createdAt: number;
}

export interface MyClub {
  club: ClubSummary;
  /** The current viewer's role in this club. */
  role: "owner" | "member";
  members: ClubMember[];
  /** Lesson slugs shared into the club. */
  sharedSlugs: string[];
}

/** Path for an invite link, optionally deep-linking a chapter to open after joining. */
export function clubJoinPath(joinCode: string, chapterSlug?: string): string {
  const query = chapterSlug ? `?chapter=${encodeURIComponent(chapterSlug)}` : "";
  return `/club/join/${joinCode}${query}`;
}

/** Absolute invite link. Prefers the real page origin (so it works in dev too). */
export function clubJoinUrl(joinCode: string, chapterSlug: string | undefined, fallbackOrigin: string): string {
  const origin =
    typeof window !== "undefined" && window.location?.origin ? window.location.origin : fallbackOrigin;
  return `${origin}${clubJoinPath(joinCode, chapterSlug)}`;
}
