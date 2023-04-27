import Link from 'next/link';
import { ArrowRightIcon, ChevronRightIcon } from 'lucide-react';

import { siteConfig } from '@nxl/site/common';
import { Badge } from '@nxl/site/ui/badge';
import { Button } from '@nxl/site/ui/button';
import { Heading, Text } from '@nxl/site/ui/typography';
import { Container } from './layout/container';

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-16">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-slate-200 dark:stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="block-pattern"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#block-pattern)"
        />
      </svg>
      <div
        className="hidden lg:block absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] dark:to-primary-500 opacity-10"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
      <Container className="py-24 sm:py-32 lg:flex lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex space-x-6"
          >
            <Badge>Open source</Badge>
            <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-muted-foreground">
              <span>Start contributing</span>
              <ChevronRightIcon size={14} aria-hidden="true" />
            </span>
          </a>
          <Heading as="h1" size="6xl" className="mt-10">
            Next level web application
          </Heading>
          <Text size="lg" variant="muted" className="mt-6">
            This project is an experiment to see how a modern app using features
            such as Server Components, static pages, auth, type safety and API
            routes would work in Next.js 13.
          </Text>
          <div className="mt-10 flex items-center gap-x-3">
            <Button
              as={Link as unknown as 'a'}
              variant="primary"
              size="lg"
              href="/login"
            >
              Get started
            </Button>
            <Button
              as="a"
              variant="link"
              size="lg"
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Github
              <ArrowRightIcon size={14} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
