import { URLS } from './index';

export const HERO = {
  badge: {
    text: 'Software Engineering Cheatsheets',
    icon: 'code',
  },
  title: 'Quick Reference Guides for Developers',
  subtitle:
    'Master essential tools and technologies with our comprehensive cheatsheets. From Git commands to Docker containers, find everything you need in one place.',
  cta: {
    primary: {
      text: 'Browse Cheatsheets',
      href: URLS.cheatsheets,
    },
    secondary: {
      text: 'View All Tags',
      href: URLS.tags,
    },
  },
} as const;
