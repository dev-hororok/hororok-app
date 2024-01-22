import { EggInventorySection } from '@/page-sections/monta/EggInventorySection';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full h-full py-4 overflow-y-scroll scrollbar-hide space-y-2">
      <p className="text-sm text-center text-muted-foreground">
        tip. 공부를 하면 보유중인 알들을 부화시킬 수 있어요
      </p>

      {/* Character Section */}
      <div className="w-full mx-auto">
        <Image
          width={500}
          height={500}
          src="/bottles/bottle_1.png"
          alt="orange"
        />
      </div>

      {/* Egg Section */}
      <EggInventorySection />
    </div>
  );
}
