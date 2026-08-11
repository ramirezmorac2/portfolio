import { siteConfig } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-slate-500 sm:flex-row sm:justify-between dark:text-slate-400">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={siteConfig.github.url}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label="GitHub"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.linkedin.url}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label="LinkedIn"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
