// ABOUTME: Next.js configuration for static export to Cloudflare Workers Sites
// ABOUTME: Disables image optimization to enable static export
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
