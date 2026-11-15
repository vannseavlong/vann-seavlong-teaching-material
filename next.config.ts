import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generic course links for courses that keep their original URL (Tasks/_plans/Web-multi-curriculum.md).
  async redirects() {
    return [
      { source: "/courses/ib-dp-math-aa", destination: "/aa", permanent: true },
      { source: "/courses/ib-dp-math-ai", destination: "/ai", permanent: true },
    ];
  },
};

export default nextConfig;
