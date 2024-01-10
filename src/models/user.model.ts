export interface User {
  id: string;
  email: string;
  name: string;
  description: string;

  followers_cnt?: number;
  following_cnt?: number;
}

export interface SessionUser {
  id: string;
  profile_url: string;
  email: string;
  role: string;
  name: string;
}
