// ABOUTME: Tailwind CSS configuration for the Zednine portfolio site
// ABOUTME: Configured for Next.js App Router with minimal design system
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#171717',
      },
    },
  },
  plugins: [],
}
