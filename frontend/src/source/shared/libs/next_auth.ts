import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { AuthFormState, User } from "@/shared";
import { $fecth } from "@/app/api";
import { apiUrls } from "@/app/config";
import toast from "react-hot-toast";

export const nextOptions = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          type: "text",
        },
        username: {
          type: "text",
        },
        password: {
          type: "password",
        },
      },
      // @ts-ignore
      async authorize(credentials) {
        if (!credentials?.password || !credentials.email) return null;

        // ! Если есть username, то это регистрация, если нет - то авторизация.
        if (credentials?.username) {
          try {
            const user = await $fecth.post<{ user: User[]; jwt: string }>({
              path: `${apiUrls.register}`,
              body: { email: credentials?.email, username: credentials?.username, password: credentials?.password },
            });
            return user;
          } catch (e) {
            return Promise.reject(new Error((e as TypeError).message));
          }
        }

        try {
          const user = await $fecth.post<{ user: User[]; jwt: string }>({
            path: apiUrls.auth,
            body: { identifier: credentials?.email, password: credentials?.password },
          });

          if (!user) {
            return Promise.reject(new Error("Wrong credentials"));
          }

          return user;
        } catch (e) {
          return Promise.reject(new Error((e as TypeError).message));
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token, user }) {
      if (token) {
        // @ts-ignore
        session.user = token.data;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.data = user;
      return token;
    },
  },
});
