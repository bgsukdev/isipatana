import Image from 'next/image';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative h-[300px] md:h-[400px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/4ff6c6be-4490-413d-a6fd-48c3dd3f19f0.png"
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay for better text legibility */}
        <div className="absolute inset-0 bg-[#094a24]/60"></div>
      </div>

      {/* Content */}
      <div className="relative container-custom z-10 text-center text-white pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight drop-shadow-lg">
          {title}
        </h1>
        
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-sm md:text-base font-medium text-gray-100/90">
          <Link href="/" className="hover:text-[var(--accent-gold)] transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-gray-400">/</span>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[var(--accent-gold)] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}
