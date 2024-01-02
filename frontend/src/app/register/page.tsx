import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/shared";
import { AuthForm } from "@/features/Auth";
import { IsSignedInProvider } from "@/app/providers/IsSignedInProvider";

export const metadata: Metadata = {
  title: "Login",
  ...NO_INDEX_PAGE,
};

export default function LoginPage() {
  return (
    <IsSignedInProvider>
      <AuthForm type='Register' />
    </IsSignedInProvider>
  );
}
