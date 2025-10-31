interface PriceProps {
  value: number;
  currency?: string;
}

export default function Price({ value, currency = "₹" }: PriceProps) {
  return (
    <span className="font-semibold text-foreground">
      {currency}
      {value.toLocaleString("en-IN", { minimumFractionDigits: 0 })}
    </span>
  );
}
