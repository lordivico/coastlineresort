"use client";

import { Section } from "@/components/ui/Section";
import { RoomCard } from "@/components/ui/RoomCard";
import rooms from "@/data/rooms.json";

export default function RoomsPage() {
    return (
        <div className="pt-24 min-h-screen pb-20">
            <Section className="py-12 md:py-16 bg-muted/20">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-secondary uppercase tracking-widest text-sm font-medium mb-4 block">The Collection</span>
                    <h1 className="text-5xl md:text-7xl font-display mb-6 text-primary leading-none">
                        Our <span className="font-editorial-italic text-secondary">Sanctuaries</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-light leading-relaxed">
                        Choose from our collection of luxury suites and villas, designed to provide the ultimate comfort and breathtaking views.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {rooms.map((room, idx) => (
                        <RoomCard key={room.id} room={room} index={idx} />
                    ))}
                </div>
            </Section>
        </div>
    );
}
