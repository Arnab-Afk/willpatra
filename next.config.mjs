/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure for Cloudflare Pages deployment
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
