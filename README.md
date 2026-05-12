# Core

A production-ready Next.js template. Fork it, customize it, ship it.

## Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** HeroUI + Tailwind CSS v4
- **Database:** Neon Postgres (via Vercel Marketplace)
- **ORM:** Prisma 7 (multi-file schema)
- **Auth:** Auth.js v5 (email/password, extensible to OAuth)
- **Testing:** Vitest + React Testing Library (90%+ coverage)
- **Hosting:** Vercel

## Getting Started

```bash
# 1. Fork/clone this repo
# 2. Install and generate
yarn install
yarn prisma generate

# 3. Run locally
yarn dev
```

For local HTTPS (using certs in `certificates/`):

```bash
yarn dev:https
```

## Environment Variables

Copy `.env.example` or set these in your Vercel project:

- `DATABASE_URL` — Pooled Neon Postgres connection string
- `DIRECT_URL` — Direct Neon connection (for migrations)
- `AUTH_SECRET` — Random secret for Auth.js sessions
- `AUTH_URL` — App URL (e.g. `http://localhost:3000`)

If using `yarn dev:https`, set `AUTH_URL=https://localhost:3000`.

## Database

```bash
# Run migrations
yarn prisma migrate dev

# Generate client after schema changes
yarn prisma generate
```

Schema files are split by domain in `prisma/models/`.

## What's Included

- Email/password authentication with extensible OAuth
- Protected dashboard and settings routes
- Marketing landing page with semantic theming
- Type-safe localization system
- Multi-file Prisma schema organized by domain
- Full test suite with 90%+ coverage enforcement
- Dark mode support via semantic color tokens

## Customizing

1. Update labels in `labels/en/` with your product copy
2. Add your models in `prisma/models/`
3. Extend the theme in your Tailwind/HeroUI config
4. Build your features on top of the existing architecture
