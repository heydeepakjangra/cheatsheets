import { CheatsheetCard } from '@/components/cheatsheets/cheatsheet-card';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { PAGES } from '@/lib/constants/pages';
import type { Page } from '@/lib/source';
import { ArrowRight } from 'lucide-react';

export default function Cheatsheets({ cheatsheets }: { cheatsheets: Page[] }) {
  return (
    <Section>
      <div className='divide-y divide-dashed divide-border/70 text-left dark:divide-border'>
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
        <div className='flex items-center justify-center py-8'>
          <Button variant='outline' asChild>
            <a
              href={PAGES.home.cheatsheets.viewAllHref}
              className='group inline-flex items-center gap-2'
            >
              {PAGES.home.cheatsheets.viewAllText}
              <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
