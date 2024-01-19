import { ProductCard } from '@/components/timer-app/ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export interface Product {
  imgSrc: string;
  alt: string;
  price: number;
  name: string;
  description: string;
  grade?: string;
}

const characterItems: Product[] = [
  {
    imgSrc: '/egg_1.png',
    alt: 'monta',
    price: 100,
    name: '일반 알',
    description: 'C ~ A 등급의 캐릭터를 얻을 수 있어요.',
    grade: 'C',
  },
  {
    imgSrc: '/egg_2.png',
    alt: 'monta',
    price: 600,
    name: '레어 알',
    description: 'B ~ A+ 등급의 캐릭터를 얻을 수 있어요.',
    grade: 'B',
  },
  {
    imgSrc: '/egg_3.png',
    alt: 'monta',
    price: 2000,
    name: '유니크 알',
    description: 'A ~ S 등급의 캐릭터를 얻을 수 있어요.',
    grade: 'A',
  },
  {
    imgSrc: '/egg_5.png',
    alt: 'monta',
    price: 2000,
    name: '랜덤 알',
    description: 'C ~ SS 등급의 캐릭터를 얻을 수 있어요.',
    grade: 'A',
  },
  {
    imgSrc: '/egg_4.png',
    alt: 'monta',
    price: 4000,
    name: '뜨거운 알',
    description: 'A ~ SS 등급의 캐릭터를 얻을 수 있어요.',
    grade: 'S',
  },
  {
    imgSrc: '/egg_6.png',
    alt: 'monta',
    price: 20000,
    name: '젤 좋은 알',
    description: 'S ~ SSS 등급의 캐릭터를 얻을 수 있어요.',
    grade: 'SS',
  },
];

const useItems: Product[] = [
  {
    imgSrc: '/color-palette.png',
    alt: 'streak-color-change',
    price: 200,
    name: '스트릭 변경권 x 4',
    description: '잔디의 색을 변경할 수 있어요',
  },
  {
    imgSrc: '/color-palette.png',
    alt: 'streak-color-change',
    price: 1500,
    name: '스트릭 변경권 x 40',
    description: '잔디의 색을 변경할 수 있어요',
  },
];

export default function Shop() {
  return (
    <Tabs defaultValue="eggs" className="w-full px-4 py-2 relative">
      <div className="sticky top-0 bg-background py-2">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="eggs">알</TabsTrigger>
          <TabsTrigger value="tools">사용 아이템</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="eggs">
        <div className="w-full h-full py-4 overflow-y-scroll scrollbar-hide space-y-6">
          <div>
            <div className="grid grid-cols-2 gap-2">
              {characterItems.map((item, idx) => {
                return (
                  <ProductCard
                    key={idx}
                    imgSrc={item.imgSrc}
                    alt={item.alt}
                    price={item.price}
                    name={item.name}
                    description={item.description}
                    grade={item.grade}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tools">
        <div className="w-full h-full py-4 overflow-y-scroll scrollbar-hide space-y-6">
          <div>
            <div className="grid grid-cols-2 gap-2">
              {useItems.map((item, idx) => {
                return (
                  <ProductCard
                    key={idx}
                    imgSrc={item.imgSrc}
                    alt={item.alt}
                    price={item.price}
                    name={item.name}
                    description={item.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
