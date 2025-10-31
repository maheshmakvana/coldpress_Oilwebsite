import { Helmet } from "react-helmet-async";

import HeroSection from "@/sections/home/hero";
import BestsellersSection from "@/sections/home/bestsellers";
import NewsletterSection from "@/sections/home/newsletter";
import ProcessTeaserSection from "@/sections/home/process-teaser";
import SocialProofSection from "@/sections/home/social-proof";
import WhyColdPressedSection from "@/sections/home/why-cold-pressed";
import { products } from "@/data/products";
import { BRAND } from "@/lib/utils";
import { buildMeta, organizationJsonLd } from "@/lib/seo";

const meta = buildMeta({
  title: "Cold-Pressed Oils for Everyday Wellness",
  description:
    "VerdantPure Oils offers nutrient-rich cold-pressed mustard, coconut, sesame, groundnut, and almond oils sourced from regenerative farms across India.",
  path: "/",
});

const productStructuredData = {
  '@context': 'https://schema.org',
  '@graph': products.map((product) => ({
    '@type': 'Product',
    name: product.name,
    description: product.short,
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
  })),
};

export default function HomePage() {
  return (
    <div className="space-y-20 pb-24">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <meta name="theme-color" content={meta.themeColor} />
        <meta name="msapplication-TileColor" content={meta.accentColor} />
        <meta property="og:title" content={meta.openGraph.title} />
        <meta property="og:description" content={meta.openGraph.description} />
        <meta property="og:url" content={meta.openGraph.url} />
        <meta property="og:type" content={meta.openGraph.type} />
        <meta property="og:image" content={meta.openGraph.images[0]} />
        <meta name="twitter:card" content={meta.twitter.card} />
        <meta name="twitter:title" content={meta.twitter.title} />
        <meta name="twitter:description" content={meta.twitter.description} />
        <meta name="twitter:image" content={meta.twitter.image} />
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd())}</script>
        <script type="application/ld+json">{JSON.stringify(productStructuredData)}</script>
      </Helmet>
      <HeroSection />
      <BestsellersSection />
      <WhyColdPressedSection />
      <ProcessTeaserSection />
      <SocialProofSection />
      <div className="px-4 sm:px-6">
        <NewsletterSection />
      </div>
    </div>
  );
}
