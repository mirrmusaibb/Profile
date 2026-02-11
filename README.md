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

## Static Build

```bash
npm run build:pages
```

## Deployment (GitHub Pages)

This project is configured for permanent GitHub Pages hosting via static export.

### Automatic deploy

Push to `main` and GitHub Actions publishes `out/` to `gh-pages`.

### Manual deploy

```bash
npm run deploy
```

## Content Management

Project entries live in `data/projects.ts` and are rendered dynamically across timeline and project routes.
