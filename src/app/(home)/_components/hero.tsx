import { baseOptions, linkItems } from '@/app/layout.config';
import { Icons } from '@/components/icons/icons';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/components/ui/button';
import { HERO } from '@/lib/constants/hero';
import { cn } from '@/lib/utils';
import { getLinks } from 'fumadocs-ui/layouts/shared';
import { ArrowRight } from 'lucide-react';
import * as motion from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import heroImage from '../../../../public/images/gradient-noise-purple-azure-light.png';

const Hero = () => {
  const links = getLinks(linkItems, baseOptions.githubUrl);
  const navItems = links.filter((item) =>
    ['nav', 'all'].includes(item.on ?? 'all'),
  );

  return (
    <Section className='relative flex flex-col items-center justify-center gap-4 overflow-hidden bg-dashed px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className='-z-10 absolute inset-0 h-full w-full'
      >
        <Image
          src={heroImage}
          alt='Hero Background'
          height={600}
          width={704}
          className='pointer-events-none absolute right-0 bottom-0 h-[600px] w-[800px] max-w-none translate-x-1/3 translate-y-1/3 select-none opacity-60 sm:h-[700px] sm:w-[900px] sm:translate-x-1/2 sm:translate-y-1/2 md:h-[800px] md:w-[1000px] lg:h-[900px] lg:w-[1100px] dark:opacity-80'
          priority
        />
      </motion.div>

      <div className='flex items-center justify-center space-x-2'>
        <Icons.cheatsheets className='h-4 w-4 text-primary transition-transform hover:scale-125 sm:h-5 sm:w-5' />
        <span className='font-medium text-muted-foreground text-xs sm:text-sm'>
          {HERO.badge.text}
        </span>
      </div>

      <h1 className='max-w-xl text-center font-bold text-2xl leading-tight tracking-tighter sm:max-w-2xl sm:text-3xl sm:leading-tight md:max-w-3xl md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight'>
        <Balancer>{HERO.title}</Balancer>
      </h1>

      <p className='max-w-md text-center text-muted-foreground text-sm sm:max-w-lg sm:text-base md:max-w-xl'>
        <Balancer>{HERO.subtitle}</Balancer>
      </p>

      <div className='flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4'>
        <div className='flex flex-col gap-2 sm:flex-row sm:gap-3'>
          <Button asChild className='w-full sm:w-auto'>
            <Link
              href={HERO.cta.primary.href}
              className='group inline-flex items-center justify-center gap-2'
            >
              {HERO.cta.primary.text}
              <ArrowRight className='size-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </Button>

          <Button variant='outline' asChild className='w-full sm:w-auto'>
            <Link
              href={HERO.cta.secondary.href}
              className='inline-flex items-center justify-center gap-2'
            >
              {HERO.cta.secondary.text}
            </Link>
          </Button>
        </div>

        <div className='flex items-center space-x-2 sm:space-x-3'>
          {navItems
            .filter((item) => item.type === 'icon')
            .map((item, i) => (
              <Link
                key={i.toString()}
                href={item.url}
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    size: 'sm',
                  }),
                  'rounded-full hover:bg-accent',
                )}
              >
                {item.icon}
                <span className='sr-only'>{item.text}</span>
              </Link>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Hero;
