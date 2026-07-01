"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="group relative flex size-8 items-center justify-center rounded-full bg-(--panel)/40 ring-1 ring-transparent transition-all duration-300 hover:bg-(--panel) hover:ring-(--accent)/50 active:scale-95"
    >
      <Sun
        className={`absolute size-4 text-(--foreground-muted) transition-all duration-500 group-hover:text-(--accent) ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
      />
      <Moon
        className={`absolute size-4 text-(--foreground-muted) transition-all duration-500 group-hover:text-(--accent) ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
      />
    </button>
  );
}
