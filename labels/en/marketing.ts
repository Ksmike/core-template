import type { MarketingLabels } from "@/labels/types";

export const marketingLabels: MarketingLabels = {
  hero: {
    badge: "Production-Ready Starter Template",
    title: "Core gives you a full-stack foundation. Fork it, ship it.",
    description:
      "Auth, database, UI components, and deployment — all wired up and ready to go. Stop rebuilding boilerplate and start building your product.",
    trialCta: "Get Started",
    demoCta: "View Demo",
    segmentLabels: [
      "Next.js 16",
      "Prisma 7",
      "Auth.js",
      "HeroUI",
      "Tailwind v4",
      "Vercel",
    ],
  },
  metrics: [
    { label: "Setup time", value: "< 5 min" },
    { label: "Test coverage out of the box", value: "90%+" },
    { label: "Boilerplate you skip writing", value: "100%" },
  ],
  workflow: {
    heading: "How Core works",
    steps: [
      {
        title: "Fork",
        description:
          "Clone the repo, install dependencies, and you have a running app with auth, database, and UI in minutes.",
      },
      {
        title: "Customize",
        description:
          "Swap in your brand, add your models, and build features on top of a proven architecture.",
      },
      {
        title: "Ship",
        description:
          "Deploy to Vercel with zero config. Neon Postgres, Auth.js sessions, and HTTPS all work out of the box.",
      },
    ],
  },
  coverage: {
    heading: "Everything you need, nothing you don't",
    description:
      "Built for developers who want a clean starting point without the overhead of a heavyweight framework.",
    items: [
      "Email/password auth with extensible OAuth support",
      "Prisma 7 multi-file schema with Neon Postgres",
      "Type-safe labels and localization system",
      "HeroUI component library with semantic theming",
      "Vitest test suite with 90%+ coverage",
      "Role-based layouts and protected routes",
    ],
    outcomesTitle: "Why teams choose Core",
    outcomesParagraphs: [
      "Core eliminates the first two weeks of every new project — no more wiring up auth, configuring databases, or debating folder structure.",
      "Ideal for solo developers, agencies, and teams who want to move fast without sacrificing code quality or best practices.",
    ],
  },
  taxonomy: {
    heading: "Built-in stack",
    description:
      "Every piece of the stack is chosen for production readiness, developer experience, and long-term maintainability.",
    items: [
      "App Router",
      "Server Actions",
      "Edge Runtime",
      "Multi-file Prisma",
      "Semantic Tokens",
      "Dark Mode",
    ],
  },
  cta: {
    heading: "Ready to build something?",
    description:
      "Fork Core, customize it for your use case, and deploy in minutes. No lock-in, no hidden complexity.",
    createWorkspaceCta: "Fork on GitHub",
    contactSalesCta: "Read the Docs",
    footnote:
      "MIT licensed. Use it for personal projects, client work, or SaaS products.",
  },
};
