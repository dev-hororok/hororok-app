'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface Props {
  navItems: {
    icon: ReactNode;
    text: string;
    href: string;
  }[];
}

export const TimerMainNav = ({ navItems }: Props) => {
  const pathname = usePathname();
  return (
    <nav className="shrink-0">
      <ul className="flex items-center justify-around w-full bg-primary border-t text-xs rounded-b-md">
        {navItems.map((link) => {
          const isActive =
            link.href === '/timer'
              ? pathname === link.href
              : pathname.startsWith(`${link.href}`);
          return (
            <li
              key={link.text}
              className={cn(
                'w-full',
                isActive
                  ? 'text-primary-foreground'
                  : 'text-primary-foreground/50 hover:text-primary-foreground duration-200'
              )}
            >
              <Link
                href={link.href}
                className="flex flex-col items-center py-2 gap-1"
              >
                {link.icon}
                <p>{link.text}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
