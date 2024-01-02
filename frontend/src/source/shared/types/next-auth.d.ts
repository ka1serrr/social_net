import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    token: string;
    user: User;
  }

  interface User {
    email: string;
    username: string;
    avatar?: string;
    jwt: string;
    id?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    token: string;
  }
}
