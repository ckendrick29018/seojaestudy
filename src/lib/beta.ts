/**
 * Beta-test switches. Flip these back (or delete the file and its imports) when
 * closed testing wraps.
 *
 * `SHOW_AUTH_PROMPTS` gates the "Sign in" entry points in the UI:
 *  - the Account section in the slide-over menu (`MenuDrawer`)
 *  - the "Sign in to share" card at the foot of every lesson (`ShareWithClub`)
 *  - the "Sign in" link in the landing-page footer (`LandingClient`)
 *
 * With it off, testers can use the whole reading app without an account and
 * aren't nudged to sign up. Nothing functional is removed — auth still works by
 * visiting `/login` directly, and the book-club flow still prompts for sign-in
 * where it genuinely needs an account. A signed-in user still sees their
 * account row (and "Sign out") in the menu regardless of this flag.
 */
// Annotated `boolean` (not the literal `false`) so flipping it needs no other
// edits and the compiler doesn't flag the guarded branches as dead code.
export const SHOW_AUTH_PROMPTS: boolean = false;
