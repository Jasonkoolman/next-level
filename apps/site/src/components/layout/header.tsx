import Link from 'next/link';

import { Logo } from '../logo';
import { ModeToggle } from '../mode-toggle';
import { Container } from './container';
import { MainNav, MainNavItem } from './main-nav';

const navItems: MainNavItem[] = [
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Documentation',
    href: '/docs',
    disabled: true,
  },
];

export function Header() {
  return (
    <header className="bg-background border-b border-b-slate-200 dark:border-b-gray-800">
      <Container className="flex h-16 items-center justify-between py-4">
        <Link href="/" className="hover:opacity-80">
          <Logo />
        </Link>
        <MainNav items={navItems}></MainNav>
        <div>
          <ModeToggle />
        </div>
      </Container>
    </header>
  );
}
