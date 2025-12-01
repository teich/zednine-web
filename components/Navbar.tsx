// ABOUTME: Main navigation component with links to home and portfolio
// ABOUTME: Fixed position header with minimalist styling
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-xl font-semibold tracking-wider hover:opacity-70 transition-opacity"
          >
            ZED9
          </Link>
          <div className="flex gap-8">
            <Link
              href="/"
              className="text-sm uppercase tracking-wide hover:opacity-70 transition-opacity"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="text-sm uppercase tracking-wide hover:opacity-70 transition-opacity"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
