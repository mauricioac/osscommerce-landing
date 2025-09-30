# Deployment Guide for Dokku

This Next.js application is configured to deploy as a static site to Dokku.

## Prerequisites

1. Dokku server with nginx buildpack support
2. Git access to your Dokku server
3. Node.js installed locally for building

## Deployment Steps

### 1. Build Locally

Build the static site on your local machine:

```bash
npm run build
```

This generates the static files in the `out/` directory.

### 2. On your Dokku server, create the app:

```bash
# SSH into your Dokku server
ssh dokku@your-server.com

# Create the app
dokku apps:create oss-commerce-landing

# (Optional) Set up a domain
dokku domains:add oss-commerce-landing yourdomain.com
```

### 3. On your local machine, add Dokku remote:

```bash
# Add Dokku as a git remote
git remote add dokku dokku@your-server.com:oss-commerce-landing

# Or if you already have it, update it:
git remote set-url dokku dokku@your-server.com:oss-commerce-landing
```

### 4. Commit the build output:

```bash
# Add the out directory
git add out/

# Commit everything
git add .
git commit -m "add static build output"
```

### 5. Deploy the application:

```bash
# Push to Dokku
git push dokku main
```

### 6. (Optional) Set up SSL with Let's Encrypt:

```bash
# On your Dokku server
dokku letsencrypt:enable oss-commerce-landing
```

## Updating the Site

When you make changes:

```bash
# 1. Build locally
npm run build

# 2. Commit the changes
git add .
git commit -m "update site"

# 3. Deploy
git push dokku main
```

## Configuration Files

The following files are configured for Dokku static deployment:

- `.static` - Empty file to indicate this is a static site
- `.buildpacks` - Specifies nginx buildpack only
- `.nginx.conf.sigil` - Custom nginx configuration for serving the static site
- `app.json` - Dokku app configuration
- `next.config.mjs` - Contains `output: 'export'` for static export

## Build Process

When you push to Dokku, it will:

1. Use the nginx buildpack to serve the static files from `out/`

No build step happens on the server - you build locally before deploying.

## Troubleshooting

### Check deployment logs:
```bash
dokku logs oss-commerce-landing
```

### Rebuild the app:
```bash
dokku ps:rebuild oss-commerce-landing
```

### Check nginx configuration:
```bash
dokku nginx:show-config oss-commerce-landing
```

### Files Not Found (404)

Verify the `out/` directory is committed:
```bash
git ls-files out/
```

## Environment Variables

If you need to set environment variables:

```bash
# On your Dokku server
dokku config:set oss-commerce-landing KEY=value
```

Note: Since this is a static export, environment variables must be prefixed with `NEXT_PUBLIC_` to be available in the browser, and they are baked in at build time.

## Static Export Location

The built static files are exported to the `out/` directory and served by nginx from `/app/www/out/`.
