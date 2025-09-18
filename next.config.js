/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true // ⛔ disables type checking during `next build`
  },
  images: {
    domains: [
      'i.imgur.com',
      'mediahub.debenhams.com',
      'media.istockphoto.com',
      'mediahub.debenhams.com',
      'd2p7sryr291vf0.cloudfront.net'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'api.slingacademy.com',
        port: ''
      }
    ]
  },
  transpilePackages: ['geist'],
  async rewrites() {
    return [
      {
        source: '/v1/:path*',
        destination:
          process.env.NODE_ENV === 'production'
            ? 'https://d387o47i5s73ei.cloudfront.net/v1/:path*'
            : 'http://localhost:3000/v1/:path*' // your Rails dev
      }
    ];
  }
};

module.exports = nextConfig;
