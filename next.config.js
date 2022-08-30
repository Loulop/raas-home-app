/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching
  },
  // assetPrefix: "/raas-home-app/",
  // basePath: "/raas-home-app",
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
});
