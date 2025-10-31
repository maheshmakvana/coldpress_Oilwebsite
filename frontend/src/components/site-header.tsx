import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { trackEvent } from "@/lib/posthog";

const navigation = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Process", path: "/process" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Logo className="shrink-0" />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button
            onClick={() => trackEvent("shop_now_clicked")}
            className="shadow-md"
            asChild
          >
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full border border-border/60">
          <Menu className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Open navigation</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col gap-6">
          <Logo />
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navigation.map((item) => (
              <SheetClose asChild key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-2xl px-3 py-2 text-lg font-semibold transition hover:bg-muted ${
                      isActive ? "bg-muted text-primary" : "text-foreground"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </SheetClose>
            ))}
          </nav>
          <Button size="lg" className="w-full" onClick={() => trackEvent("shop_now_clicked")}
            asChild
          >
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
