/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: "http://localhost:3000",
    // NEXTAUTH_SECRET: env.process.NEXTAUTH_SECRET,
  },
};

module.exports = nextConfig;
