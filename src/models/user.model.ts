interface User {
  id: string;
  email: string;
  name: string;
  description: string;

  followers_cnt?: number;
  following_cnt?: number;
}

export default User;
