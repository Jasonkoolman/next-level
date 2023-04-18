import { Logo } from '../logo';
import { ModeToggle } from '../mode-toggle';

type HeaderProps = any;

export function Header(props: HeaderProps) {
  return (
    <header className="bg-white dark:bg-slate-900 border-b border-b-slate-200">
      <div className="container flex h-16 items-center justify-between py-4">
        <Logo />
        <div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
