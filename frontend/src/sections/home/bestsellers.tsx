import ProductCard from "@/components/product-card";
import { products } from "@/data/products";

export default function BestsellersSection() {
  return (
    <section id="bestsellers" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Our Bestsellers</p>
          <h2 className="mt-2 font-serif text-3xl text-foreground">Farm-fresh oils that sell out fast</h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">
          Each batch is pressed in micro-lots, nitrogen sealed, and dispatched within 48 hours to preserve aroma and phytonutrients.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
