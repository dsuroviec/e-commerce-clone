import { createContext } from "react";

export default createContext<{
  isErrorOpen: boolean;
  setIsErrorOpen: (isErrorOpen: boolean) => void;
} | null>(null);
