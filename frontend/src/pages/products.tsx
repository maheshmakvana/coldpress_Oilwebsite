import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

import ProductCard from "@/components/product-card";
import ProductFilters, { type FilterState, type SortOption } from "@/components/product-filters";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";
import { buildMeta } from "@/lib/seo";

const meta = buildMeta({
  title: "Shop Cold-Pressed Oils",
  description:
    "Explore VerdantPure's cold-pressed mustard, coconut, sesame, groundnut, and almond oils. Filter by origin, size, and price.",
  path: "/products",
});

const maxPrice = Math.max(...products.map((product) => product.price));

const defaultFilters: FilterState = {
  type: "all",
  size: "all",
  maxPrice,
  sort: "popular",
};

function sortProducts(sort: SortOption, items: typeof products) {
  switch (sort) {
    case "price-asc":
      return [...items].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...items].sort((a, b) => b.price - a.price);
    case "new":
      return [...items].sort((a, b) => b.id - a.id);
    default:
      return items;
  }
}

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const filtered = useMemo(() => {
    let result = products.filter((product) => product.price <= filters.maxPrice);
    if (filters.type !== "all") {
      result = result.filter((product) => product.slug === filters.type);
    }
    if (filters.size !== "all") {
      result = result.filter((product) => product.sizes.includes(filters.size));
    }
    return sortProducts(filters.sort, result);
  }, [filters]);

  return (
    <div className="space-y-14 pb-24">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <meta property="og:title" content={meta.openGraph.title} />
        <meta property="og:description" content={meta.openGraph.description} />
        <meta property="og:url" content={meta.openGraph.url} />
        <meta property="og:image" content={meta.openGraph.images[0]} />
      </Helmet>
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Products</p>
            <h1 className="mt-2 font-serif text-3xl text-foreground">Pure oils for every kitchen ritual</h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Filter by seed type, pack size, and price range to find your ideal oil. Every SKU is lab tested, solvent-free, and bottled in small batches.
            </p>
          </div>
          <Badge variant="outline" className="w-fit border-primary/50 text-xs uppercase">
            {filtered.length} SKUs available
          </Badge>
        </div>
        <div className="mt-8">
          <ProductFilters products={products} filters={filters} onChange={setFilters} />
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.length > 0 ? (
            filtered.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <p className="col-span-full rounded-3xl border border-border/70 bg-muted/40 p-10 text-center text-sm text-muted-foreground">
              No oils match your filters yet. Try expanding the price range or selecting a different size.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
