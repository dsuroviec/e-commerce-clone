import { createContext } from "react";

interface User {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
}

export default createContext<{
    user: User;
    setUser: (user: User) => void;
} | null>(null);
