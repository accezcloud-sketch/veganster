import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BlogGrid from "@/components/BlogGrid";

export const metadata: Metadata = {
  title: "Blog — Veganster",
  description:
    "Health tips, nutrition science, and plant-based lifestyle articles to inspire your wellness journey.",
};

export default function BlogPage() {
  return (
    <>
      <Header />

      <PageHeader
        label="Latest Articles"
        title="Blog"
        description="Health tips, nutrition science, and plant-based lifestyle articles to fuel your journey."
        image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1600&h=600&fit=crop"
      />

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <BlogGrid />
        </div>
      </section>

      <Footer />
    </>
  );
}
