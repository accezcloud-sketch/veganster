import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BlogGrid from "@/components/BlogGrid";
import JsonLd from "@/components/JsonLd";
import { getAllPosts } from "@/lib/blog";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

const heroImage =
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1600&h=600&fit=crop";

// The Open Graph image used to request `fm=webp`; social scrapers do not
// reliably render WebP, so ogImage() (inside pageMetadata) drops that param.
export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Health tips, nutrition science, and plant-based lifestyle articles to inspire your wellness journey.",
  path: "/blog",
  image: heroImage,
  imageAlt: "Colorful plant-based bowl on a wooden table",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd data={itemListJsonLd(posts.map((p) => `/blog/${p.slug}`))} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog" },
        ])}
      />

      <Header />

      <PageHeader
        label="Latest Articles"
        title="Blog"
        description="Health tips, nutrition science, and plant-based lifestyle articles to fuel your journey."
        image={heroImage}
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
