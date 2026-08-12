/**
 * Central site configuration: personal info, contact details, and metadata
 * used for SEO (title templates, JSON-LD, Open Graph, etc).
 *
 * NOTE: `siteUrl` reflects the GitHub Pages project site URL
 * (https://<username>.github.io/<repo>). If you later attach a custom
 * domain via GitHub Pages, update this to that domain instead, and remove
 * the `basePath`/`assetPrefix` in next.config.ts (see the comment there).
 */

export const siteConfig = {
  name: "Carlos Ramirez",
  role: "Software Developer",
  siteUrl: "https://ramirezmorac2.github.io/portfolio",
  bio:
    "Software Developer with experience building real products end to " +
    "end, across web and mobile: from AI assistants connected to " +
    "enterprise data sources, to SaaS platforms for review management " +
    "with smart automation, to mobile apps for business management. " +
    "Comfortable owning a feature from interface design through backend " +
    "architecture and infrastructure, working across React, React " +
    "Native, TypeScript, Python, and SQL/NoSQL databases.",
  shortBio:
    "I build software end to end, across web and mobile, from interface " +
    "design to backend architecture.",
  email: "ramirezmorac2@gmail.com",
  github: {
    username: "ramirezmorac2",
    url: "https://github.com/ramirezmorac2",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/carlos-alejandro-ramirez-mora-504964323/",
  },
} as const;

/**
 * Prefixes a root-relative path (e.g. "/projects/foo.png") with the
 * configured basePath (e.g. "/portfolio").
 *
 * Needed because `next/image` does not automatically prepend basePath to
 * `src` when `images.unoptimized` is set (required for static export). See:
 * https://nextjs.org/docs/app/api-reference/next-config-js/basePath
 */
export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path}`;
}
