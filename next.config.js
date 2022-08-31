/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
  buildExcludes: [/middleware-manifest\.json$/]
});

module.exports = withPWA({
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