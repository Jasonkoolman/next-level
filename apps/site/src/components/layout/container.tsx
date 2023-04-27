import { classNames } from '@nxl/site/common';

type ContainerProps<TAs extends React.ElementType> = {
  as?: TAs;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<TAs>;

export function Container<TAs extends React.ElementType = 'div'>({
  as,
  children,
  className,
  ...rest
}: ContainerProps<TAs>) {
  const Tag = as || 'div';
  return (
    <Tag
      className={classNames(
        'mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8',
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
