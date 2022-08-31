/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
  buildExcludes: [/middleware-manifest\.json$/]
});
const fs = require("fs");
const toml = require("toml");

let text = "";
if (process.env.NODE_ENV === "production") {
  text = fs.readFileSync("./config/production.toml", "utf8");
} else {
  text = fs.readFileSync("./config/development.toml", "utf8");
}
const appConfig = toml.parse(text);

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
  },
  env: {
    MANAGEMENT_API_ENDPOINT: appConfig.MANAGEMENT_API_ENDPOINT
  }
});
