"use client";

import { Room } from "../../types";
import { Button } from "./Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Maximize, Star } from "lucide-react";
import Image from "next/image";

interface RoomCardProps {
    room: Room;
    index?: number;
}

export function RoomCard({ room, index = 0 }: RoomCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group card-premium bg-card rounded-2xl overflow-hidden shadow-lg border border-muted"
        >
            <div className="relative h-72 w-full overflow-hidden">
                <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Price Tag */}
                <div className="absolute top-4 right-4 gradient-gold px-4 py-2 rounded-full text-foreground font-bold shadow-lg">
                    ${room.price} <span className="text-sm font-normal opacity-80">/ night</span>
                </div>

                {/* Quick Info on Hover */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-1 glass-dark px-3 py-1 rounded-full text-sm">
                        <Users className="h-4 w-4" />
                        <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1 glass-dark px-3 py-1 rounded-full text-sm">
                        <Maximize className="h-4 w-4" />
                        <span>{room.size}</span>
                    </div>
                </div>
            </div>

            <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-2">(48 reviews)</span>
                </div>

                <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition-colors gold-underline">{room.name}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed">{room.description}</p>

                {/* Amenities Preview */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.slice(0, 3).map((amenity, i) => (
                        <span key={i} className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground">
                            {amenity}
                        </span>
                    ))}
                    {room.amenities.length > 3 && (
                        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                            +{room.amenities.length - 3} more
                        </span>
                    )}
                </div>

                <Link href={`/rooms/${room.id}`} className="block">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        View Details
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
}
