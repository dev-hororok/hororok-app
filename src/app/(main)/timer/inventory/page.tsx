import { MonsterItemCard } from '@/components/timer-app/MonsterItemCard';
import { StreakItemCard } from '@/components/timer-app/StreakItemCard';
import { dummyCharacterItems, dummyUseItems } from '@/data/monta/inventoryData';
import { CitrusIcon } from 'lucide-react';

export interface InventoryUseItem {
  itemType: 'streak-color-change';
  count: number;
}

export interface InventoryCharacter {
  imgSrc: string;
  alt: string;
  price: number;
  name: string;
  grade: string;
}

export default function Inventory() {
  return (
    <div className="w-full h-full py-4 overflow-y-scroll scrollbar-hide px-4 space-y-6">
      <div>
        <p className="font-semibold pb-4">사용 아이템</p>
        <div className="grid grid-cols-3 gap-2">
          {dummyUseItems.map((item, idx) => {
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
              {dummyCharacterItems.reduce((acc, cur) => acc + cur.price, 0)}
            </div>
          </div>
          <p className="font-semibold text-sm text-muted-foreground">
            {dummyCharacterItems.length} 개
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {dummyCharacterItems.map((item, idx) => {
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
