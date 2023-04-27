import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { ArrowRightIcon } from 'lucide-react';

export type CardProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export function Card({ as: Component = 'div', className, children }: any) {
  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  );
}

type CardLinkProps = LinkProps & {
  children: React.ReactNode;
};

export function CardLink({ children, ...props }: CardLinkProps) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-slate-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-slate-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
}

export function CardTitle({ as: Component = 'h2', href, children }: any) {
  return (
    <Component className="text-lg font-semibold tracking-tight">
      {href ? <CardLink href={href}>{children}</CardLink> : children}
    </Component>
  );
}

export function CardDescription({ children }: any) {
  return (
    <p className="relative z-10 mt-2 text-sm text-muted-foreground line-clamp-4">
      {children}
    </p>
  );
}

export function CardCta({ children }: any) {
  return (
    <>
      <div
        aria-hidden="true"
        className="relative z-10 mt-4 flex items-center text-sm font-semibold text-emerald-500"
      >
        {children}
        <ArrowRightIcon size={14} className="ml-1 stroke-current" />
      </div>
    </>
  );
}

export function CardEyebrow({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}: any) {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-slate-400 dark:text-slate-500',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-slate-200 dark:bg-slate-500" />
        </span>
      )}
      {children}
    </Component>
  );
}
