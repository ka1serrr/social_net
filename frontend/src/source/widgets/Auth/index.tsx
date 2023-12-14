import { AuthForm } from "@/features/Auth";

type Props = {
  type: "login" | "register";
};
export const Auth = ({ type }: Props) => {
  return <AuthForm />;
};
