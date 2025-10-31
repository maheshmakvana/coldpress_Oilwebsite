import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const newsletterSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Consent required" }),
  }),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "", consent: false },
  });

  const onSubmit = async (values: NewsletterValues) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast({
      title: "You're in!",
      description: `Thanks for joining the VerdantPure tasting table, ${values.email}.`,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="newsletter-email" className="text-sm font-medium text-muted-foreground">
          Email address
        </label>
        <Input
          id="newsletter-email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          {...register("email")}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
      </div>
      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-border/70 text-primary focus:ring-primary"
          {...register("consent")}
        />
        <span>
          I agree to receive product updates and nutrition insights from VerdantPure Oils. We respect your privacy.
        </span>
      </label>
      {errors.consent && <p className="text-xs text-destructive">{errors.consent.message}</p>}
      <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Joining…" : "Subscribe"}
      </Button>
    </form>
  );
}
