import { Input } from "@/shared";
import { AtSign } from "lucide-react";

export const AuthForm = () => {
  return (
    <form>
      <Input placeholder='Enter email' type='email' Icon={AtSign} />
      <Input placeholder='Enter password' type='email' Icon={AtSign} />
    </form>
  );
};
