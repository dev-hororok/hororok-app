'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { usePathname } from 'next/navigation';

interface Props {
  items: {
    href: string;
    title: string;
  }[];
}

export const AccountSideNav = ({ items }: Props) => {
  const pathname = usePathname();
  return (
    <nav className={cn('flex space-x-2 w-full')}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            pathname === item.href
              ? 'bg-muted hover:bg-muted'
              : 'text-muted-foreground hover:text-foreground hover:bg-transparent',
            'justify-start'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
