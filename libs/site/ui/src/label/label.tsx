'use client';

import * as React from 'react';
import * as Primitive from '@radix-ui/react-label';

import { classNames } from '@nxl/site/common';

const Label = React.forwardRef<
  React.ElementRef<typeof Primitive.Root>,
  React.ComponentPropsWithoutRef<typeof Primitive.Root>
>(({ className, ...props }, ref) => (
  <Primitive.Root
    ref={ref}
    className={classNames(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className
    )}
    {...props}
  />
));

Label.displayName = Primitive.Root.displayName;

export { Label };
