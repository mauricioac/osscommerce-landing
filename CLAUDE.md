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
  - `about/page.tsx` - About Us page
  - `contact/page.tsx` - Contact page with forms
  - `support/page.tsx` - Support center with FAQ
  - `blog/page.tsx` - Blog listing page with pagination
  - `blog/[slug]/page.tsx` - Individual blog post pages

### Components
- `components/ui/` - shadcn/ui component library (extensive collection)
- `components/header.tsx` - Reusable header component
- `components/footer.tsx` - Reusable footer component
- `components/newsletter-form.tsx` - Newsletter subscription component with API integration
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

### Blog System
- **Content Management**: File-based system using Markdown files in `content/blog/`
- **Dependencies**: gray-matter for frontmatter parsing, marked for Markdown to HTML
- **Static Generation**: All blog posts are statically generated at build time
- **Features**: Pagination, tags, featured posts, related articles

### Newsletter System
- **Component**: Reusable `NewsletterForm` component with configurable API endpoint
- **Environment**: Uses `NEXT_PUBLIC_NEWSLETTER_API_URL` for API configuration
- **Features**: Email validation, loading states, success/error handling, responsive design
- **Integration**: Used in blog page and footer
- **API**: Fallback endpoint at `/api/newsletter` for local development

### Documentation System
- **Hub Page**: `/docs` - Central documentation hub with app tiles
- **App Docs**: `/docs/[appId]` - Individual documentation pages for each app
- **Configuration**: `lib/apps-config.ts` - Centralized app configuration
- **Knowledge Base**: Embeds external knowledge base systems via iframe
- **Getting Started**: `/docs/getting-started` - Onboarding guide

### Notable Integrations
- **Newsletter API**: Configurable endpoint for newsletter subscriptions
- **Knowledge Base**: Embeddable external documentation systems
- **MailerLite**: Email marketing platform integration for lead capture (legacy)
- **Shopify Apps**: Landing pages for tracking, marketing, and bundle apps
- **Geist Fonts**: Modern typography via Vercel's Geist font family

## Creating New Blog Posts

To add a new blog post:

1. Create a new `.md` file in `content/blog/` with the filename as the URL slug
2. Include frontmatter with required fields:
   ```yaml
   ---
   title: "Your Post Title"
   excerpt: "Brief description for listing pages"
   date: "2025-01-15"
   author: "Author Name"
   tags: ["tag1", "tag2"]
   featured: true  # Optional: shows in featured sections
   image: "/path/to/image.png"  # Optional: featured image
   ---
   ```
3. Write content in Markdown below the frontmatter
4. The post will automatically appear on the blog listing page and be statically generated

## Newsletter Configuration

To configure the newsletter subscription:

1. **Set the API endpoint** in your environment:
   ```bash
   # .env.local
   NEXT_PUBLIC_NEWSLETTER_API_URL=https://your-api-server.com/api/newsletter
   ```

2. **API Expected Format:**
   ```json
   POST /api/newsletter
   Content-Type: application/json
   
   {
     "email": "user@example.com",
     "source": "website",
     "timestamp": "2025-01-15T10:30:00.000Z"
   }
   ```

3. **Expected Response:**
   ```json
   // Success (200)
   {
     "success": true,
     "message": "Successfully subscribed to newsletter!",
     "email": "user@example.com"
   }
   
   // Error (400/500)
   {
     "error": "Error message here"
   }
   ```

4. **For local development:** Use the included `/api/newsletter` endpoint or configure your local API server

## Adding New Apps to Documentation

To add a new app to the documentation system:

1. **Update the apps configuration** in `lib/apps-config.ts`:
   ```typescript
   {
     id: 'your-app-id',
     name: 'Your App Name',
     shortName: 'Short Name',
     description: 'App description',
     icon: '/your-app-icon.png',
     status: 'available' | 'coming-soon' | 'beta',
     category: 'tracking' | 'marketing' | 'analytics' | 'bundles' | 'other',
     knowledgeBaseUrl: 'https://your-kb-app.com/embed/your-app-id',
     landingPage: '/your-app-landing',
     shopifyUrl: 'https://apps.shopify.com/your-app',
     features: ['Feature 1', 'Feature 2'],
     color: { primary: '#color', secondary: '#color' }
   }
   ```

2. **The documentation page** will be automatically generated at `/docs/your-app-id`

3. **Add the app icon** to the `/public` directory

4. **Configure your knowledge base URL** to embed your external documentation system

## Important Notes

- No README.md file present - project information derived from source code
- No cursor rules or copilot instructions found
- Project uses React 19 and Next.js 15 (latest versions)
- TypeScript strict mode enabled
- All components follow shadcn/ui patterns and conventions
- Static generation ready - run `npm run build` to generate static files