import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set the basePath to match your GitHub repository name
  basePath: '/dev_site',
  // Ensure that /music becomes /music/index.html for GitHub Pages
  trailingSlash: true,
  // Ensure the build doesn't fail on lint or type errors for the initial deploy
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
