"use server";

import { headers } from "next/headers";

export const getServerPathName = () => {
  // Получаем url.
  const headersList = headers();
  const headerUrl = headersList.get("referer");
  const currentPath = "/" + headerUrl?.split("/").slice(3).join("/");

  return currentPath;
};
