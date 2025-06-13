export const SITE = {
  name: 'Cheatsheets',
  title: 'Cheatsheets',
  description:
    'Comprehensive developer cheatsheets for Git, Docker, cURL, JavaScript, Python, and more. Quick reference guides, commands, and best practices for software engineers and developers.',
  url: 'https://cheatsheets.deepakjangra.com',
  domain: 'cheatsheets.deepakjangra.com',
  author: {
    name: 'Deepak Jangra',
    email: 'hello@deepakjangra.com',
    twitter: '@heydeepakjangra',
    github: 'https://github.com/heydeepakjangra/cheatsheets',
    website: 'https://deepakjangra.com',
  },
} as const;

export const URLS = {
  home: '/',
  about: '/about',
  cheatsheets: '/cheatsheets',
  tags: '/tags',
  rss: '/rss.xml',
  sitemap: '/sitemap.xml',
} as const;

export const NAVIGATION = {
  items: [
    { name: 'Cheatsheets', href: URLS.cheatsheets },
    { name: 'Tags', href: URLS.tags },
  ],
} as const;

export const PAGINATION = {
  cheatsheetsPerPage: 5,
} as const;

export const SEO = {
  defaultTitle: 'Cheatsheets - Developer Cheatsheets & Quick Reference Guides',
  titleTemplate: '%s | Cheatsheets - Developer Reference',
  defaultDescription:
    'Comprehensive developer cheatsheets for Git, Docker, cURL, JavaScript, Python, and more. Quick reference guides, commands, and best practices for software engineers and developers.',
  keywords: [
    // Primary keywords
    'cheatsheets',
    'developer cheatsheets',
    'programming cheatsheets',
    'quick reference guides',
    'developer reference',
    'coding cheatsheets',

    // Tool-specific keywords
    'git cheatsheet',
    'docker cheatsheet',
    'curl cheatsheet',
    'javascript cheatsheet',
    'python cheatsheet',
    'linux commands',
    'terminal commands',

    // Long-tail keywords
    'git commands cheatsheet',
    'docker commands reference',
    'curl examples and usage',
    'software engineering reference',
    'developer tools guide',
    'programming quick reference',
    'command line cheatsheet',
    'devops cheatsheets',

    // Intent-based keywords
    'how to use git',
    'docker tutorial',
    'curl examples',
    'programming help',
    'developer documentation',
    'coding reference',
    'software development guide',

    // Technical keywords
    'version control',
    'containerization',
    'http requests',
    'api testing',
    'web development',
    'backend development',
    'frontend development',
    'full stack development',
  ],
} as const;
