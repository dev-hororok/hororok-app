import { EggAddCard } from '@/components/timer-app/EggAddCard';
import { EggCard } from '@/components/timer-app/EggCard';
import Image from 'next/image';

const eggs = [
  {
    eggId: 1,
    imgSrc: '/egg_1.png',
    restSeconds: 3411,
  },
  {
    eggId: 1,
    imgSrc: '/egg_1.png',
    restSeconds: 3411,
  },
  {
    eggId: 1,
    imgSrc: '/egg_1.png',
    restSeconds: 3411,
  },
];

export default function Home() {
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
        {eggs.map((egg, idx) => {
          return (
            <EggCard
              key={idx}
              imgSrc={egg.imgSrc}
              restSeconds={egg.restSeconds}
            />
          );
        })}
        {eggs.length < 4 ? <EggAddCard /> : null}
      </div>
    </div>
  );
}
