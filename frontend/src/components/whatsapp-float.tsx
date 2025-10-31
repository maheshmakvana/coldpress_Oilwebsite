import { MessageCircle } from "lucide-react";

import { trackEvent } from "@/lib/posthog";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-[#1DA851] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#128C7E]"
      onClick={() => trackEvent("whatsapp_cta_clicked")}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      Chat on WhatsApp
    </a>
  );
}
