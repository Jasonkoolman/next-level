import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { classNames } from '@nxl/site/common';

const textVariants = cva(undefined, {
  variants: {
    variant: {
      muted: 'text-muted',
    },
    size: {
      'sm': 'text-sm',
      'md': undefined,
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type Tags =
  | 'p'
  | 'b'
  | 'u'
  | 's'
  | 'abbr'
  | 'del'
  | 'em'
  | 'ins'
  | 'kbd'
  | 'mark'
  | 'samp'
  | 'sub'
  | 'sup'
  | 'span';

export type TextProps<TAs extends Tags = 'p'> = {
  as?: TAs;
  children: React.ReactNode;
} & JSX.IntrinsicElements[TAs] &
  VariantProps<typeof textVariants>;

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ as: Tag = 'p', variant, size, className, children, ...props }, ref) => {
    return (
      <Tag
        className={classNames(textVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Text.displayName = 'Text';

export { Text, textVariants };
