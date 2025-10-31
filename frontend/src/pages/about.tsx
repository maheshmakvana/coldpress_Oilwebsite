import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buildMeta } from "@/lib/seo";

const meta = buildMeta({
  title: "About VerdantPure Oils",
  description: "Learn about VerdantPure's regenerative sourcing, lab testing protocols, and team crafting premium cold-pressed oils.",
  path: "/about",
});

const regions = [
  { region: "Bharatpur, Rajasthan", crop: "Mustard", stat: "19 partner growers" },
  { region: "Pollachi, Tamil Nadu", crop: "Coconut", stat: "11 cooperative farmers" },
  { region: "Erode, Tamil Nadu", crop: "Sesame", stat: "7 organic collectives" },
  { region: "Junagadh, Gujarat", crop: "Groundnut", stat: "15 regenerative farms" },
  { region: "Srinagar, J&K", crop: "Almond", stat: "6 family orchards" },
];

const team = [
  {
    name: "Ishita Malhotra",
    role: "Founder & Oil Sommelier",
    bio: "Spent a decade in olive oil grading before returning to India to spotlight indigenous seeds.",
  },
  {
    name: "Arjun Patel",
    role: "Head of Sourcing",
    bio: "Works with regenerative farmer clusters, implementing traceability across 58 villages.",
  },
  {
    name: "Dr. Sana Qureshi",
    role: "Food Scientist",
    bio: "Leads microbiology and GC-MS testing to ensure every batch meets ISO 22000 limits.",
  },
];

export default function AboutPage() {
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
        <Badge variant="outline" className="border-primary/50 text-xs uppercase">Our Mission</Badge>
        <h1 className="mt-4 font-serif text-4xl text-foreground">From soil to seal, we honour every micronutrient</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          VerdantPure Oils partners with regenerative farmers across India to craft cold-pressed oils that are unadulterated, flavour-forward, and scientifically validated. We believe provenance and proof should be table stakes for every pantry staple.
        </p>
      </section>
      <section className="bg-muted/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl text-foreground">Sourcing map</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Each VerdantPure bottle is traceable back to a farm cluster. QR codes on the cap reveal harvest dates, moisture readings, and lab reports.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <Card key={region.region} className="card-hover rounded-3xl border border-border/70 bg-background p-6">
                <h3 className="font-serif text-xl text-foreground">{region.region}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Crop: {region.crop}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{region.stat}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-serif text-3xl text-foreground">Lab testing & compliance</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="rounded-3xl border border-border/70 bg-background p-6">
            <h3 className="font-serif text-xl text-foreground">Batch analytics</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Every production run is tested for peroxide value, moisture, free fatty acids, and sensory quality at NABL-certified labs. Certificates are archived for 24 months.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase text-muted-foreground">
              <span className="rounded-full bg-muted px-3 py-1">FSSAI</span>
              <span className="rounded-full bg-muted px-3 py-1">ISO 22000</span>
              <span className="rounded-full bg-muted px-3 py-1">HACCP</span>
            </div>
          </Card>
          <Card className="rounded-3xl border border-border/70 bg-background p-6">
            <h3 className="font-serif text-xl text-foreground">Safe bottling facility</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Our Bengaluru facility features HEPA-filtered filling rooms, hygienic stainless lines, and tamper-evident closures audited quarterly.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">GSTIN: 29AAACV1234F1Z9 · FSSAI: 11223344556677</p>
          </Card>
        </div>
      </section>
      <section className="bg-muted/20 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl text-foreground">Meet the team</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="card-hover rounded-3xl border border-border/70 bg-background p-6">
                <div className="h-40 w-full rounded-2xl bg-muted/60" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-xl text-foreground">{member.name}</h3>
                <p className="text-xs uppercase tracking-wide text-primary">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
