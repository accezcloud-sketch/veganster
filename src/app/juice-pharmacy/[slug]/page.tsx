import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { juices } from "@/content/juice-pharmacy";

export async function generateStaticParams() {
  return juices.map((juice) => ({ slug: juice.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const juice = juices.find((j) => j.slug === slug);
  if (!juice) return {};
  return {
    title: `${juice.title} — Veganster Juice Pharmacy`,
    description: juice.excerpt,
  };
}

export default async function JuiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const juice = juices.find((j) => j.slug === slug);

  if (!juice) notFound();

  const related = juices
    .filter((j) => j.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-72 md:h-[28rem] overflow-hidden">
          <Image
            src={juice.image}
            alt={juice.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block text-xs font-semibold px-3 py-1 bg-white/90 text-forest rounded-full mb-4">
                {juice.category}
              </span>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-white mb-3">
                {juice.title}
              </h1>
              <p className="text-white/80 max-w-xl">{juice.excerpt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="bg-forest-dark text-white">
        <div className="max-w-4xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 md:gap-10">
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/60">Prep Time</span>
            <span className="text-sm font-semibold">{juice.prepTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-white/60">Servings</span>
            <span className="text-sm font-semibold">{juice.servings}</span>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-sage-light/20 text-sage-light rounded-full">
            {juice.benefit}
          </span>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Ingredients */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-charcoal mb-5">
                  Ingredients
                </h2>
                <ul className="space-y-3">
                  {juice.ingredients.map((ing, i) => (
                    <li
                      key={i}
                      className="flex items-start justify-between gap-3 text-sm"
                    >
                      <span className="text-charcoal font-medium">
                        {ing.item}
                      </span>
                      <span className="text-warm-gray-light text-right shrink-0">
                        {ing.amount}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instructions + Benefits */}
            <div className="md:col-span-2 space-y-12">
              {/* How to make */}
              <div>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-charcoal mb-8">
                  How to Make It
                </h2>
                <ol className="space-y-6">
                  {juice.instructions.map((step, i) => (
                    <li key={i} className="flex gap-5">
                      <span className="shrink-0 w-9 h-9 rounded-full bg-forest text-white flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <p className="text-warm-gray leading-relaxed pt-1.5">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Health Benefits */}
              <div className="bg-forest-dark/5 rounded-2xl p-8">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-charcoal mb-5">
                  Health Benefits
                </h2>
                <ul className="space-y-4">
                  {juice.healthBenefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-warm-gray leading-relaxed"
                    >
                      <span className="mt-0.5 text-forest text-lg">✦</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More blends */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-charcoal text-center mb-10">
            More Healing Blends
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {related.map((j) => (
              <Link key={j.slug} href={`/juice-pharmacy/${j.slug}`} className="group">
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={j.image}
                      alt={j.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-peach">{j.benefit}</span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-charcoal mt-1">
                      {j.title}
                    </h3>
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
