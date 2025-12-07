import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Coastline Resort",
        short_name: "Coastline",
        description: "Luxury Beach Resort & Spa",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#1a1a1a",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
