/** @type {import('next-i18next').UserConfig} */

const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    localeDetection: false,
    localePath: path.resolve('./public/assets/locales'),
  },
  reloadOnPrerender: true,
};
