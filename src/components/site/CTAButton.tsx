import type { ComponentProps } from "react";

type Variant = "primary" | "outline" | "gold";

export function CTAButton({
  variant = "primary",
  className = "",
  children,
  ...rest
}: { variant?: Variant } & ComponentProps<"a">) {
  const base =
    "group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold tracking-wide rounded-full transition-all duration-300 will-change-transform";

  const variants: Record<Variant, string> = {
    primary:
      "bg-teal text-paper hover:bg-teal-deep shadow-soft hover:shadow-bold-teal hover:-translate-x-1 hover:-translate-y-1",
    gold:
      "bg-gold text-ink hover:bg-gold/90 shadow-soft hover:shadow-bold hover:-translate-x-1 hover:-translate-y-1",
    outline:
      "border-2 border-ink text-ink hover:bg-ink hover:text-paper",
  };

  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}
