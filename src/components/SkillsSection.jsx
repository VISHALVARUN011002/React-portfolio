import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },

  // Backend
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="relative bg-secondary/40 px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="text-left">
            <span className="section-kicker">Skills</span>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
              Tools I use to shape ideas into finished pages.
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-5 py-2 text-sm font-semibold capitalize transition-all duration-300",
                  activeCategory === category
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_16px_32px_hsl(var(--primary)/0.22)]"
                    : "border-border bg-card/70 text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel card-hover rounded-xl p-5"
            >
              <div className="mb-4 flex items-center justify-between text-left">
                <h3 className="text-lg font-bold">{skill.name}</h3>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
                  {skill.category}
                </span>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-2 origin-left animate-[grow_1.5s_ease-out] rounded-full bg-linear-to-r from-primary via-accent to-primary"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                <span>Comfort level</span>
                <span>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
