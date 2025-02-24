/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en'
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

export default nextConfig