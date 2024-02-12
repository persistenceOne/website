/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    domains: ["raw.githubusercontent.com"],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/tokensale",
        destination:
          "https://blog.pstake.finance/2021/12/13/pstake-tokenomics/",
        permanent: true,
      },
    ];
  },
  generateBuildId: async () => {
    return `${new Date().getTime()}`;
  },
};

module.exports = nextConfig;
