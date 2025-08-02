# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page for OSS Commerce - a suite of integrated Shopify apps for e-commerce businesses. Built with modern React, TypeScript, and styled with Tailwind CSS + shadcn/ui components.

## Commands

### Development
- `pnpm dev` or `npm run dev` - Start development server
- `pnpm build` or `npm run build` - Build for production  
- `pnpm start` or `npm run start` - Start production server
- `pnpm lint` or `npm run lint` - Run ESLint

### Package Management
This project uses pnpm as the primary package manager (pnpm-lock.yaml present), though npm and yarn are also supported.

## Architecture

### App Router Structure (Next.js 15)
- `app/` - App Router pages and layouts
  - `layout.tsx` - Root layout with Geist fonts and MailerLite integration
  - `page.tsx` - Main landing page for OSS Commerce suite
  - `oss-tracking/page.tsx` - Dedicated landing page for OSS Tracking app

### Components
- `components/ui/` - shadcn/ui component library (extensive collection)
- `components/theme-provider.tsx` - Theme context provider
- Uses Lucide React for icons

### Styling
- Tailwind CSS with custom configuration in `tailwind.config.ts`
- shadcn/ui design system configured via `components.json`
- Custom brand colors: Primary orange gradient (#F6B86C to #FF8C42), dark purple background (#1E0D43)
- CSS variables defined in `app/globals.css`

### Key Features
- **Landing Pages**: Multi-page structure showcasing different apps in the OSS Commerce suite
- **Email Integration**: MailerLite script embedded in layout for lead capture
- **Brand Colors**: Consistent orange/purple color scheme throughout
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Modern UI**: shadcn/ui components with backdrop blur effects and gradients

### Notable Integrations
- **MailerLite**: Email marketing platform integration for lead capture
- **Shopify Apps**: Landing pages for tracking, marketing, and bundle apps
- **Geist Fonts**: Modern typography via Vercel's Geist font family

## Important Notes

- No README.md file present - project information derived from source code
- No cursor rules or copilot instructions found
- Project uses React 19 and Next.js 15 (latest versions)
- TypeScript strict mode enabled
- All components follow shadcn/ui patterns and conventions