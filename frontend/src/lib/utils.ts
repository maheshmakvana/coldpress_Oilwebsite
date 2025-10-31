import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BRAND = {
  name: "VerdantPure Oils",
  tagline: "Pure. Cold-Pressed. Nutrient-Rich.",
  description:
    "VerdantPure Oils crafts nutrient-rich cold-pressed oils sourced from regenerative farms across India. Each batch is lab verified for purity and bottled without solvents or heat.",
  url: "https://www.verdantpureoils.example",
  hotline: "+91 98765 43210",
};

export const PRIMARY_COLOR = "#0E7A4B";
export const ACCENT_COLOR = "#D9A441";
