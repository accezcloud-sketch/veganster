import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Veganster",
  description:
    "The terms that govern your use of Veganster — including our recipes, juice pharmacy, diet plans, and newsletter.",
};

const lastUpdated = "April 28, 2026";

export default function TermsOfServicePage() {
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
              Terms of Service
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
                Welcome to Veganster. These Terms of Service (&ldquo;Terms&rdquo;)
                govern your access to and use of veganster.com, including our
                recipes, juice pharmacy, diet plans, blog, newsletter, and any
                related services (collectively, the &ldquo;Service&rdquo;). By
                using the Service, you agree to these Terms. If you don&apos;t
                agree, please don&apos;t use the Service.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Who We Are
              </h2>
              <p>
                Veganster is an online resource for plant-based living — sharing
                recipes, wellness content, and structured meal plans. You can
                read more about our mission on our{" "}
                <Link
                  href="/about"
                  className="text-forest font-medium underline hover:text-forest-dark"
                >
                  About page
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Eligibility
              </h2>
              <p>
                You must be at least 13 years old to use the Service. If you
                are under 18, you should review these Terms with a parent or
                legal guardian. By using Veganster, you confirm that you meet
                these requirements and have the legal capacity to enter into
                this agreement.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Not Medical Advice
              </h2>
              <p>
                The information on Veganster — including recipes, juice
                blends, diet plans, and articles — is for educational and
                informational purposes only. It is{" "}
                <span className="font-semibold text-charcoal">
                  not medical advice
                </span>{" "}
                and is not a substitute for professional diagnosis, treatment,
                or guidance from a qualified healthcare provider. Always
                consult your doctor or a registered dietitian before starting
                a new diet, juice cleanse, or wellness program — especially if
                you are pregnant, nursing, taking medication, or managing a
                health condition. You use our content at your own risk.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Acceptable Use
              </h2>
              <p className="mb-3">When using the Service, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Violate any applicable laws or the rights of others.
                </li>
                <li>
                  Copy, scrape, or republish our content without written
                  permission.
                </li>
                <li>
                  Attempt to access non-public areas of the site, our systems,
                  or our providers&apos; systems.
                </li>
                <li>
                  Disrupt or interfere with the Service, including by
                  introducing viruses, malware, or excessive automated traffic.
                </li>
                <li>
                  Use the Service to harass, abuse, or harm another person.
                </li>
                <li>
                  Misrepresent your identity or impersonate anyone else.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Intellectual Property
              </h2>
              <p>
                All content on Veganster — including recipes, articles,
                photography, illustrations, logos, and design — is owned by
                Veganster or our licensors and is protected by copyright,
                trademark, and other intellectual property laws. You are
                welcome to share links to our pages and quote short excerpts
                with proper attribution. Anything beyond that requires our
                written permission.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                User Submissions
              </h2>
              <p>
                If you send us a comment, recipe idea, photo, message, or any
                other submission, you grant Veganster a non-exclusive,
                royalty-free, worldwide license to use, reproduce, and display
                that content in connection with the Service. You confirm that
                you own (or have the right to share) anything you submit, and
                that it doesn&apos;t infringe on anyone&apos;s rights.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Newsletter and Communications
              </h2>
              <p>
                When you subscribe to our newsletter, you agree to receive
                emails from Veganster — including recipes, wellness tips, and
                occasional promotional messages. You can unsubscribe at any
                time using the link in any email, or by contacting us
                directly.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Third-Party Links and Services
              </h2>
              <p>
                Veganster may link to or feature content from third parties.
                We don&apos;t control those sites or services and are not
                responsible for their content, terms, or privacy practices.
                Visiting them is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Disclaimers
              </h2>
              <p>
                The Service is provided &ldquo;as is&rdquo; and &ldquo;as
                available,&rdquo; without warranties of any kind, whether
                express or implied. We don&apos;t guarantee that the Service
                will be uninterrupted, error-free, or that any information
                will produce specific health, fitness, or wellness outcomes.
                Individual results vary, and food sensitivities and allergies
                are your responsibility to manage.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Veganster and its
                team will not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of
                the Service — including any health outcome, loss of data, or
                lost profits. Our total liability for any claim related to
                the Service will not exceed one hundred US dollars
                (US$100).
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Indemnification
              </h2>
              <p>
                You agree to defend, indemnify, and hold harmless Veganster
                and its team from any claim, loss, or expense (including
                reasonable legal fees) arising out of your use of the
                Service, your violation of these Terms, or your violation of
                any rights of another person or entity.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Termination
              </h2>
              <p>
                We may suspend or terminate your access to the Service at any
                time, with or without notice, if we believe you have violated
                these Terms or engaged in conduct that could harm Veganster
                or our community. You can stop using the Service at any time.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. When we make
                meaningful changes, we&apos;ll update the &ldquo;last
                updated&rdquo; date above. Continuing to use the Service
                after a change means you accept the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Governing Law
              </h2>
              <p>
                These Terms are governed by the laws applicable to where
                Veganster operates, without regard to conflict of law
                principles. Any dispute will be resolved in the courts with
                jurisdiction over that location, unless required otherwise by
                applicable law.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
                Contact Us
              </h2>
              <p>
                Questions about these Terms? Reach out at{" "}
                <a
                  href="mailto:hello@veganster.com"
                  className="text-forest font-medium underline hover:text-forest-dark"
                >
                  hello@veganster.com
                </a>
                . You can also review our{" "}
                <Link
                  href="/privacy"
                  className="text-forest font-medium underline hover:text-forest-dark"
                >
                  Privacy Policy
                </Link>{" "}
                to learn how we handle your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
