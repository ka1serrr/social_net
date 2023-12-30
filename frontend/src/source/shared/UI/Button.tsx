import { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader, cn } from "@/shared";

type ButtonProps = {
  isLoading?: boolean;
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, className, isLoading, ...rest } = props;
  return (
    <button
      {...rest}
      className={cn(
        "rounded-xl bg-purple-primary transition-colors duration-300 font-bold text-xl ease-linear py-2 px-5 hover:bg-purple-primary/80 text-white capitalize w-[150px] flex justify-center",
        className,
      )}
      ref={ref}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
});
