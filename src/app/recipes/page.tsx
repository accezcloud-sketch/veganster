import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import RecipeGrid from "@/components/RecipeGrid";

export const metadata: Metadata = {
  title: "Recipes — Veganster",
  description:
    "Browse our collection of delicious, wholesome vegan recipes — from quick breakfasts to hearty dinners.",
};

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
          <RecipeGrid />
        </div>
      </section>

      <Footer />
    </>
  );
}
