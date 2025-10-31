import { Mail, MapPin, Phone, Instagram, Facebook, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

import NewsletterForm from "@/components/newsletter-form";
import { BRAND } from "@/lib/utils";

const links = [
  { label: "Products", path: "/products" },
  { label: "Process", path: "/process" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-muted/20" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-lg font-semibold text-primary">
            <Leaf className="h-6 w-6" aria-hidden="true" />
            <span>{BRAND.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {BRAND.description}
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="https://www.instagram.com/verdantpureoils" aria-label="VerdantPure on Instagram" className="transition hover:text-primary">
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/verdantpureoils" aria-label="VerdantPure on Facebook" className="transition hover:text-primary">
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Quick links</h2>
          <ul className="mt-4 space-y-2 text-sm text-foreground">
            {links.map((link) => (
              <li key={link.path}>
                <Link className="transition hover:text-primary" to={link.path}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm text-muted-foreground">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Contact</h2>
          <p className="flex items-start gap-3">
            <Phone className="mt-0.5 h-4 w-4" aria-hidden="true" />
            {BRAND.hotline}
          </p>
          <p className="flex items-start gap-3">
            <Mail className="mt-0.5 h-4 w-4" aria-hidden="true" />
            care@verdantpureoils.example
          </p>
          <p className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4" aria-hidden="true" />
            Plot 22, Food Tech Park, Bengaluru, Karnataka 560099
          </p>
          <p className="text-xs">GSTIN: 29AAACV1234F1Z9 · FSSAI: 11223344556677</p>
        </div>
        <div className="rounded-3xl border border-border/70 bg-background p-6 shadow-sm">
          <h2 className="text-lg font-serif">Join our nutrition brief</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Recipes, lab reports, and farm stories — straight to your inbox.
          </p>
          <div className="mt-4">
            <NewsletterForm />
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 bg-background/60 py-4">
        <p className="mx-auto max-w-7xl px-4 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
