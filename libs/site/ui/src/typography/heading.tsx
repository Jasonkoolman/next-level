import React from 'react';

import { classNames } from '@nxl/site/common';

type Tags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps<TAs extends Tags = 'h1'> = {
  as: TAs;
  children: React.ReactNode;
} & JSX.IntrinsicElements[TAs];

const Heading = React.forwardRef<HTMLParagraphElement, HeadingProps>(
  ({ as: Tag, className, children, ...props }, ref) => {
    return (
      <Tag
        className={classNames(
          'text-4xl lg:text-5xl font-bold tracking-tight',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Heading.displayName = 'Heading';

export { Heading };
