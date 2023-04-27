import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { classNames } from '@nxl/site/common';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold leading-6',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-600/10 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 ring-1 ring-inset ring-primary-600/10 dark:ring-primary-500/20',
        outline: 'text-foreground ring-1 ring-inset ring-ring',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      className={classNames(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
