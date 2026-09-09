import type { Metadata } from "next";
import { LandingClient } from "./LandingClient";

// The landing copy and its WebSite/Organization/WebApplication JSON-LD live in
// LandingClient; this server wrapper only pins the canonical URL (a client
// component can't export `metadata`).
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return <LandingClient />;
}
