/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'nextstepjs.vercel.app',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
