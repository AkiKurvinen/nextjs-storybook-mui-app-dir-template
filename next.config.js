/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  trailingSlash: true,
  compiler: {
    emotion: true,
  }, 
  images: {
    loader: 'akamai',
    path: '',
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  // experimental: {
  //   // Required: for next 13
  //   appDir: true
  // }
}

module.exports = nextConfig
