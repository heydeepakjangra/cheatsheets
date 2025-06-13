import { cheatsheetsPerPage } from '@/app/layout.config';
import { CheatsheetCard } from '@/components/cheatsheets/cheatsheet-card';
import { NumberedPagination } from '@/components/numbered-pagination';
import { Section } from '@/components/section';
import { SITE } from '@/lib/constants/index';
import { createMetadata } from '@/lib/metadata';
import { getCheatsheetsByTag, getTags } from '@/lib/source';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound, redirect } from 'next/navigation';

export const dynamicParams = false;

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const tag = params.slug[0];
  if (!tag) notFound();

  const pageIndex = searchParams.page
    ? Number.parseInt(searchParams.page as string, 10) - 1
    : 0;

  const cheatsheets = getCheatsheetsByTag(tag);
  const pageCount = Math.ceil(cheatsheets.length / cheatsheetsPerPage);

  if (pageIndex < 0 || pageIndex >= pageCount) notFound();

  const startIndex = pageIndex * cheatsheetsPerPage;
  const endIndex = startIndex + cheatsheetsPerPage;
  const paginatedCheatsheets = cheatsheets.slice(startIndex, endIndex);

  const handlePageChange = async (page: number) => {
    'use server';
    redirect(`/tags/${tag}?page=${page}`);
  };

  return (
    <>
      <Section className='p-4 lg:p-6'>
        <h1 className='font-bold text-3xl leading-tight tracking-tighter md:text-4xl'>
          {tag} Cheatsheets ({cheatsheets.length})
        </h1>
        <p className='mt-2 text-muted-foreground'>
          Browse all cheatsheets tagged with "{tag}"
        </p>
      </Section>
      <Section className='h-full' sectionClassName='flex flex-1'>
        <div className='grid divide-y divide-dashed divide-border/70 text-left dark:divide-border'>
          {paginatedCheatsheets.map((cheatsheet) => {
            const date = new Date(cheatsheet.data.date).toDateString();
            return (
              <CheatsheetCard
                title={cheatsheet.data.title}
                description={cheatsheet.data.description ?? ''}
                image={cheatsheet.data.image}
                url={cheatsheet.url}
                date={date}
                key={cheatsheet.url}
                author={cheatsheet.data.author}
                tags={cheatsheet.data.tags}
              />
            );
          })}
        </div>
      </Section>
      {pageCount > 1 && (
        <Section className='bg-dashed'>
          <NumberedPagination
            currentPage={pageIndex + 1}
            totalPages={pageCount}
            paginationItemsToDisplay={5}
            onPageChange={handlePageChange}
          />
        </Section>
      )}
    </>
  );
}

export const generateStaticParams = () => {
  const tags = getTags();
  return tags.map((tag) => ({ slug: [tag] }));
};

type Props = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const params = await props.params;
  const tag = params.slug[0];

  if (!tag) notFound();

  return createMetadata({
    title: `${tag} Cheatsheets`,
    description: `Browse all ${tag} cheatsheets on ${SITE.title}. Quick reference guides for ${tag} development.`,
    openGraph: {
      url: `/tags/${tag}`,
    },
    alternates: {
      canonical: `/tags/${tag}`,
    },
  });
}
