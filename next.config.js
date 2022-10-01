/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["logos-world.net", "upload.wikimedia.org"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
