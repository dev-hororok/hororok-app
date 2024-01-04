import Link from 'next/link';
import { UserNav } from '../usernav/UserNav';
import { DarkModeToggle } from '../common/DarkModeToggle';

export const Header = () => {
  return (
    <header className="fixed top-0 h-[70px] z-30 flex items-center justify-between w-full px-12 bg-primary">
      <Link
        href="/"
        className="text-xl font-bold dark:text-foreground text-primary-foreground"
      >
        Hororok
      </Link>
      <div className="space-x-4 flex items-center">
        <UserNav />
        <DarkModeToggle />
      </div>
    </header>
  );
};
