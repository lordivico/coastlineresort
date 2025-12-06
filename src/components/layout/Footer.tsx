import Link from "next/link";
import { Palmtree, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6 grid gap-12 md:grid-cols-4">
                <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Palmtree className="h-6 w-6 text-secondary" />
                        <span className="text-xl font-bold font-serif">
                            Coastline<span className="text-secondary">.</span>
                        </span>
                    </Link>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed">
                        Experience luxury at the edge of the world. Your perfect beach getaway awaits.
                    </p>
                </div>

                <div>
                    <h3 className="font-serif font-bold text-lg mb-4 text-secondary">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/rooms" className="hover:text-secondary transition-colors">Our Rooms</Link></li>
                        <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                        <li><Link href="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
                        <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-serif font-bold text-lg mb-4 text-secondary">Contact</h3>
                    <ul className="space-y-2 text-sm text-primary-foreground/80">
                        <li>123 Ocean Drive</li>
                        <li>Paradise Island, FL 33000</li>
                        <li>+1 (555) 123-4567</li>
                        <li>hello@coastlineresort.demo</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-serif font-bold text-lg mb-4 text-secondary">Follow Us</h3>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-secondary transition-colors"><Instagram className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/60">
                © 2024 Coastline Resort Demo. All rights reserved. Built for Portfolio.
            </div>
        </footer>
    );
}
