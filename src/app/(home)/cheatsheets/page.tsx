import { cheatsheetsPerPage } from '@/app/layout.config';
import { CheatsheetCard } from '@/components/cheatsheets/cheatsheet-card';
import { NumberedPagination } from '@/components/numbered-pagination';
import { Section } from '@/components/section';
import { PAGES } from '@/lib/constants/pages';
import { createMetadata } from '@/lib/metadata';
import { getSortedByDateCheatsheets } from '@/lib/source';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound, redirect } from 'next/navigation';

export const dynamicParams = false;

const totalCheatsheets = getSortedByDateCheatsheets().length;
const pageCount = Math.ceil(totalCheatsheets / cheatsheetsPerPage);

const CurrentCheatsheetsCount = ({
  startIndex,
  endIndex,
}: {
  startIndex: number;
  endIndex: number;
}) => {
  const start = startIndex + 1;
  const end = endIndex < totalCheatsheets ? endIndex : totalCheatsheets;
  if (start === end) return <span>({start})</span>;
  return (
    <span>
      ({start}-{end})
    </span>
  );
};

const Pagination = ({ pageIndex }: { pageIndex: number }) => {
  const handlePageChange = async (page: number) => {
    'use server';
    redirect(`/cheatsheets?page=${page}`);
  };

  return (
    <Section className='bg-dashed'>
      <NumberedPagination
        currentPage={pageIndex + 1}
        totalPages={pageCount}
        paginationItemsToDisplay={5}
        onPageChange={handlePageChange}
      />
    </Section>
  );
};

export default async function Page(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const pageIndex = searchParams.page
    ? Number.parseInt(searchParams.page[0] ?? '', 10) - 1
    : 0;
  if (pageIndex < 0 || pageIndex >= pageCount) notFound();

  const startIndex = pageIndex * cheatsheetsPerPage;
  const endIndex = startIndex + cheatsheetsPerPage;
  const cheatsheets = getSortedByDateCheatsheets().slice(startIndex, endIndex);

  return (
    <>
      <Section className='p-4 lg:p-6'>
        <h1 className='font-bold text-3xl leading-tight tracking-tighter md:text-4xl'>
          {PAGES.cheatsheets.title} ({totalCheatsheets}){' '}
          <CurrentCheatsheetsCount
            startIndex={startIndex}
            endIndex={endIndex}
          />
        </h1>
        <p className='mt-2 text-muted-foreground'>
          {PAGES.cheatsheets.description}
        </p>
      </Section>
      <Section className='h-full' sectionClassName='flex flex-1'>
        <div className='grid divide-y divide-dashed divide-border/70 text-left dark:divide-border'>
          {cheatsheets.map((cheatsheet) => {
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
      {pageCount > 1 && <Pagination pageIndex={pageIndex} />}
    </>
  );
}

export const generateStaticParams = () => {
  const slugs = Array.from({ length: pageCount }, (_, index) => ({
    slug: [(index + 1).toString()],
  }));

  return [{ slug: [] }, ...slugs];
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
  const searchParams = await props.searchParams;

  const pageIndex = searchParams.page
    ? Number.parseInt(searchParams.page as string, 10)
    : 1;

  const isFirstPage = pageIndex === 1 || !searchParams.page;
  const pageTitle = isFirstPage
    ? 'Cheatsheets'
    : `Cheatsheets - Page ${pageIndex}`;
  const canonicalUrl = isFirstPage
    ? '/cheatsheets'
    : `/cheatsheets?page=${pageIndex}`;

  return createMetadata({
    title: pageTitle,
    description: `Cheatsheets${!isFirstPage ? ` - Page ${pageIndex}` : ''}`,
    openGraph: {
      url: canonicalUrl,
    },
    alternates: {
      canonical: canonicalUrl,
    },
  });
}
