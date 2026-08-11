import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import JuiceGrid from "@/components/JuiceGrid";
import JsonLd from "@/components/JsonLd";
import { juices } from "@/content/juice-pharmacy";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

const heroImage =
  "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=1600&h=600&fit=crop";

export const metadata = pageMetadata({
  title: "Juices & Smoothies",
  description:
    "Fresh-pressed juices and blended smoothies made with whole fruits, vegetables, and herbs — simple recipes to make at home.",
  path: "/juices-and-smoothies",
  image: heroImage,
  imageAlt: "A fresh green juice surrounded by whole fruit and vegetables",
});

export default function JuicePharmacyPage() {
  return (
    <>
      <JsonLd
        data={itemListJsonLd(
          juices.map((j) => `/juices-and-smoothies/${j.slug}`),
        )}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Juices & Smoothies" },
        ])}
      />

      <Header />

      <PageHeader
        label="Fresh & Cold-Pressed"
        title="Juices & Smoothies"
        description="Fresh-pressed juices and blended smoothies made with whole fruits, vegetables, and herbs — simple recipes you can make at home."
        image={heroImage}
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
            Why We Love Fresh Juice
          </h2>
          <p className="text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
            Freshly pressed juices and blended smoothies are a delicious way to
            enjoy more fruits, vegetables, and herbs. Every recipe here uses
            whole ingredients, comes together in minutes, and is built around
            flavor first.
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
                stat: "8",
                label: "Recipes",
                desc: "A blend for every mood",
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
