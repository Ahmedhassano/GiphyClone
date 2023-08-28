/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    key_api: process.env.key_api,
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media0.giphy.com',
           
          },
          {
            protocol: 'https',
            hostname: 'media1.giphy.com',
           
          },
          {
            protocol: 'https',
            hostname: 'media2.giphy.com',
           
          },
          {
            protocol: 'https',
            hostname: 'media3.giphy.com',
           
          },
          {
            protocol: 'https',
            hostname: 'media4.giphy.com',
           
          },
          {
            protocol: 'https',
            hostname: 'media5.giphy.com',
           
          },
          {
            protocol: 'https',
            hostname: 'media6.giphy.com',
           
          },
          {
            protocol: 'https',
            hostname: 'media7.giphy.com',
           
          },
        ],
      },
}

module.exports = nextConfig
