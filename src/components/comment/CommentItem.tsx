import Comment from '@/models/comment.model';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { formatDateKST, formatRelativeDateKST } from '@/lib/date-format';

interface Props {
  comment: Comment;
}

export const CommentItem = ({ comment }: Props) => {
  return (
    <div className="px-6 py-3">
      <div className="flex items-center w-full gap-4">
        <Avatar className="h-12 w-12 shrink-0">
          <AvatarImage src="/avatars/01.png" alt="@shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div className="w-full space-y-1">
          <div className=" flex items-center justify-between">
            <h4 className="font-semibold text-sm">{comment.user.name}</h4>
            <p className="text-xs text-primary">
              {formatRelativeDateKST(comment.created_at)}
            </p>
          </div>
          <p className="text-sm text-foreground/80">{comment.contents}</p>
        </div>
      </div>
    </div>
  );
};
