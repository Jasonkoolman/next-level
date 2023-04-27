import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { VariantProps, cva } from 'class-variance-authority';

import { classNames } from '@nxl/site/common';

const headingVariants = cva('font-bold tracking-tight', {
  variants: {
    variant: {
      primary: 'text-primary-foreground',
      muted: 'text-muted-foreground',
    },
    size: {
      'lg': 'text-md sm:text-lg',
      'xl': 'text-lg sm:text-xl',
      '2xl': 'text-xl sm:text-2xl',
      '3xl': 'text-2xl sm:text-3xl',
      '4xl': 'text-3xl sm:text-4xl',
      '5xl': 'text-4xl sm:text-5xl',
      '6xl': 'text-4xl sm:text-5xl lg:text-6xl',
    },
  },
});

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = {
  as: Tags;
  children: React.ReactNode;
} & VariantProps<typeof headingVariants>;

type PolymorphicHeading = Polymorphic.ForwardRefComponent<'h1', HeadingProps>;

export const Heading = React.forwardRef((props, ref) => {
  const { as: Tag, variant, size, className, ...rest } = props;

  return (
    <Tag
      className={classNames(headingVariants({ variant, size }), className)}
      ref={ref}
      {...rest}
    />
  );
}) as PolymorphicHeading;

Heading.displayName = 'Heading';
