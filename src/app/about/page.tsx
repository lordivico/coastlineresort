"use client";

import { Section } from "@/components/ui/Section";
import Image from "next/image";
import team from "@/data/team.json";
import { motion } from "framer-motion";
import { Heart, Globe, Shield, Smile } from "lucide-react";

export default function AboutPage() {
    const values = [
        { icon: Heart, title: "Passion for Hospitality", desc: "We anticipate your needs before you do." },
        { icon: Globe, title: "Sustainability", desc: "Protecting our ocean and island community is our priority." },
        { icon: Shield, title: "Privacy & Safety", desc: "Your peace of mind is our utmost commitment." },
        { icon: Smile, title: "Authentic Joy", desc: "We believe in creating genuine smiles and memories." },
    ];

    return (
        <div className="pt-24 min-h-screen pb-20">
            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-secondary uppercase tracking-widest text-sm font-medium mb-4 block">Est. 2010</span>
                            <h1 className="text-5xl md:text-7xl font-display text-primary mb-6 leading-none">
                                Our <span className="font-editorial-italic text-secondary">Story</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed font-light">
                                Founded in 2010, Coastline Resort began with a simple vision: to create a sanctuary where modern luxury meets the raw beauty of nature.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                                Nestled on the pristine shores of Paradise Island, we have meticulously designed every villa, garden, and experience to help you disconnect from the world and reconnect with yourself.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000"
                            alt="Resort Overview"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </Section>

            {/* Values Section */}
            <Section className="bg-muted/30">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display mb-4 text-primary">Our Core Values</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">The principles that guide every interaction and detail at Coastline.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
                        >
                            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-primary">
                                <value.icon className="h-6 w-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                            <p className="text-muted-foreground text-sm">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Team Section */}
            <Section>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display mb-4 text-primary">Meet The Artisans</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-light text-lg">The dedicated professionals working behind the scenes to make your stay perfect.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="relative h-80 w-full mb-4 rounded-xl overflow-hidden bg-muted">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white text-sm">{member.bio}</p>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold font-serif">{member.name}</h3>
                            <p className="text-primary font-medium text-sm border-b-2 border-secondary inline-block pb-1">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Stats Section */}
            <Section className="bg-primary text-white mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                    <div className="p-6">
                        <h3 className="text-6xl font-display text-secondary mb-2">15+</h3>
                        <p className="text-white/80 text-lg uppercase tracking-widest text-sm">Years of Excellence</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-6xl font-display text-secondary mb-2">50+</h3>
                        <p className="text-white/80 text-lg uppercase tracking-widest text-sm">Luxury Villas</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-6xl font-display text-secondary mb-2">12k+</h3>
                        <p className="text-white/80 text-lg uppercase tracking-widest text-sm">Happy Guests</p>
                    </div>
                </div>
            </Section>
        </div>
    );
}
