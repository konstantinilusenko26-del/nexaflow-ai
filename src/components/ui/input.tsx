import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border border-line bg-black/25 px-4 text-sm text-ink placeholder:text-muted/70 transition-colors focus-visible:outline-none focus-visible:border-cyan focus-visible:ring-1 focus-visible:ring-cyan/40",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
