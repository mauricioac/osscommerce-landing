# Deployment Guide for Dokku

This Next.js application is configured to deploy as a static site to Dokku.

## Prerequisites

1. Dokku server with nginx buildpack support
2. Git access to your Dokku server
3. Node.js buildpack enabled on Dokku

## Deployment Steps

### 1. On your Dokku server, create the app:

```bash
# SSH into your Dokku server
ssh dokku@your-server.com

# Create the app
dokku apps:create oss-commerce-landing

# (Optional) Set up a domain
dokku domains:add oss-commerce-landing yourdomain.com
```

### 2. On your local machine, add Dokku remote:

```bash
# Add Dokku as a git remote
git remote add dokku dokku@your-server.com:oss-commerce-landing

# Or if you already have it, update it:
git remote set-url dokku dokku@your-server.com:oss-commerce-landing
```

### 3. Deploy the application:

```bash
# Commit your changes
git add .
git commit -m "deploy: static site to dokku"

# Push to Dokku
git push dokku main
```

### 4. (Optional) Set up SSL with Let's Encrypt:

```bash
# On your Dokku server
dokku letsencrypt:enable oss-commerce-landing
```

## Configuration Files

The following files are configured for Dokku static deployment:

- `.static` - Empty file to indicate this is a static site
- `.buildpacks` - Specifies Node.js and nginx buildpacks
- `.nginx.conf.sigil` - Custom nginx configuration for serving the static site
- `app.json` - Dokku app configuration with build script
- `next.config.mjs` - Contains `output: 'export'` for static export

## Build Process

When you push to Dokku, it will:

1. Use the Node.js buildpack to install dependencies
2. Run `npm run build` which creates the static export in the `out/` directory
3. Use the nginx buildpack to serve the static files from `out/`

## Troubleshooting

### Check build logs:
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

## Environment Variables

If you need to set environment variables:

```bash
# On your Dokku server
dokku config:set oss-commerce-landing KEY=value
```

Note: Since this is a static export, environment variables must be prefixed with `NEXT_PUBLIC_` to be available in the browser.

## Static Export Location

The built static files are exported to the `out/` directory and served by nginx from `/app/www/out/`.
