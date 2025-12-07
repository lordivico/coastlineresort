
import { Metadata } from "next";
import { BookingContent } from "@/components/screens/BookingContent";

export const metadata: Metadata = {
    title: "Book Now",
    description: "Reserve your luxury suite or villa at Coastline Resort.",
};

export default function BookingPage() {
    return <BookingContent />;
}
