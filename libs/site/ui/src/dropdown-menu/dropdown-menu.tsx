'use client';

import * as React from 'react';
import * as Primitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';

import { classNames } from '@nxl/site/common';

const DropdownMenu = Primitive.Root;

const DropdownMenuTrigger = Primitive.Trigger;

const DropdownMenuGroup = Primitive.Group;

const DropdownMenuPortal = Primitive.Portal;

const DropdownMenuSub = Primitive.Sub;

const DropdownMenuRadioGroup = Primitive.RadioGroup;

/**
 * SubTrigger
 */

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof Primitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof Primitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <Primitive.SubTrigger
    ref={ref}
    className={classNames(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-700 dark:data-[state=open]:bg-slate-700',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </Primitive.SubTrigger>
));

DropdownMenuSubTrigger.displayName = Primitive.SubTrigger.displayName;

/**
 * SubContent
 */

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof Primitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof Primitive.SubContent>
>(({ className, ...props }, ref) => (
  <Primitive.SubContent
    ref={ref}
    className={classNames(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md animate-in slide-in-from-left-1 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400',
      className
    )}
    {...props}
  />
));

DropdownMenuSubContent.displayName = Primitive.SubContent.displayName;

/**
 * Content
 */

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof Primitive.Content>,
  React.ComponentPropsWithoutRef<typeof Primitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Primitive.Portal>
    <Primitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={classNames(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400',
        className
      )}
      {...props}
    />
  </Primitive.Portal>
));

DropdownMenuContent.displayName = Primitive.Content.displayName;

/**
 * Item
 */

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof Primitive.Item>,
  React.ComponentPropsWithoutRef<typeof Primitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Primitive.Item
    ref={ref}
    className={classNames(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));

DropdownMenuItem.displayName = Primitive.Item.displayName;

/**
 * CheckboxItem
 */

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof Primitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof Primitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <Primitive.CheckboxItem
    ref={ref}
    className={classNames(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700',
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Primitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </Primitive.ItemIndicator>
    </span>
    {children}
  </Primitive.CheckboxItem>
));

DropdownMenuCheckboxItem.displayName = Primitive.CheckboxItem.displayName;

/**
 * RadioItem
 */

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof Primitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof Primitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <Primitive.RadioItem
    ref={ref}
    className={classNames(
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Primitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </Primitive.ItemIndicator>
    </span>
    {children}
  </Primitive.RadioItem>
));

DropdownMenuRadioItem.displayName = Primitive.RadioItem.displayName;

/**
 * Label
 */

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof Primitive.Label>,
  React.ComponentPropsWithoutRef<typeof Primitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <Primitive.Label
    ref={ref}
    className={classNames(
      'px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-300',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));

DropdownMenuLabel.displayName = Primitive.Label.displayName;

/**
 * Separator
 */

const DropdownMenuSeparator = React.forwardRef<
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

DropdownMenuSeparator.displayName = Primitive.Separator.displayName;

/**
 * Shortcut
 */

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={classNames(
        'ml-auto text-xs tracking-widest text-slate-500',
        className
      )}
      {...props}
    />
  );
};

DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
