import React, { useState } from 'react';
import { ShoppingCart, Droplets, Sprout } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { mockProducts } from '../mock';
import { useToast } from '../hooks/use-toast';

export const Products = () => {
  const { toast } = useToast();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleInquiry = (productName) => {
    toast({
      title: 'Inquiry Sent!',
      description: `We will contact you about ${productName} shortly.`,
    });
  };

  return (
    <section id="products" className="relative bg-[var(--theme-surface-alt)] py-24">
      <div className="absolute inset-x-0 -top-20 h-32 bg-[var(--theme-divider)]" />
      <div className="absolute inset-0 opacity-[0.06]" style={{ background: 'var(--theme-ripple)' }} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 text-center">
          <Badge className="mx-auto bg-[var(--theme-primary)] px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white">
            Signature Bottlings
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--theme-text-strong)]">
            Golden Oils for Everyday Rituals
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--theme-text)]">
            Crafted in small batches, sealed in glass, and ready for both kitchen adventures and wellness rituals.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {mockProducts.map((product) => (
            <Card
              key={product.id}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group relative overflow-hidden rounded-[2.25rem] border border-[var(--theme-border-soft)] bg-[var(--theme-background)] shadow-xl shadow-[var(--theme-card-shadow)] transition-all duration-500 hover:-translate-y-2 hover:border-[var(--theme-primary)]"
            >
              <div className="relative h-72 overflow-hidden rounded-[2rem]">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`h-full w-full object-cover transition-transform duration-700 ${hoveredProduct === product.id ? 'scale-110' : 'scale-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                  {product.category}
                </div>
                <div className="absolute bottom-6 right-6 rounded-full bg-[var(--theme-glass-strong)] px-5 py-2 text-lg font-semibold text-[var(--theme-primary)] shadow-lg shadow-[var(--theme-card-shadow)] backdrop-blur">
                  ${product.price}
                </div>
              </div>

              <CardHeader className="space-y-2 pt-6">
                <CardTitle className="text-2xl font-semibold text-[var(--theme-text-strong)]">
                  {product.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-[var(--theme-text)]">
                  <Droplets className="h-4 w-4 text-[var(--theme-highlight)]" />
                  {product.volume}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 text-[var(--theme-text)]">
                <p>{product.description}</p>
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--theme-primary-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--theme-primary)]">
                  <Sprout className="h-4 w-4" /> {product.source}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  onClick={() => handleInquiry(product.name)}
                  className="group relative w-full overflow-hidden bg-[var(--theme-primary)] py-4 text-white shadow-lg shadow-[var(--theme-card-shadow)] transition-transform duration-300 hover:scale-[1.02] hover:bg-[var(--theme-primary-strong)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.4em]">
                    <ShoppingCart className="h-4 w-4" /> Inquire
                  </span>
                  <span className="pointer-events-none absolute inset-0 bg-[var(--theme-gradient-soft)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
