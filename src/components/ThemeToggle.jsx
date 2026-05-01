import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [transitionTheme, setTransitionTheme] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    localStorage.setItem("theme", shouldUseDark ? "dark" : "light");
    setIsDarkMode(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDarkMode ? "light" : "dark";

    setTransitionTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setIsDarkMode(nextTheme === "dark");

    window.setTimeout(() => setTransitionTheme(null), 780);
  };

  return (
    <>
      {transitionTheme && (
        <div className="theme-transition-layer" data-theme={transitionTheme} />
      )}

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        className={cn(
          "theme-toggle-button fixed right-4 top-4 z-50 h-11 w-[76px] overflow-hidden rounded-full border border-border bg-card/80 p-1 shadow-lg backdrop-blur-xl transition-colors duration-300",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
          transitionTheme && "is-animating"
        )}
      >
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-accent transition-transform duration-500">
          <Sun className="h-4 w-4" />
        </span>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary transition-transform duration-500">
          <Moon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            "relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform duration-500 ease-out",
            isDarkMode ? "translate-x-7 rotate-180" : "translate-x-0 rotate-0"
          )}
        >
          {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </span>
      </button>
    </>
  );
};
