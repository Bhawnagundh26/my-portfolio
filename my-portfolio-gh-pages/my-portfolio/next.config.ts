import type { NextConfig } from 'next';

// ✅ GitHub repo name (must match exactly!)
const repo = 'my-portfolio';

// ✅ Determine if we're in production (for build)
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // Required for static export

  // ✅ Required for GitHub Pages to serve assets under /my-portfolio/
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',

  // GitHub Pages doesn't support Image Optimization
  images: {
    unoptimized: true,
  },

  // Optional: Enable React strict mode / disable if it causes hydration warnings
  reactStrictMode: true,

  // Optionally, disable trailing slashes
  // trailingSlash: false,
};

export default nextConfig;
