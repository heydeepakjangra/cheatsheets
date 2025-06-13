import { SITE } from '@/lib/constants/index';
import { getCheatsheets } from '@/lib/source';
import { Feed } from 'feed';

const baseUrl = new URL(
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : SITE.url,
);

export function GET() {
  const feed = new Feed({
    title: SITE.title,
    description: SITE.description,
    id: baseUrl.href,
    link: baseUrl.href,
    language: 'en',
    image: new URL('/icon.png', baseUrl.href).href,
    favicon: new URL('/icon.png', baseUrl.href).href,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    updated: new Date(),
    generator: 'Next.js using Feed for Node.js',
    feedLinks: {
      rss2: new URL('/rss.xml', baseUrl.href).href,
      json: new URL('/rss.json', baseUrl.href).href,
      atom: new URL('/atom.xml', baseUrl.href).href,
    },
    author: {
      name: SITE.author.name,
      email: SITE.author.email,
      link: SITE.author.website,
    },
  });

  const cheatsheets = getCheatsheets();
  for (const cheatsheet of cheatsheets) {
    feed.addItem({
      title: cheatsheet.data.title,
      description: cheatsheet.data.description,
      link: new URL(cheatsheet.url, baseUrl).href,
      content: cheatsheet.data.description || cheatsheet.data.title,
      image: cheatsheet.data.image
        ? new URL(`/og/${cheatsheet.slugs.join('/')}/image.png`, baseUrl.href)
            .href
        : undefined,
      guid: new URL(cheatsheet.url, baseUrl).href,
      date: cheatsheet.data.date,
      author: [
        {
          name: cheatsheet.data.author,
        },
      ],
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
