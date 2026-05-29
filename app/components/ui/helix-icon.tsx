import type { LucideProps } from "lucide-react";

export type HelixIconProps = {
  className?: string;
  size?: LucideProps["size"];
  color?: string;
  strokeWidth?: number;
};

/** Shared defaults for Lucide icons inside Helix page sections. */
export function helixIconProps({
  className,
  size,
  color,
  strokeWidth = 1.75,
}: HelixIconProps = {}): LucideProps {
  return {
    className,
    size,
    color,
    strokeWidth,
    "aria-hidden": true,
  };
}
