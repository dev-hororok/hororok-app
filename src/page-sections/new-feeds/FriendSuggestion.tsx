import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UsersIcon } from 'lucide-react';

export const FriendSuggestion = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex">
        <CardTitle className="flex items-center gap-2">
          <UsersIcon className="w-5 h-5" /> 친구 추천
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="flex flex-col items-center space-y-2">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <h3 className="font-bold text-sm">호로롱</h3>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <h3 className="font-bold text-sm">호로롱</h3>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <h3 className="font-bold text-sm">호로롱</h3>
        </div>
      </CardContent>
    </Card>
  );
};
