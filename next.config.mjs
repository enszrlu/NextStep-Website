/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'nextstepjs.com',
        protocol: 'https',
      },
      {
        hostname: 'avatars.githubusercontent.com',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
