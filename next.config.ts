/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },

  images: {
    domains: ["flagcdn.com"],
  },
};

export default nextConfig;
