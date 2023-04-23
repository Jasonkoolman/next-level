'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { classNames } from '@nxl/site/common';

export type MainNavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

type MainNavProps = {
  items?: MainNavItem[];
  children?: React.ReactNode;
};

export function MainNav({ items = [], children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      {items.length && (
        <nav className="hidden gap-8 md:flex">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={classNames(
                'flex items-center text-lg font-semibold text-slate-600 sm:text-sm',
                item.href.startsWith(`/${segment}`) && 'text-slate-900',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
