import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Veganster",
  description:
    "How Veganster collects, uses, and protects your personal information when you use our recipes, juice pharmacy, diet plans, and newsletter.",
};

const lastUpdated = "April 28, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-16">
        <div className="bg-cream-dark">
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <p className="text-forest font-medium tracking-widest uppercase text-sm mb-3">
              Legal
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Privacy Policy
            </h1>
            <p className="text-warm-gray">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12 text-warm-gray leading-relaxed">
            <div>
              <p>
                At Veganster, we believe trust is the foundation of any healthy
                relationship — including the one we have with you. This Privacy
                Policy explains what information we collect when you visit
                veganster.com, how we use it, and the choices you have. By
                using our site, you agree to the practices described below.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Information We Collect
              </h2>
              <p className="mb-3">
                We only collect information that helps us run and improve
                Veganster. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold text-charcoal">
                    Information you give us directly
                  </span>{" "}
                  — such as your email address when you subscribe to our
                  newsletter, or any details you share when you contact us.
                </li>
                <li>
                  <span className="font-semibold text-charcoal">
                    Usage information
                  </span>{" "}
                  — such as the pages you visit, the recipes or articles you
                  view, your approximate location, browser type, and device
                  information.
                </li>
                <li>
                  <span className="font-semibold text-charcoal">
                    Cookies and similar technologies
                  </span>{" "}
                  — small files that help us remember your preferences and
                  understand how the site is used.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deliver our recipes, diet plans, and juice pharmacy content.</li>
                <li>Send our newsletter and respond to your messages.</li>
                <li>Personalize what you see and recommend relevant articles.</li>
                <li>Measure performance and improve the experience on our site.</li>
                <li>Protect Veganster and our community from abuse and fraud.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Cookies and Analytics
              </h2>
              <p>
                We use cookies and privacy-friendly analytics tools to
                understand how visitors interact with Veganster. These help us
                see which content is most useful, fix problems, and improve
                page speed. You can disable cookies in your browser settings,
                but some parts of the site may not work as expected.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Sharing Your Information
              </h2>
              <p className="mb-3">
                We never sell your personal information. We only share data in
                limited cases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  With trusted service providers who help us run the site
                  (such as our email and analytics partners), under
                  confidentiality agreements.
                </li>
                <li>
                  When required by law, regulation, or a valid legal request.
                </li>
                <li>
                  To protect the safety, rights, or property of Veganster, our
                  users, or the public.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Data Security
              </h2>
              <p>
                We use industry-standard safeguards to protect your information
                — including encryption in transit, secure hosting, and limited
                internal access. No system is perfectly secure, but we work
                hard to keep your data safe and notify you promptly if a
                serious issue ever occurs.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Your Rights and Choices
              </h2>
              <p className="mb-3">
                Depending on where you live, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you.</li>
                <li>Correct or update inaccurate information.</li>
                <li>Request deletion of your data.</li>
                <li>Opt out of marketing emails at any time.</li>
                <li>Object to or restrict certain types of processing.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, just email us using the
                contact details below — we&apos;ll respond within a reasonable
                timeframe.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Children&apos;s Privacy
              </h2>
              <p>
                Veganster is not directed at children under 13, and we do not
                knowingly collect personal information from them. If you
                believe a child has shared information with us, please let us
                know and we will delete it.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Third-Party Links
              </h2>
              <p>
                Our site may link to other websites and services we don&apos;t
                control. This Privacy Policy only applies to Veganster — we
                encourage you to read the privacy policies of any third-party
                sites you visit.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Changes to This Policy
              </h2>
              <p>
                As Veganster grows, this policy may evolve. When we make
                meaningful changes, we&apos;ll update the &ldquo;last
                updated&rdquo; date above and, where appropriate, let our
                community know by email or a notice on the site.
              </p>
            </div>

            <div>
              <p>
                You can learn more about who we are on our{" "}
                <Link
                  href="/about"
                  className="text-forest font-medium underline hover:text-forest-dark"
                >
                  About page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
