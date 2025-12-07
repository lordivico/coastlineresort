
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with us to plan your perfect getaway.",
};

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-24 min-h-screen">
            <Section>
                <div className="text-center mb-16">
                    <span className="text-secondary uppercase tracking-widest text-sm font-medium mb-4 block">Connect</span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-primary">Get in <span className="font-editorial-italic text-secondary">Touch</span></h1>
                    <p className="text-muted-foreground text-lg font-light">We are here to help you plan your perfect getaway.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-muted/30 p-8 rounded-xl space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-display font-bold text-lg">Location</h3>
                                    <p className="text-muted-foreground">123 Ocean Drive, Paradise Island, FL 33000</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-display font-bold text-lg">Phone</h3>
                                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-display font-bold text-lg">Email</h3>
                                    <p className="text-muted-foreground">hello@coastlineresort.demo</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-display font-bold text-lg">Hours</h3>
                                    <p className="text-muted-foreground">Reception: 24/7</p>
                                    <p className="text-muted-foreground">Reservations: 8am - 8pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-xl shadow-lg border">
                        <h2 className="text-2xl font-serif font-bold mb-6">Send us a Message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name</label>
                                    <input className="w-full px-4 py-2 border rounded-md" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name</label>
                                    <input className="w-full px-4 py-2 border rounded-md" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <input className="w-full px-4 py-2 border rounded-md" type="email" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea className="w-full px-4 py-2 border rounded-md min-h-[150px]" placeholder="How can we help you?" />
                            </div>
                            <Button className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </Section>

            {/* Map Embed */}
            <div className="h-[400px] w-full bg-muted mt-12 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.8610723515!2d-80.2045089!3d25.790654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}
