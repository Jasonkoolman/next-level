import React from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';
import { VariantProps, cva } from 'class-variance-authority';

import { classNames } from '@nxl/site/common';

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm text-foreground rounded-md font-semibold gap-x-2 transition-colors disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-500',
        outline: 'border border-border hover:bg-border/50 dark:hover:bg-border',
        ghost: 'bg-transparent hover:bg-border/50 dark:hover:bg-border',
        link: 'underline-offset-4 hover:underline text-foreground',
      },
      size: {
        xs: 'h-8 py-1 px-3 ',
        sm: 'h-9 py-1 px-4',
        base: 'h-10 py-2 px-5',
        lg: 'h-11 py-2 px-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
    },
  }
);

export type ButtonProps = {
  as?: 'button' | 'a';
  children: React.ReactNode;
} & VariantProps<typeof buttonVariants>;

type PolymorphicButton = Polymorphic.ForwardRefComponent<'button', ButtonProps>;

const Button = React.forwardRef((props, ref) => {
  const { as: Tag = 'button', variant, size, className, ...rest } = props;

  return (
    <Tag
      className={classNames(buttonVariants({ variant, size }), className)}
      ref={ref}
      {...rest}
    />
  );
}) as PolymorphicButton;

Button.displayName = 'Button';

export { Button, buttonVariants };
