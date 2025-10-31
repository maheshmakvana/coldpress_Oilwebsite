import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/utils";
import { trackEvent } from "@/lib/posthog";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const container = prefersReducedMotion
    ? {}
    : {
        initial: "hidden",
        animate: "show",
        variants: {
          hidden: { opacity: 0, y: 24 },
          show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, duration: 0.32 },
          },
        },
      };

  const child = prefersReducedMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 24 },
          show: { opacity: 1, y: 0, transition: { duration: 0.32 } },
        },
      };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/40">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div {...container} className="space-y-6">
          <motion.span {...child} className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            {BRAND.tagline}
          </motion.span>
          <motion.h1 {...child} className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            Cold-pressed oils that preserve nature's micronutrients.
          </motion.h1>
          <motion.p {...child} className="max-w-xl text-lg text-muted-foreground">
            VerdantPure Oils slow-press Indian heirloom seeds below 40°C, locking in vitamin E, antioxidants, and natural aroma. Every batch is nitrogen-sealed and lab-certified.
          </motion.p>
          <motion.div {...child} className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="shadow-lg">
              <a href="#bestsellers" onClick={() => trackEvent("hero_shop_oils") }>
                Shop Oils
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/process" className="flex items-center">
                <Play className="mr-2 h-4 w-4" aria-hidden="true" /> How Cold-Press Works
              </Link>
            </Button>
          </motion.div>
          <motion.ul {...child} className="grid grid-cols-2 gap-4 text-sm text-muted-foreground sm:grid-cols-4">
            {[
              "Cold-Pressed",
              "No Solvents",
              "Lab Tested",
              "Farm-to-Bottle",
            ].map((item) => (
              <li key={item} className="rounded-2xl border border-border/70 bg-background/60 px-4 py-3 text-center font-medium">
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          className="relative flex justify-center"
          initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="relative max-w-md rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-primary/5 to-secondary/20 p-6 shadow-2xl">
            <img
              src="/images/mustard/mustard-bottle.svg"
              alt="VerdantPure cold-pressed mustard oil bottle"
              width={360}
              height={420}
              className="mx-auto h-[420px] w-auto"
              loading="lazy"
            />
            <div className="absolute -left-6 bottom-8 rounded-3xl bg-background/90 p-4 shadow-lg">
              <p className="text-sm font-semibold text-foreground"><span className="text-primary">97%</span> Omega integrity</p>
              <p className="text-xs text-muted-foreground">Validated by ISO 22000 labs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
