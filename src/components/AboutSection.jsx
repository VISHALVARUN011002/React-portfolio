import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">About</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            Practical design taste, hands-on frontend execution.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="glass-panel rounded-2xl p-6 text-left md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              My route
            </p>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              I started with self-driven learning, then built structure through a
              250-hour web development course. That mix shaped how I work now:
              curious, disciplined, and comfortable turning fuzzy ideas into
              polished interfaces.
            </p>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Over the past 1.5 years, I have focused on responsive layouts,
              React components, visual polish, and the small interaction details
              that make a website feel dependable instead of generic.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/VISHALKUMAR_VARUN_Resume.pdf"
                download="VISHALKUMAR_VARUN_Resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/10"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 text-left">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Building reusable React interfaces with responsive layouts,
                    clean state, and reliable browser behavior.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 text-left">
                <div className="rounded-lg bg-accent/10 p-3">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Interface Design</h4>
                  <p className="text-muted-foreground">
                    Creating layouts, visual hierarchy, and interaction states
                    that feel easy to scan and use.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 text-left">
                <div className="rounded-lg bg-secondary p-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="text-lg font-bold">Delivery Mindset</h4>
                  <p className="text-muted-foreground">
                    Breaking work into clear steps, debugging patiently, and
                    polishing the final result before handoff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
