/** @type {import('next').NextConfig} */

const subPathPrefix = process.env.NEXT_PUBLIC_APP_SUBPATH_PREFIX || '';

const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  reactStrictMode: true,
  basePath: subPathPrefix,
};
