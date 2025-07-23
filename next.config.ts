import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "10000",
        pathname: "/**", // อนุญาตทุก path
      },
    ],
  },
};

export default nextConfig;
