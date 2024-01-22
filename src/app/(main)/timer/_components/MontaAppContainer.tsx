'use client';
import { TimerMainHead } from '@/components/timer-app/TimerMainHead';
import { TimerMainNav } from '@/components/timer-app/TimerMainNav';
import { CreateMemberButton } from '@/page-sections/monta/CreateMemberButton';
import { useMontaStore } from '@/store/useMontaStore';
import Image from 'next/image';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  navItems: {
    icon: ReactNode;
    text: string;
    href: string;
  }[];
}

export const MontaAppContainer = ({ children, navItems }: Props) => {
  const member = useMontaStore((state) => state.member);
  return (
    <>
      {member ? (
        <div className="relative flex flex-col w-full h-full justify-center">
          <TimerMainHead />
          <main className="w-full h-full overflow-y-scroll scrollbar-hide">
            {children}
          </main>
          <TimerMainNav navItems={navItems} />
        </div>
      ) : (
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
      )}
    </>
  );
};
