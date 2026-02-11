# Profile

A production-ready static website built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Calm, minimal dark-first design language
- Responsive vertical project timeline
- Real project links that open in new tabs
- Smooth motion with reduced-motion support
- Theme toggle and scroll progress indicator
- Static export compatibility for GitHub Pages

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

### Automatic deploy

Push to `main` and GitHub Actions publishes `out/` to `gh-pages`.

### Manual deploy

```bash
npm run deploy
```
