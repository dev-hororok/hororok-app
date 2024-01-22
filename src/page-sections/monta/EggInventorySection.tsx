'use client';
import { EggAddCard } from '@/components/timer-app/EggAddCard';
import { EggCard } from '@/components/timer-app/EggCard';
import { useMontaStore } from '@/store/useMontaStore';

export const EggInventorySection = () => {
  const eggInventory = useMontaStore((state) => state.egg_inventory);
  return (
    <div className="px-4">
      <p className="text-center text-sm font-bold pb-4">
        보유중인 주머니 (최대 4개)
      </p>
      <div className="grid grid-cols-4 gap-1">
        {eggInventory.map((eggInventory, idx) => {
          return (
            <EggCard
              key={idx}
              imgSrc={eggInventory.egg.image_url}
              restSeconds={eggInventory.progress}
            />
          );
        })}
        {eggInventory.length < 4 ? <EggAddCard /> : null}
      </div>
    </div>
  );
};
