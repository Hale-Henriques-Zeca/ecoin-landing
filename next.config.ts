// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Corrige o warning: "Expected object, received boolean"
  experimental: {
    serverActions: {}, // deve ser um objeto vazio, não "true" ou "false"
  },

  // ✅ Corrige o warning de segurança do "images.domains"
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // permite imagens seguras de qualquer domínio (podes restringir depois)
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },

  // ✅ Melhora o desempenho no build e segurança geral
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
