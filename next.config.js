/** @type {import('next').NextConfig} */
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  webpack(config, options) {
    // Disable TypeScript type checking in production builds
    if (!options.dev) {
      config.plugins = config.plugins.filter(
        (plugin) => !(plugin instanceof ForkTsCheckerWebpackPlugin)
      );
    }

    return config;
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
