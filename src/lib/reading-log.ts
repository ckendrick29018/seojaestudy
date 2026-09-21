import { useSyncExternalStore } from "react";

/**
 * "Which lessons has this reader opened, and when?" — the signal behind the
 * dashboard's Continue-reading row for a story that's started but not yet
 * marked complete (completion itself lives in ProgressProvider).
 *
 * Deliberately device-local: it's a convenience, not progress worth syncing,
 * and keeping it out of Supabase means no schema change. It's an external
 * store rather than a provider so the lesson page can write to it and the
 * dashboard can read it without either needing anything mounted above them.
 */
const KEY = "luminaread:reading-log";
/** Keep the log bounded; the library has fewer lessons than this today. */
const MAX_ENTRIES = 200;
/** Re-opening within this window doesn't rewrite storage (also swallows Strict-Mode double effects). */
const REWRITE_AFTER_MS = 60_000;

/** lesson slug -> epoch ms of the last time the lesson was opened. */
export type ReadingLog = Record<string, number>;

const EMPTY: ReadingLog = Object.freeze({}) as ReadingLog;
const listeners = new Set<() => void>();

// getSnapshot must return the same object until the data changes, so cache by raw string.
let cachedRaw: string | null | undefined;
let cachedLog: ReadingLog = EMPTY;

function parse(raw: string | null): ReadingLog {
  if (!raw) return EMPTY;
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object" || Array.isArray(value)) return EMPTY;
    const out: ReadingLog = {};
    for (const [slug, at] of Object.entries(value)) {
      if (typeof at === "number" && Number.isFinite(at)) out[slug] = at;
    }
    return out;
  } catch {
    return EMPTY;
  }
}

function getSnapshot(): ReadingLog {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    // storage blocked: behave as an empty log
  }
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedLog = parse(raw);
  }
  return cachedLog;
}

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY || e.key === null) onChange();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** Note that a lesson was just opened. Safe to call from an effect. */
export function recordLessonOpened(slug: string): void {
  const now = Date.now();
  const current = getSnapshot();
  if (now - (current[slug] ?? 0) < REWRITE_AFTER_MS) return;

  const next: ReadingLog = { ...current, [slug]: now };
  const entries = Object.entries(next);
  const trimmed =
    entries.length > MAX_ENTRIES
      ? Object.fromEntries(entries.sort((a, b) => b[1] - a[1]).slice(0, MAX_ENTRIES))
      : next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(trimmed));
  } catch {
    return; // best-effort only
  }
  listeners.forEach((l) => l());
}

/** The reading log; an empty object on the server and until the client hydrates. */
export function useReadingLog(): ReadingLog {
  return useSyncExternalStore(subscribe, getSnapshot, () => EMPTY);
}
