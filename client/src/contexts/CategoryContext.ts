import { createContext } from "react";
import { Category } from "../types";

export default createContext<{
  categories: Category[] | null;
  setCategories: (cart: Category[] | null) => void;
} | null>(null);
