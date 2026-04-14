"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { recipes, type Recipe } from "@/content/recipes";

const categories = ["All", "Breakfast", "Bowls", "Mains", "Salads", "Soups"];

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1 text-sm text-peach font-medium">
      {"★".repeat(Math.floor(rating))}
      <span className="text-warm-gray-light ml-1">{rating}</span>
    </span>
  );
}

export default function RecipeGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? recipes
      : recipes.filter((r) => r.category === active);

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              cat === active
                ? "bg-forest text-white"
                : "bg-white text-warm-gray hover:bg-forest/10 hover:text-forest"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recipe grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((recipe) => (
          <Link
            key={recipe.slug}
            href={`/recipes/${recipe.slug}`}
            className="group"
          >
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
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
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-warm-gray-light py-12">
          No recipes found in this category.
        </p>
      )}
    </>
  );
}
