interface NutritionTableProps {
  nutrition: Record<string, string | number>;
}

export default function NutritionTable({ nutrition }: NutritionTableProps) {
  return (
    <table className="w-full border-separate border-spacing-y-2 text-left text-sm">
      <thead>
        <tr className="text-xs uppercase text-muted-foreground">
          <th className="rounded-l-xl bg-muted/60 px-4 py-2">Nutrient (per 100ml)</th>
          <th className="rounded-r-xl bg-muted/60 px-4 py-2 text-right">Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(nutrition).map(([key, value]) => (
          <tr key={key} className="rounded-xl">
            <td className="rounded-l-xl bg-card px-4 py-2 font-medium capitalize text-foreground">{key}</td>
            <td className="rounded-r-xl bg-card px-4 py-2 text-right text-muted-foreground">
              {typeof value === "number" ? value.toLocaleString("en-IN") : value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
