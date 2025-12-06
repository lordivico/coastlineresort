"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    className?: string;
    delay?: number;
}

export function Section({
    children,
    className,
    container = true,
    delay = 0,
    ...props
}: SectionProps) {
    return (
        <section className={cn("py-16 md:py-24 overflow-hidden", className)} {...props}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: delay * 0.1 }}
                className={cn(container && "container mx-auto px-4 md:px-6")}
            >
                {children}
            </motion.div>
        </section>
    );
}
