const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['uploadthing.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.clerk.dev',
      },
    ],
  },
  experimental: {
    esmExternals: false,
  },
  i18n: {
    locales: ['pl'],
    defaultLocale: 'pl',
  },
};

module.exports =  nextConfig;