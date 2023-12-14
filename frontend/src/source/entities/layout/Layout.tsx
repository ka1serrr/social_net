import { PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";

export const LayoutWrapper = ({ children }: PropsWithChildren) => {
  return (
    <main className='flex'>
      <Sidebar />
      <section className='w-full'>{children}</section>
    </main>
  );
};
