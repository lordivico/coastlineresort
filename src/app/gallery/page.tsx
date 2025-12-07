
import { Metadata } from "next";
import { GalleryContent } from "@/components/screens/GalleryContent";

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "View photos of our luxury villas, private beach, and resort amenities.",
};

export default function GalleryPage() {
    return <GalleryContent />;
}
