"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { dietPlans } from "@/content/diet-plans";

const categories = [
  "All",
  "Detox",
  "Fitness",
  "Healing",
  "Digestive",
  "Energy",
  "Weight Loss",
];

export default function DietPlanGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? dietPlans
      : dietPlans.filter((p) => p.category === active);

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

      {/* Plans grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((plan) => (
          <Link
            key={plan.slug}
            href={`/diet-plans/${plan.slug}`}
            className="group"
          >
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full">
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
                <span className="inline-block px-6 py-2.5 bg-forest text-white text-sm font-semibold rounded-full hover:bg-forest-light transition-colors">
                  Start Plan
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-warm-gray-light py-12">
          No plans found in this category.
        </p>
      )}
    </>
  );
}
