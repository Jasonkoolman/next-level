// @ts-check

const { withNx } = require('@nrwl/next/plugins/with-nx');

/** @type {import('@nrwl/next/plugins/with-nx').WithNxOptions} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = withNx(nextConfig);
