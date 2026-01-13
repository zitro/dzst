import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Placeholder images during development
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      // OrbioCloud blog images
      {
        protocol: 'https',
        hostname: 'app.orbiocloud.com',
      },
      {
        protocol: 'https',
        hostname: '*.orbiocloud.com',
      },
    ],
  },
};

export default nextConfig;
