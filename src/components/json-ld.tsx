import { SITE } from '@/lib/constants/index';
import type { Cheatsheet } from '@/lib/source';
import type { BlogPosting, BreadcrumbList, Graph } from 'schema-dts';

export const CheatsheetJsonLd = ({ page }: { page: Cheatsheet }) => {
  if (!page) {
    return null;
  }

  const url = new URL(page.url, SITE.url);

  const cheatsheet: BlogPosting = {
    '@type': 'BlogPosting',
    headline: page.data.title,
    description: page.data.description,
    image: page.data.image
      ? new URL(page.data.image, SITE.url).href
      : undefined,
    datePublished: page.data.date.toISOString(),
    dateModified: page.data.lastModified
      ? new Date(page.data.lastModified).toISOString()
      : page.data.date.toISOString(),
    author: {
      '@type': 'Person',
      name: page.data.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.title,
      logo: {
        '@type': 'ImageObject',
        url: new URL('/icon.png', SITE.url).href,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url.href,
    },
    url: url.href,
  };

  const breadcrumbList: BreadcrumbList = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: SITE.title,
        item: SITE.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `${SITE.title} | Cheatsheets`,
        item: new URL('/cheatsheets', SITE.url).href,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: page.data.title,
        item: url.href,
      },
    ],
  };

  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [cheatsheet, breadcrumbList],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export const TagJsonLd = ({ tag }: { tag: string }) => {
  const url = new URL(`/tags/${tag}`, SITE.url);

  const breadcrumbList: BreadcrumbList = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: SITE.title,
        item: SITE.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `${SITE.title} | Cheatsheets tagged with ${tag}`,
        item: url.href,
      },
    ],
  };

  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [breadcrumbList],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
