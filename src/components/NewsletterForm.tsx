"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 px-5 py-3 rounded-full border border-cream-dark bg-white text-charcoal placeholder:text-warm-gray-light focus:outline-none focus:ring-2 focus:ring-forest/30"
      />
      <button
        type="submit"
        className="px-7 py-3 bg-forest text-white font-semibold rounded-full hover:bg-forest-light transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
