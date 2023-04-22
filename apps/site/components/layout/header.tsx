import Link from 'next/link';

import { Logo } from '../logo';
import { ModeToggle } from '../mode-toggle';
import { MainNav, MainNavItem } from './main-nav';

type HeaderProps = any;

const navItems: MainNavItem[] = [
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Documentation',
    href: '/docs',
  },
];

export function Header(props: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-b-slate-200 dark:border-b-gray-800">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/">
          <Logo />
        </Link>
        <MainNav items={navItems}></MainNav>
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
