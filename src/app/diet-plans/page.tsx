import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { dietPlans } from "@/content/diet-plans";

export const metadata: Metadata = {
  title: "Diet Plans — Veganster",
  description:
    "Structured plant-based wellness programs designed by nutritionists to help you thrive.",
};

export default function DietPlansPage() {
  return (
    <>
      <Header />

      <PageHeader
        label="Your Wellness Journey"
        title="Diet Plans"
        description="Structured programs designed by nutritionists to help you thrive on a plant-based lifestyle."
        image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&h=600&fit=crop"
      />

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {[
              "All",
              "Detox",
              "Fitness",
              "Healing",
              "Digestive",
              "Energy",
              "Weight Loss",
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

          {/* Plans grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dietPlans.map((plan) => (
              <article
                key={plan.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 bg-white/90 text-forest rounded-full">
                    {plan.category}
                  </span>
                  <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 bg-forest/90 text-white rounded-full">
                    {plan.duration}
                  </span>
                </div>
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">{plan.icon}</div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
                    {plan.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed mb-5">
                    {plan.excerpt}
                  </p>
                  <span className="inline-block px-6 py-2.5 bg-forest text-white text-sm font-semibold rounded-full hover:bg-forest-light transition-colors cursor-pointer">
                    Start Plan
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-forest font-medium tracking-widest uppercase text-sm mb-3">
              Simple Process
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Choose Your Plan",
                desc: "Pick a program that matches your health goals — from detox to muscle building.",
              },
              {
                step: "02",
                title: "Get Your Meals",
                desc: "Receive a day-by-day meal plan with recipes, shopping lists, and prep guides.",
              },
              {
                step: "03",
                title: "Transform Your Health",
                desc: "Follow the plan, track your progress, and feel the difference in your body and mind.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="inline-block text-3xl font-bold text-forest/20 mb-3">
                  {item.step}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-2">
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

      <Footer />
    </>
  );
}
