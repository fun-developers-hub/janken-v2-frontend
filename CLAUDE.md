# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"TriGonFight" (janken-v2) — a rock-paper-scissors (じゃんけん) web app built with Next.js App Router, deployed to Cloudflare via OpenNext.

## Commands

Use `pnpm` directly (lockfile is `pnpm-lock.yaml`, `packageManager` is pinned to `pnpm@11.3.0`).

```bash
pnpm dev              # start dev server
pnpm build            # production build (also type-checks)
pnpm lint             # eslint .
pnpm lint:fix         # eslint . --fix
pnpm format           # prettier --write .
pnpm format:check     # prettier --check . (CI-enforced)
pnpm preview          # opennextjs-cloudflare build && preview (local Cloudflare Worker preview)
pnpm deploy           # opennextjs-cloudflare build && deploy (Cloudflare deploy)
```

There is no test suite in this repo (no unit/e2e test runner configured). CI (`.github/workflows/ci.yml`) runs, in order: `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm format:check`, `pnpm build`. Type checking happens as part of `pnpm build` (`next build`) — do not run `tsc` directly, as noted in global instructions.

## Architecture

- Next.js App Router under `src/app`, path alias `@/*` → `src/*`.
- Deployment target is Cloudflare Workers via `@opennextjs/cloudflare`. `wrangler.jsonc` points `main` at `.open-next/worker.js` and serves static assets from `.open-next/assets`; `open-next.config.ts` holds the OpenNext build config. `.open-next/` and `.wrangler/` are build artifacts (ignored by eslint) — never hand-edit them.
- Styling is Tailwind CSS v4 via the `@tailwindcss/postcss` plugin, configured in `src/app/globals.css` using `@theme`/`@theme inline` blocks (no separate `tailwind.config`). Custom theme colors (e.g. `newblue`, `newgreen`) are defined there — reuse them instead of introducing new ad-hoc colors. `prettier-plugin-tailwindcss` auto-sorts class names, and `arrowParens: "avoid"` / `bracketSameLine: true` are enforced by Prettier — run `pnpm format` rather than hand-formatting.
- The root route (`src/app/page.tsx`) is the actual game UI (rock/scissors/paper choices, CPU vs. player panels).
- `src/app/tips/` is a separate, self-contained documentation area explaining Next.js/React concepts as they're introduced through the game's development phases — it is not part of the game itself:
  - `tips/_data/concepts.ts` is the single source of truth for the tips index: each entry has a `slug`, `title`, `phaseLabel` (which development phase it maps to), optional `issueUrl` (linking to the GitHub issue that introduced the concept), and `summary`.
  - Each concept lives in `tips/<slug>/` with three files following the same pattern: `page.tsx` (renders a `ConceptSection` with a Japanese `explanation` and a `demo`), `code.ts` (exports a `snippet` string of example code shown via `CodeBlock`), and `Demo.tsx` (a live, interactive Client Component demonstrating the concept).
  - `tips/_components/ConceptSection.tsx` and `tips/_components/CodeBlock.tsx` are the shared layout/rendering primitives for every concept page; `CodeBlock` renders syntax-highlighted code server-side via `shiki` (`codeToHtml`, theme `github-dark`).
  - When adding a new tips entry: add its metadata to `concepts.ts`, then create the three files above following an existing slug (e.g. `use-state-basics`) as the template.
- Explanatory text throughout the tips section and UI-facing copy is written in Japanese; match that when adding to these areas.
