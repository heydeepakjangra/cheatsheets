import { ActiveLink } from '@/components/active-link';
import { Icons } from '@/components/icons/icons';
import { Section } from '@/components/section';
import { NAVIGATION, SITE, URLS } from '@/lib/constants/index';
import { PAGES } from '@/lib/constants/pages';
import { getSortedByDateCheatsheets } from '@/lib/source';
import Link from 'next/link';
import type React from 'react';

export const Footer = (): React.ReactElement => {
  const currentYear = new Date().getFullYear();
  const recentCheatsheets = getSortedByDateCheatsheets().slice(0, 4);

  return (
    <>
      <Section className='px-4 py-12 lg:px-6 lg:py-12'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {/* Brand Section */}
          <div className='lg:col-span-1'>
            <Link
              href={URLS.home}
              className='mb-4 inline-flex items-center gap-2 font-bold text-foreground text-xl transition-colors hover:text-primary'
            >
              <Icons.cheatsheets className='h-6 w-6' />
              {SITE.title}
            </Link>
            <p className='mb-6 max-w-sm text-muted-foreground text-sm leading-relaxed'>
              {PAGES.footer.description}
            </p>
            <div className='flex items-center gap-4'>
              <Link
                href={SITE.author.github}
                className='rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='GitHub'
              >
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <title>GitHub</title>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
              </Link>
              <Link
                href={`https://twitter.com/${SITE.author.twitter.replace('@', '')}`}
                className='rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter'
              >
                <svg
                  className='h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <title>Twitter</title>
                  <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className='lg:col-span-1'>
            <h3 className='mb-4 font-semibold text-foreground text-sm uppercase tracking-wide'>
              {PAGES.footer.sections.navigation}
            </h3>
            <ul className='space-y-3'>
              <li>
                <ActiveLink
                  href={URLS.about}
                  className='text-muted-foreground text-sm transition-colors hover:text-foreground'
                >
                  About
                </ActiveLink>
              </li>
              {NAVIGATION.items.map((item, i) => (
                <li key={i.toString()}>
                  <ActiveLink
                    href={item.href}
                    className='text-muted-foreground text-sm transition-colors hover:text-foreground'
                  >
                    {item.name}
                  </ActiveLink>
                </li>
              ))}
              <li>
                <ActiveLink
                  href={URLS.rss}
                  className='text-muted-foreground text-sm transition-colors hover:text-foreground'
                >
                  RSS Feed
                </ActiveLink>
              </li>
            </ul>
          </div>

          {/* Recent Cheatsheets Section */}
          <div className='lg:col-span-1'>
            <h3 className='mb-4 font-semibold text-foreground text-sm uppercase tracking-wide'>
              {PAGES.footer.sections.recent}
            </h3>
            <ul className='space-y-3'>
              {recentCheatsheets.map((cheatsheet, i) => (
                <li key={cheatsheet.url}>
                  <ActiveLink
                    href={cheatsheet.url}
                    className='text-muted-foreground text-sm transition-colors hover:text-foreground'
                  >
                    {cheatsheet.data.title}
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Full-width copyright section with border extending to screen edges */}
      <div className='w-full border-border/70 border-t border-dashed dark:border-border'>
        <div className='container mx-auto border-border/70 border-dashed px-4 sm:border-x lg:px-6 dark:border-border'>
          <div className='py-6 text-center'>
            <p className='text-muted-foreground text-sm'>
              © {currentYear}{' '}
              <Link
                href={SITE.author.website}
                className='text-muted-foreground underline transition-colors hover:text-foreground hover:no-underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                {SITE.author.name}
              </Link>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
