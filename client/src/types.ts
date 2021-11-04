export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    brand: string;
    category: string;
}

export interface User {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
}
export interface Category {
    name: string;
    id: number;
    title: string;
    banner: string;
    tile: string;
}

export interface Brand {
    id: number;
    name: string;
    logo: string;
}
