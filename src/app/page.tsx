"use client";




import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { RoomCard } from "@/components/ui/RoomCard";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import rooms from "@/data/rooms.json";
import testimonials from "@/data/testimonials.json";
import { Palmtree, Utensils, Waves, Sun, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const popularRooms = rooms.slice(0, 3);

  const features = [
    { icon: Waves, title: "Private Beach", desc: "Direct access to pristine white sands." },
    { icon: Utensils, title: "Fine Dining", desc: "Award-winning local cuisine." },
    { icon: Palmtree, title: "Tropical Gardens", desc: "Lush greenery everywhere." },
    { icon: Sun, title: "Infinity Pool", desc: "Panoramic ocean views." },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Hero
        title="Paradise Found"
        subtitle="Where time stands still and the ocean whispers."
        image="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2500"
        ctaLink="/rooms"
      />

      <Marquee text="Relax • Rejuvenate • Rediscover" />

      {/* Editorial Feature Section (Asymmetric) */}
      <Section className="bg-background relative">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-secondary uppercase tracking-widest text-sm font-medium mb-4 block">The Experience</span>
              <h2 className="text-5xl md:text-7xl font-display text-primary mb-8 leading-[0.9]">
                Luxury <br />
                <span className="font-editorial-italic ml-12">Redefined</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md ml-auto md:mr-12">
                Immerse yourself in a sanctuary where modern design meets the raw beauty of the coast. Every detail is curated for your absolute peace.
              </p>
            </motion.div>
          </div>
          <div className="md:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] w-full rounded-full overflow-hidden border-4 border-white shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
                alt="Luxury Experience"
                fill
                className="object-cover"
              />
            </motion.div>
            {/* Floating Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-secondary text-secondary-foreground p-6 rounded-full w-40 h-40 flex items-center justify-center text-center font-serif italic text-xl shadow-xl animate-pulse"
            >
              Since 2010
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Features Grid with Hover Effects */}
      <Section className="bg-muted/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-muted-foreground/10 border border-muted-foreground/10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background p-10 hover:bg-primary hover:text-white transition-all duration-500 group cursor-pointer flex flex-col items-center text-center aspect-square justify-center"
            >
              <feature.icon className="h-10 w-10 mb-6 text-primary group-hover:text-white transition-colors" />
              <h3 className="font-display text-2xl mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-white/80 font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Popular Rooms (Carousel-ish) */}
      <Section className="overflow-visible">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 container mx-auto">
          <div>
            <span className="text-secondary uppercase tracking-widest text-sm font-medium mb-2 block">Accommodations</span>
            <h2 className="text-4xl md:text-6xl font-display text-primary">Sanctuaries <span className="font-editorial-italic text-secondary">&</span> Suites</h2>
          </div>
          <Link href="/rooms" className="group flex items-center gap-2 text-primary hover:text-secondary transition-colors mt-4 md:mt-0">
            <span className="text-lg font-medium border-b border-transparent group-hover:border-secondary transition-all">View Collection</span>
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularRooms.map((room, idx) => (
            <div key={room.id} className={idx === 1 ? "md:-mt-16" : ""}>
              <RoomCard room={room} index={idx} />
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials - Minimalist */}
      <Section className="bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <Star className="h-8 w-8 text-secondary mx-auto mb-8 fill-secondary" />
          <h2 className="text-3xl md:text-5xl font-display leading-tight mb-12">
            "{testimonials[0].content}"
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-secondary">
              <img src={testimonials[0].image} alt={testimonials[0].name} className="object-cover h-full w-full" />
            </div>
            <div className="text-left">
              <h4 className="font-display text-xl">{testimonials[0].name}</h4>
              <p className="text-secondary font-editorial-italic">{testimonials[0].role}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA - Image Background */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=2000"
          alt="Spa"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white p-8 border border-white/20 backdrop-blur-sm bg-white/10 max-w-2xl mx-4">
          <h2 className="text-5xl md:text-7xl font-display mb-6">Unwind Today</h2>
          <p className="text-xl mb-8 font-light max-w-lg mx-auto">Your journey to relaxation begins with a single click.</p>
          <Link href="/rooms">
            <Button size="lg" className="bg-white text-primary hover:bg-secondary hover:text-black border-none text-lg px-12 py-6 rounded-full">
              Start Booking
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
