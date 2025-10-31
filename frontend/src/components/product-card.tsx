import { useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";

import CertificationBadges from "@/components/certification-badges";
import NutritionTable from "@/components/nutrition-table";
import Price from "@/components/price";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { trackEvent } from "@/lib/posthog";
import { BRAND } from "@/lib/utils";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [open, setOpen] = useState(false);

  const handleQuickView = () => {
    trackEvent("product_quick_view", { product: product.slug });
    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Card className="card-hover flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
          <img
            src={product.images[0]}
            alt={`${product.name} bottle`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <Badge className="absolute left-4 top-4 bg-secondary/90 text-xs text-secondary-foreground">Cold-Pressed</Badge>
        </div>
        <CardHeader className="flex-1 space-y-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">{product.name}</CardTitle>
            <Price value={product.price} />
          </div>
          <CardDescription>{product.short}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="flex items-center gap-2 text-xs font-medium uppercase text-muted-foreground">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {product.originRegion}
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
            {product.certifications.map((cert) => (
              <span key={cert} className="rounded-full bg-muted px-3 py-1">
                {cert}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">Sizes: {product.sizes.join(" · ")}</div>
          <DialogTrigger asChild>
            <Button size="sm" onClick={handleQuickView}>
              Quick View
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>

      <DialogContent aria-label={`${product.name} details`}>
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <p className="text-sm text-muted-foreground">{product.longDescription}</p>
        </DialogHeader>
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              {product.images.map((image, idx) => (
                <img
                  key={image}
                  src={image}
                  alt={`${product.name} visual ${idx + 1}`}
                  className="h-40 w-40 rounded-3xl border border-border/60 object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{product.tastingNotes}</p>
            <div className="grid gap-3 rounded-3xl bg-muted/40 p-4">
              <p className="text-sm font-medium text-foreground">Storage tips</p>
              <p className="text-sm text-muted-foreground">
                Store below 25°C in a cool, dark cupboard. Use a dry spoon. Refrigerate after opening for extended freshness.
              </p>
              <p className="text-sm font-medium text-foreground">Smoke point</p>
              <p className="text-sm text-muted-foreground">{product.smokePoint}</p>
              <p className="text-sm font-medium text-foreground">Allergens</p>
              <p className="text-sm text-muted-foreground">{product.allergens}</p>
            </div>
          </div>
          <div className="space-y-4">
            <CertificationBadges certifications={product.certifications} />
            <NutritionTable nutrition={product.nutrition} />
            <div className="grid gap-2">
              <Button className="w-full" size="lg">
                Add to Cart
              </Button>
              <Button
                className="w-full"
                variant="outline"
                size="lg"
                asChild
              >
                <a href="https://wa.me/919876543210" className="flex items-center justify-center gap-2">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" /> Buy on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: product.name,
              description: product.longDescription,
              image: product.images.map((image) => `${BRAND.url}${image}`),
              sku: `VERDANT-${product.slug.toUpperCase()}`,
              brand: {
                '@type': 'Brand',
                name: BRAND.name,
              },
              offers: {
                '@type': 'Offer',
                priceCurrency: 'INR',
                price: product.price,
                availability: 'https://schema.org/InStock',
                url: `${BRAND.url}/products/${product.slug}`,
              },
            }),
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
