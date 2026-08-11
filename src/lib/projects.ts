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
      "AI chat that answers by citing source documents, with responses streaming in real time and an option to listen to them as voice.",
      "Each client company has its own private workspace, with its own users and permissions.",
      "Teams can upload their own documents or pull content directly from web pages for the assistant to use as a source.",
      "Modules for consumer perception surveys and requesting new research studies.",
      "Paid subscription tiers with different access levels, managed through Stripe.",
      "Admin panel for managing users, notifications, and overall platform settings.",
    ],
    role: [
      "Actively contributed for 18 months (close to 450 code contributions) across two main areas: interface design and backend development.",
      "Redesigned the entire interface following the design systems defined by the design team, including the new brand palette, navigation, buttons, and chat components.",
      "Rebuilt key pages (document library, team management, gallery, user profile, and notifications) from design mockups.",
      "Built reusable UI patterns across the app, such as delete confirmation modals and the organization switcher.",
      "Improved frontend performance by removing unused CSS across several pages.",
      "Designed and implemented the database and endpoints for organizations, notifications, categories, brands, products, reports, and knowledge sources, wiring them up to the frontend.",
      "Added endpoint-level security checks (organization and session validation).",
    ],
    stack: [
      { label: "Frontend", items: ["React", "TypeScript", "Vite", "Fluent UI", "Tailwind CSS", "Bootstrap"] },
      { label: "Backend", items: ["Python", "Flask/Quart", "REST API"] },
      { label: "Infrastructure", items: ["Azure App Service", "Azure Cosmos DB", "Azure Cognitive Search", "Azure OpenAI", "Azure Speech Services", "Azure AD B2C"] },
      { label: "Payments", items: ["Stripe"] },
      { label: "Testing", items: ["Jest", "Cypress", "Pytest"] },
    ],
    images: [
      { src: "/projects/freddaid/freddaid-1.png", alt: "FreddAid AI chat view showing a conversation with cited source documents" },
      { src: "/projects/freddaid/freddaid-2.png", alt: "FreddAid document library (Vault) panel" },
      { src: "/projects/freddaid/freddaid-3.png", alt: "Team and organization management screen in FreddAid" },
      { src: "/projects/freddaid/freddaid-4.png", alt: "Notifications panel and user profile in FreddAid" },
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
      "Direct connection to Google Business Profile and Yelp to automatically pull in reviews from all of a business's locations.",
      "AI-generated replies that match the brand's tone of voice, with an automatic quality check before they're shown.",
      "Users can rate generated replies (thumbs up/down) to improve the system over time.",
      "Metrics dashboard with review sentiment, cross-location comparisons, and trends over time.",
      "Subscription plans with monthly usage limits, managed through Stripe.",
      "Different access roles depending on user type (e.g. viewer, location manager, marketing, or platform admin).",
    ],
    role: [
      "Actively developing since May 2026 (over 100 code contributions) as part of the core product team.",
      "Implemented the OAuth connection flow with Google Business Profile and the sync of locations and reviews from Google and Yelp, including deduplication and pagination.",
      "Built the AI reply generation tools, including the automatic quality check and the user feedback system.",
      "Implemented a custom server (MCP protocol) with secure authorization to expose analytics tools, such as a per-location reputation score calculation.",
      "Integrated Stripe for paid subscriptions and built the monthly usage quota system.",
      "Implemented role-based access control and data isolation between different organizations/tenants on the platform.",
      "Fixed timezone bugs in metrics reporting and optimized dashboard filter performance.",
      "Set up cloud deployment (AWS) and continuous integration with GitHub Actions.",
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
