import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { recipes } from "@/content/recipes";

export async function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return {};
  return {
    title: `${recipe.title} — Veganster Recipes`,
    description: recipe.excerpt,
  };
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 text-lg text-peach font-medium">
      {"★".repeat(Math.floor(rating))}
      <span className="text-warm-gray-light ml-1">{rating}</span>
    </span>
  );
}

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) notFound();

  const related = recipes
    .filter((r) => r.slug !== slug)
    .filter((r) => r.category === recipe.category || r.tags.some((t) => recipe.tags.includes(t)))
    .slice(0, 3);

  return (
    <>
      <Header />

      {/* Hero image */}
      <section className="relative pt-16">
        <div className="relative h-72 md:h-[28rem] overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block text-xs font-semibold px-3 py-1 bg-white/90 text-forest rounded-full mb-4">
                {recipe.category}
              </span>
              <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-bold text-white mb-3">
                {recipe.title}
              </h1>
              <p className="text-white/80 max-w-xl">{recipe.excerpt}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe info bar */}
      <section className="bg-white border-b border-cream-dark">
        <div className="max-w-4xl mx-auto px-6 py-5 flex flex-wrap items-center gap-6 md:gap-10">
          <div className="flex items-center gap-2">
            <span className="text-sm text-warm-gray-light">Prep</span>
            <span className="text-sm font-semibold text-charcoal">{recipe.prepTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-warm-gray-light">Cook</span>
            <span className="text-sm font-semibold text-charcoal">{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-warm-gray-light">Servings</span>
            <span className="text-sm font-semibold text-charcoal">{recipe.servings}</span>
          </div>
          <Stars rating={recipe.rating} />
          <div className="flex flex-wrap gap-2 ml-auto">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-sage-light/20 text-forest rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe body */}
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
                  {recipe.ingredients.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-warm-gray leading-relaxed"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-forest shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instructions */}
            <div className="md:col-span-2">
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-charcoal mb-8">
                Instructions
              </h2>
              <ol className="space-y-8">
                {recipe.instructions.map((step, i) => (
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
          </div>
        </div>
      </section>

      {/* Related recipes */}
      {related.length > 0 && (
        <section className="py-16 bg-cream-dark">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-charcoal text-center mb-10">
              You Might Also Like
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link key={r.slug} href={`/recipes/${r.slug}`} className="group">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-warm-gray-light">{r.cookTime}</span>
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-charcoal mt-1">
                        {r.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
