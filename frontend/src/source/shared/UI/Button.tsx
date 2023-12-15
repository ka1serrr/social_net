import { ButtonHTMLAttributes, forwardRef } from "react";
import { Loader, cn } from "@/shared";

type ButtonProps = {
  isLoading?: boolean;
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, className, isLoading, ...rest } = props;
  return (
    <button {...rest} className={cn("rounded-xl", className)} ref={ref}>
      {isLoading ? <Loader /> : children}
    </button>
  );
});
