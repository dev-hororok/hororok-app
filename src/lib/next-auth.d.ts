import NextAuth from 'next-auth/next';
import { JWT } from 'next-auth/jwt';
import { SessionUser } from '@/models/user.model';

declare module 'next-auth' {
  interface Session {
    user: SessionUser;
    access_token: string;
    refresh_token: string;
    expiresIn: number;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: SessionUser;
    access_token: string;
    refresh_token: string;
    expiresIn: number;
  }
}
