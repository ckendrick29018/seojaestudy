import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Generates /robots.txt.
 *
 * Search crawlers get the public reading surface (`/`, `/library`, `/classics`,
 * `/lesson/*`) and are kept out of per-user app screens and machinery that hold
 * no indexable content.
 *
 * AI / LLM crawlers are listed explicitly and *allowed* the same surface — this
 * site is built on public-domain literature and we want it to be citable in
 * generative search (ChatGPT, Perplexity, Claude, Gemini, Apple Intelligence).
 * To opt out of AI grounding/training instead, move these agents' rule to
 * `disallow: "/"`.
 */

// App screens that are personalized, gated, or otherwise not worth indexing.
const PRIVATE_PATHS = [
  "/api/",
  "/auth/",
  "/login",
  "/settings",
  "/saved",
  "/study",
  "/bookshelf",
  "/subscribe",
];

const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "Meta-ExternalAgent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE_PATHS },
      { userAgent: AI_AGENTS, allow: "/", disallow: PRIVATE_PATHS },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
