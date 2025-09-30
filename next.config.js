/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash for Dokku compatibility
  trailingSlash: true,
  // Optional: Configure image optimization
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
