"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Menu, X, Palmtree } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Pages that have a hero image at the top and can support a transparent navbar
    // Home ("/") and Room Details ("/rooms/xyz")
    const isTransparentPage = pathname === "/" || (pathname.startsWith("/rooms/") && pathname !== "/rooms");

    // We show the solid navbar request if we are scrolled OR if we are on a page that doesn't support transparency
    const showSolidNav = scrolled || !isTransparentPage;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/rooms", label: "Rooms" },
        { href: "/gallery", label: "Gallery" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                showSolidNav ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Palmtree className={cn("h-8 w-8 transition-colors", showSolidNav ? "text-primary" : "text-white group-hover:text-primary")} />
                    <span className={cn("text-2xl font-bold font-serif transition-colors", showSolidNav ? "text-primary" : "text-white")}>
                        Coastline<span className="text-secondary">.</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-secondary",
                                showSolidNav ? "text-foreground" : "text-white/90"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/rooms">
                        <Button variant={showSolidNav ? "primary" : "secondary"} size="sm">
                            Book Now
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className={showSolidNav ? "text-foreground" : "text-white"} /> : <Menu className={showSolidNav ? "text-foreground" : "text-white"} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b"
                    >
                        <div className="container px-4 py-8 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-foreground hover:text-primary"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/rooms" onClick={() => setIsOpen(false)}>
                                <Button className="w-full">Book Your Stay</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
