import Cheatsheets from '@/app/(home)/_components/cheatsheets';
import Hero from '@/app/(home)/_components/hero';
import { Icons } from '@/components/icons/icons';
import { Section } from '@/components/section';
import Separator from '@/components/separator';
import { SEO, SITE } from '@/lib/constants/index';
import { PAGES } from '@/lib/constants/pages';
import { createMetadata } from '@/lib/metadata';
import { getSortedByDateCheatsheets } from '@/lib/source';
import type { Metadata } from 'next';
import { CTA } from './_components/call-to-action';

export const metadata: Metadata = createMetadata({
  title: SEO.defaultTitle,
  description: SEO.defaultDescription,
  keywords: [...SEO.keywords],
  openGraph: {
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    url: SITE.url,
    type: 'website',
    images: ['/images/og-default.png'],
  },
  twitter: {
    title: SEO.defaultTitle,
    description: SEO.defaultDescription,
    images: ['/images/og-default.png'],
  },
  alternates: {
    canonical: '/',
  },
});

export default function Home() {
  const cheatsheets = getSortedByDateCheatsheets().slice(0, 3);

  return (
    <>
      <Hero />
      <Section className='py-6 sm:py-8'>
        <h2 className='text-center font-semibold text-xl sm:text-2xl md:text-3xl'>
          <span className='inline-flex items-center gap-2'>
            {PAGES.home.cheatsheets.title}{' '}
            <Icons.cheatsheets className='size-6 fill-fd-primary/30 text-fd-primary transition-transform hover:rotate-12 hover:scale-125 sm:size-7' />
          </span>
        </h2>
      </Section>
      <Separator />
      <Cheatsheets cheatsheets={cheatsheets} />
      <Separator />
      <CTA />
    </>
  );
}
