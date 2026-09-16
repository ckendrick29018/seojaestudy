import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const NAME = "Privacy Policy";
const DESCRIPTION = `How ${SITE_NAME} collects, uses, and protects your information.`;
const LAST_UPDATED = "September 16, 2026";
const CONTACT_EMAIL = "support.olliecode@gmail.com";

export const metadata: Metadata = {
  title: NAME,
  description: DESCRIPTION,
  alternates: { canonical: "/privacy" },
  openGraph: { type: "website", url: "/privacy", title: `${NAME} · ${SITE_NAME}`, description: DESCRIPTION },
  twitter: { card: "summary", title: `${NAME} · ${SITE_NAME}`, description: DESCRIPTION },
};

export default function PrivacyPage() {
  return (
    <div className="px-6 py-10 lg:mx-auto lg:max-w-3xl lg:px-8 lg:py-16">
      <nav className="mb-4 text-xs text-charcoal/45">
        <Link href="/" className="hover:text-charcoal">Home</Link>
        <span className="mx-1.5">/</span>
        <span className="text-charcoal/60">Privacy Policy</span>
      </nav>

      <h1 className="font-serif text-[1.9rem] font-semibold leading-tight text-charcoal lg:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-charcoal/50">Last updated: {LAST_UPDATED}</p>

      <div className="prose-sj mt-8 space-y-8 text-[0.95rem] leading-7 text-charcoal/80 lg:text-base lg:leading-8">
        <section>
          <p>
            {SITE_NAME} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) offers short stories and reading lessons for
            English and Korean language learners, on the web and, where available, as a mobile app. This
            policy explains what information we collect, why, and the choices you have. It applies wherever
            you use {SITE_NAME} — the website or the app.
          </p>
        </section>

        <PolicySection title="Information we collect">
          <SubHeading>Stored only on your device</SubHeading>
          <p>
            You can use most of {SITE_NAME} without creating an account. In that case, your reading
            progress, streak, saved words, study plan, onboarding answers (level, goal, interests), interface
            language, and text-size preference are stored locally in your browser or app, using standard
            web storage. We don&rsquo;t receive or see this information — it stays on your device and is
            cleared if you clear your browser or app data.
          </p>

          <SubHeading>If you create an account</SubHeading>
          <p>
            Creating an account is optional. If you sign in, we (via our backend provider, Supabase) store
            your email address and an encrypted authentication credential, plus a profile record that tracks
            subscription status. Signing in also lets us sync the reading data above (progress, saved words,
            study plan) to your account so it carries across devices, and lets you create or join a Book
            Club, which shares your reading progress within that club with its other members.
          </p>

          <SubHeading>Payment information</SubHeading>
          <p>
            If you subscribe, checkout is handled entirely by our payment processor, Paddle, which acts as
            merchant of record. We never see or store your card number. We do store the subscription status
            and dates Paddle reports back to us, and a Paddle-issued customer/subscription ID, so we know
            what access to grant your account.
          </p>

          <SubHeading>Usage analytics</SubHeading>
          <p>
            We use Vercel Analytics to understand aggregate usage, such as which pages are visited. It is
            privacy-preserving by design: it does not use cookies or persistent device identifiers and does
            not track you across other websites or apps.
          </p>
        </PolicySection>

        <PolicySection title="How we use this information">
          <p>
            We use the information above to: operate and improve {SITE_NAME}; sync your reading progress
            across devices when you&rsquo;re signed in; provide customer support; manage subscriptions and
            billing; understand which stories and features people actually use; and communicate with you
            about your account when necessary (for example, a billing receipt). We do not sell your
            information, and we do not use it for third-party advertising.
          </p>
        </PolicySection>

        <PolicySection title="Who we share it with">
          <p>
            We share information only with the service providers that help us run {SITE_NAME}, each acting
            under their own privacy and security obligations: Supabase (account data and app database),
            Paddle (billing and payments), and Vercel (hosting and analytics). If you join or create a Book
            Club, your reading progress within that club is visible to other members of that specific club.
            We don&rsquo;t share your information with anyone else, except where required by law.
          </p>
        </PolicySection>

        <PolicySection title="Data retention">
          <p>
            Device-only data (for people who never sign in) lives on your device until you clear it. Account
            data is kept for as long as your account is active. If you delete your account, we delete your
            profile and reading data, other than records we&rsquo;re required to keep for billing, tax, or
            legal reasons.
          </p>
        </PolicySection>

        <PolicySection title="Your choices">
          <p>
            You can use {SITE_NAME} without an account. You can change your interface language and text size
            at any time in Settings. To access, correct, export, or delete the data tied to your account,
            email us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-rose underline-offset-4 hover:underline">
              {CONTACT_EMAIL}
            </a>{" "}
            and we&rsquo;ll take care of it.
          </p>
        </PolicySection>

        <PolicySection title="Children's privacy">
          <p>
            {SITE_NAME} is not directed at children under 13, and we do not knowingly collect personal
            information from children under 13. If you believe a child has provided us with personal
            information, contact us and we&rsquo;ll delete it.
          </p>
        </PolicySection>

        <PolicySection title="International users">
          <p>
            Our service providers host data in the United States. By using {SITE_NAME}, you understand your
            information may be processed there.
          </p>
        </PolicySection>

        <PolicySection title="Changes to this policy">
          <p>
            If we make material changes to this policy, we&rsquo;ll update the &ldquo;last updated&rdquo;
            date above and, for significant changes, make a reasonable effort to let you know in the app.
          </p>
        </PolicySection>

        <PolicySection title="Contact us">
          <p>
            Questions about this policy or your data? Email{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-rose underline-offset-4 hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </PolicySection>
      </div>

      <Link href="/library" className="mt-10 inline-block text-sm text-rose underline-offset-4 hover:underline">
        Back to library
      </Link>
    </div>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 font-serif text-lg font-semibold text-charcoal lg:text-xl">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-widest text-rose/70">{children}</p>;
}
