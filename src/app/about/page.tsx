import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Veganster",
  description:
    "Learn about the Veganster story — our mission to inspire plant-based living and natural healing through food.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-80 md:h-96 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=600&fit=crop"
            alt="Fresh vegetables and herbs on a wooden table"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-sage-light font-medium tracking-widest uppercase text-sm mb-3">
                Our Story
              </p>
              <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white">
                About Veganster
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-forest font-medium tracking-widest uppercase text-sm mb-3">
                Our Mission
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Food Is Medicine
              </h2>
              <p className="text-warm-gray leading-relaxed mb-4">
                Veganster was born from a simple but powerful belief — that the
                food we eat has the power to heal, energize, and transform our
                lives from the inside out.
              </p>
              <p className="text-warm-gray leading-relaxed">
                We started as a small kitchen experiment and grew into a
                passionate community of plant-based food lovers, wellness
                seekers, and kitchen adventurers. Our mission is to make
                plant-based living accessible, delicious, and joyful for
                everyone.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1457296898342-cdd24585d095?w=600&h=500&fit=crop"
                alt="Colorful plant-based ingredients"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-forest font-medium tracking-widest uppercase text-sm mb-3">
              What We Stand For
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
              Our Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🌱",
                title: "Plant-Powered",
                desc: "Every recipe, blend, and program is 100% plant-based — no exceptions.",
              },
              {
                icon: "🔬",
                title: "Science-Backed",
                desc: "Our nutrition advice is rooted in research and reviewed by qualified professionals.",
              },
              {
                icon: "🌍",
                title: "Sustainable",
                desc: "We champion food choices that are kinder to our planet and its ecosystems.",
              },
              {
                icon: "❤️",
                title: "Community-First",
                desc: "We build together — sharing knowledge, support, and inspiration as a community.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-forest font-medium tracking-widest uppercase text-sm mb-3">
              What We Offer
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
              Everything You Need
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Vegan Recipes",
                desc: "Hundreds of tested, wholesome recipes for every meal — from quick breakfasts to show-stopping dinners.",
                image:
                  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
              },
              {
                title: "Juice Pharmacy",
                desc: "Healing smoothies and juice blends designed to target specific health concerns — immunity, energy, sleep, and more.",
                image:
                  "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&h=300&fit=crop",
              },
              {
                title: "Diet Plans",
                desc: "Structured wellness programs with day-by-day meal plans, shopping lists, and prep guides.",
                image:
                  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop",
              },
              {
                title: "Wellness Blog",
                desc: "Expert articles on nutrition science, gut health, plant-based lifestyle tips, and sustainable living.",
                image:
                  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&h=300&fit=crop",
              },
            ].map((offer) => (
              <article
                key={offer.title}
                className="group flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative w-40 shrink-0 overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="160px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-charcoal mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {offer.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Plant-Based Journey?
          </h2>
          <p className="text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
            Join thousands of people who have transformed their health, energy,
            and lives through the power of plants.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/recipes"
              className="px-8 py-3.5 bg-white text-forest font-semibold rounded-full hover:bg-cream transition-colors"
            >
              Browse Recipes
            </a>
            <a
              href="/diet-plans"
              className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              View Diet Plans
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
