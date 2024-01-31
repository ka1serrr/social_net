import { Loader2, LucideProps } from "lucide-react";
import { cn } from "@/source/shared";
import { FC } from "react";

type Props = LucideProps;

export const Loader: FC<Props> = (props) => {
  const { className, size } = props;
  return <Loader2 {...props} className={cn("animate-spin", className)} size={size} />;
};
