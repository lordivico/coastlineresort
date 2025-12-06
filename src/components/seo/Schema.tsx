export default function Schema() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Hotel",
        "name": "Coastline Resort",
        "description": "A luxury beach resort offering private villas, fine dining, and world-class amenities.",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        "priceRange": "$$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Ocean Drive",
            "addressLocality": "Paradise Island",
            "addressRegion": "FL",
            "postalCode": "33000",
            "addressCountry": "US"
        },
        "telephone": "+15551234567",
        "starRating": {
            "@type": "Rating",
            "ratingValue": "5"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}
