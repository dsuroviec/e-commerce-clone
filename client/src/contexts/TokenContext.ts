import { createContext } from "react";

export default createContext<{
    token: string | null;
    setToken: (token: string | null) => void;
} | null>(null);
