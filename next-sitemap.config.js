/**
 * INFO: Reason of eslint-disable
 * This configuration file is not transpiled by Babel. So you can’t use ES6 modules and features here. You can only use CommonJS modules and features here.
 */
/* eslint-disable no-undef */
const SITEMAP_URL = process.env.SITEMAP_URL || 'http://localhost:3000';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITEMAP_URL,
  generateRobotsTxt: true,
  exclude: ['/static/*', '/server-sitemap-index.xml'],
  changefreq: 'daily',
  priority: 1,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/static*/', '/404', '/400', '/500'] }],
    additionalSitemaps: [
      `${SITEMAP_URL}/server-sitemap-index.xml`,
      `${SITEMAP_URL}/ko/server-sitemap-index.xml`,
      `${SITEMAP_URL}/en/server-sitemap-index.xml`,
    ],
  },
};
