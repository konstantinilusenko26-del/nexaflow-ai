import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
        {title}
      </h2>
      {subtitle && <p className="max-w-xl text-muted">{subtitle}</p>}
    </Reveal>
  );
}
