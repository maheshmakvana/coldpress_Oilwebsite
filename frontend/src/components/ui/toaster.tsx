import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { X } from "lucide-react";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div className="fixed inset-x-4 bottom-4 z-[100] flex flex-col gap-2 sm:inset-x-auto sm:right-6">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "flex items-start gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-lg backdrop-blur",
          )}
          role="status"
          aria-live="assertive"
        >
          <div className="flex-1">
            {toast.title && <p className="font-semibold text-foreground">{toast.title}</p>}
            {toast.description && <p className="text-sm text-muted-foreground">{toast.description}</p>}
          </div>
          <button
            type="button"
            onClick={() => dismiss(toast.id)}
            className="rounded-full p-1 text-muted-foreground transition hover:bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Dismiss toast</span>
          </button>
        </div>
      ))}
    </div>
  );
}
