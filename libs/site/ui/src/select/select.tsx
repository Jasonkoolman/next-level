'use client';

import * as React from 'react';
import * as Primitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';

import { classNames } from '@nxl/site/common';

const Select = Primitive.Root;

const SelectGroup = Primitive.Group;

const SelectValue = Primitive.Value;

/**
 * Trigger
 */

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof Primitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof Primitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <Primitive.Trigger
    ref={ref}
    className={classNames(
      'flex h-10 w-full items-center justify-between rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
      className
    )}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 opacity-50" />
  </Primitive.Trigger>
));

SelectTrigger.displayName = Primitive.Trigger.displayName;

/**
 * Content
 */

const SelectContent = React.forwardRef<
  React.ElementRef<typeof Primitive.Content>,
  React.ComponentPropsWithoutRef<typeof Primitive.Content>
>(({ className, children, ...props }, ref) => (
  <Primitive.Portal>
    <Primitive.Content
      ref={ref}
      className={classNames(
        'relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white text-slate-700 shadow-md animate-in fade-in-80 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400',
        className
      )}
      {...props}
    >
      <Primitive.Viewport className="p-1">{children}</Primitive.Viewport>
    </Primitive.Content>
  </Primitive.Portal>
));

SelectContent.displayName = Primitive.Content.displayName;

/**
 * Label
 */

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof Primitive.Label>,
  React.ComponentPropsWithoutRef<typeof Primitive.Label>
>(({ className, ...props }, ref) => (
  <Primitive.Label
    ref={ref}
    className={classNames(
      'py-1.5 pl-8 pr-2 text-sm font-semibold text-slate-900 dark:text-slate-300',
      className
    )}
    {...props}
  />
));

SelectLabel.displayName = Primitive.Label.displayName;

/**
 * Item
 */

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Primitive.Item>,
  React.ComponentPropsWithoutRef<typeof Primitive.Item>
>(({ className, children, ...props }, ref) => (
  <Primitive.Item
    ref={ref}
    className={classNames(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Primitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </Primitive.ItemIndicator>
    </span>

    <Primitive.ItemText>{children}</Primitive.ItemText>
  </Primitive.Item>
));

SelectItem.displayName = Primitive.Item.displayName;

/**
 * Separator
 */

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof Primitive.Separator>,
  React.ComponentPropsWithoutRef<typeof Primitive.Separator>
>(({ className, ...props }, ref) => (
  <Primitive.Separator
    ref={ref}
    className={classNames(
      '-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700',
      className
    )}
    {...props}
  />
));

SelectSeparator.displayName = Primitive.Separator.displayName;

export {
  Select as Root,
  SelectGroup as Group,
  SelectValue as Value,
  SelectTrigger as Trigger,
  SelectContent as Content,
  SelectLabel as Label,
  SelectItem as Item,
  SelectSeparator as Separator,
};
