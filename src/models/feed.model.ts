import Comment from './comment.model';
import { User } from './user.model';

interface Feed {
  id: string;
  title: string;
  contents?: string;
  thumbnail?: string;
  created_at: Date;
  user: User;

  comments: Comment[];

  likes_cnt: number;
  comments_cnt: number;
}

export default Feed;
