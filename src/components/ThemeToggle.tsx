import { useTheme } from "../hooks/useTheme";

export const ThemeToggle = () => {
     const { theme, toggleTheme } = useTheme();
  return (
    <div>ThemeToggle <button onClick={toggleTheme} className="theme-btn">
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button></div>
   
  )
}
