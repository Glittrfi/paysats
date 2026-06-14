import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: ButtonVariant;
};

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "gold-gradient text-white shadow-tile",
  secondary:
    "border border-paysats-accent bg-paysats-surface text-paysats-accent hover:bg-paysats-accent/10",
  ghost:
    "border border-paysats-border bg-paysats-surface text-paysats-text hover:border-paysats-accent/40",
};

export function Button({
  className = "",
  loading,
  children,
  disabled,
  variant = "primary",
  ...props
}: Props) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`tap-target w-full rounded-control px-4 py-3 font-bold transition active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT_CLASS[variant]} ${className}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
