import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5 active:scale-95 active:translate-y-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-600)] shadow-[0_4px_14px_0_rgba(59,130,246,0.4)] hover:shadow-[0_6px_20px_0_rgba(59,130,246,0.5)]",
        destructive:
          "bg-[var(--destructive)] text-[var(--destructive-foreground)] hover:bg-red-600 shadow-[0_4px_14px_0_rgba(239,68,68,0.4)] hover:shadow-[0_6px_20px_0_rgba(239,68,68,0.5)]",
        outline:
          "border-2 border-[var(--primary)] bg-transparent text-[var(--primary)] hover:bg-[var(--primary-50)] shadow-[0_4px_14px_0_rgba(59,130,246,0.15)] hover:shadow-[0_6px_20px_0_rgba(59,130,246,0.25)]",
        secondary:
          "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-slate-200 shadow-[0_4px_14px_0_rgba(100,116,139,0.2)] hover:shadow-[0_6px_20px_0_rgba(100,116,139,0.3)]",
        ghost:
          "hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] hover:translate-y-0 active:scale-100",
        link: "text-[var(--primary)] underline-offset-4 hover:underline hover:translate-y-0 active:scale-100",
        success:
          "bg-[var(--success)] text-[var(--success-foreground)] hover:bg-emerald-600 shadow-[0_4px_14px_0_rgba(16,185,129,0.4)] hover:shadow-[0_6px_20px_0_rgba(16,185,129,0.5)]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
