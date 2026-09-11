import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Renders the tiny inline syntax used in `articles.ts` and `faq.ts`:
 *   [label](/path)  → a Next <Link> (internal) or <a> (external)
 *   **text**        → <strong>
 *
 * It is a plain function, not a client component, and never sets innerHTML —
 * the input is our own content, and only these two forms are recognised.
 */
export function InlineText({ text }: { text: string }): ReactNode {
  // Split on the two markers, keeping the delimiters.
  const tokens = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).filter(Boolean);

  return tokens.map((tok, i) => {
    const link = tok.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      const external = /^https?:\/\//.test(href);
      if (external) {
        return (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-rose underline-offset-2 hover:underline"
          >
            {label}
          </a>
        );
      }
      return (
        <Link key={i} href={href} className="font-medium text-rose underline-offset-2 hover:underline">
          {label}
        </Link>
      );
    }

    const bold = tok.match(/^\*\*([^*]+)\*\*$/);
    if (bold) {
      return (
        <strong key={i} className="font-semibold text-charcoal">
          {bold[1]}
        </strong>
      );
    }

    return <span key={i}>{tok}</span>;
  });
}
