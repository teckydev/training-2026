import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
export type Theme = "light" | "dark";

//provider
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(()=>{
    return (localStorage.getItem("theme")as Theme) ?? "light";  
  });
useEffect(()=>{
document.body.setAttribute("data-theme",theme);
localStorage.setItem("theme",theme);
},[theme])
const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return(
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}