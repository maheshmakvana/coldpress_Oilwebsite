import { Suspense } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import MobileShopBar from "@/components/mobile-shop-bar";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import WhatsAppFloat from "@/components/whatsapp-float";

export default function RootLayout() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[999] -translate-y-full rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <SiteHeader />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main-content"
          key={location.pathname}
          className="flex-1"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
        >
          <Suspense fallback={<div className="py-24 text-center text-muted-foreground">Loading…</div>}>
            <Outlet />
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
      <WhatsAppFloat />
      <MobileShopBar />
      <ScrollRestoration />
    </div>
  );
}
