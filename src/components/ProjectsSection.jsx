import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Natours Landing Experience",
    description:
      "A polished travel landing page with responsive sections, animated interactions, and strong visual hierarchy.",
    image: "/Project/travel.png",
    tags: ["HTML", "Sass", "JavaScript"],
    demoUrl: "https://stately-piroshki-7d3611.netlify.app/",
    githubUrl: "https://github.com/VISHALVARUN011002/NatoursCSS",
  },
  {
    id: 2,
    title: "Omnifood Frontend",
    description:
      "A food service marketing site with structured content, responsive grids, and clean call-to-action flow.",
    image: "/Project/Omnifood.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "",
    githubUrl: "https://github.com/VISHALVARUN011002/Omnifood-food-service",
  },
  {
    id: 3,
    title: "CozyNest Beauty",
    description:
      "A beauty-focused landing page built with a softer UI rhythm, product sections, and Tailwind styling.",
    image: "/Project/cozynest.png",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
    demoUrl: "https://vishalvarun011002.github.io/CozyNestbeauty/",
    githubUrl: "https://github.com/VISHALVARUN011002/CozyNestbeauty.git",
  },

  {
    id: 5,
    title: "Rejouice Project",
    description:
      "A motion-led web experience using GSAP style interactions and an expressive visual presentation.",
    image: "/Project/Rejouice Project.png",
    tags: ["HTML", "GSAP", "JavaScript"],
    demoUrl: "https://vishalvarun011002.github.io/rejouice/",
    githubUrl: "https://github.com/VISHALVARUN011002/rejouice",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">Projects</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            Selected work with a sharper presentation.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            A few builds that show layout, interaction, and frontend execution
            across different visual styles.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass-panel card-hover overflow-hidden rounded-2xl text-left"
            >
              <div className="project-image-frame m-4 mb-0 aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-2 text-2xl font-black">{project.title}</h3>
                <p className="mb-6 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex items-center gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
                  >
                    <Github size={19} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/VISHALVARUN011002"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
