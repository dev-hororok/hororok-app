import Link from 'next/link';
import { UserNav } from '../usernav/UserNav';
import { DarkModeToggle } from '../common/DarkModeToggle';
import { Button, buttonVariants } from '../ui/button';

export const Header = () => {
  const isLoggedIn = false;
  return (
    <header className="fixed top-0 h-[70px] z-30 flex items-center justify-between w-full px-12 bg-background text-foreground border-b shadow-md">
      <Link href="/" className="text-xl font-bold">
        Hororok
      </Link>
      <div className="space-x-4 flex items-center">
        {isLoggedIn ? (
          <UserNav />
        ) : (
          <Link href="/auth/login" className={buttonVariants()}>
            Login
          </Link>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
};
