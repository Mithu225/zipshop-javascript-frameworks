import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.noroff.dev',
        port: '',
        pathname: '/api/online-shop/**',
      },
    ],
  },
};


export default nextConfig;
