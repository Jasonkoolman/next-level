import { classNames } from '@nxl/site/common';
import { Heading, Text } from '@nxl/site/ui/typography';
import { Container } from './container';

type PageTemplateProps = {
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
};

export function PageTemplate({
  title,
  description,
  className,
  children,
}: PageTemplateProps) {
  return (
    <Container
      className={classNames('mt-16 max-w-4xl py-12 sm:py-16', className)}
    >
      <section className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 mb-12 sm:mb-16">
        <div className="flex-1 space-y-4">
          <Heading as="h1" size="4xl">
            {title}
          </Heading>
          <Text variant="muted" className="sm:text-lg">
            {description}
          </Text>
        </div>
      </section>
      {children}
    </Container>
  );
}
