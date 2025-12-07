import { MetadataRoute } from "next";
import rooms from "@/data/rooms.json";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://coastline-resort.com";

    const staticRoutes = [
        "",
        "/rooms",
        "/about",
        "/gallery",
        "/contact",
        "/booking",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    const roomRoutes = rooms.map((room) => ({
        url: `${baseUrl}/rooms/${room.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...roomRoutes];
}
