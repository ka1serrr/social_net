import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { AuthFormState, User, UserJwt } from "@/shared";
import { $fecth } from "@/app/api";
import { apiUrls } from "@/app/config";
import toast from "react-hot-toast";
import { JWT } from "next-auth/jwt";

export const nextOptions: AuthOptions = NextAuth({
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
            const data = await $fecth.post<UserJwt>({
              path: `${apiUrls.register}`,
              body: { email: credentials?.email, username: credentials?.username, password: credentials?.password },
            });
            return {
              jwt: data.user.jwt,
              username: data.user.username,
              email: data.user.email,
              // avatar: data.user.avatar,
              role: data.user.role,
              id: data.user.id,
            };
          } catch (e) {
            return Promise.reject(new Error((e as TypeError).message));
          }
        }

        try {
          const data = await $fecth.post<UserJwt>({
            path: apiUrls.auth,
            body: { email: credentials?.email, password: credentials?.password },
          });

          if (!data) {
            return Promise.reject(new Error("Wrong credentials"));
          }

          return {
            jwt: data.user.jwt,
            username: data.user.username,
            email: data.user.email,
            // avatar: data.user.avatar,
            role: data.user.role,
            id: data.user.id,
          } as unknown as User;
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
    // @ts-ignore
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (token?.jwt) {
        return { ...token, ...user };
      }

      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      if (token) {
        // @ts-ignore
        session.user = { ...token };
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
