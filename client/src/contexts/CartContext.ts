import { createContext } from "react";
import { Product } from "../types";

export default createContext<{
    cart: Product[] | null;
    setCart: (cart: Product[] | null) => void;
} | null>(null);
