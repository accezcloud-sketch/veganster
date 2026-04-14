"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { juices } from "@/content/juice-pharmacy";

const categories = [
  "All",
  "Immune Support",
  "Energy",
  "Detox",
  "Anti-Inflammatory",
  "Recovery",
  "Sleep & Calm",
  "Skin Health",
  "Protein",
];

export default function JuiceGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? juices
      : juices.filter((j) => j.category === active);

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

      {/* Juice grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.map((juice) => (
          <Link
            key={juice.slug}
            href={`/juice-pharmacy/${juice.slug}`}
            className="group"
          >
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={juice.image}
                  alt={juice.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 320px"
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
                  {juice.ingredients.map((ing) => ing.item).join(", ")}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-warm-gray-light py-12">
          No blends found in this category.
        </p>
      )}
    </>
  );
}
