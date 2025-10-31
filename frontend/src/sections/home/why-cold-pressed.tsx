import { Droplet, FlaskConical, Leaf, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Droplet,
    title: "Vitamin E rich",
    description: "Naturally occurring tocopherols stay intact thanks to sub-40°C pressing.",
  },
  {
    icon: FlaskConical,
    title: "Lab-verified purity",
    description: "Third-party ISO labs issue sample COAs for every VerdantPure batch.",
  },
  {
    icon: Leaf,
    title: "Native aroma",
    description: "Unrefined aroma and phenolics deliver a sensory cue of freshness.",
  },
  {
    icon: ShieldCheck,
    title: "Oxidation control",
    description: "Nitrogen blanketing and tinted bottles slow oxidative rancidity.",
  },
];

export default function WhyColdPressedSection() {
  return (
    <section className="bg-muted/20 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Why cold-pressed?</p>
            <h2 className="mt-2 font-serif text-3xl text-foreground">Extracted with science-backed restraint</h2>
          </div>
          <p className="mt-4 max-w-lg text-sm text-muted-foreground md:mt-0">
            We mill seeds in climate-controlled micro presses, keeping frictional heat low so micronutrients like phytosterols, polyphenols, and omega lipids stay bioavailable.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((highlight) => (
            <article key={highlight.title} className="card-hover rounded-3xl border border-border/70 bg-background p-6">
              <highlight.icon className="h-10 w-10 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl text-foreground">{highlight.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{highlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
