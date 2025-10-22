# AI-Enhanced Process Improvement for UseIT

A modern Next.js 15 dashboard for tracking AI-driven workflow optimization across the UseIT organization. The interface highlights automation initiatives, operational KPIs, analytics, and documentation resources so teams can monitor improvements in real time.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Key UI Modules](#key-ui-modules)
- [Styling & Theming](#styling--theming)

## Overview
The application renders a single-page dashboard that stitches together KPI metrics, workflow timelines, automation status, analytics charts, and knowledge resources. Components are composed in `app/page.tsx` using a responsive layout that adapts across breakpoints.【F:app/page.tsx†L1-L22】

## Features
- **Dashboard header with context controls** – Displays the UseIT branding and quick filters for date ranges and settings via Radix UI menus.【F:components/dashboard-header.tsx†L1-L38】
- **KPI summary cards** – Highlights turnaround time, time savings, reporting speed, and decision making metrics with trend indicators.【F:components/kpi-cards.tsx†L1-L55】
- **Process workflow timeline** – Visualizes each stage of the process, AI enablement, and performance improvements with status-aware icons.【F:components/process-workflow.tsx†L1-L64】
- **Automation tracker** – Summarizes active automations, efficiency, and time saved with progress indicators.【F:components/automation-tracker.tsx†L1-L69】
- **Analytics visualizations** – Uses Recharts to plot turnaround trends, automation adoption, and efficiency gains in responsive charts.【F:components/analytics-charts.tsx†L1-L140】
- **Documentation hub** – Organizes guides and downloadable resources for onboarding and best practices.【F:components/documentation-section.tsx†L1-L195】

## Tech Stack
- [Next.js 15](https://nextjs.org/) with the App Router and React 19.【F:package.json†L1-L43】
- Radix UI primitives, Tailwind CSS 4, and custom utility components for styling and interactivity.【F:package.json†L13-L43】【F:components/ui/button.tsx†L1-L60】
- Recharts for analytics visualizations.【F:package.json†L13-L43】【F:components/analytics-charts.tsx†L1-L140】

## Project Structure
```
├── app/                # Next.js app directory entrypoint and global styles
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/         # Reusable dashboard components
│   ├── analytics-charts.tsx
│   ├── automation-tracker.tsx
│   ├── dashboard-header.tsx
│   ├── documentation-section.tsx
│   ├── kpi-cards.tsx
│   ├── process-workflow.tsx
│   └── ui/             # Shared UI primitives (buttons, cards, etc.)
├── hooks/              # Custom React hooks
├── public/             # Static assets
├── styles/             # Additional Tailwind layer configuration
├── next.config.mjs     # Next.js configuration
├── package.json
└── pnpm-lock.yaml
```

## Getting Started
1. **Install dependencies** using your preferred package manager. The project was scaffolded with `pnpm`.
   ```bash
   pnpm install
   ```
2. **Run the development server**:
   ```bash
   pnpm dev
   ```
3. **Open** `http://localhost:3000` in your browser to view the dashboard.

## Available Scripts
These commands are defined in `package.json` and work with `pnpm run <script>`:
- `dev` – Start the Next.js development server.
- `build` – Create an optimized production build.
- `start` – Serve the production build.
- `lint` – Run ESLint across the repository.【F:package.json†L1-L12】

## Key UI Modules
- `components/dashboard-header.tsx` – Top bar with filters and global actions.【F:components/dashboard-header.tsx†L1-L38】
- `components/kpi-cards.tsx` – Responsive grid of KPI metrics.【F:components/kpi-cards.tsx†L1-L55】
- `components/process-workflow.tsx` – Step timeline with AI indicators.【F:components/process-workflow.tsx†L1-L64】
- `components/automation-tracker.tsx` – Automation status cards with progress bars.【F:components/automation-tracker.tsx†L1-L69】
- `components/analytics-charts.tsx` – Recharts visualizations for trends and adoption.【F:components/analytics-charts.tsx†L1-L140】
- `components/documentation-section.tsx` – Accordion-based resource explorer.【F:components/documentation-section.tsx†L1-L195】

## Styling & Theming
Global styles live in `app/globals.css`, while shared UI primitives such as `Card`, `Button`, `Badge`, and `Progress` reside under `components/ui`. Tailwind CSS utility classes drive most layout and spacing decisions, with color tokens supplied by the configured design system.【F:app/globals.css†L1-L125】【F:components/ui/card.tsx†L1-L92】
