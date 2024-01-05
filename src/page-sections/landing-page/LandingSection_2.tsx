'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight, GithubIcon } from 'lucide-react';

export const LandingSection_2 = () => {
  return (
    <Card className="w-full py-12 px-8 md:py-20 md:px-20">
      <div className="w-full max-w-screen-xl mx-auto lg:flex items-center">
        <div className="w-full lg:w-1/2 2xl:max-w-lg 2xl:shrink-0 flex flex-col px-4 space-y-4">
          <p className="text-lg text-muted-foreground">Skills</p>
          <h1 className="text-4xl font-bold">우리의 기술 스택</h1>
          <h1 className="text-4xl text-primary">기술 & 경험</h1>

          <p className="pt-6 pb-6 text-muted-foreground">
            Team Hororok에서는 다재다능하고 현대적인 기술 스택의 힘을 활용하여
            뛰어난 웹 솔루션을 제공한다고 믿습니다. 우리의 전문 지식은 다양한
            언어, 프레임워크 및 도구에 걸쳐 있어 모든 과제를 해결하고 다양한
            고객 요구 사항을 정확하고 효율적으로 충족할 수 있도록 보장합니다.
          </p>

          <div className="pb-8">
            <Button>
              더보기 <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 2xl:w-full self-stretch grid grid-cols-4 lg:grid-cols-3 2xl:grid-cols-4 grid-rows-2 gap-4">
          <Card className="w-full flex flex-col items-center justify-center col-span-1 py-4 hover:border-primary duration-200">
            <GithubIcon className="w-10 h-10" />
            <p className="text-lg font-semibold pt-4">Spring</p>
          </Card>
          <Card className="w-full flex flex-col items-center justify-center col-span-1 py-4 hover:border-primary duration-200">
            <GithubIcon className="w-10 h-10" />
            <p className="text-lg font-semibold pt-4">Express</p>
          </Card>
          <Card className="w-full flex flex-col items-center justify-center col-span-1 py-4 hover:border-primary duration-200">
            <GithubIcon className="w-10 h-10" />
            <p className="text-lg font-semibold pt-4">Nest</p>
          </Card>
          <Card className="w-full flex flex-col items-center justify-center col-span-1 py-4 hover:border-primary duration-200">
            <GithubIcon className="w-10 h-10" />
            <p className="text-lg font-semibold pt-4">React</p>
          </Card>
          <Card className="w-full flex flex-col items-center justify-center col-span-1 py-4 hover:border-primary duration-200">
            <GithubIcon className="w-10 h-10" />
            <p className="text-lg font-semibold pt-4">Next</p>
          </Card>
          <Card className="w-full flex flex-col items-center justify-center col-span-1 py-4 hover:border-primary duration-200">
            <GithubIcon className="w-10 h-10" />
            <p className="text-lg font-semibold pt-4">AWS</p>
          </Card>
        </div>
      </div>
    </Card>
  );
};
