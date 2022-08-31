/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const config = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/]
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

// tmp nextjs bug fix: pwa is an invalid property to nextjs config.
delete config.pwa;

module.exports = config;
