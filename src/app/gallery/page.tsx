"use client";

import { Section } from "@/components/ui/Section";
import gallery from "@/data/gallery.json";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="pt-24 min-h-screen pb-20">
            <Section className="py-12 md:py-16 bg-muted/20">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-secondary uppercase tracking-widest text-sm font-medium mb-4 block">Visual Journey</span>
                    <h1 className="text-5xl md:text-7xl font-display mb-6 text-primary leading-none">
                        Captured <span className="font-editorial-italic text-secondary">Moments</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed">
                        Glimpses of paradise, from sunrise to starlight.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {gallery.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl"
                            onClick={() => setSelectedImage(item.src)}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-display text-xl tracking-wider">{item.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <button className="absolute top-8 right-8 text-white hover:text-secondary transition-colors">
                        <X className="h-10 w-10" />
                    </button>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative max-w-7xl max-h-[90vh] w-full h-full"
                    >
                        <Image
                            src={selectedImage}
                            alt="Gallery Preview"
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                </div>
            )}
        </div>
    );
}
