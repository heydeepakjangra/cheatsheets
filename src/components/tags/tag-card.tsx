import { getCheatsheetsByTag } from '@/lib/source';
import { cn } from '@/lib/utils';
import { Hash } from 'lucide-react';
import Link from 'next/link';

interface TagCardProps {
  name: string;
  className?: string;
}

export const TagCard = ({ name, className }: TagCardProps) => {
  const cheatsheets = getCheatsheetsByTag(name);

  return (
    <Link
      href={`/tags/${name}`}
      className={cn(
        'group inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-1 text-card-foreground text-sm transition-colors hover:bg-accent hover:text-accent-foreground',
        className,
      )}
    >
      <Hash className='size-3' />
      <span>{name}</span>
      <span className='ml-auto text-muted-foreground'>
        ({cheatsheets.length})
      </span>
    </Link>
  );
};
