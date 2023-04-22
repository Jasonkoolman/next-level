import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { classNames } from '@nxl/site/common';

const headingVariants = cva('font-bold tracking-tight', {
  variants: {
    variant: {
      gradient:
        'text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500',
    },
    size: {
      'sm': 'text-sm',
      'md': 'text-md',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
    },
  },
});

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const tagSizes = {
  h1: 'text-5xl',
  h2: 'text-4xl',
  h3: 'text-3xl',
  h4: 'text-2xl',
  h5: 'text-xl',
  h6: 'text-lg',
};

export type HeadingProps<TAs extends Tags> = {
  as: TAs;
  children: React.ReactNode;
} & JSX.IntrinsicElements[TAs] &
  VariantProps<typeof headingVariants>;

export const Heading = React.forwardRef(
  <TAs extends Tags>(
    props: HeadingProps<TAs>,
    ref: React.ForwardedRef<JSX.IntrinsicElements[TAs]>
  ) => {
    const { as: Tag, variant, size, className, children, ...rest } = props;

    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <Tag
        className={classNames(
          tagSizes[Tag],
          headingVariants({ variant, size }),
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = 'Heading';
