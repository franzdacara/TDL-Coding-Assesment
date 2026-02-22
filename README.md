# Redpoint Portfolio Dashboard

A high-fidelity, pixel-perfect clone of the **Redpoint Portfolio Management** dashboard — built as a coding assessment for [The Decision Lab](https://thedecisionlab.com/).

---

## Overview

This application is a **single-page wealth management dashboard** that visualizes a real-estate and investment portfolio. It features interactive charts, action task management, portfolio analytics, and spending breakdowns — all rendered in a clean, minimal UI inspired by professional fintech products.

---

## Features

- **Wealth Projections Chart** — Interactive area chart showing optimistic, likely, and conservative 20-year portfolio growth scenarios using Recharts
- **Action Items Panel** — Tabbed task list (Active / Past / Snoozed) with urgency badges, hover actions (delete / snooze), and checkboxes
- **Investment Return & Portfolio Overview** — Stat cards with donut/pie charts for asset allocation and investment performance
- **Spending Analytics** — Bar chart breakdown of monthly expenditures across property categories
- **Property Units Panel** — Card-based view of individual property unit details and occupancy
- **Hero Banner** — Personalized greeting with net worth and total portfolio summary
- **Responsive Layout** — 12-column CSS Grid layout adapts to content with a persistent left sidebar and top navigation bar

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Charts | [Recharts](https://recharts.org/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Animations | [Motion](https://motion.dev/) |
| AI (optional) | [Google Gemini API](https://ai.google.dev/) via `@google/genai` |
| Database | [better-sqlite3](https://github.com/WiseLibs/better-sqlite3) |
| Runtime | Node.js + Express (API layer) |

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main dashboard page (12-col grid)
│   └── globals.css         # Global styles & Tailwind base
│
├── components/
│   ├── Header.tsx          # DashboardHeader + HeroBanner
│   ├── Sidebar.tsx         # Left navigation sidebar
│   ├── TopNav.tsx          # Top navigation bar
│   ├── WealthProjections.tsx  # Area chart — portfolio growth
│   ├── ActionItems.tsx     # Tabbed task management panel
│   ├── StatsCards.tsx      # InvestmentReturn + PortfolioOverview
│   └── BottomCards.tsx     # SpendingAnalytics + PropertyUnits
│
├── lib/
│   └── utils.ts            # Utility helpers (cn, etc.)
│
├── metadata.json           # App metadata (name, description)
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind theme (brand tokens)
├── tsconfig.json           # TypeScript configuration
└── .env.example            # Environment variable template
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd "The Decision Lab"

# Install dependencies
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```


### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Design Decisions

- **Next.js App Router** was chosen over Vite/React for its built-in routing, server components, and production-ready setup
- **Tailwind CSS v3** (instead of v4) was used for stability and broad ecosystem compatibility
- **Recharts** handles all data visualizations with fully responsive containers
- **Brand tokens** (colors, borders, shadows) are centralized in `tailwind.config.ts` for design consistency across components

---

## License

This project was built as part of a coding assessment for The Decision Lab. All rights reserved.
