'use client';
import {
  UploadIcon as ShareIcon,
  type UploadIconHandle as ShareIconHandle,
} from '@/components/icons/animated/upload';
import { Icons } from '@/components/icons/icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { toast } from 'sonner';
import { useCopyToClipboard } from 'usehooks-ts';

export function Share({ url }: { url: string }): React.ReactElement {
  const iconRef = useRef<ShareIconHandle>(null);
  const [_, copyToClipboard] = useCopyToClipboard();

  const onClick = async (): Promise<void> => {
    await copyToClipboard(`${window.location.origin}${url}`);
    toast.success('Copied to clipboard!', {
      icon: <Icons.copied className='size-4' />,
      description: 'The cheatsheet link has been copied to your clipboard.',
    });
  };

  return (
    <Button
      className={cn('group gap-2')}
      variant={'secondary'}
      onClick={onClick}
      onMouseEnter={() => iconRef.current?.startAnimation?.()}
      onMouseLeave={() => iconRef.current?.stopAnimation?.()}
    >
      <ShareIcon className='size-4 hover:bg-transparent' ref={iconRef} />
      Share Cheatsheet
    </Button>
  );
}
