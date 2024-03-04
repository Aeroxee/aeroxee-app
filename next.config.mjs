/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    MONGO_URL: process.env.MONGO_URL,
  },
};

export default nextConfig;
