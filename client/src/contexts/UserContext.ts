import { createContext } from "react";
import { User } from "../types";

export default createContext<{
  user: User;
  setUser: (user: User) => void;
} | null>(null);
