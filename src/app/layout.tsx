import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Schema from "@/components/seo/Schema";
import { PromoBanner } from "@/components/layout/PromoBanner";
import { AIAssistant } from "@/components/ui/AIAssistant";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://coastline-resort.com"),
  title: {
    default: "Coastline Resort | Luxury Beachfront Getaway",
    template: "%s | Coastline Resort",
  },
  description:
    "Experience the ultimate luxury at Coastline Resort. Private villas, fine dining, and pristine beaches await you. Book your paradise today.",
  keywords: [
    "Resort",
    "Luxury Hotel",
    "Beach Resort",
    "Vacation",
    "Accommodation",
    "Travel",
    "Ocean View",
  ],
  authors: [{ name: "Coastline Resort" }],
  creator: "Coastline Resort",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Coastline Resort | Luxury Beachfront Getaway",
    description:
      "Experience the ultimate luxury at Coastline Resort. Private villas, fine dining, and pristine beaches await you.",
    siteName: "Coastline Resort",
    images: [
      {
        url: "/og-image.jpg", // We need to ensure this exists or use a remote one, but standard practice is local
        width: 1200,
        height: 630,
        alt: "Coastline Resort Luxury Views",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coastline Resort | Luxury Beachfront Getaway",
    description:
      "Experience the ultimate luxury at Coastline Resort. Private villas, fine dining, and pristine beaches await you.",
    images: ["/og-image.jpg"],
    creator: "@coastline_resort",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Schema />
        <PromoBanner />
        <AIAssistant />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
