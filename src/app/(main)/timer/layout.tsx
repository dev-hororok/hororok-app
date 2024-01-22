import { fetchMontaSessionMember } from '@/actions/monta/fetch-member';
import { MobileLayout } from '@/components/layouts/MobileLayout';
import MontaAppInitializer from '@/providers/MontaAppInitializer';
import {
  BriefcaseIcon,
  HomeIcon,
  MoreHorizontalIcon,
  StoreIcon,
  Timer,
} from 'lucide-react';
import { MontaAppContainer } from './_components/MontaAppContainer';

const navItems = [
  {
    text: '홈',
    icon: <HomeIcon className="w-5 h-5" />,
    href: '/timer',
  },
  {
    text: '타이머',
    icon: <Timer className="w-5 h-5" />,
    href: '/timer/study',
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

export default async function TimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const member = await fetchMontaSessionMember();

  return (
    <MontaAppInitializer member={member}>
      <MobileLayout>
        <MontaAppContainer navItems={navItems}>{children}</MontaAppContainer>
      </MobileLayout>
    </MontaAppInitializer>
  );
}
