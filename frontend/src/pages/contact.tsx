import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { buildMeta } from "@/lib/seo";

const meta = buildMeta({
  title: "Contact VerdantPure Oils",
  description: "Reach VerdantPure Oils for wholesale, lab reports, or media inquiries. Visit our partner stores across India.",
  path: "/contact",
});

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Share a few more details"),
});

type ContactValues = z.infer<typeof contactSchema>;

const stores = [
  { name: "Organic Basket, Bengaluru", address: "Indiranagar 2nd Stage" },
  { name: "Nature's Shelf, Mumbai", address: "Bandra West" },
  { name: "Sustaina, Delhi", address: "Greater Kailash II" },
];

export default function ContactPage() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    toast({
      title: "Message sent",
      description: "Our team will respond within 24 hours. Thank you for reaching out!",
    });
    reset();
  };

  return (
    <div className="space-y-16 pb-24">
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
      </Helmet>
      <section className="mx-auto max-w-4xl px-4 pt-12 sm:px-6">
        <h1 className="font-serif text-4xl text-foreground">Let's craft better oils together</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Reach us for wholesale, private label collaborations, or to request batch analytics. We respond within one business day.
        </p>
      </section>
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-3xl border border-border/70 bg-background p-8 shadow-xl">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="text-sm font-medium text-muted-foreground">
                Name
              </label>
              <Input id="contact-name" {...register("name")} aria-invalid={Boolean(errors.name)} />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="contact-email" className="text-sm font-medium text-muted-foreground">
                Email
              </label>
              <Input id="contact-email" type="email" {...register("email")} aria-invalid={Boolean(errors.email)} />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div className="md:col-span-2">
              <label htmlFor="contact-phone" className="text-sm font-medium text-muted-foreground">
                Phone (optional)
              </label>
              <Input id="contact-phone" type="tel" {...register("phone")} />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="contact-message" className="text-sm font-medium text-muted-foreground">
                How can we help?
              </label>
              <textarea
                id="contact-message"
                className="h-32 w-full rounded-2xl border border-border/70 bg-background px-4 py-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                {...register("message")}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
            </div>
          </div>
          <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Submit"}
          </Button>
        </form>
      </section>
      <section className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-border/70 bg-muted/20 p-6">
          <h2 className="font-serif text-2xl text-foreground">Visit a partner store</h2>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {stores.map((store) => (
              <li key={store.name} className="rounded-2xl bg-background px-4 py-3">
                <p className="font-semibold text-foreground">{store.name}</p>
                <p>{store.address}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 rounded-3xl border border-border/70 bg-background p-6 text-sm text-muted-foreground">
          <h2 className="font-serif text-2xl text-foreground">Business details</h2>
          <p className="flex items-start gap-2 text-foreground">
            <Phone className="mt-0.5 h-4 w-4" aria-hidden="true" /> +91 98765 43210
          </p>
          <p className="flex items-start gap-2">
            <Mail className="mt-0.5 h-4 w-4" aria-hidden="true" /> care@verdantpureoils.example
          </p>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4" aria-hidden="true" /> Plot 22, Food Tech Park, Bengaluru, Karnataka 560099
          </p>
          <p className="text-xs text-muted-foreground">GSTIN: 29AAACV1234F1Z9 · FSSAI: 11223344556677</p>
        </div>
      </section>
    </div>
  );
}
