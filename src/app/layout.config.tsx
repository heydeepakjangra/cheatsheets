import { Icons } from '@/components/icons/icons';
import { PAGINATION, SITE } from '@/lib/constants/index';
import type { LinkItemType } from 'fumadocs-ui/layouts/links';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const title = SITE.title;
export const description = SITE.description;
export const owner = SITE.author.name;

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className='flex items-center gap-2'>
        <Icons.cheatsheets className='h-5 w-5' />
        <span>{SITE.title}</span>
      </div>
    ),
  },
  githubUrl: SITE.author.github,
};

export const linkItems: LinkItemType[] = [
  {
    icon: <Icons.cheatsheets />,
    text: 'Cheatsheets',
    url: '/cheatsheets',
    active: 'url',
  },
  {
    icon: <Icons.tags />,
    text: 'Tags',
    url: '/tags',
    active: 'url',
  },
];

export const cheatsheetsPerPage = PAGINATION.cheatsheetsPerPage;
