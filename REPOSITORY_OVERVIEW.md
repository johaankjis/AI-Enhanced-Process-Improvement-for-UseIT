# Repository Overview

## Project Snapshot
- **Name:** AI-Enhanced Process Improvement for UseIT
- **Framework:** Next.js 15 with the App Router and React 19.
- **Purpose:** Provides a single-page operational dashboard to monitor AI-driven workflow optimization metrics, automations, analytics, and supporting documentation for the UseIT organization.

## Application Flow
1. `app/layout.tsx` defines the global HTML structure, metadata, and theme-ready layout primitives for the entire dashboard shell.
2. `app/page.tsx` composes the top-level view by wiring together header controls, KPI cards, process timelines, automation summaries, analytics charts, and documentation resources.
3. Each visual section is implemented as a reusable component under `components/`, enabling isolated styling and behavior.

## Key Modules
- **Header Controls (`components/dashboard-header.tsx`):** Branding, date-range selector, and settings shortcut for global context.
- **KPI Grid (`components/kpi-cards.tsx`):** Metric cards showing turnaround time, time savings, reporting speed, and decision velocity with trend indicators.
- **Process Timeline (`components/process-workflow.tsx`):** Sequential process stages with AI enablement callouts and status chips.
- **Automation Tracker (`components/automation-tracker.tsx`):** Active automations, efficiency gain progress, and savings summaries.
- **Analytics Suite (`components/analytics-charts.tsx`):** Recharts-based visualizations for turnaround trends, automation adoption, and efficiency lift.
- **Documentation Hub (`components/documentation-section.tsx`):** Accordion-driven knowledge base with onboarding guides and downloadable artifacts.
- **UI Primitives (`components/ui/`):** Shared building blocks such as `Button`, `Card`, `Badge`, `Progress`, and dialog/dropdown utilities.

## Hooks & Utilities
- `hooks/use-mobile.ts` provides viewport awareness for responsive behavior.
- `hooks/use-toast.ts` exposes a composable toast notification system backed by Radix UI.
- Shared configuration lives in `components.json`, `next.config.mjs`, and `tsconfig.json` to align paths, theme tokens, and framework settings.

## Styling Approach
- Global resets and CSS variables are centralized in `app/globals.css`.
- Tailwind CSS (configured via `styles/` and `postcss.config.mjs`) powers utility-first layout and color theming.
- Component-specific design tokens rely on the `bg-*`, `text-*`, and `border-*` utilities for consistent theming.

## Data & Assets
- Static assets (logos, downloadable resources) reside in `public/` and are surfaced by documentation components.
- Chart series and dashboard metrics are currently mocked within their respective components, making it straightforward to replace with live data sources.

## Developer Experience
- Package management uses `pnpm`; the project ships scripts for `dev`, `build`, `start`, and `lint`.
- Run `pnpm dev` to launch the dashboard locally at `http://localhost:3000`.
- Use `pnpm lint` before commits to ensure consistency with the configured ESLint rules.

## Extending the Dashboard
- Integrate real APIs by swapping mock datasets inside the analytics and automation components.
- Add new sections by creating a component in `components/` and registering it within `app/page.tsx`.
- Update theming by adjusting CSS variables in `app/globals.css` and Tailwind configuration files.
