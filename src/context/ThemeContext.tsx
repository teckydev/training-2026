import { createContext } from "react";
import type { Theme } from "./ThemeProvider";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType | null>(null)


