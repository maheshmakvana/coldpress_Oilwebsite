import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/posthog";

export default function MobileShopBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/95 p-3 backdrop-blur md:hidden">
      <Button
        className="w-full"
        size="lg"
        onClick={() => trackEvent("mobile_shop_cta")}
        asChild
      >
        <a href="#bestsellers" className="flex items-center justify-center gap-2">
          <ShoppingBag className="h-5 w-5" aria-hidden="true" /> Shop VerdantPure Oils
        </a>
      </Button>
    </div>
  );
}
