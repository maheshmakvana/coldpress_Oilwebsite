import * as React from "react";
import { Drawer } from "vaul";

import { cn } from "@/lib/utils";

const Sheet = Drawer.Root;
const SheetTrigger = Drawer.Trigger;
const SheetClose = Drawer.Close;

const SheetContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Drawer.Content>
>(({ className, children, ...props }, ref) => (
  <Drawer.Portal>
    <Drawer.Overlay className="fixed inset-0 z-40 bg-black/60" />
    <Drawer.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex max-h-[85%] flex-col rounded-t-3xl border border-border/70 bg-background p-6 shadow-2xl",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-border" aria-hidden="true" />
      {children}
    </Drawer.Content>
  </Drawer.Portal>
));
SheetContent.displayName = "SheetContent";

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mb-4 flex flex-col gap-2 text-center", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetDescription = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("text-sm text-muted-foreground", className)} {...props} />
);
SheetDescription.displayName = "SheetDescription";

export { Sheet, SheetTrigger, SheetClose, SheetContent, SheetHeader, SheetDescription };
