import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';

import { siteConfig } from '@nxl/site/common';
import { buttonVariants } from '@nxl/site/ui/button';
import { Heading, Text } from '@nxl/site/ui/typography';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 dark:from-indigo-900/20">
      <div className="container sm:px-0 lg:px-8 pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:py-40">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <Heading as="h1" size="6xl" className="mt-10">
                Next Level web application
              </Heading>
              <Text size="lg" variant="muted" className="mt-6">
                A production grade, open source application based on the latest
                technologies the web has to offer.
              </Text>
              <div className="mt-10 flex items-center gap-x-2">
                <Link
                  href="login"
                  className={buttonVariants({
                    variant: 'primary',
                  })}
                >
                  Explore
                </Link>
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({
                    variant: 'link',
                    className: 'gap-1',
                  })}
                >
                  View on GitHub <ChevronRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 dark:ring-indigo-900 md:-mr-20 lg:-mr-36"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white dark:from-gray-900 sm:h-32" />
    </div>
  );
}
