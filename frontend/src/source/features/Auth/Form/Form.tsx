"use client";

import { AuthFormState, Button, Input, randomUsername, UserJwt } from "@/shared";
import { validatationSchema } from "@/features/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { AtSign, KeyRound } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { pagesLinks } from "@/app/config";

type Props = {
  type: "Login" | "Register";
};

export const AuthForm = ({ type }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormState>({
    mode: "onChange",
    resolver: yupResolver(validatationSchema),
  });

  const router = useRouter();

  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/");
    return;
  }
  const onSubmit: SubmitHandler<AuthFormState> = async (data) => {
    setIsLoading(true);
    if (type === "Login") {
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (!res?.ok) {
        if (res?.status === 401) {
          toast.error("Wrong email or password");
          setIsLoading(false);
          return;
        }
        toast.error("An error occurred");
        setIsLoading(false);
        return;
      }
    } else {
      const res = await signIn("credentials", {
        redirect: false,
        //! нужен username, т. к. strapi не хочет регестрировать без него.
        username: randomUsername(),
        ...data,
      });

      if (!res?.ok) {
        toast.error("Sorry! An error occurred");
        setIsLoading(false);
        return;
      }
    }
    setIsLoading(false);
    await router.push("/");
  };

  return (
    <div className='flex flex-col w-full h-svh items-center justify-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-80 gap-y-4'>
        <h1 className='text-4xl uppercase font-bold text-white'>{type}</h1>
        <Input
          {...register("email", { required: true })}
          placeholder='Enter email'
          Icon={AtSign}
          error={errors?.email?.message}
        />
        <Input
          {...register("password", { required: true, minLength: 6 })}
          placeholder='Enter password'
          type='password'
          Icon={KeyRound}
          error={errors?.password?.message}
        />
        <Button isLoading={isLoading} disabled={isLoading} type='submit' className='w-full'>
          {type}
        </Button>
      </form>
      {type === "Login" ? (
        <span className='block text-center text-base mt-4 text-white'>
          If you don't have an account you can{" "}
          <Link
            className='text-purple-primary text-opacity-90 hover:text-opacity-100 transition-opacity duration-100'
            href={pagesLinks.register}
          >
            Sign Up
          </Link>
        </span>
      ) : (
        <span className='block text-center text-base mt-4 text-white'>
          If you already have an account you can{" "}
          <Link
            className='text-purple-primary text-opacity-90 hover:text-opacity-100 transition-opacity duration-100'
            href={pagesLinks.login}
          >
            Sign In
          </Link>
        </span>
      )}
    </div>
  );
};
