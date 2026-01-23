import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden [&.loading]:cursor-wait",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-gold-dark hover:shadow-[0_8px_40px_rgba(255,215,0,0.25)] active:scale-[0.98]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-[0.98]",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground active:scale-[0.98]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.98]",
        ghost: "text-card-foreground hover:bg-muted hover:text-primary active:scale-[0.98]",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "bg-gradient-to-r from-[hsl(45,100%,50%)] to-[hsl(40,100%,40%)] text-[hsl(0,0%,7%)] font-semibold hover:shadow-[0_8px_40px_rgba(255,215,0,0.35)] hover:scale-105 active:scale-[0.98] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        hero: "bg-gradient-to-r from-[hsl(45,100%,50%)] to-[hsl(40,100%,40%)] text-[hsl(0,0%,7%)] font-bold text-lg px-8 py-6 hover:shadow-[0_8px_40px_rgba(255,215,0,0.35)] hover:scale-105 active:scale-[0.98] uppercase tracking-wider before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/25 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        "hero-outline": "border-2 border-primary bg-transparent text-primary font-bold text-lg px-8 py-6 hover:bg-primary/10 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] active:scale-[0.98] uppercase tracking-wider",
        "premium": "bg-gradient-to-r from-[hsl(45,100%,50%)] via-[hsl(42,100%,55%)] to-[hsl(40,100%,40%)] text-[hsl(0,0%,7%)] font-semibold shadow-lg hover:shadow-[0_12px_50px_rgba(255,215,0,0.4)] hover:scale-105 active:scale-[0.98] animate-gradient-shift bg-[length:200%_100%]",
        "glass": "bg-card/50 backdrop-blur-md border border-border text-card-foreground hover:bg-card/70 hover:border-primary/50 active:scale-[0.98]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        "2xl": "h-16 rounded-lg px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
