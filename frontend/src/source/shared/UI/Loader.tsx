import { Loader2 } from "lucide-react";
import { cn } from "@/source/shared";

export const Loader = ({ className }: { className?: string }) => {
  return <Loader2 className={cn("animate-spin", className)} />;
};
