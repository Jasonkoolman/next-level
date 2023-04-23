import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { VariantProps, cva } from 'class-variance-authority';

import { classNames } from '@nxl/site/common';

const headingVariants = cva('font-bold tracking-tight', {
  variants: {
    variant: {
      primary: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      accent: 'text-accent-foreground',
      muted: 'text-muted-foreground',
      gradient:
        'text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500',
    },
    size: {
      'lg': 'text-md sm:text-lg',
      'xl': 'text-lg sm:text-xl',
      '2xl': 'text-xl sm:text-2xl',
      '3xl': 'text-2xl sm:text-3xl',
      '4xl': 'text-3xl sm:text-4xl',
      '5xl': 'text-4xl sm:text-5xl',
      '6xl': 'text-4xl sm:text-5xl lg:text-6xl',
      '7xl': 'text-5xl sm:text-6xl lg:text-7xl',
      '8xl': 'text-5xl sm:text-8xl lg:text-8xl',
    },
  },
});

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const tagSizes: Record<Tags, HeadingProps['size']> = {
  h1: '5xl',
  h2: '4xl',
  h3: '3xl',
  h4: '2xl',
  h5: 'xl',
  h6: 'lg',
};

export type HeadingProps = {
  as: Tags;
  children: React.ReactNode;
} & VariantProps<typeof headingVariants>;

type PolymorphicHeading = Polymorphic.ForwardRefComponent<'h1', HeadingProps>;

export const Heading = React.forwardRef((props, ref) => {
  const {
    as: Tag,
    variant,
    size = tagSizes[props.as],
    className,
    children,
    ...rest
  } = props;

  return (
    <Tag
      className={classNames(headingVariants({ variant, size }), className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Tag>
  );
}) as PolymorphicHeading;

Heading.displayName = 'Heading';
