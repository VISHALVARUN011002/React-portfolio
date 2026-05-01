import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/82 shadow-[0_12px_40px_hsl(var(--foreground)/0.08)] backdrop-blur-xl"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between pr-24">
        <a
          className="flex items-center text-left text-lg font-black tracking-tight text-foreground"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-gradient">Vishal Varun</span>
            <span className="ml-2 text-sm font-semibold text-muted-foreground">
              Portfolio
            </span>
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden items-center gap-2 rounded-full border border-border bg-card/70 p-1 shadow-sm backdrop-blur-xl md:flex">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:bg-secondary hover:text-foreground"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="z-50 rounded-full border border-border bg-card/80 p-2 text-foreground shadow-sm md:hidden"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl font-semibold">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 transition-colors duration-300 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
