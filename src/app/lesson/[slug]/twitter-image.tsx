// The Twitter/X card reuses the per-lesson Open Graph image. `runtime` must be
// a literal in this file for Next to detect it — a re-export isn't statically
// analysable.
export const runtime = "edge";

export { default, alt, size, contentType } from "./opengraph-image";
