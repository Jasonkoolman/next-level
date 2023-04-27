import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';

import { Button } from '@nxl/site/ui/button';
import { Heading, Text } from '@nxl/site/ui/typography';
import { Card, CardDescription, CardLink } from 'site/components/card';
import { Hero } from 'site/components/hero';
import { Container } from 'site/components/layout/container';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Container as="section" className="mt-16">
        Section
      </Container>
    </>
  );
}
