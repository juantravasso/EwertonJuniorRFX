import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;

    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative flex items-center justify-center w-10 h-10 rounded-full 
      bg-secondary/20 hover:bg-secondary/40 transition-all duration-300"
    >
      <Sun
        className={`absolute h-5 w-5 transition-all duration-500 ${
          dark ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />

      <Moon
        className={`absolute h-5 w-5 transition-all duration-500 ${
          dark ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
    </button>
  );
}
