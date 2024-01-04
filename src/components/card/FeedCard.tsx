'use client';
import Feed from '@/models/feed.model';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Image from 'next/image';
import { Heart, MessageCircle } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useState } from 'react';
import { CommentItem } from '../comment/CommentItem';

interface Props {
  feed: Feed;
}

export const FeedCard = ({ feed }: Props) => {
  const [isComemntsVisible, setIsCommentsVisible] = useState(false);

  const toggleCommentsVisible = () => {
    setIsCommentsVisible((prev) => !prev);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 shrink-0">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h4 className="font-semibold">{feed.user.name}</h4>
              <p className="text-xs text-muted-foreground">
                {feed.created_at.toString()}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        {feed.thumbnail && (
          <Image
            width={800}
            height={600}
            src={feed.thumbnail}
            alt="feed_thumbnail"
            className="w-auto max-h-[600px] mx-auto"
          />
        )}

        <div className="p-6 space-y-2">
          <h2 className="text-xl font-bold">{feed.title}</h2>
          <p className="text-muted-foreground">{feed.contents}</p>
        </div>

        <div className="flex items-center justify-between border-y px-6 py-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-muted-foreground">
              😁 +{feed.likes_cnt}
            </span>
          </div>
          <div className="flex items-center text-muted-foreground gap-1">
            <span className="text-sm font-bold">{feed.comments_cnt}</span>
            <span className="text-xs font-semibold">Comment</span>
          </div>
        </div>

        <div className="flex items-center justify-between w-full border-b">
          <Button variant={'ghost'} className="w-full space-x-2">
            <Heart className="w-4 h-4" />
            <span>좋아요</span>
          </Button>
          <Button
            type="button"
            onClick={toggleCommentsVisible}
            variant={'ghost'}
            className="w-full space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>댓글</span>
          </Button>
        </div>
        {isComemntsVisible && (
          <div className="w-full space-y-2">
            {feed.comments.map((comment) => {
              return <CommentItem key={comment.id} comment={comment} />;
            })}
          </div>
        )}

        <div className="p-6 space-y-4">
          <Input placeholder="댓글을 작성해주세요." />
          <Button className="w-full" variant={'secondary'}>
            작성
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
