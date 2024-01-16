import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOption: NextAuthOptions = {
  secret: process.env.JWT_TOKEN_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'hororok@google.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) return null;
        const { email, password } = credentials;
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          {
            method: 'POST',
            body: JSON.stringify({
              email,
              password,
            }),
            headers: { 'Content-Type': 'application/json' },
          }
        );
        const user = await res.json();
        if (res.ok && user) {
          return user.data;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };
      return token;
    },

    async session({ token, session }) {
      session.user = token.user;
      session.access_token = token.access_token;
      session.refresh_token = token.refresh_token;

      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
};

export default authOption;
