import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CONTACT_EMAIL = "accez.cloud@gmail.com";

export const metadata: Metadata = {
  title: "Contact — Veganster",
  description:
    "Get in touch with the Veganster team. We'd love to hear from you about recipes, partnerships, feedback, or anything plant-based.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-72 md:h-80 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=600&fit=crop"
            alt="Fresh herbs and vegetables on a wooden surface"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-sage-light font-medium tracking-widest uppercase text-sm mb-3">
                Get In Touch
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal mb-6">
            We&apos;d Love To Hear From You
          </h2>
          <p className="text-warm-gray leading-relaxed mb-10">
            Whether you have a question about a recipe, feedback to share, a
            partnership idea, or just want to say hello — drop us a line and
            we&apos;ll get back to you as soon as we can.
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-block px-8 py-3.5 bg-forest text-white font-semibold rounded-full hover:bg-forest-light transition-colors"
          >
            Email Us
          </a>
          <p className="mt-5 text-sm text-warm-gray-light">
            Or write to us directly at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-forest font-medium hover:text-forest-light transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </section>

      {/* What to reach out about */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-forest font-medium tracking-widest uppercase text-sm mb-3">
              How Can We Help?
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
              What You Can Reach Out About
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💬",
                title: "Feedback & Suggestions",
                desc: "Tried a recipe? Spotted a typo? Have an idea for content you'd love to see? We read every message.",
              },
              {
                icon: "🤝",
                title: "Partnerships",
                desc: "Brand collaborations, guest contributions, sponsored content — we're open to thoughtful partnerships that align with our values.",
              },
              {
                icon: "📰",
                title: "Press & Media",
                desc: "Journalists and bloggers welcome. We're happy to provide quotes, images, or background for plant-based stories.",
              },
              {
                icon: "🍽️",
                title: "Recipe Requests",
                desc: "Got a dish you wish had a plant-based version? Send it our way and we might just publish it.",
              },
              {
                icon: "🐛",
                title: "Site Issues",
                desc: "Run into a broken link, slow page, or anything else off? Let us know and we'll fix it fast.",
              },
              {
                icon: "💚",
                title: "Just To Say Hi",
                desc: "Plant-based living can be a lonely path sometimes. We love hearing from fellow travelers on the journey.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response expectations */}
      <section className="py-20 bg-cream">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-4">
            A Note On Response Times
          </h2>
          <p className="text-warm-gray leading-relaxed">
            We&apos;re a small team and we read every message ourselves — no
            chatbots, no autoresponders. Most emails get a reply within 2–3
            business days. Thanks in advance for your patience.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
