import NewsletterForm from "@/components/newsletter-form";

export default function NewsletterSection() {
  return (
    <section className="mx-auto max-w-4xl rounded-[2.5rem] border border-border/70 bg-background p-10 text-center shadow-xl">
      <h2 className="font-serif text-3xl text-foreground">Get our monthly lab report & recipes</h2>
      <p className="mt-3 text-sm text-muted-foreground">
        Subscribe for sample COAs, sourcing stories, and seasonal recipes. No spam, just nutrient-dense inspiration.
      </p>
      <div className="mx-auto mt-6 max-w-xl">
        <NewsletterForm />
      </div>
      <p className="mt-4 text-xs text-muted-foreground">By subscribing, you agree to receive VerdantPure updates. You can unsubscribe anytime.</p>
    </section>
  );
}
