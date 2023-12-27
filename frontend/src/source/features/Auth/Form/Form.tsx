"use client";

import { AuthFormState, Button, Input, randomUsername } from "@/shared";
import { validatationSchema } from "@/features/Auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { AtSign, KeyRound } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { redirect } from "next/navigation";

type Props = {
  type: "Login" | "Register";
};

export const AuthForm = ({ type }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormState>({
    mode: "onChange",
    resolver: yupResolver(validatationSchema),
  });

  const { status, data   } = useSession();

  // if (status === 'authenticated') {
  //   redirect('/')
  // }

  const onSubmit: SubmitHandler<AuthFormState> = async (data) => {
    if (type === "Login") {
      await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
    } else {
      await signIn("credentials", {
        redirect: false,
        //! нужен username, т. к. strapi не хочет регестрировать без него.
        username: randomUsername(),
        ...data,
      });
    }
  };

  return (
    <div className='flex flec-col w-full h-screen items-center justify-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='m-auto flex flex-col items-center w-80 gap-y-4'>
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
        <Button type='submit' className='w-full'>
          {type}
        </Button>
      </form>
    </div>
  );
};
