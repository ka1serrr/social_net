import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AuthFormState } from "@/shared";
import { $fecth } from "@/app/api";
import { apiUrls } from "@/app/config";

export const nextOptions = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {
          type: "text",
        },
        password: {
          type: "password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials as unknown as AuthFormState;
        const data = await $fecth.get({ path: `${apiUrls}${email}` });


        return data
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
});
