import { fetchMontaSessionMember } from '@/actions/monta/fetch-member';
import { MobileLayout } from '@/components/layouts/MobileLayout';
import { TimerMainHead } from '@/components/timer-app/TimerMainHead';
import { TimerMainNav } from '@/components/timer-app/TimerMainNav';
import { CreateMemberButton } from '@/page-sections/monta/CreateMemberButton';
import {
  BriefcaseIcon,
  HomeIcon,
  MoreHorizontalIcon,
  StoreIcon,
  Timer,
} from 'lucide-react';
import Image from 'next/image';

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

  if (!member) {
    return (
      <MobileLayout>
        <div className="flex flex-col items-center justify-center h-full gap-2 px-4 bg-primary space-y-20 rounded-md overflow-hidden">
          <div className="relative flex justify-center">
            <Image
              src="/monta_login.png"
              width={640}
              height={640}
              alt="monta-main"
            />
            <h3 className="absolute bottom-0 text-3xl font-light text-primary-foreground">
              스터디 타이머
            </h3>
          </div>

          <CreateMemberButton />
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout>
      <div className="relative flex flex-col w-full h-full justify-center">
        <TimerMainHead />
        <main className="w-full h-full overflow-y-scroll scrollbar-hide">
          {children}
        </main>
        <TimerMainNav navItems={navItems} />
      </div>
    </MobileLayout>
  );
}
