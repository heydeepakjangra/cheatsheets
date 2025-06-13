import { URLS } from './index';

export const PAGES = {
  home: {
    cheatsheets: {
      title: 'Latest Cheatsheets',
      viewAllText: 'View All Cheatsheets',
      viewAllHref: URLS.cheatsheets,
    },
    cta: {
      title: 'Thanks for Reading!',
      description:
        'Hope these cheatsheets help you in your development journey.',
    },
  },
  cheatsheets: {
    title: 'All Cheatsheets',
    description:
      'Browse our comprehensive collection of software engineering cheatsheets',
  },
  tags: {
    title: 'Browse by Tags',
    description: 'Find cheatsheets organized by technology and topic',
  },
  footer: {
    description:
      'Your go-to resource for quick reference guides on essential development tools and technologies.',
    sections: {
      navigation: 'Quick Links',
      recent: 'Recent Cheatsheets',
    },
  },
} as const;
