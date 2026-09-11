"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";

/** Narration state: idle (nothing playing), actively playing, or paused mid-story. */
export type PlaybackState = "idle" | "playing" | "paused";

export interface NowPlaying {
  playback: "playing" | "paused";
  onPauseResume: () => void;
  onStop: () => void;
}

interface NowPlayingContextValue {
  nowPlaying: NowPlaying | null;
  setNowPlaying: Dispatch<SetStateAction<NowPlaying | null>>;
}

const NowPlayingContext = createContext<NowPlayingContextValue | null>(null);

/**
 * Lets a story's read-aloud controls surface in the site header instead of a
 * bar floating over the text: `StoryReader` publishes its playback state and
 * pause/stop handlers here, and `SiteHeader` (mounted once, above every page)
 * renders them for as long as narration is active — reachable no matter how
 * far the reader has scrolled, without adding any UI of its own to the story.
 */
export function NowPlayingProvider({ children }: { children: ReactNode }) {
  const [nowPlaying, setNowPlaying] = useState<NowPlaying | null>(null);
  const value = useMemo(() => ({ nowPlaying, setNowPlaying }), [nowPlaying]);
  return <NowPlayingContext.Provider value={value}>{children}</NowPlayingContext.Provider>;
}

export function useNowPlaying(): NowPlayingContextValue {
  const ctx = useContext(NowPlayingContext);
  if (!ctx) throw new Error("useNowPlaying must be used within a NowPlayingProvider");
  return ctx;
}
