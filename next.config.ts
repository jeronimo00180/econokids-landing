import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export pour déploiement sur Nginx/CDN
  output: 'export',

  // URLs propres avec trailing slash (/mairies/ au lieu de /mairies)
  trailingSlash: true,

  // Images non optimisées (nécessaire pour static export)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
