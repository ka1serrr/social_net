"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";

export const IsSignedInProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  // const { data, status } = useAuth();
  const { status } = useSession();

  if (status == "authenticated") {
    router.push("/");
    return;
  }

  return <>{children}</>;
};
