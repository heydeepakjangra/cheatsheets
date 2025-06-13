import { Section } from '@/components/section';
import { PAGES } from '@/lib/constants/pages';
import Balancer from 'react-wrap-balancer';

export function CTA() {
  return (
    <Section className='py-8 sm:py-12'>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='font-bold text-xl tracking-tight sm:text-2xl lg:text-3xl'>
          <Balancer>{PAGES.home.cta.title}</Balancer>
        </h2>
        <p className='mt-3 text-muted-foreground sm:text-base'>
          <Balancer>{PAGES.home.cta.description}</Balancer>
        </p>
      </div>
    </Section>
  );
}
