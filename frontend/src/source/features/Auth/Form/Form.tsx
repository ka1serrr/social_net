"use client";

import { AuthFormState, Button, Input } from "@/shared";
import { AtSign, KeyRound } from "lucide-react";
import { signIn } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {
  type: "Login" | "Register";
};

export const AuthForm = ({ type }: Props) => {
  const { register, handleSubmit } = useForm<AuthFormState>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<AuthFormState> = async (data) => {
    if (type === "Login") {
      await signIn("credentials", {
        redirect: false,
        ...data,
      });
    }
  };

  return (
    <div className='flex w-full h-full'>
      <form onSubmit={handleSubmit(onSubmit)} className='m-auto flex flex-col items-center w-80 gap-y-4'>
        <h1 className='text-4xl uppercase font-bold text-white'>{type}</h1>
        <Input {...register("email", { required: true })} placeholder='Enter email' type='email' Icon={AtSign} />
        <Input
          {...register("password", { required: true })}
          placeholder='Enter password'
          type='password'
          Icon={KeyRound}
        />
        <Button type='submit' className='w-full'>
          {type}
        </Button>
      </form>
    </div>
  );
};
