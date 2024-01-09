'use client';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const MobileLayout = ({ children }: Props) => {
  return (
    <div className="absolute sm:relative sm:py-10 top-0 left-0 z-40 w-full flex flex-col gap-4 items-center justify-center">
      <p className="text-sm hidden sm:block text-muted-foreground">
        Galaxy S5 (360 X 640px)
      </p>
      <div className="w-full h-screen sm:w-[360px] sm:h-[640px] border rounded-md bg-background">
        {children}
      </div>
    </div>
  );
};
