import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { dietPlans } from "@/content/diet-plans";

export async function generateStaticParams() {
  return dietPlans.map((plan) => ({ slug: plan.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plan = dietPlans.find((p) => p.slug === slug);
  if (!plan) return {};
  return {
    title: `${plan.title} — Veganster Diet Plans`,
    description: plan.excerpt,
  };
}

export default async function DietPlanDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = dietPlans.find((p) => p.slug === slug);

  if (!plan) notFound();

  const related = dietPlans.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-72 md:h-[28rem] overflow-hidden">
          <Image
            src={plan.image}
            alt={plan.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block text-xs font-semibold px-3 py-1 bg-white/90 text-forest rounded-full">
                  {plan.category}
                </span>
                <span className="inline-block text-xs font-semibold px-3 py-1 bg-forest/90 text-white rounded-full">
                  {plan.duration}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-4xl">{plan.icon}</span>
                <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-white">
                  {plan.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description + Highlights */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main description */}
            <div className="md:col-span-2">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-charcoal mb-5">
                About This Plan
              </h2>
              <p className="text-warm-gray leading-relaxed text-lg">
                {plan.description}
              </p>
            </div>

            {/* Highlights sidebar */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-charcoal mb-4">
                  Plan Highlights
                </h3>
                <ul className="space-y-3">
                  {plan.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-warm-gray leading-relaxed"
                    >
                      <span className="mt-0.5 text-forest">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Day-by-day schedule */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-charcoal text-center mb-12">
            Meal Schedule
          </h2>
          <div className="space-y-6">
            {plan.schedule.map((day, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-forest mb-5">
                  {day.day}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div>
                    <p className="text-xs font-semibold text-peach uppercase tracking-wider mb-2">
                      Breakfast
                    </p>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      {day.breakfast}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-peach uppercase tracking-wider mb-2">
                      Lunch
                    </p>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      {day.lunch}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-peach uppercase tracking-wider mb-2">
                      Dinner
                    </p>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      {day.dinner}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-peach uppercase tracking-wider mb-2">
                      Snack
                    </p>
                    <p className="text-sm text-warm-gray leading-relaxed">
                      {day.snack}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="text-white/70 mb-8">
            Begin your {plan.duration.toLowerCase()} journey today and
            experience the transformative power of plant-based nutrition.
          </p>
          <Link
            href="/diet-plans"
            className="inline-block px-8 py-3.5 bg-white text-forest font-semibold rounded-full hover:bg-cream transition-colors"
          >
            Browse All Plans
          </Link>
        </div>
      </section>

      {/* Related plans */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-charcoal text-center mb-10">
            More Plans
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.slug} href={`/diet-plans/${p.slug}`} className="group">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow text-center">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-3xl">{p.icon}</span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-charcoal mt-2">
                      {p.title}
                    </h3>
                    <span className="text-xs text-forest font-medium">
                      {p.duration}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
