// @ts-check

/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    optimizePackageImports: [
      '@snowball-tech/design-tokens',
      '@snowball-tech/fractal',
      'lodash',
    ],
  },

  images: {
    remotePatterns: [
      {
        hostname: '**',
        protocol: 'https',
      },
    ],
  },

  poweredByHeader: false,
  productionBrowserSourceMaps: true,
}

export default config
