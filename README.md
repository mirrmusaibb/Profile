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
- Fully static export support for GitHub Pages

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

## Build for Production

```bash
npm run build
```

## Static Export for GitHub Pages

```bash
npm run build:pages
```

This generates static files in `out/`.

## Deploy to GitHub Pages (manual)

```bash
npm run deploy
```

This builds the static export, creates `.nojekyll`, and publishes `out/` to the `gh-pages` branch.

## Automatic GitHub Pages Deployment

Pushing to `main` triggers `.github/workflows/deploy-pages.yml` to:

1. Install dependencies
2. Build static export with repository-aware base path
3. Add `.nojekyll`
4. Publish `out/` to `gh-pages`

## Content Management

Project entries live in `data/projects.ts` and are rendered dynamically across timeline and project routes.
