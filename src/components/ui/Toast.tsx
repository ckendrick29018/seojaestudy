"use client";

import { useEffect } from "react";

/**
 * A brief, self-dismissing confirmation pill anchored to the bottom of the
 * phone frame. Render it always; pass `message` to show it and `onDone` to
 * clear that state after it fades.
 */
export function Toast({
  message,
  onDone,
  duration = 1800,
}: {
  message: string | null;
  onDone: () => void;
  duration?: number;
}) {
  useEffect(() => {
    if (!message) return;
    const id = window.setTimeout(onDone, duration);
    return () => window.clearTimeout(id);
  }, [message, duration, onDone]);

  if (!message) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-6" aria-live="polite">
      <div className="animate-fade-in rounded-full bg-charcoal/90 px-4 py-2 text-sm font-medium text-cream shadow-soft">
        {message}
      </div>
    </div>
  );
}
