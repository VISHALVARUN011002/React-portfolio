import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative flex items-center justify-center border-t border-border bg-card/80 px-4 py-10">
      <p className="text-center text-sm font-medium text-muted-foreground">
        &copy; {new Date().getFullYear()} Vishal Varun. All rights reserved.
      </p>

      <a
        href="#hero"
        aria-label="Back to top"
        className="absolute right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary transition-colors hover:border-primary hover:bg-primary/10"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
