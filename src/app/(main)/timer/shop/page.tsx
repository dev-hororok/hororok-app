import { fetchShopEggs } from '@/actions/monta/fetch-shop-eggs';
import { ProductCard } from '@/components/timer-app/ProductCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { dummyUseItemProducts } from '@/data/monta/productData';

export interface Product {
  imgSrc: string;
  alt: string;
  price: number;
  name: string;
  description: string;
  grade?: string;
}

export default async function Shop() {
  const shopEggs = await fetchShopEggs();
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
              {shopEggs.map((item, idx) => {
                return (
                  <ProductCard
                    key={idx}
                    imgSrc={item.image_url}
                    alt={item.egg_id}
                    price={item.purchase_price}
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
              {dummyUseItemProducts.map((item, idx) => {
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
