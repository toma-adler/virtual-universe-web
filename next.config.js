/**
 * INFO: Reason of eslint-disable
 * 1. This configuration file is not transpiled by Babel. So you can’t use ES6 modules and features here. You can only use CommonJS modules and features here.
 * 2. Like 1, this file is not transpiled by Babel. So you can’t use import statements here. just use require.
 */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const IS_BUNDLE_ANALYZER_ENABLED = process.env.BUNDLE || 'false';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: IS_BUNDLE_ANALYZER_ENABLED === 'true',
  openAnalyzer: false,
});

const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
};

module.exports = () => {
  const plugins = [withBundleAnalyzer];

  return plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
  });
};
