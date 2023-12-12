import { PropsWithChildren } from "react";
import { Sidebar } from "./Sidebar";

export const LayoutWrapper = ({ children }: PropsWithChildren) => {
  return (
    <main className='flex'>
      <Sidebar />
      <section>{children}</section>
    </main>
  );
};
