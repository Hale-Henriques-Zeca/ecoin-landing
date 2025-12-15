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

  // ✅ Typescript build rules
  typescript: {
    ignoreBuildErrors: false,
  },

  // ✅ Remove headers inseguros
  poweredByHeader: false,

  // ✅ Ativa modo estrito do React
  reactStrictMode: true,
};

export default nextConfig;
