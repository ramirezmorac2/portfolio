import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
        <p
          className="animate-fade-in-up mb-3 text-sm font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-400"
        >
          {siteConfig.role}
        </p>
        <h1
          className="animate-fade-in-up max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl"
          style={{ animationDelay: "0.1s" }}
        >
          Hi, I&apos;m {siteConfig.name}.
        </h1>
        <p
          className="animate-fade-in-up mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
          style={{ animationDelay: "0.2s" }}
        >
          {siteConfig.bio}
        </p>
        <div
          className="animate-fade-in-up mt-8 flex flex-wrap gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <Link
            href="/projects"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600 dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-400"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-indigo-600 hover:text-indigo-600 dark:border-slate-700 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured projects</h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
