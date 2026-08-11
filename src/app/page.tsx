import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
          {siteConfig.role}
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m {siteConfig.name}.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {siteConfig.bio}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
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
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
