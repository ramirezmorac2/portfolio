import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/80">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <Link
          href="/"
          className="text-base font-semibold tracking-tight hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          {siteConfig.name}
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <li>
            <Link href="/projects" className="hover:text-indigo-600 dark:hover:text-indigo-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-indigo-600 dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
