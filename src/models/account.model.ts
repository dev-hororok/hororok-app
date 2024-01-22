export interface IAccount {
  account_id: string;
  email: string;
  name: string;
  profile_url: string;
  role: 'user' | 'admin';
}
