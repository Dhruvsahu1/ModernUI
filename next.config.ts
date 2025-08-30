import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['skiper-ui.com', 'api.producthunt.com', 'media.giphy.com', 'media4.giphy.com', 'i.giphy.com'],
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
