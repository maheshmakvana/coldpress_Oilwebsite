import { Factory, Filter, Leaf, ThermometerSnowflake } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { icon: Leaf, title: "Select Seeds", description: "Heirloom seeds sourced directly from traceable Indian farms." },
  {
    icon: ThermometerSnowflake,
    title: "Slow Press <40°C",
    description: "Hydraulic presses with chilled jackets minimise thermal stress.",
  },
  { icon: Filter, title: "Micro-filter", description: "Gravity filtration preserves flavour while removing sediments." },
  { icon: Factory, title: "Nitrogen Seal", description: "Headspace flushed with food-grade nitrogen to prevent oxidation." },
];

export default function ProcessTeaserSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="rounded-[2.5rem] border border-border/70 bg-gradient-to-br from-background via-background to-muted/30 p-10 shadow-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Process</p>
            <h2 className="mt-2 font-serif text-3xl text-foreground">Four-stage cold-press protocol</h2>
          </div>
          <Link to="/process" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
            View full process
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="card-hover rounded-3xl border border-border/60 bg-background/80 p-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Step {index + 1}</span>
              <step.icon className="mt-4 h-10 w-10 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
