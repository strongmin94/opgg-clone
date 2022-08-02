/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["ddragon.leagueoflegends.com", "opgg-static.akamaized.net"],
  },
};

module.exports = nextConfig;
