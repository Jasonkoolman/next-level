'use client';

import * as React from 'react';
import * as Primitive from '@radix-ui/react-tabs';

import { classNames } from '@nxl/site/common';

const Tabs = Primitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof Primitive.List>,
  React.ComponentPropsWithoutRef<typeof Primitive.List>
>(({ className, ...props }, ref) => (
  <Primitive.List
    ref={ref}
    className={classNames(
      'inline-flex items-center justify-center rounded-md bg-slate-100 p-1 dark:bg-slate-800',
      className
    )}
    {...props}
  />
));

TabsList.displayName = Primitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof Primitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof Primitive.Trigger>
>(({ className, ...props }, ref) => (
  <Primitive.Trigger
    className={classNames(
      'inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5 text-sm font-medium text-slate-700 transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm dark:text-slate-200 dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-slate-100',
      className
    )}
    {...props}
    ref={ref}
  />
));

TabsTrigger.displayName = Primitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof Primitive.Content>,
  React.ComponentPropsWithoutRef<typeof Primitive.Content>
>(({ className, ...props }, ref) => (
  <Primitive.Content
    className={classNames(
      'mt-2 rounded-md border border-slate-200 p-6 dark:border-slate-700',
      className
    )}
    {...props}
    ref={ref}
  />
));

TabsContent.displayName = Primitive.Content.displayName;

export {
  Tabs as Root,
  TabsList as List,
  TabsTrigger as Trigger,
  TabsContent as Content,
};
