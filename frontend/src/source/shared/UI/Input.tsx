"use client";

import { LucideIcon } from "lucide-react";
import { HTMLInputTypeAttribute, InputHTMLAttributes, forwardRef, useState } from "react";
import { FieldError } from "react-hook-form";
import { cn } from "@/shared";

type InputProps = {
  error?: string;
  Icon?: LucideIcon;
};

type Props = InputHTMLAttributes<HTMLInputElement> & InputProps;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, Icon, type, error, ...rest } = props;

  const [initialType, setInitialType] = useState<HTMLInputTypeAttribute | undefined>(type || "text");

  return (
    <label className='flex flex-col w-full group'>
      <div className='flex'>
        {Icon && (
          <div className='mr-3'>
            <Icon className='text-[#585654] group-focus-within:text-white transition-colors duration-300 ease-linear' />
          </div>
        )}
        <input
          {...rest}
          className={cn(
            "border-none autofill:bg-none bg-transparent outline-none placeholder:text-[#666463]",
            className,
          )}
          type={initialType}
          ref={ref}
        />
      </div>
      {error && (
        <div className='text-red-600 transition duration-300 text-sm bg-transparent mt-2 font-bold'>{error}</div>
      )}
    </label>
  );
});

Input.displayName = "Input";
