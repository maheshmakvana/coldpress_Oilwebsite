export type ProductSize = "250ml" | "500ml" | "1L";

export interface Product {
  id: number;
  slug: string;
  name: string;
  short: string;
  longDescription: string;
  originRegion: string;
  price: number;
  sizes: ProductSize[];
  nutrition: Record<string, string>;
  smokePoint: string;
  allergens: string;
  certifications: string[];
  images: string[];
  tastingNotes: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "mustard",
    name: "Kachchi Ghani Mustard Oil",
    short: "Bold, peppery finish ideal for North Indian classics.",
    longDescription:
      "A first-press mustard oil made from single-estate Sarson seeds sourced from Bharatpur, Rajasthan. Cold-extracted below 40°C to retain glucosinolates and omega-3 rich lipids.",
    originRegion: "Bharatpur, Rajasthan",
    price: 499,
    sizes: ["250ml", "500ml", "1L"],
    nutrition: {
      "Energy": "884 kcal",
      "Omega-3": "11g",
      "Vitamin E": "18mg",
      "Natural Allyl Isothiocyanate": "Sample 0.9%",
    },
    smokePoint: "204°C",
    allergens: "Pressed in a facility handling sesame and groundnut.",
    certifications: ["FSSAI Certified", "ISO 22000 Lab Verified", "Cold-Pressed"],
    images: [
      "/images/mustard/mustard-bottle.svg",
      "/images/mustard/mustard-farm.svg",
    ],
    tastingNotes: "Warm mustard bite with hints of radish and smoky undertones.",
  },
  {
    id: 2,
    slug: "coconut",
    name: "Coastal Wood-Pressed Coconut Oil",
    short: "Naturally sweet aroma perfect for sautéing and skincare.",
    longDescription:
      "Single-origin Pollachi coconuts slow-pressed within 6 hours of cracking to preserve medium-chain triglycerides and lauric acid content.",
    originRegion: "Pollachi, Tamil Nadu",
    price: 549,
    sizes: ["250ml", "500ml", "1L"],
    nutrition: {
      "Energy": "884 kcal",
      "Lauric Acid": "49g",
      "Caprylic Acid": "7g",
      "Moisture": "Sample <0.1%",
    },
    smokePoint: "177°C",
    allergens: "Coconut (tree nut).",
    certifications: ["USDA Organic Inputs", "ISO 22000 Lab Verified"],
    images: [
      "/images/coconut/coconut-bottle.svg",
      "/images/coconut/coconut-grove.svg",
    ],
    tastingNotes: "Creamy coconut milk with a toasted finish.",
  },
  {
    id: 3,
    slug: "sesame",
    name: "Stone-Pressed Sesame Oil",
    short: "Toasty aroma with high lignan content for immunity.",
    longDescription:
      "Handpicked black sesame seeds from Erode gently stone-pressed to preserve sesamin, sesamolin, and antioxidant-rich tocopherols.",
    originRegion: "Erode, Tamil Nadu",
    price: 579,
    sizes: ["250ml", "500ml"],
    nutrition: {
      "Energy": "884 kcal",
      "Sesamin": "Sample 1.1g",
      "Polyphenols": "530mg",
      "Vitamin E": "14mg",
    },
    smokePoint: "210°C",
    allergens: "Sesame seeds.",
    certifications: ["Lab Tested", "Cold-Pressed", "Zero-Solvent"],
    images: [
      "/images/sesame/sesame-bottle.svg",
      "/images/sesame/sesame-press.svg",
    ],
    tastingNotes: "Nutty caramel with a gentle roasted spice.",
  },
  {
    id: 4,
    slug: "groundnut",
    name: "Farmstead Groundnut Oil",
    short: "High smoke point, perfect for deep frying without residue.",
    longDescription:
      "Saurashtra bold groundnuts sun-dried and slow-pressed to retain natural resveratrol and plant sterols.",
    originRegion: "Junagadh, Gujarat",
    price: 529,
    sizes: ["500ml", "1L"],
    nutrition: {
      "Energy": "884 kcal",
      "MUFA": "58g",
      "PUFA": "26g",
      "Vitamin E": "15mg",
    },
    smokePoint: "227°C",
    allergens: "Groundnuts (peanuts).",
    certifications: ["FSSAI Certified", "ISO 22000 Lab Verified"],
    images: [
      "/images/groundnut/groundnut-bottle.svg",
      "/images/groundnut/groundnut-field.svg",
    ],
    tastingNotes: "Buttery start with caramelized peanut finish.",
  },
  {
    id: 5,
    slug: "almond",
    name: "Heritage Almond Oil",
    short: "Cold-extracted Kashmiri mamra almonds for wellness.",
    longDescription:
      "Hand-sorted mamra almonds from Kashmir pressed below 35°C to protect vitamin E and plant sterols.",
    originRegion: "Srinagar, Jammu & Kashmir",
    price: 899,
    sizes: ["250ml", "500ml"],
    nutrition: {
      "Energy": "884 kcal",
      "Vitamin E": "26mg",
      "Oleic Acid": "70g",
      "Natural Antioxidants": "Sample 520mg",
    },
    smokePoint: "216°C",
    allergens: "Almonds (tree nuts).",
    certifications: ["FSSAI Certified", "Cold-Pressed", "Lab Tested"],
    images: [
      "/images/almond/almond-bottle.svg",
      "/images/almond/almond-orchard.svg",
    ],
    tastingNotes: "Delicate marzipan sweetness with floral aroma.",
  },
];
