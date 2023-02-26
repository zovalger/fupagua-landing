/** @type {import('next').NextConfig} */

const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withImages({
  esModule: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  ...nextConfig,
});
