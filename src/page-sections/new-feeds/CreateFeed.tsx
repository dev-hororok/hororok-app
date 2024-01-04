import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ImageIcon, ShipIcon, TagIcon } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const CreateFeed = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>피드 작성</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="제목을 작성해주세요." />
        <Textarea placeholder="내용을 작성해주세요.(선택)" />

        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Button variant={'outline'} className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              사진
            </Button>
            <Button variant={'outline'} className="flex items-center gap-2">
              <TagIcon className="w-4 h-4" />
              태그
            </Button>
          </div>
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder={'전체 공개'} defaultValue={'public'} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">전체 공개</SelectItem>
              <SelectItem value="friends">친구만</SelectItem>
              <SelectItem value="hidden">나만</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full gap-2">
          <ShipIcon /> 포스팅
        </Button>
      </CardContent>
    </Card>
  );
};
