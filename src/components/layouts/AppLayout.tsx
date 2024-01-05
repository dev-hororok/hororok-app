'use client';
import { ReactNode } from 'react';
import { Header } from '../header/Header';
import { SideNav } from '../sidenav/SideNav';
import { Bird, LucideIcon, MessageCircle, Newspaper } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

const mainNavItems: NavItem[] = [
  {
    title: '메인',
    href: '/',
    icon: Newspaper,
  },
  {
    title: '채팅',
    href: '/chat',
    icon: MessageCircle,
  },
];

const projectNavItems: NavItem[] = [
  {
    title: 'SNS 앱',
    href: '/sns',
    icon: Bird,
  },
];

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="flex relative w-full pt-24 px-2">
        <SideNav
          mainNavItems={mainNavItems}
          projectNavItems={projectNavItems}
        />
        <div className="px-6 w-full">{children}</div>
      </div>
    </div>
  );
};
