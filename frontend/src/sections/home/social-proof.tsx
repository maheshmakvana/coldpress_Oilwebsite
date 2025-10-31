import StarRating from "@/components/star-rating";

const logos = ["FSSAI Compliant", "ISO 22000", "NABL Labs", "Gourmet Retail" ];

const testimonials = [
  {
    name: "Dr. Ananya Rao",
    title: "Clinical Nutritionist, Bengaluru",
    quote:
      "The fatty acid profile retains a remarkable 97% omega integrity. VerdantPure is my go-to recommendation for clients seeking anti-inflammatory fats.",
    rating: 4.8,
  },
  {
    name: "Rahul Mehta",
    title: "Founder, Farm2Fork Collective",
    quote:
      "Their sourcing transparency is unmatched. Every bottle has a lot code and moisture reading — that's rare in the edible oil space.",
    rating: 5,
  },
  {
    name: "Chef Naina Kapoor",
    title: "Culinary Director, Botanica",
    quote:
      "The aroma is intensely fresh and finishes clean even when tempering spices. Patrons notice the difference immediately.",
    rating: 4.9,
  },
];

export default function SocialProofSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-[2.5rem] border border-border/70 bg-muted/20 p-10">
          <div className="flex flex-col gap-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Trusted by nutritionists & chefs</p>
            <h2 className="font-serif text-3xl text-foreground">Certified and stocked by India's conscious retailers</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {logos.map((logo) => (
                <span key={logo} className="rounded-full border border-border/70 bg-background px-4 py-2 shadow-sm">
                  {logo}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="card-hover flex h-full flex-col rounded-3xl border border-border/70 bg-background p-6 text-left">
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">“{testimonial.quote}”</p>
                <div className="mt-6 text-sm font-semibold text-foreground">{testimonial.name}</div>
                <p className="text-xs text-muted-foreground">{testimonial.title}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
