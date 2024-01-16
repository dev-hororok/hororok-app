import { MobileLayout } from '@/components/layouts/MobileLayout';
import { TimerMainNav } from '@/components/timer-app/TimerMainNav';
import {
  BriefcaseIcon,
  HomeIcon,
  MoreHorizontalIcon,
  StoreIcon,
} from 'lucide-react';

const navItems = [
  {
    text: '홈',
    icon: <HomeIcon className="w-5 h-5" />,
    href: '/timer',
  },
  {
    text: '상점',
    icon: <StoreIcon className="w-5 h-5" />,
    href: '/timer/shop',
  },
  {
    text: '인벤토리',
    icon: <BriefcaseIcon className="w-5 h-5" />,
    href: '/timer/inventory',
  },
  {
    text: '더보기',
    icon: <MoreHorizontalIcon className="w-5 h-5" />,
    href: '/timer/more',
  },
];

export default function TimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MobileLayout>
      <main className="relative flex flex-col w-full h-full justify-center">
        <div className="w-full h-full">{children}</div>
        <TimerMainNav navItems={navItems} />
      </main>
    </MobileLayout>
  );
}
