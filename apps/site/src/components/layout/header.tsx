import Link from 'next/link';

import { Logo } from '../logo';
import { ModeToggle } from '../mode-toggle';
import { Container } from './container';
import { MainNav, MainNavItem } from './main-nav';

const navItems: MainNavItem[] = [
  {
    title: 'Stack',
    href: '/stack',
  },
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
    <header className="absolute backdrop-blur-sm dark:backdrop-blur left-0 right-0 top-0 z-10 bg-background/50 border-b border-b-slate-200 dark:border-b-gray-800">
      <Container className="flex h-16 items-center justify-between py-4">
        <div className="flex gap-8">
          <Link href="/" className="hover:opacity-80">
            <Logo />
          </Link>
          <MainNav items={navItems}></MainNav>
        </div>
        <div>
          <ModeToggle />
        </div>
      </Container>
    </header>
  );
}
