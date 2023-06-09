import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { VariantProps, cva } from 'class-variance-authority';

import { classNames } from '@nxl/site/common';

const textVariants = cva(undefined, {
  variants: {
    variant: {
      primary: 'text-primary-foreground',
      muted: 'text-muted-foreground',
      subtle: 'text-subtle-foreground',
    },
    size: {
      'sm': 'text-sm',
      'base': 'text-base',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
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

export type TextProps = {
  as?: Tags;
  children: React.ReactNode;
} & VariantProps<typeof textVariants>;

type PolymorphicText = Polymorphic.ForwardRefComponent<'p', TextProps>;

const Text = React.forwardRef((props, ref) => {
  const { as: Tag = 'p', variant, size, className, children, ...rest } = props;

  return (
    <Tag
      className={classNames(textVariants({ variant, size }), className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Tag>
  );
}) as PolymorphicText;

Text.displayName = 'Text';

export { Text, textVariants };
