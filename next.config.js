/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "v5.airtableusercontent.com"
      }
    ]
  }
}

module.exports = nextConfig
