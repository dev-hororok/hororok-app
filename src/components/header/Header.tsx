import Link from 'next/link';
import { UserNav } from '../usernav/UserNav';

export const Header = () => {
  const isLoggedIn = false;
  return (
    <header className="fixed top-0 h-[70px] z-30 flex items-center justify-between w-full px-12 bg-primary text-primary-foreground">
      <Link href="/" className="text-xl font-bold">
        Hororok
      </Link>
      <UserNav />
    </header>
  );
};
