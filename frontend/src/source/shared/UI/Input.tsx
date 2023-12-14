"use client";

import { LucideIcon } from "lucide-react";
import { HTMLInputTypeAttribute, InputHTMLAttributes, forwardRef, useState } from "react";
import { FieldError } from "react-hook-form";
import { cn } from "@/shared";

type InputProps = {
  error?: FieldError;
  Icon?: LucideIcon;
};

type Props = InputHTMLAttributes<HTMLInputElement> & InputProps;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, Icon, type, error, ...rest } = props;

  const [initialType, setInitialType] = useState<HTMLInputTypeAttribute | undefined>(type || "text");

  return (
    <div>
      {Icon && (
        <div>
          <Icon />
        </div>
      )}
      <input {...rest} className={cn("text-xl", className)} type={initialType} ref={ref} />
      {error && <div className='text-red-500'>{error?.message}</div>}
    </div>
  );
});

Input.displayName = "Input";
