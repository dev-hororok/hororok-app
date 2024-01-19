import { MonsterItemCard } from '@/components/timer-app/MonsterItemCard';
import { StreakItemCard } from '@/components/timer-app/StreakItemCard';
import { CitrusIcon } from 'lucide-react';

const useItems = [
  {
    itemType: 'streak-color-change',
    count: 40,
  },
];

const characterItems: {
  imgSrc: string;
  alt: string;
  price: number;
  name: string;
  grade: string;
}[] = [
  {
    imgSrc: '/character/monster_1.png',
    alt: 'monta',
    price: 4000,
    name: '몬스터 1',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_2.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 2',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_3.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 3',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_4.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 4',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_5.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 5',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_6.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 6',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_7.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 7',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_8.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 8',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_9.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 9',
    grade: 'C',
  },
  {
    imgSrc: '/character/monster_10.png',
    alt: 'monta',
    price: 100,
    name: '몬스터 10',
    grade: 'C',
  },
];

export default function Inventory() {
  return (
    <div className="w-full h-full py-4 overflow-y-scroll scrollbar-hide px-4 space-y-6">
      <div>
        <p className="font-semibold pb-4">사용 아이템</p>
        <div className="grid grid-cols-3 gap-2">
          {useItems.map((item, idx) => {
            if (item.itemType === 'streak-color-change') {
              return <StreakItemCard key={idx} count={item.count} />;
            }
            return <StreakItemCard key={idx} count={item.count} />;
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2">
            <p className="font-semibold">캐릭터</p>
            <div className="flex items-center gap-1 text-xs">
              <CitrusIcon className="w-3 h-3" />
              {characterItems.reduce((acc, cur) => acc + cur.price, 0)}
            </div>
          </div>
          <p className="font-semibold text-sm text-muted-foreground">
            {characterItems.length} 개
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {characterItems.map((item, idx) => {
            return (
              <MonsterItemCard
                key={idx}
                imgSrc={item.imgSrc}
                alt={item.alt}
                price={item.price}
                name={item.name}
                grade={'C'}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
