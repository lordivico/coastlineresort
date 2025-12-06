"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
    text: string;
    speed?: number;
}

export function Marquee({ text, speed = 20 }: MarqueeProps) {
    return (
        <div className="relative flex overflow-hidden py-4 bg-primary text-white border-y border-white/10">
            <div className="flex whitespace-nowrap">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: speed,
                        }}
                        className="flex items-center"
                    >
                        <span className="text-4xl md:text-6xl font-serif font-thin italic px-8 opacity-80 uppercase tracking-widest">
                            {text}
                        </span>
                        <span className="text-2xl text-secondary">💖</span>
                    </motion.div>
                ))}
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary via-transparent to-primary w-full z-10" />
        </div>
    );
}
