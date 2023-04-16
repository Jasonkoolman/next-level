'use client';

import * as React from 'react';
import * as Primitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { classNames } from '@nxl/site/common';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof Primitive.Root>,
  React.ComponentPropsWithoutRef<typeof Primitive.Root>
>(({ className, ...props }, ref) => (
  <Primitive.Root
    ref={ref}
    className={classNames(
      'peer h-4 w-4 shrink-0 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
      className
    )}
    {...props}
  >
    <Primitive.Indicator
      className={classNames('flex items-center justify-center')}
    >
      <Check className="h-4 w-4" />
    </Primitive.Indicator>
  </Primitive.Root>
));

Checkbox.displayName = Primitive.Root.displayName;

export { Checkbox };
