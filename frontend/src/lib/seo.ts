import { BRAND, PRIMARY_COLOR, ACCENT_COLOR } from "@/lib/utils";

export function buildMeta({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const canonical = new URL(path, BRAND.url).toString();
  const metaTitle = `${title} | ${BRAND.name}`;
  const metaDescription = description ?? BRAND.description;
  const imageUrl = image ?? `${BRAND.url}/images/meta/verdantpure-og.svg`;

  return {
    title: metaTitle,
    description: metaDescription,
    canonical,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      type: "website" as const,
      images: [imageUrl],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: metaTitle,
      description: metaDescription,
      image: imageUrl,
    },
    themeColor: PRIMARY_COLOR,
    accentColor: ACCENT_COLOR,
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND.name,
    url: BRAND.url,
    logo: `${BRAND.url}/images/meta/verdantpure-og.svg`,
    sameAs: [
      'https://www.instagram.com/verdantpureoils',
      'https://www.facebook.com/verdantpureoils'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND.hotline,
      contactType: 'customer support',
      areaServed: 'IN'
    }
  };
}
