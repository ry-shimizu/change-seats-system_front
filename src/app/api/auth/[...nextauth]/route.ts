import { Authority } from "@/app/enum/Authority";
import { request } from "@/app/lib/api/request";
import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: {
      siteUserId: number;
      schoolId: number;
      authority: Authority;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    siteUserId: number;
    schoolId: number;
    authority: Authority;
  }
}

declare module "next-auth" {
  interface User {
    siteUserId: number;
    schoolId: number;
    authority: Authority;
  }
}

export const nextAuthOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.siteUserId = user.siteUserId;
        token.schoolId = user.schoolId;
        token.authority = user.authority;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.schoolId = token.schoolId;
        session.user.siteUserId = token.siteUserId;
        session.user.authority = token.authority;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        loginId: { label: "loginId", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const response = await request(
          "POST",
          "login",
          JSON.stringify({ loginId: credentials?.loginId, password: credentials?.password })
        );

        const user = (await response.json()) as User;
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
