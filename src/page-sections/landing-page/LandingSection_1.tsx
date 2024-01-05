'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { teamInfo } from '@/data/teamInfo';
import { NoticeCard } from '@/page-sections/new-feeds/NoticeCard';
import { ChevronRight, GithubIcon } from 'lucide-react';
import Image from 'next/image';

export const LandingSection_1 = () => {
  return (
    <div className="flex items-center py-20">
      <div className="w-1/3 flex flex-col px-4 space-y-4">
        <p className="text-4xl text-muted-foreground">Hello, We&apos;re</p>
        <h1 className="text-6xl font-bold text-primary">Team Hororok</h1>
        <h1 className="text-6xl">web developers</h1>

        <p className="pt-6 pb-6 text-muted-foreground">
          우리는 함께 웹 개발의 모든 영역을 다루는 강력한 팀을 구성합니다.
          우리가 착수하는 모든 프로젝트는 프론트엔드 미학과 백엔드 기능을
          원활하게 통합함으로써 우리의 집단적 전문지식의 혜택을 받습니다.
        </p>

        <div className="space-x-2">
          <Button>
            연락하기 <ChevronRight className="w-4 h-4" />
          </Button>
          <Button variant={'ghost'}>
            포트폴리오 <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="w-5/12 flex justify-center px-4">
        <Image
          width={500}
          height={500}
          src="/main_2.png"
          alt="main"
          className="rounded-full"
        />
      </div>
      <div className="w-3/12 px-4 space-y-4">
        <NoticeCard />
        <Card>
          <CardHeader className="flex">
            <CardTitle className="flex items-center gap-2">
              <GithubIcon className="w-5 h-5" />
              개발팀 소개
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              {teamInfo.map((info) => {
                return (
                  <Avatar key={info.name} className="h-10 w-10 shrink-0">
                    <AvatarImage src={info.imgSrc} alt={info.alt} />
                    <AvatarFallback>{info.alt}</AvatarFallback>
                  </Avatar>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
