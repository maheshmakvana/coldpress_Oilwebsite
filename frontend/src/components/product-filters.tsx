import { useMemo } from "react";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Product, ProductSize } from "@/data/products";

export type SortOption = "popular" | "new" | "price-asc" | "price-desc";

export interface FilterState {
  type: string;
  size: ProductSize | "all";
  maxPrice: number;
  sort: SortOption;
}

interface ProductFiltersProps {
  products: Product[];
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

const oilTypes = ["all", "mustard", "coconut", "sesame", "groundnut", "almond"];
const sortOptions: Record<SortOption, string> = {
  popular: "Popular",
  new: "New arrivals",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
};

export default function ProductFilters({ products, filters, onChange }: ProductFiltersProps) {
  const maxPriceAvailable = useMemo(() => Math.max(...products.map((p) => p.price)), [products]);

  const handleUpdate = (partial: Partial<FilterState>) => {
    onChange({ ...filters, ...partial });
  };

  return (
    <div className="flex flex-col gap-4 rounded-3xl border border-border/70 bg-background p-6 shadow-sm lg:flex-row lg:items-end lg:justify-between">
      <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label htmlFor="oil-type" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Oil type
          </label>
          <Select value={filters.type} onValueChange={(value) => handleUpdate({ type: value })}>
            <SelectTrigger id="oil-type" className="mt-1">
              <SelectValue placeholder="All types" />
            </SelectTrigger>
            <SelectContent>
              {oilTypes.map((type) => (
                <SelectItem key={type} value={type} className="capitalize">
                  {type === "all" ? "All oils" : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="size" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Size
          </label>
          <Select value={filters.size} onValueChange={(value) => handleUpdate({ size: value as FilterState["size"] })}>
            <SelectTrigger id="size" className="mt-1">
              <SelectValue placeholder="Any size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any size</SelectItem>
              {["250ml", "500ml", "1L"].map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="price" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Price up to
          </label>
          <div className="mt-2 flex items-center gap-3">
            <input
              id="price"
              type="range"
              min={200}
              max={maxPriceAvailable}
              value={filters.maxPrice}
              onChange={(event) => handleUpdate({ maxPrice: Number(event.target.value) })}
              className="flex-1 cursor-pointer accent-primary"
            />
            <span className="text-sm font-medium text-foreground">₹{filters.maxPrice}</span>
          </div>
        </div>
        <div>
          <label htmlFor="sort" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Sort by
          </label>
          <Select value={filters.sort} onValueChange={(value) => handleUpdate({ sort: value as SortOption })}>
            <SelectTrigger id="sort" className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(sortOptions).map(([value, label]) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button variant="ghost" onClick={() => onChange({ type: "all", size: "all", maxPrice: maxPriceAvailable, sort: "popular" })}>
        Reset filters
      </Button>
    </div>
  );
}
