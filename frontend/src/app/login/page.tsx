import { Metadata } from "next";
import { NO_INDEX_PAGE } from "@/shared";
import { Auth } from "@/widgets/Auth";

export const metadata: Metadata = {
  title: "Login",
  ...NO_INDEX_PAGE,
};

export default function LoginPage() {
  return <Auth type='login' />;
}
