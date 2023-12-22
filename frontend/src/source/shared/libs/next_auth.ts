import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import type { AuthFormState, User } from "@/shared";
import { $fecth } from "@/app/api";
import { apiUrls } from "@/app/config";

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
        const { email, password } = credentials as unknown as AuthFormState;
        if (!credentials?.password || !credentials.email) return null;

        const user = await $fecth.post<User[]>({ path: `${apiUrls.auth}`, body: { identifier: email, password } });

        if (!user) return null;

        return user;
        // if (!user) {
        //   const { userCreate } = await grafbase.request(CreateUserByUsername, {
        //     username,
        //     passwordHash: await hash(password, 12),
        //   });

        //   return {
        //     id: userCreate.id,
        //     username,
        //   };
        // }

        // const isValid = await compare(password, user.passwordHash);

        // if (!isValid) {
        //   throw new Error("Wrong credentials. Try again.");
        // }

        // return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: "1353145135143",
});
