
import { Metadata } from "next";
import { AboutContent } from "@/components/screens/AboutContent";

export const metadata: Metadata = {
    title: "Our Story",
    description:
        "Learn about our heritage, sustainability efforts, and the team dedicated to your perfect stay.",
};

export default function AboutPage() {
    return <AboutContent />;
}
