/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'shop.knowhere.com.ar',
          port: '',
          pathname: '/**'
        },
        {
          protocol: 'https',
          hostname: 'www.blackbirdjapan.com',
          port: '',
          pathname: '/**'
        },
      ],
    }
  };
  
  module.exports = nextConfig;
  