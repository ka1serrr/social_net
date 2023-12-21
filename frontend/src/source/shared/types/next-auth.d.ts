import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      avatar: string;
      username: string;
    };
  }
}
