// ABOUTME: Portfolio page displaying grid of all woodwork projects
// ABOUTME: Includes page heading and PortfolioGrid component with lightbox
import PortfolioGrid from '@/components/PortfolioGrid'

export const metadata = {
  title: 'Portfolio - Zednine',
  description: 'Browse our custom woodworking projects',
}

export default function Portfolio() {
  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">
          Our Work
        </h1>
        <PortfolioGrid />
      </div>
    </main>
  )
}
