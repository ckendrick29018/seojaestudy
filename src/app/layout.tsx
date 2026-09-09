import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_KR, Noto_Serif_KR, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";
import { OnboardingFlow } from "@/components/onboarding/OnboardingFlow";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
// Noto Sans/Serif KR ship all Hangul glyphs in the font file regardless of the
// `subsets` hint; next/font only uses `subsets` for preload <link> generation,
// and Google's metadata for these families doesn't expose a `korean` subset
// (build fails with "Unknown subset `korean`" otherwise).
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});
const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-serif-kr",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SeoJae Story — Short Stories for Language Learners",
    template: "%s · SeoJae Story",
  },
  description: SITE_DESCRIPTION,
  applicationName: "SeoJae Story",
  keywords: [
    "learn English through stories",
    "learn Korean through stories",
    "graded readers",
    "short stories for language learners",
    "ESL reading practice",
    "Korean reading practice",
    "bilingual short stories",
    "CEFR A1 A2 B1 B2 reading",
  ],
  authors: [{ name: "SeoJae Story" }],
  openGraph: {
    type: "website",
    siteName: "SeoJae Story",
    title: "SeoJae Story — Short Stories for Language Learners",
    description: SITE_DESCRIPTION,
    locale: "en_US",
    alternateLocale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "SeoJae Story — Short Stories for Language Learners",
    description: SITE_DESCRIPTION,
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SeoJae Story",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/icon-180.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FDFBF7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${notoSansKr.variable} ${notoSerifKr.variable}`}>
      <body className="bg-cream-dark font-sans text-charcoal antialiased">
        <ServiceWorkerRegister />
        <Providers>
          <div className="mx-auto flex min-h-dvh max-w-app flex-col bg-cream sm:my-6 sm:min-h-[calc(100dvh-3rem)] sm:rounded-xl2 sm:border sm:border-rose-light/60 sm:shadow-soft">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
          <OnboardingFlow />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
