"use client";

import { ReactNode, useEffect } from "react";
import { useAuth } from "@/shared";
import { useRouter } from "next/navigation";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const { data, status } = useAuth();

  useEffect(() => {
    if (status === "authenticated") {
      window.localStorage.setItem("token", JSON.stringify(data?.jwt) || "");
    } else if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [data, status]);

  return <>{children}</>;
};
