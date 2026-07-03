import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border border-line bg-black/25 px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-colors focus-visible:outline-none focus-visible:border-cyan focus-visible:ring-1 focus-visible:ring-cyan/40 resize-y",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
