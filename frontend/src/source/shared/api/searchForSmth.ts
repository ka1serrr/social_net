import { $fecth } from "@/app/api";

type Args = {
  text: string;
  url: string;
};

export const searchForSmth = async <T>({ text, url }: Args) => {
  const path = `${url}?find=${text}`;
  return await $fecth.get<T>({ path, isAuth: true });
};
