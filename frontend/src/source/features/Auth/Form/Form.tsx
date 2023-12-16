"use client";

import { Button, Input } from "@/shared";
import { AtSign, KeyRound } from "lucide-react";

type Props = {
  type: "Login" | "Register";
};

export const AuthForm = ({ type }: Props) => {
  return (
    <div className='flex w-full h-full'>
      <form className='m-auto flex flex-col items-center w-80 gap-y-4'>
        <h1 className='text-4xl uppercase font-bold text-white'>{type}</h1>
        <Input placeholder='Enter email' type='email' Icon={AtSign} />
        <Input placeholder='Enter password' type='password' Icon={KeyRound} />
        <Button className='w-full'>{type}</Button>
      </form>
    </div>
  );
};
