import Link from 'next/link';

import { Button } from '@nxl/site/ui/button';
import { Heading, Text } from '@nxl/site/ui/typography';

export default function HomePage() {
  return (
    <div className="container py-16">
      <section className="mx-auto max-w-3xl">
        <Heading as="h1">Technologies of tomorrow</Heading>
        <Text size="2xl" variant="muted">
          Test
        </Text>
        <Button>Button</Button>
        <Link href="/login">Login</Link>
      </section>
    </div>
  );
}
