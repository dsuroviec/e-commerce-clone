import { createContext } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    brand: string;
    category: string;
}

export default createContext<{
    cart: Product[] | null;
    setCart: (cart: Product[] | null) => void;
} | null>(null);
