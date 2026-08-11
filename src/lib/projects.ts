export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  /** Short phrase for cards/listings */
  tagline: string;
  /** Summary understandable by any audience (non-technical) */
  summary: string;
  /** What problem it solves, in plain language */
  problem: string;
  /** Feature bullets, in plain language */
  highlights: string[];
  /** My role and concrete contribution */
  role: string[];
  /** Technical stack, grouped */
  stack: {
    label: string;
    items: string[];
  }[];
  images: ProjectImage[];
  links?: {
    label: string;
    url: string;
  }[];
  timeline?: string;
};

export const projects: Project[] = [
  {
    slug: "freddaid",
    title: "FreddAid — AI Insights Platform",
    tagline:
      "A chat-style AI assistant connected to each company's own data.",
    summary:
      "FreddAid is a web application that works as a conversational AI " +
      "assistant, similar to ChatGPT, but connected to each client " +
      "company's internal documents and data. It's built for market " +
      "research firms: instead of manually searching through hundreds of " +
      "reports, teams ask the assistant questions and get answers with " +
      "cited sources.",
    problem:
      "Market research companies accumulate a huge amount of studies, " +
      "surveys, and reports that are hard to search through quickly. " +
      "FreddAid centralizes that information and makes it accessible " +
      "through natural conversation, saving search time and helping " +
      "anyone on the team find reliable answers.",
    highlights: [
      "AI chat that cites sources, streams responses, and can read them aloud.",
      "Private, multi-tenant workspaces with per-company users and permissions.",
      "Document uploads and web content as sources for the assistant.",
      "Stripe subscriptions and an admin panel for platform management.",
    ],
    role: [
      "Redesigned the interface end to end: new brand system, navigation, and reusable UI patterns like the chat and organization switcher.",
      "Designed and built the backend (database + endpoints) for organizations, reports, and knowledge sources, with endpoint-level security checks.",
    ],
    stack: [
      { label: "Frontend", items: ["React", "TypeScript", "Vite", "Fluent UI", "Tailwind CSS", "Bootstrap"] },
      { label: "Backend", items: ["Python", "Flask/Quart", "REST API"] },
      { label: "Infrastructure", items: ["Azure App Service", "Azure Cosmos DB", "Azure Cognitive Search", "Azure OpenAI", "Azure Speech Services", "Azure AD B2C"] },
      { label: "Payments", items: ["Stripe"] },
      { label: "Testing", items: ["Jest", "Cypress", "Pytest"] },
    ],
    images: [
      { src: "/projects/freddaid/freddaid-2.png", alt: "FreddAid document library (Vault) panel" },
      { src: "/projects/freddaid/freddaid-3.png", alt: "Team and organization management screen in FreddAid" },
      { src: "/projects/freddaid/freddaid-5.png", alt: "Overview of the FreddAid dashboard with platform modules" },
    ],
    timeline: "October 2024 – April 2026",
  },
  {
    slug: "vibewaggler",
    title: "VibeWaggler — AI-Powered Review Management",
    tagline:
      "A platform that centralizes and responds to business reviews using AI.",
    summary:
      "VibeWaggler is a platform for multi-location businesses (like " +
      "restaurant chains or retail stores) that get reviews on Google and " +
      "Yelp. Instead of checking each platform separately, VibeWaggler " +
      "pulls all reviews into one place and uses AI to suggest replies " +
      "in each brand's own voice.",
    problem:
      "Responding to reviews consistently is hard when a business has " +
      "multiple locations and reviews come in from different platforms. " +
      "VibeWaggler solves this by centralizing everything into a single " +
      "inbox, generating AI-drafted responses, and surfacing metrics " +
      "(customer sentiment, per-location performance, trends) so a small " +
      "team can manage online reputation at scale.",
    highlights: [
      "Syncs reviews from Google Business Profile and Yelp into one inbox.",
      "AI-drafted replies in the brand's voice, with a quality check and feedback loop.",
      "Metrics dashboard for sentiment, per-location comparisons, and trends.",
      "Stripe subscriptions with usage quotas and role-based access per organization.",
    ],
    role: [
      "Built the review sync pipeline (OAuth, dedup, pagination) and the AI reply generation with quality checks and feedback.",
      "Implemented a custom MCP analytics server, Stripe billing, and role-based multi-tenant access control.",
      "Set up AWS deployment and CI/CD with GitHub Actions.",
    ],
    stack: [
      { label: "Frontend", items: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "TanStack Query"] },
      { label: "Backend", items: ["Supabase (PostgreSQL)", "Auth", "Edge Functions", "Claude AI (Anthropic)"] },
      { label: "Infrastructure", items: ["AWS S3", "CloudFront", "Terraform", "GitHub Actions (OIDC)"] },
      { label: "Testing", items: ["Vitest", "React Testing Library"] },
    ],
    images: [
      { src: "/projects/vibewaggler/vibewaggler-1.png", alt: "VibeWaggler dashboard showing the centralized review inbox" },
      { src: "/projects/vibewaggler/vibewaggler-2.png", alt: "Metrics and sentiment analysis panel in VibeWaggler" },
    ],
    timeline: "May 2026 – present",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
