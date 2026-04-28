import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you are deploying to https://<username>.github.io/<repo-name>/
  // basePath: '/developer_site', 
};

export default nextConfig;
