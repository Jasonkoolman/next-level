import React from 'react';

import { classNames } from '@nxl/site/common';

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
  | 'span'
  | 'div';

export type TextProps<TAs extends Tags = 'p'> = {
  as?: TAs;
  children: React.ReactNode;
} & JSX.IntrinsicElements[TAs];

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ as: Tag = 'p', className, children, ...props }, ref) => {
    return (
      <Tag className={classNames(className)} ref={ref} {...props}>
        {children}
      </Tag>
    );
  }
);

Text.displayName = 'Text';

export { Text };
