import Image from "next/image";

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
  image: string;
}

export default function PageHeader({
  label,
  title,
  description,
  image,
}: PageHeaderProps) {
  return (
    <section className="relative pt-16">
      <div className="relative h-72 md:h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-sage-light font-medium tracking-widest uppercase text-sm mb-3">
              {label}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-white/70 max-w-xl mx-auto">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
