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
      'md': 'text-md',
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

export type TextProps<TAs extends Tags> = {
  as?: TAs;
  children: React.ReactNode;
} & JSX.IntrinsicElements[TAs] &
  VariantProps<typeof textVariants>;

const Text = React.forwardRef(
  <TAs extends Tags = 'p'>(
    props: TextProps<TAs>,
    ref: React.ForwardedRef<JSX.IntrinsicElements[TAs]>
  ) => {
    const {
      as: Tag = 'p',
      variant,
      size,
      className,
      children,
      ...rest
    } = props;

    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <Tag
        className={classNames(textVariants({ variant, size }), className)}
        ref={ref}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);

Text.displayName = 'Text';

export { Text, textVariants };
