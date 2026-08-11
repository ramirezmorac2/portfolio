import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack software projects: AI-powered applications, SaaS platforms, and systems running in production.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        A selection of the products I&apos;ve worked on, with the problem
        they solve, my concrete role, and the technical stack used in each one.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
