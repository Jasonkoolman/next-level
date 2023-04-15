'use client';

import * as React from 'react';
import * as Primitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

import { classNames } from '@nxl/site/common';

const Dialog = (props: Primitive.DialogProps) => {
  const [render, setRender] = React.useState(
    // Fixes hydration error when default open
    // See https://github.com/radix-ui/primitives/issues/1386
    props.defaultOpen || props.open ? false : true
  );

  React.useEffect(() => {
    if (render === false) setRender(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return render ? <Primitive.Dialog {...props} /> : null;
};

Dialog.displayName = Primitive.Dialog.displayName;

/**
 * Trigger
 */

const DialogTrigger = Primitive.Trigger;

/**
 * Portal
 */

const DialogPortal = ({
  className,
  children,
  ...props
}: Primitive.DialogPortalProps) => (
  <Primitive.Portal className={classNames(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
      {children}
    </div>
  </Primitive.Portal>
);

DialogPortal.displayName = Primitive.Portal.displayName;

/**
 * Overlay
 */

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof Primitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof Primitive.Overlay>
>(({ className, children, ...props }, ref) => (
  <Primitive.Overlay
    className={classNames(
      'data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100',
      className
    )}
    {...props}
    ref={ref}
  />
));

DialogOverlay.displayName = Primitive.Overlay.displayName;

/**
 * Content
 */

const DialogContent = React.forwardRef<
  React.ElementRef<typeof Primitive.Content>,
  React.ComponentPropsWithoutRef<typeof Primitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <Primitive.Content
      ref={ref}
      className={classNames(
        'animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 fixed z-50 grid w-full gap-4 rounded-b-lg bg-white p-6 sm:max-w-lg sm:rounded-lg',
        'dark:bg-slate-900',
        className
      )}
      {...props}
    >
      {children}
      <Primitive.Close className="absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </Primitive.Close>
    </Primitive.Content>
  </DialogPortal>
));

DialogContent.displayName = Primitive.Content.displayName;

/**
 * Header
 */

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={classNames(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
);

DialogHeader.displayName = 'DialogHeader';

/**
 * Footer
 */

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={classNames(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className
    )}
    {...props}
  />
);

DialogFooter.displayName = 'DialogFooter';

/**
 * Title
 */

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof Primitive.Title>,
  React.ComponentPropsWithoutRef<typeof Primitive.Title>
>(({ className, ...props }, ref) => (
  <Primitive.Title
    ref={ref}
    className={classNames(
      'text-lg font-semibold text-slate-900',
      'dark:text-slate-50',
      className
    )}
    {...props}
  />
));

DialogTitle.displayName = Primitive.Title.displayName;

/**
 * Description
 */

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof Primitive.Description>,
  React.ComponentPropsWithoutRef<typeof Primitive.Description>
>(({ className, ...props }, ref) => (
  <Primitive.Description
    ref={ref}
    className={classNames(
      'text-sm text-slate-500',
      'dark:text-slate-400',
      className
    )}
    {...props}
  />
));

DialogDescription.displayName = Primitive.Description.displayName;

export {
  Dialog as Root,
  DialogTrigger as Trigger,
  DialogContent as Content,
  DialogHeader as Header,
  DialogFooter as Footer,
  DialogTitle as Title,
  DialogDescription as Description,
};
