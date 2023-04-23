import React from 'react';
import Image from 'next/image';
import { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { classNames } from '@nxl/site/common';

const components: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={classNames(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={classNames(
        'mt-10 scroll-m-20 border-b border-b-slate-200 pb-1 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3
      className={classNames(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }) => (
    <h4
      className={classNames(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }) => (
    <h5
      className={classNames(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }) => (
    <h6
      className={classNames(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={classNames(
        'font-medium text-slate-900 underline underline-offset-4',
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={classNames('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={classNames('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol
      className={classNames('my-6 ml-6 list-decimal', className)}
      {...props}
    />
  ),
  li: ({ className, ...props }) => (
    <li className={classNames('mt-2', className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={classNames(
        'mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 [&>*]:text-slate-600',
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={classNames('rounded-md border border-slate-200', className)}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 border-slate-200 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={classNames('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={classNames(
        'm-0 border-t border-slate-300 p-0 even:bg-slate-100',
        className
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={classNames(
        'border border-slate-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={classNames(
        'border border-slate-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={classNames(
        'mb-4 mt-6 overflow-x-auto rounded-lg bg-slate-900 py-4',
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={classNames(
        'relative rounded border bg-slate-300/25 px-[0.3rem] py-[0.2rem] font-mono text-sm text-slate-600',
        className
      )}
      {...props}
    />
  ),
  Image,
};

type MdxProps = {
  code: string;
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
