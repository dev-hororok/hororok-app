import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { CitrusIcon } from 'lucide-react';

interface Props {
  imgSrc: string;
  alt: string;
  price: number;
  description: string;
  name: string;
  grade?: string;
}

export const ProductCard = ({
  imgSrc,
  alt,
  price,
  name,
  description,
  grade,
}: Props) => {
  return (
    <Button
      type="button"
      variant={'outline'}
      className="h-auto p-2 flex flex-col items-center justify-center text-xs shadow-sm"
    >
      {grade ? <Badge variant={'secondary'}>{grade} 등급</Badge> : null}
      <Image src={imgSrc} alt={alt} width={200} height={200} className="p-8" />
      <div className="w-full flex flex-col items-center justify-between gap-1.5">
        <p className="w-full font-semibold truncate">{name}</p>
        <p className="flex items-center gap-1">
          <CitrusIcon className="w-3 h-3" />
          {price}
        </p>
      </div>
    </Button>
  );
};
