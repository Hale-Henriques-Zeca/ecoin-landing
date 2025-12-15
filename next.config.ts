// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Corrige serverActions
  experimental: {
    serverActions: {}, // deve ser objeto, não boolean
  },

  // ✅ Corrige images.domains → remotePatterns
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },

  // ✅ Define comportamento do build
  typescript: {
    ignoreBuildErrors: false,
  },

  // ✅ Remove cabeçalho inseguro e ativa modo estrito
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
