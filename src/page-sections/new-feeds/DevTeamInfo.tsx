import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDateKST } from '@/lib/date-format';
import { GithubIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamInfo = [
  {
    name: '김기범',
    alt: 'GB',
    imgSrc: 'https://avatars.githubusercontent.com/u/136368145?v=4',
  },
  {
    name: '노헤지',
    alt: 'HJ',
    imgSrc: 'https://avatars.githubusercontent.com/u/86008693?v=4',
  },
  {
    name: '이지선',
    alt: 'JS',
    imgSrc: 'https://avatars.githubusercontent.com/u/149784847?v=4',
  },
  {
    name: '이창우',
    alt: 'CW',
    imgSrc: 'https://avatars.githubusercontent.com/u/100907484?v=4',
  },
];

export const DevTeamInfo = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex">
        <CardTitle className="flex items-center gap-2">
          <GithubIcon className="w-5 h-5" />
          개발팀 소개
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 p-0 pb-4">
        {teamInfo.map((info) => {
          return (
            <div
              key={info.name}
              className="flex px-4 py-2 items-center gap-4 rounded-md cursor-pointer hover:bg-muted"
            >
              <Avatar className="h-10 w-10 shrink-0">
                <AvatarImage src={info.imgSrc} alt={info.alt} />
                <AvatarFallback>{info.alt}</AvatarFallback>
              </Avatar>
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <h4 className="font-semibold">{info.name}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
