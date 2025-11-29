# Project Context for Claude Code

## Project Overview
**az-shiny** is a Next.js 16 application bootstrapped with `create-next-app`, using React 19 and TypeScript.

## Tech Stack
- **Framework**: Next.js 16.0.5 (Pages Router)
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4 with Typography plugin
- **Fonts**: Geist Sans & Geist Mono (via `next/font`)
- **Markdown**: gray-matter, remark, remark-html

## Project Structure
```
az-shiny/
├── pages/
│   ├── _app.tsx         # Custom App component with font configuration
│   ├── _document.tsx    # Custom Document component
│   ├── index.tsx        # Home page component
│   └── posts/
│       └── [id].tsx     # Dynamic blog post pages
├── lib/
│   └── posts.ts         # Blog data utility functions
├── posts/               # Markdown blog posts
│   ├── pre-rendering.md
│   └── ssg-ssr.md
├── styles/
│   └── globals.css      # Global styles with Tailwind
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies and scripts
```

## Key Files
- [pages/index.tsx](pages/index.tsx) - Home page with blog post list
- [pages/_app.tsx](pages/_app.tsx) - Custom App with global styles and fonts
- [pages/_document.tsx](pages/_document.tsx) - Custom Document structure
- [pages/posts/\[id\].tsx](pages/posts/[id].tsx) - Dynamic blog post pages
- [lib/posts.ts](lib/posts.ts) - Blog data fetching and processing utilities
- [styles/globals.css](styles/globals.css) - Global styles and Tailwind config
- [package.json](package.json) - Project dependencies and scripts

## Development Commands
```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Current State
This is a Next.js blog application with the following features:
- Dark mode support via Tailwind CSS
- Responsive design
- Geist font family optimization
- Simple blog with markdown support
- Static site generation (SSG) for all blog posts
- Typography styling with @tailwindcss/typography plugin

## Styling Approach
- Uses Tailwind CSS 4 for styling
- Dark mode enabled with `dark:` variants
- Custom CSS variables for Geist fonts

## Development Notes
- Uses Pages Router (migrated from App Router)
- TypeScript is configured and enabled
- ESLint is configured with Next.js preset
- Blog posts are stored as markdown files in the `/posts` directory
- Uses `getStaticProps` and `getStaticPaths` for SSG

## Helpful Rules
Always use context7 when I need code generation, setup or configuration steps, or
library/API documentation. This means you should automatically use the Context7 MCP
tools to resolve library id and get library docs without me having to explicitly ask.

Always use test-driven development when creating a new feature

Always create a new Git branch when working on a new feature and never work on the main branch
