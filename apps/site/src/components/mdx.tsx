import React from 'react';
import Image from 'next/image';
import { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

import { classNames } from '@nxl/site/common';

const components: MDXComponents = {
  div: ({ className, ...props }: any) => {
    return <div className={className} {...props} />;
  },
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
