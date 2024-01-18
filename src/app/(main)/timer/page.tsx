import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Image from 'next/image';

export default function Timer() {
  return (
    <div className="w-full h-full py-4 overflow-y-scroll scrollbar-hide">
      <p className="text-sm text-center text-muted-foreground">
        tip. 공부를 하면 보유중인 알들을 부화시킬 수 있어요
      </p>
      <div className="px-10">
        <Image width={500} height={500} src="/orange.png" alt="orange" />
      </div>
      <p className="text-center text-sm font-bold pb-4">
        보유중인 알 (최대 4개)
      </p>
      <div className="grid grid-cols-4 px-4">
        <Button
          variant={'ghost'}
          className="h-auto p-1 flex flex-col items-center justify-center text-xs font-semibold"
        >
          <Image width={200} height={200} src="/egg_1.png" alt="orange" />
          <p>00:00:00</p>
        </Button>
        <Button
          variant={'ghost'}
          className="h-auto p-1 flex flex-col items-center justify-center text-xs font-semibold"
        >
          <Image width={200} height={200} src="/egg_1.png" alt="orange" />
          <p>04:43:22</p>
        </Button>
        <Button
          variant={'ghost'}
          className="h-auto p-1 flex flex-col items-center justify-center text-xs font-semibold"
        >
          <Image width={200} height={200} src="/egg_1.png" alt="orange" />
          <p>02:41:08</p>
        </Button>
        <Button
          variant={'ghost'}
          className="h-auto p-1 flex flex-col items-center justify-center text-xs font-semibold"
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}
