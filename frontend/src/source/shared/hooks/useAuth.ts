import { useSession } from "next-auth/react";

export const useAuth = () => {
  const { data, status } = useSession();
  return {
    data: data?.user,
    status,
    isLoggedIn: status === "authenticated",
  };
};
