import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { recipes } from "@/content/recipes";

export const metadata: Metadata = {
  title: "Recipes — Veganster",
  description:
    "Browse our collection of delicious, wholesome vegan recipes — from quick breakfasts to hearty dinners.",
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 text-sm text-peach font-medium">
      {"★".repeat(Math.floor(rating))}
      <span className="text-warm-gray-light ml-1">{rating}</span>
    </span>
  );
}

export default function RecipesPage() {
  return (
    <>
      <Header />

      <PageHeader
        label="From Our Kitchen"
        title="Recipes"
        description="Simple, wholesome dishes bursting with flavor — proof that plant-based eating is anything but boring."
        image="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1600&h=600&fit=crop"
      />

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {["All", "Breakfast", "Bowls", "Mains", "Salads", "Soups"].map(
              (cat) => (
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
              )
            )}
          </div>

          {/* Recipe grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <article
                key={recipe.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 bg-white/90 text-forest rounded-full">
                    {recipe.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-warm-gray-light">
                      {recipe.cookTime}
                    </span>
                    <Stars rating={recipe.rating} />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed mb-4">
                    {recipe.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
