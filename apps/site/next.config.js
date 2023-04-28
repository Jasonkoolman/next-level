const { withNx } = require('@nx/next/plugins/with-nx');

/** @type {import('@nx/next/plugins/with-nx').WithNxOptions} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = withNx(nextConfig);
