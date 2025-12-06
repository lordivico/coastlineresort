"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function PromoBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="fixed bottom-24 left-4 right-4 md:bottom-4 md:left-4 md:right-auto md:w-96 z-40 bg-secondary text-secondary-foreground rounded-lg shadow-2xl overflow-hidden"
            >
                <div className="p-4 flex items-start gap-3">
                    <span className="text-xl">✨</span>
                    <div className="flex-1">
                        <p className="font-bold font-serif mb-1">Spring Sale</p>
                        <p className="text-sm opacity-90 leading-tight">Book 3 nights, get 1 free. Use code <span className="font-mono font-bold bg-white/20 px-1 rounded">SPRING25</span>.</p>
                    </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
