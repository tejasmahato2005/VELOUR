import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "xvxe4eek.ap-southeast.insforge.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
