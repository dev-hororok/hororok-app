import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const MyProfileCard = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex items-center">
        <Link href="/profile">
          <Avatar className="h-28 w-28">
            <AvatarImage src="/main.webp" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        <h2 className="text-xl font-semibold text-center">Hororok</h2>
        <p className="text-sm text-muted-foreground text-center">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </p>
        <ul className="flex items-center justify-center">
          <li className="w-full flex flex-col items-center justify-center border-r">
            <h3 className="font-bold">40</h3>
            <h5 className="text-sm text-muted-foreground">Following</h5>
          </li>
          <li className="w-full flex flex-col items-center justify-center">
            <h3 className="font-bold">44</h3>
            <h5 className="text-sm text-muted-foreground">Followers</h5>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href="/profile">
          <Button className="">내 프로필</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
