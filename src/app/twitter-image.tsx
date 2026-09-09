// The Twitter/X card uses the same generated image as Open Graph.
// `runtime` must be a literal in this file for Next to detect it — a
// re-export isn't statically analysable.
export const runtime = "edge";

export { default, alt, size, contentType } from "./opengraph-image";
