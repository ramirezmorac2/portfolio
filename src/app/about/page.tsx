import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name}, ${siteConfig.role}.`,
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About me</h1>
      <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        {siteConfig.bio}
      </p>

      {/*
        TODO: Skills section.
        Carlos: once you tell me which skills/technologies you want to
        highlight, I'll add them here as a list of tags or categories,
        similar to the "Tech stack" block already used on each project
        page (src/app/projects/[slug]/page.tsx).
      */}
      <div className="mt-14">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Coming soon.
        </p>
      </div>
    </section>
  );
}
