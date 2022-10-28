/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  image: {
    domains: ['cdn.sanity.io']
  },
}

module.exports = nextConfig
