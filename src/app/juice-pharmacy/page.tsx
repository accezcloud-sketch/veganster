import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { juices } from "@/content/juice-pharmacy";

export const metadata: Metadata = {
  title: "Juice Pharmacy — Veganster",
  description:
    "Healing smoothies and juice blends crafted for specific health benefits — nature's medicine cabinet.",
};

export default function JuicePharmacyPage() {
  return (
    <>
      <Header />

      <PageHeader
        label="Liquid Healing"
        title="Juice Pharmacy"
        description="Nature's medicine cabinet — healing smoothies and juice blends crafted for specific health benefits."
        image="https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=1600&h=600&fit=crop"
      />

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {[
              "All",
              "Immune Support",
              "Energy",
              "Detox",
              "Anti-Inflammatory",
              "Recovery",
              "Sleep & Calm",
            ].map((cat) => (
              <span
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  cat === "All"
                    ? "bg-forest text-white"
                    : "bg-white text-warm-gray hover:bg-forest/10 hover:text-forest"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Juice grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {juices.map((juice) => (
              <article
                key={juice.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={juice.image}
                    alt={juice.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 bg-white/90 text-forest rounded-full">
                    {juice.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-peach">
                      {juice.benefit}
                    </span>
                    <span className="text-xs text-warm-gray-light">
                      {juice.prepTime}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-charcoal mb-2">
                    {juice.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed mb-3">
                    {juice.excerpt}
                  </p>
                  <p className="text-xs text-warm-gray-light">
                    <span className="font-medium text-charcoal">
                      Ingredients:
                    </span>{" "}
                    {juice.ingredients}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefit callout */}
      <section className="py-20 bg-forest-dark text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-6">
            Why Juice Therapy?
          </h2>
          <p className="text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
            Cold-pressed juices deliver concentrated vitamins, minerals, and
            enzymes directly to your cells. Each blend in our pharmacy is
            designed to target specific health concerns — from immunity and
            inflammation to energy and sleep.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                stat: "100%",
                label: "Plant-Based",
                desc: "No dairy, no additives",
              },
              {
                stat: "5 min",
                label: "Quick Prep",
                desc: "Ready in minutes",
              },
              {
                stat: "8+",
                label: "Health Targets",
                desc: "Blends for every need",
              },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-4xl font-bold text-sage-light mb-2">
                  {item.stat}
                </p>
                <p className="font-semibold text-white mb-1">{item.label}</p>
                <p className="text-sm text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
