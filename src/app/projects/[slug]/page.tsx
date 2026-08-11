import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import ProjectCarousel from "@/components/ProjectCarousel";
import { getProjectBySlug, projects } from "@/lib/projects";
import { siteConfig, withBasePath } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const cover = project.images[0];

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `${siteConfig.siteUrl}/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      url: `${siteConfig.siteUrl}/projects/${project.slug}`,
      images: cover ? [{ url: withBasePath(cover.src) }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: cover ? [withBasePath(cover.src)] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    creator: {
      "@type": "Person",
      name: siteConfig.name,
    },
    url: `${siteConfig.siteUrl}/projects/${project.slug}`,
    image: project.images.map((image) => `${siteConfig.siteUrl}${image.src}`),
  };

  return (
    <article className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <Script
        id={`project-jsonld-${project.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />

      <Link
        href="/projects"
        className="text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-400"
      >
        ← Back to projects
      </Link>

      <header className="mt-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {project.summary}
        </p>
        {project.timeline && (
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            {project.timeline}
          </p>
        )}
      </header>

      <ProjectCarousel images={project.images} />

      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">
          What problem does it solve?
        </h2>
        <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">
          {project.problem}
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">
          Key features
        </h2>
        <ul className="mt-4 space-y-3">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 leading-relaxed text-slate-600 dark:text-slate-300">
              <span aria-hidden="true" className="mt-1 text-indigo-600 dark:text-indigo-400">
                ▸
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">My role and contribution</h2>
        <ul className="mt-4 space-y-3">
          {project.role.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-slate-600 dark:text-slate-300">
              <span aria-hidden="true" className="mt-1 text-indigo-600 dark:text-indigo-400">
                ▸
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Tech stack</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {project.stack.map((group) => (
            <div
              key={group.label}
              className="rounded-xl border border-slate-200 p-4 dark:border-slate-800"
            >
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                {group.label}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
