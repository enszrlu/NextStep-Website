/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'nextstepjs.com',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
