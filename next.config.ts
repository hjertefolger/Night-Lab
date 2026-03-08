import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/builds/:id(\\d{3})",
          destination: "/b/:id",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
