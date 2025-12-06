"use client";

import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

interface HeroProps {
    title: string;
    subtitle: string;
    ctaText?: string;
    ctaLink?: string;
    image: string;
}

export function Hero({ title, subtitle, ctaText = "Book Now", ctaLink = "/rooms", image }: HeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax */}
            <motion.div className="absolute inset-0" style={{ y }}>
                <Image
                    src={image}
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 container mx-auto px-4 text-center text-white"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
                >
                    <Sparkles className="h-4 w-4 text-secondary" />
                    <span className="text-sm font-medium tracking-wider uppercase">Luxury Beach Resort</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-display mb-6 leading-tight"
                >
                    <span className="block">{title.split(" ")[0]}</span>
                    <span className="block text-secondary font-editorial-italic">{title.split(" ").slice(1).join(" ")}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto text-white/90"
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link href={ctaLink}>
                        <Button size="lg" className="text-lg px-10 py-7 rounded-full shadow-2xl gradient-gold text-foreground font-semibold hover:scale-105 transition-transform duration-300">
                            {ctaText}
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button variant="ghost" size="lg" className="text-lg px-8 py-7 rounded-full glass text-white hover:bg-white/20">
                            Discover More
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70"
            >
                <span className="text-xs tracking-[0.3em] uppercase mb-3">Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ChevronDown className="h-6 w-6" />
                </motion.div>
            </motion.div>
        </div>
    );
}
