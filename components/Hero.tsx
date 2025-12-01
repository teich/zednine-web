// ABOUTME: Hero section with full-screen background image and text overlay
// ABOUTME: Features IMG_8308.jpeg with Zed9 branding and scroll indicator
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/IMG_8308.jpeg"
          alt="Zed9 woodworking craftsmanship"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Text */}
      <div className="text-center text-white z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-4">
          Zed9
        </h1>
        <p className="text-xl md:text-2xl tracking-wide font-light">
          Custom Woodworking & Furniture
        </p>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to about section"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}
