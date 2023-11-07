/** @type {import('next').NextConfig} */

const withHtml = require('@blunck/next-html')({
  minimize: true,
  conservativeCollapse: false,
});

const subPathPrefix = process.env.NEXT_PUBLIC_APP_SUBPATH_PREFIX || '';

const { i18n } = require('./next-i18next.config');

const config = {
  i18n,
  reactStrictMode: true,
  basePath: subPathPrefix,
};

module.exports = withHtml(config);
