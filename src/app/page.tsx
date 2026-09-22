import type { Metadata } from "next";
import { landingJsonLd, localeAlternates } from "@/lib/seo";
import { LandingClient } from "./LandingClient";

// The landing copy lives in LandingClient; this server wrapper pins the
// canonical URL, the reciprocal Korean-locale hreflang, and the JSON-LD (a
// client component can't export `metadata`, and locale-branched JSON-LD is
// cleaner built once per server wrapper than threaded through as a prop).
export const metadata: Metadata = {
  alternates: { canonical: "/", ...localeAlternates("/", true) },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(landingJsonLd("en")) }}
      />
      <LandingClient />
    </>
  );
}
