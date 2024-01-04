'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import {
  Bird,
  LucideIcon,
  MessageCircle,
  Newspaper,
  ShoppingCart,
  Star,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Separator } from '../ui/separator';

interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

const MainNavItems: NavItem[] = [
  {
    title: '대시보드',
    href: '/',
    icon: Newspaper,
  },
  {
    title: '채팅',
    href: '/chat',
    icon: MessageCircle,
  },
];

const ProjectNavItems: NavItem[] = [
  {
    title: 'SNS 앱',
    href: '/sns',
    icon: Bird,
  },
];

export const SideNav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="sticky top-24 w-[300px] shrink-0 h-max bg-card py-8 rounded-md border text-card-foreground shadow-lg">
      <nav className="w-full">
        {MainNavItems.map((link) => {
          const isActive = link.href === pathname;
          return (
            <Link
              key={link.title}
              href={link.href}
              className={cn(
                buttonVariants({
                  variant: isActive ? 'default' : 'ghost',
                  size: 'sm',
                }),
                'w-full py-6 space-x-4',
                isActive
                  ? 'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white'
                  : null
              )}
            >
              <link.icon className="h-5 w-5" />
              <span className="w-full">{link.title}</span>
            </Link>
          );
        })}
        <Separator className="my-2" />
        {ProjectNavItems.map((link) => {
          const isActive = link.href === pathname;
          return (
            <Link
              key={link.title}
              href={link.href}
              className={cn(
                buttonVariants({
                  variant: isActive ? 'default' : 'ghost',
                  size: 'sm',
                }),
                'w-full py-6 space-x-4',
                isActive
                  ? 'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white'
                  : null
              )}
            >
              <link.icon className="h-5 w-5" />
              <span className="w-full">{link.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
