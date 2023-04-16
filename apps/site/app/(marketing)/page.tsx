import Link from 'next/link';

import { Button } from '@nxl/site/ui/button';
import { Heading } from '@nxl/site/ui/typography';

export default function HomePage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <Heading>Silence is golden</Heading>
        <Button>Button</Button>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
