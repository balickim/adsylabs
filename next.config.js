const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://adsylabs.framer.website/',
        permanent: true,
      },
    ]
  },
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