import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BlogGrid from "@/components/BlogGrid";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Health tips, nutrition science, and plant-based lifestyle articles to inspire your wellness journey.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "/blog",
    title: "Veganster Blog — Plant-Based Wellness Articles",
    description:
      "Health tips, nutrition science, and plant-based lifestyle articles to inspire your wellness journey.",
    siteName: "Veganster",
    images: [
      {
        url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=630&fit=crop&fm=webp&q=80",
        width: 1200,
        height: 630,
        alt: "Colorful plant-based bowl on a wooden table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veganster Blog — Plant-Based Wellness Articles",
    description:
      "Health tips, nutrition science, and plant-based lifestyle articles to inspire your wellness journey.",
    images: [
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&h=630&fit=crop&fm=webp&q=80",
    ],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

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
          <BlogGrid posts={posts} />
        </div>
      </section>

      <Footer />
    </>
  );
}
