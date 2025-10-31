import { Helmet } from "react-helmet-async";
import { Droplets, ThermometerSnowflake, Wind } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { buildMeta } from "@/lib/seo";

const meta = buildMeta({
  title: "Cold-Press Methodology",
  description: "Discover VerdantPure's <40°C extraction protocol, nitrogen sealing, and lab validation compared to refined oils.",
  path: "/process",
});

const timeline = [
  {
    title: "Seed arrival & moisture screening",
    description: "Every lot is cleaned, stone-removed, and tested for moisture (<7%) before pressing begins.",
  },
  {
    title: "Cold milling below 40°C",
    description: "Hydraulic presses run at 3 RPM with chilled water jackets to keep thermal load minimal.",
  },
  {
    title: "Gravity settling & micro-filtration",
    description: "Oil rests for 12 hours before passing through 50-micron cloth filters — no hexane, no bleaching.",
  },
  {
    title: "Nitrogen flush & amber bottling",
    description: "Bottles are flushed with nitrogen, capped, and stamped with batch analytics for transparency.",
  },
];

const faqs = [
  {
    question: "Why is <40°C pressing critical?",
    answer:
      "Higher temperatures denature vitamin E and accelerate oxidation. Our chilled hydraulic system keeps the oil below 40°C, preserving antioxidants and aroma.",
  },
  {
    question: "How do you ensure zero adulteration?",
    answer:
      "Each batch undergoes GC-MS and peroxide value tests at NABL-accredited labs. Reports are published quarterly for customers.",
  },
  {
    question: "Do you refine or polish the oil?",
    answer:
      "Never. We rely on gravity settling and micro-filtration. That means natural sediments may settle — just shake gently before use.",
  },
  {
    question: "How long does VerdantPure oil stay fresh?",
    answer:
      "Shelf life is six months unopened thanks to nitrogen sealing. Once opened, consume within 90 days and keep away from heat.",
  },
  {
    question: "What certifications back the process?",
    answer:
      "We are ISO 22000, HACCP, and FSSAI compliant. Each production cycle is logged in our digital traceability platform.",
  },
];

export default function ProcessPage() {
  return (
    <div className="space-y-16 pb-24">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        <meta property="og:title" content={meta.openGraph.title} />
        <meta property="og:description" content={meta.openGraph.description} />
        <meta property="og:url" content={meta.openGraph.url} />
      </Helmet>
      <section className="mx-auto max-w-5xl px-4 pt-12 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Process</p>
        <h1 className="mt-2 font-serif text-4xl text-foreground">Our <40°C cold-press protocol</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          VerdantPure Oils uses slow hydraulic extraction to protect fragile phytonutrients. The result? Oils that actually taste like their seed of origin, with lab-verified antioxidant activity.
        </p>
        <div className="mt-10 space-y-6 border-l-2 border-primary/60 pl-6">
          {timeline.map((step, index) => (
            <div key={step.title} className="relative pl-6">
              <span className="absolute -left-3 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="font-serif text-xl text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-muted/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl text-foreground">Cold-Pressed vs Refined Oils</h2>
          <div className="mt-6 overflow-hidden rounded-3xl border border-border/70">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-6 py-4">Metric</th>
                  <th className="px-6 py-4">VerdantPure Cold-Pressed</th>
                  <th className="px-6 py-4">Refined Solvent Oil</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border/60">
                  <td className="px-6 py-4 font-medium">Extraction</td>
                  <td className="px-6 py-4">Hydraulic press below 40°C</td>
                  <td className="px-6 py-4">Hexane solvent + deodorisation</td>
                </tr>
                <tr className="border-t border-border/60">
                  <td className="px-6 py-4 font-medium">Vitamin retention</td>
                  <td className="px-6 py-4">Up to 95% vitamin E intact</td>
                  <td className="px-6 py-4">Heat damages heat-sensitive vitamins</td>
                </tr>
                <tr className="border-t border-border/60">
                  <td className="px-6 py-4 font-medium">Aroma & flavour</td>
                  <td className="px-6 py-4">Natural seed aroma preserved</td>
                  <td className="px-6 py-4">Neutralised through deodorisation</td>
                </tr>
                <tr className="border-t border-border/60">
                  <td className="px-6 py-4 font-medium">Traceability</td>
                  <td className="px-6 py-4">Farm-to-bottle lot codes</td>
                  <td className="px-6 py-4">Opaque supply chain</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card className="card-hover flex flex-col gap-4 rounded-3xl border border-border/70 bg-background p-6 text-sm">
              <ThermometerSnowflake className="h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="font-serif text-xl text-foreground">Energy efficient milling</h3>
              <p className="text-muted-foreground">Variable frequency drives cut press energy use by 28% versus traditional kolhus.</p>
            </Card>
            <Card className="card-hover flex flex-col gap-4 rounded-3xl border border-border/70 bg-background p-6 text-sm">
              <Droplets className="h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="font-serif text-xl text-foreground">Minimal oxidation</h3>
              <p className="text-muted-foreground">Nitrogen blanketing and tinted glass protect against peroxide formation.</p>
            </Card>
            <Card className="card-hover flex flex-col gap-4 rounded-3xl border border-border/70 bg-background p-6 text-sm">
              <Wind className="h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="font-serif text-xl text-foreground">Higher micronutrients</h3>
              <p className="text-muted-foreground">Cold pressing preserves polyphenols and phytosterols that support heart health.</p>
            </Card>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="font-serif text-3xl text-foreground">Process FAQs</h2>
        <Accordion type="single" collapsible className="mt-6 divide-y divide-border/60 rounded-3xl border border-border/70 bg-background">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
