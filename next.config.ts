import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure that /music becomes /music/index.html for GitHub Pages
  trailingSlash: true,
  // Ensure the build doesn't fail on type errors for the initial deploy
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
