

import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import rooms from "@/data/rooms.json";
import Link from "next/link";
import { Check, Users, Maximize, ArrowLeft } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const room = rooms.find((r) => r.id === id);

    if (!room) {
        return {
            title: "Room Not Found",
        };
    }

    return {
        title: room.name,
        description: room.description,
        openGraph: {
            title: `${room.name} | Coastline Resort`,
            description: room.description,
            images: [
                {
                    url: room.image,
                    width: 1200,
                    height: 630,
                    alt: room.name,
                },
            ],
        },
    };
}

export default async function RoomDetailsPage({ params }: Props) {
    const { id } = await params;

    const room = rooms.find((r) => r.id === id);

    if (!room) {
        return (
            <div className="min-h-screen pt-32 text-center">
                <h1 className="text-2xl font-bold mb-4">Room Not Found</h1>
                <Link href="/rooms">
                    <Button variant="outline">Back to Rooms</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Hero Image */}
            <div className="relative h-[60vh] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${room.image}')` }}
                >
                    <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <div className="container mx-auto">
                        <Link href="/rooms" className="inline-flex items-center gap-2 mb-4 hover:text-secondary transition-colors text-white/80 uppercase tracking-widest text-xs">
                            <ArrowLeft className="h-4 w-4" /> Back to Collection
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-display mb-4 leading-tight">{room.name}</h1>
                        <p className="text-2xl md:text-3xl font-editorial-italic opacity-90 text-secondary">${room.price} <span className="text-sm font-sans font-normal text-white/70">/ night</span></p>
                    </div>
                </div>
            </div>

            <Section>
                <div className="grid md:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-3xl font-display mb-4 text-primary">Overview</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg font-light first-letter:text-5xl first-letter:font-editorial-italic first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                                {room.description} {room.description}
                                <br /><br />
                                Experience the epitome of luxury with our carefully curated amenities and bespoke service. Every corner is designed to inspire peace and tranquility.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Amenities</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {room.amenities.map((amenity, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                                        <Check className="h-5 w-5 text-primary" />
                                        <span>{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Booking Sidebar */}
                    <div className="relative">
                        <div className="sticky top-24 p-6 border rounded-xl shadow-lg bg-card">
                            <h3 className="text-xl font-bold font-serif mb-4">Book This Room</h3>
                            <div className="space-y-4 mb-6 text-sm">
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-muted-foreground flex items-center gap-2"><Users className="h-4 w-4" /> Capacity</span>
                                    <span className="font-medium">{room.capacity} Guests</span>
                                </div>
                                <div className="flex justify-between py-2 border-b">
                                    <span className="text-muted-foreground flex items-center gap-2"><Maximize className="h-4 w-4" /> Size</span>
                                    <span className="font-medium">{room.size}</span>
                                </div>
                            </div>

                            <Link href={`/booking?room=${room.id}`}>
                                <Button className="w-full h-12 text-lg shadow-lg">Check Availability</Button>
                            </Link>
                            <p className="text-xs text-center text-muted-foreground mt-4">
                                Best price guaranteed. No booking fees.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
