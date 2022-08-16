/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/raas-home-app/",
  basePath: "/raas-home-app",
  env: {
    BACKEND_URL: "/raas-home-app"
  },
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

module.exports = nextConfig;
