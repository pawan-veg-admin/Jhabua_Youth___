"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-sm font-semibold text-foam transition hover:bg-white/10 dark:text-foam"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
      <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"} mode</span>
    </button>
  );
}
