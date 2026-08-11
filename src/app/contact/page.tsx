import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} via email, GitHub, or LinkedIn.`,
};

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    Icon: MailIcon,
  },
  {
    label: "GitHub",
    value: `@${siteConfig.github.username}`,
    href: siteConfig.github.url,
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    value: "Carlos Alejandro Ramirez Mora",
    href: siteConfig.linkedin.url,
    Icon: LinkedInIcon,
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Have a project in mind or want to talk about an opportunity?
        Reach out through any of these channels.
      </p>

      <ul className="mt-10 space-y-4">
        {contactLinks.map(({ label, value, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer me" : undefined}
              className="flex items-center justify-between rounded-xl border border-slate-200 px-5 py-4 transition hover:border-indigo-600 hover:text-indigo-600 dark:border-slate-800 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
            >
              <span className="flex items-center gap-3 font-semibold">
                <Icon className="h-5 w-5" />
                {label}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
