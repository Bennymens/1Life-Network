import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
  },
  turbopack: {
    root: ".",
  },
};


export default nextConfig;
