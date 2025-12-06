"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import rooms from "@/data/rooms.json";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Users, Home } from "lucide-react";
import Link from "next/link";

function BookingForm() {
    const searchParams = useSearchParams();
    const roomId = searchParams.get("room");
    const initialRoom = rooms.find(r => r.id === roomId) || rooms[0];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "2",
        room: initialRoom.id,
        promoCode: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto text-center p-8 bg-card rounded-xl shadow-xl border"
            >
                <div className="flex justify-center mb-6">
                    <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <CheckCircle className="h-10 w-10" />
                    </div>
                </div>
                <h2 className="text-3xl font-serif font-bold mb-4">Booking Confirmed!</h2>
                <p className="text-muted-foreground mb-8">
                    Thank you, {formData.name}. We have sent a confirmation email to {formData.email}.
                </p>
                <Link href="/">
                    <Button className="w-full">Return Home</Button>
                </Link>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto bg-card p-8 rounded-xl shadow-lg border">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input
                        required
                        type="text"
                        className="w-full px-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input
                        required
                        type="email"
                        className="w-full px-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input
                        required
                        type="tel"
                        className="w-full px-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Room Selection</label>
                    <div className="relative">
                        <Home className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <select
                            className="w-full pl-10 pr-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:outline-none appearance-none"
                            value={formData.room}
                            onChange={e => setFormData({ ...formData, room: e.target.value })}
                        >
                            {rooms.map(r => (
                                <option key={r.id} value={r.id}>{r.name} - ${r.price}/night</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Check-in Date</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <input
                            required
                            type="date"
                            className="w-full pl-10 pr-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                            value={formData.checkIn}
                            onChange={e => setFormData({ ...formData, checkIn: e.target.value })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Check-out Date</label>
                    <div className="relative">
                        <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <input
                            required
                            type="date"
                            className="w-full pl-10 pr-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                            value={formData.checkOut}
                            onChange={e => setFormData({ ...formData, checkOut: e.target.value })}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Guests</label>
                    <div className="relative">
                        <Users className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <select
                            className="w-full pl-10 pr-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:outline-none"
                            value={formData.guests}
                            onChange={e => setFormData({ ...formData, guests: e.target.value })}
                        >
                            {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} Guests</option>)}
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium">Promo Code</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:outline-none uppercase"
                        placeholder="SPRING25"
                        value={formData.promoCode}
                        onChange={e => setFormData({ ...formData, promoCode: e.target.value })}
                    />
                </div>
            </div>

            <div className="pt-4">
                <Button
                    type="submit"
                    className="w-full h-12 text-lg"
                    isLoading={isSubmitting}
                >
                    Confirm Booking
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                    This is a demo booking form. No payment is required.
                </p>
            </div>
        </form>
    );
}

export default function BookingPage() {
    return (
        <div className="pt-24 min-h-screen pb-20 bg-muted/20">
            <Section>
                <div className="text-center mb-12">
                    <span className="text-secondary uppercase tracking-widest text-sm font-medium mb-4 block">Reservations</span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-primary">Reserve Your <span className="font-editorial-italic text-secondary">Stay</span></h1>
                    <p className="text-muted-foreground text-lg font-light">Secure your slice of paradise today.</p>
                </div>

                <Suspense fallback={<div className="text-center">Loading booking form...</div>}>
                    <BookingForm />
                </Suspense>
            </Section>
        </div>
    );
}
