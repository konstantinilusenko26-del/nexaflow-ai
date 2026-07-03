import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

/** Anchor styled as a button — used for in-page smooth-scroll CTAs. */
export function CTAButton({ href, children, variant = "primary", size = "md", className }: CTAButtonProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
