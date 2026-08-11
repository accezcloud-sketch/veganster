import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import RecipeGrid from "@/components/RecipeGrid";
import JsonLd from "@/components/JsonLd";
import { recipes } from "@/content/recipes";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

const heroImage =
  "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1600&h=600&fit=crop";

// The title no longer ends in "— Veganster": the root layout's template
// already appends it, so this used to render "Recipes — Veganster — Veganster".
export const metadata = pageMetadata({
  title: "Recipes",
  description:
    "Browse our collection of delicious, wholesome vegan recipes — from quick breakfasts to hearty dinners.",
  path: "/recipes",
  image: heroImage,
  imageAlt: "A spread of colorful plant-based dishes",
});

export default function RecipesPage() {
  return (
    <>
      {/* Marks this page as the summary of the individually marked-up recipes
          it links to, which is what makes a recipe carousel possible. */}
      <JsonLd data={itemListJsonLd(recipes.map((r) => `/recipes/${r.slug}`))} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Recipes" },
        ])}
      />

      <Header />

      <PageHeader
        label="From Our Kitchen"
        title="Recipes"
        description="Simple, wholesome dishes bursting with flavor — proof that plant-based eating is anything but boring."
        image={heroImage}
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
