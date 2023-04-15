'use client';

import * as React from 'react';
import * as Primitive from '@radix-ui/react-tooltip';

import { classNames } from '@nxl/site/common';

type TooltipProps = Primitive.TooltipProps &
  Pick<Primitive.TooltipProviderProps, 'skipDelayDuration'>;

const Tooltip = ({ skipDelayDuration, ...props }: TooltipProps) => (
  <Primitive.Provider skipDelayDuration={skipDelayDuration}>
    <Primitive.Root {...props} />
  </Primitive.Provider>
);

Tooltip.displayName = Primitive.Tooltip.displayName;

const TooltipTrigger = Primitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof Primitive.Content>,
  React.ComponentPropsWithoutRef<typeof Primitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Primitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={classNames(
      'animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=top]:slide-in-from-bottom-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 z-50 overflow-hidden rounded-md border border-slate-100 bg-white px-3 py-1.5 text-sm text-slate-700 shadow-md dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400',
      className
    )}
    {...props}
  />
));

TooltipContent.displayName = Primitive.Content.displayName;

export {
  Tooltip as Root,
  TooltipTrigger as Trigger,
  TooltipContent as Content,
};
