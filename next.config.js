// ABOUTME: Next.js configuration for static export to Cloudflare Pages
// ABOUTME: Disables image optimization and adds trailing slashes for proper routing
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
