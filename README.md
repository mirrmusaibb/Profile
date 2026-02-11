# Project Atlas

A production-ready mega repository website built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Calm, futuristic dark-first design language
- Responsive interactive vertical timeline
- Dynamic project detail pages sourced from structured data
- Smooth reveal and hover motion with reduced-motion support
- Theme toggle (dark default, optional light)
- Scroll progress indicator
- SEO metadata, favicon, and custom 404 page

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

### Install dependencies

```bash
npm install
```

### Run local development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep default build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Deploy.

## Content Management

Project entries live in `data/projects.ts` and are rendered dynamically across timeline and project routes.
