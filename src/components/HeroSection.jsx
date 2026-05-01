import { ArrowDown, ArrowRight, Code2, Layers3, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-4 pb-20 pt-32"
    >
      <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-left">
          <span className="section-kicker opacity-0 animate-fade-in">
            Frontend Developer / UI Engineer
          </span>

          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] tracking-tight opacity-0 animate-fade-in-delay-1 md:text-7xl">
            Vishal Varun builds{" "}
            <span className="text-gradient">clear, fast web interfaces.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground opacity-0 animate-fade-in-delay-2 md:text-xl">
            I turn product ideas into responsive React experiences with clean
            UI, practical animation, and production-minded frontend code.
          </p>

          <div className="mt-8 flex flex-col gap-4 opacity-0 animate-fade-in-delay-3 sm:flex-row">
            <a href="#projects" className="cosmic-button">
              View Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/75 px-6 py-3 text-sm font-semibold text-foreground shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              Start a Conversation
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 opacity-0 animate-fade-in-delay-4">
            {[
              ["1.5+", "Years"],
              ["250h", "Training"],
              ["10+", "Builds"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-card/60 p-4 text-left backdrop-blur-xl"
              >
                <p className="text-2xl font-black text-foreground">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-console glass-panel rounded-2xl p-5 opacity-0 animate-fade-in-delay-2">
          <div className="relative z-10">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-accent" />
                <span className="h-3 w-3 rounded-full bg-primary" />
                <span className="h-3 w-3 rounded-full bg-foreground/25" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Workbench
              </span>
            </div>

            <div className="grid gap-4 py-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-background/70 p-4">
                <Sparkles className="h-5 w-5 text-accent" />
                <p className="mt-5 text-left text-sm font-semibold text-muted-foreground">
                  Current Focus
                </p>
                <p className="mt-1 text-left text-xl font-bold">
                  Interactive UI systems
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background/70 p-4">
                <Layers3 className="h-5 w-5 text-primary" />
                <p className="mt-5 text-left text-sm font-semibold text-muted-foreground">
                  Stack
                </p>
                <p className="mt-1 text-left text-xl font-bold">
                  React, Tailwind, JS
                </p>
              </div>
            </div>

            <div className="space-y-4 rounded-xl border border-border bg-background/70 p-4">
              <div className="flex items-center gap-3 text-left">
                <Code2 className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">Build Process</p>
                  <p className="text-sm text-muted-foreground">
                    Prototype, refine, ship, and improve from feedback.
                  </p>
                </div>
              </div>

              {[
                ["Design polish", "92%"],
                ["Responsive build", "88%"],
                ["Performance pass", "84%"],
              ].map(([label, width]) => (
                <div key={label} className="text-left">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium">{label}</span>
                    <span className="text-muted-foreground">{width}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <span
                      className="block h-full rounded-full bg-linear-to-r from-primary to-accent"
                      style={{ width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-muted-foreground transition-colors hover:text-primary"
      >
        <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};
