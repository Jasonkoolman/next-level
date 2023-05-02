import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import { classNames } from '@nxl/site/common';

type Tags = 'div' | 'article' | 'section';

export type ProseProps = {
  as?: Tags;
  children: React.ReactNode;
};

type PolymorphicProse = Polymorphic.ForwardRefComponent<'h1', ProseProps>;

export const Prose = React.forwardRef((props, ref) => {
  const { as: Tag = 'div', className, ...rest } = props;

  return (
    <Tag
      className={classNames(
        'prose prose-slate dark:prose-invert max-w-none',
        className
      )}
      ref={ref}
      {...rest}
    />
  );
}) as PolymorphicProse;

Prose.displayName = 'Prose';
