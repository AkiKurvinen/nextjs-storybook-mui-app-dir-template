/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  // experimental: {
  //   // Required: for next 13
  //   appDir: true
  // }
}

module.exports = nextConfig
