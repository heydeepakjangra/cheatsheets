import type { Metadata } from 'next/types';
import { SITE } from './constants/index';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    metadataBase: new URL(SITE.url),
    authors: [{ name: SITE.author.name, url: SITE.author.website }],
    creator: SITE.author.name,
    publisher: SITE.author.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: override.openGraph?.url || SITE.url,
      title: override.title ?? SITE.title,
      description: override.description ?? SITE.description,
      siteName: SITE.title,
      images: override.openGraph?.images || ['/images/og-default.png'],
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE.author.twitter,
      creator: SITE.author.twitter,
      title: override.title ?? SITE.title,
      description: override.description ?? SITE.description,
      images: override.twitter?.images || ['/images/og-default.png'],
      ...override.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: override.alternates?.canonical || '/',
      types: {
        'application/rss+xml': [
          { url: '/rss.xml', title: `${SITE.title} RSS Feed` },
        ],
      },
      ...override.alternates,
    },
    category: 'technology',
  };
}
