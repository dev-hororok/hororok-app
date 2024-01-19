import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlayIcon } from 'lucide-react';

export default function StudyTimer() {
  return (
    <div className="w-full h-full py-4">
      <Tabs defaultValue="pomodoro" className="w-full px-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pomodoro">뽀모도로</TabsTrigger>
          <TabsTrigger value="timer">타이머</TabsTrigger>
        </TabsList>
        <div className="w-full flex flex-col items-center justify-center rounded-full ring-8 ring-primary aspect-square gap-2 mt-24 sm:mt-8">
          <TabsContent value="pomodoro">
            <p className="text-5xl">00:25:00</p>
          </TabsContent>
          <TabsContent value="timer">
            <p className="text-5xl">00:00:00</p>
          </TabsContent>
          <div>
            <Carousel className="w-3/5 mx-auto">
              <CarouselContent className="py-4">
                {['개발', 'CS', '알고리즘'].map((category, index) => (
                  <CarouselItem key={index}>
                    <div className="flex justify-center">
                      <Badge className="py-1 px-4">{category}</Badge>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="flex items-center justify-center">
              <Badge variant="secondary" className="cursor-pointer">
                + 태그 추가
              </Badge>
            </div>
          </div>
        </div>
      </Tabs>

      <div className="flex items-center justify-center gap-4 pt-10">
        <Button className="flex items-center justify-center bg-primary rounded-full w-14 h-14 sm:w-12 sm:h-12 p-0">
          <PlayIcon className="w-8 h-8 sm:w-6 sm:h-6" />
        </Button>
      </div>
    </div>
  );
}
