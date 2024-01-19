import Image from 'next/image';
import { Button } from '../ui/button';
import { formatTime } from '@/lib/date-format';

interface Props {
  imgSrc: string;
  alt?: string;
  restSeconds: number;
}

export const EggCard = ({ imgSrc, alt = 'egg_card', restSeconds }: Props) => {
  return (
    <Button
      variant={'ghost'}
      className="h-auto p-1 flex flex-col items-center justify-center text-xs font-semibold"
    >
      <Image width={200} height={200} src={imgSrc} alt={alt} />
      <p>{formatTime(restSeconds)}</p>
    </Button>
  );
};
