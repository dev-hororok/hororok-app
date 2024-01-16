import { User } from './user.model';

interface Comment {
  id: string;
  contents: string;
  user: User;
  created_at: Date;
}

export default Comment;
