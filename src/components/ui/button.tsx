import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/70 disabled:pointer-events-none disabled:opacity-60 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-br from-brand to-cyan text-[#05060f] shadow-[0_10px_34px_-8px_rgba(109,94,252,0.55)] hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-8px_rgba(109,94,252,0.7)]",
        outline:
          "border border-line-strong bg-white/5 text-ink hover:border-cyan hover:bg-white/10",
        ghost: "text-muted hover:text-ink hover:bg-white/5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
);
Button.displayName = "Button";

export { buttonVariants };
