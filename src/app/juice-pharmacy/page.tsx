import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import JuiceGrid from "@/components/JuiceGrid";

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
          <JuiceGrid />
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
