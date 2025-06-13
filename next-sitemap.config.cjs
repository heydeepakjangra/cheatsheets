const siteUrl =
  process.env.NODE_ENV === 'development' ||
  !process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? 'https://localhost:3000'
    : `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteUrl,
  generateRobotsTxt: false,
  generateIndexSitemap: true,
  exclude: [
    '/api/*',
    '/admin/*',
    '/_next/*',
    '/404',
    '/500',
    '/server-sitemap.xml',
  ],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/cheatsheets'),
    await config.transform(config, '/tags'),
    await config.transform(config, '/about'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`, `${siteUrl}/rss.xml`],
  },
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/cheatsheets/')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/cheatsheets' || path === '/tags') {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
