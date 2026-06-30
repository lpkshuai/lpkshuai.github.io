"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group flex size-9 items-center justify-center rounded bg-panel transition-all duration-200 hover:border-accent hover:bg-accent-bg active:scale-90"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="size-4 text-foreground/70 transition-colors group-hover:text-accent" />
      ) : (
        <Moon className="size-4 text-foreground/70 transition-colors group-hover:text-accent" />
      )}
    </button>
  );
}
