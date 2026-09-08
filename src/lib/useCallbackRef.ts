import { useCallback, useEffect, useRef } from "react";

/**
 * Returns a stable function whose identity never changes but which always
 * invokes the most recent `callback`. Handy for passing handlers into
 * long-lived `document` / `window` event listeners without re-subscribing on
 * every render.
 */
export function useCallbackRef<Args extends unknown[], Return>(
  callback: (...args: Args) => Return,
): (...args: Args) => Return {
  const ref = useRef(callback);

  useEffect(() => {
    ref.current = callback;
  });

  return useCallback((...args: Args) => ref.current(...args), []);
}
