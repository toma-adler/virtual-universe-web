/**
 * INFO: Reason of eslint-disable
 * 1. This configuration file is not transpiled by Babel. So you can’t use ES6 modules and features here. You can only use CommonJS modules and features here.
 * 2. Like 1, this file is not transpiled by Babel. So you can’t use import statements here. just use require.
 */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const DEBUG_ENVS = ['local', 'preview', 'develop'];
const path = require('path');

module.exports = {
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
    localeDetection: false,
  },
  reloadOnPrerender: DEBUG_ENVS.includes(process.env.ENV),
  debug: DEBUG_ENVS.includes(process.env.ENV),
  localePath: path.resolve('./public/static/locales'),
};
