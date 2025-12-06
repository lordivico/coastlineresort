export interface Room {
    id: string;
    name: string;
    description: string;
    price: number;
    capacity: number;
    size: string;
    amenities: string[];
    image: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
    image: string;
}

export interface GalleryItem {
    id: number;
    alt: string;
    src: string;
    category: string;
}
