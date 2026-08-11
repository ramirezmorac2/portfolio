import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { withBasePath } from "@/lib/site";

export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.images[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={withBasePath(cover.src)}
          alt={cover.alt}
          fill
          sizes="(min-width: 768px) 480px, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.tagline}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
          View project
          <svg
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
