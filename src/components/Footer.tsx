import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <>
      {/* Newsletter */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-charcoal mb-4">
            Join the Veganster Community
          </h2>
          <p className="text-warm-gray mb-8">
            Get weekly recipes, wellness tips, and plant-based inspiration
            delivered to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white/60 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <Link
                href="/"
                className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white"
              >
                Veganster
              </Link>
              <p className="mt-4 text-sm leading-relaxed">
                Plant-based recipes, healing juices, and wellness programs for a
                healthier, happier you.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/recipes" className="hover:text-white transition-colors">
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link href="/juice-pharmacy" className="hover:text-white transition-colors">
                    Juice Pharmacy
                  </Link>
                </li>
                <li>
                  <Link href="/diet-plans" className="hover:text-white transition-colors">
                    Diet Plans
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pinterest
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
            <p>&copy; 2026 Veganster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
