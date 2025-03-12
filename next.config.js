/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Optimize for production builds
  reactStrictMode: true,
};

module.exports = nextConfig; 