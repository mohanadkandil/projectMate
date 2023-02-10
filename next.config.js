/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    servefrComponentsExternalPackages: ["bcrypt"],
  },
};

module.exports = nextConfig;
