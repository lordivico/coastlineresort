import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

// Since I didn't install cva or radix-slot, I will implement a simpler version or just install them?
// The prompt didn't ask for shadcn/ui specifically, just "clean UI".
// I will implement a standard component without cva/radix to keep dependencies low as per initial plan,
// OR I can use standard props. simpler is better for "demo".
// Actually, I'll build a robust simple button.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {

        const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ring-offset-background";

        const variants = {
            primary: "bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/20",
            secondary: "bg-secondary text-secondary-foreground hover:brightness-110",
            outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground text-primary",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-8 text-base",
            lg: "h-14 px-10 text-lg",
        };

        return (
            <motion.button
                whileTap={{ scale: 0.98 }}
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={isLoading || props.disabled}
                {...props as any}
            >
                {isLoading ? (
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : null}
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";
