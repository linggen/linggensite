# Deploying Linggen Site to Cloudflare Pages

## Prerequisites

- A Cloudflare account (free tier works)
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Method 1: Deploy via Cloudflare Dashboard (Recommended)

### Step 1: Connect Your Repository

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** → **Create a project**
3. Click **Connect to Git**
4. Authorize Cloudflare to access your repository
5. Select your repository and branch (usually `main` or `master`)

### Step 2: Configure Build Settings

- **Project name**: `linggensite` (or your preferred name)
- **Production branch**: `main` (or your default branch)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: Leave empty (since linggensite is now a standalone repo)

### Step 3: Environment Variables (if needed)

If you need any environment variables, add them in the **Environment variables** section.

### Step 4: Deploy

Click **Save and Deploy**. Cloudflare will:

1. Install dependencies (`npm install`)
2. Run the build command (`npm run build`)
3. Deploy the `dist` folder to Cloudflare Pages

### Step 5: Custom Domain (Optional)

1. After deployment, go to **Custom domains**
2. Add your domain (e.g., `linggen.dev` or `www.linggen.dev`)
3. Follow DNS setup instructions

## Method 2: Deploy via Wrangler CLI

### Step 1: Install Wrangler

```bash
npm install -g wrangler
# or
npm install --save-dev wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

### Step 3: Build and Deploy

```bash
cd linggensite
npm run build
wrangler pages deploy dist --project-name=linggensite
```

## Method 3: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
          cache-dependency-path: linggensite/package-lock.json

      - name: Install dependencies
        working-directory: ./linggensite
        run: npm ci

      - name: Build
        working-directory: ./linggensite
        run: npm run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: linggensite
          directory: ./linggensite/dist
```

Then add secrets in GitHub:

- `CLOUDFLARE_API_TOKEN`: Get from Cloudflare Dashboard → My Profile → API Tokens → Create Token
- `CLOUDFLARE_ACCOUNT_ID`: Found in Cloudflare Dashboard → Right sidebar

## Important Notes

1. **SPA Routing**: The `_redirects` file in `public/` ensures React Router works correctly on Cloudflare Pages.

2. **Build Output**: Vite outputs to `dist/` by default, which is what Cloudflare Pages expects.

3. **Node Version**: Cloudflare Pages uses Node.js 18 by default. If you need a different version, add a `.nvmrc` file:

   ```
   20
   ```

4. **Preview Deployments**: Cloudflare automatically creates preview deployments for pull requests.

5. **Custom 404**: If you want a custom 404 page, create `public/404.html` (Vite will copy it to dist).

## Troubleshooting

- **Routes not working**: Ensure `_redirects` file is in `public/` folder
- **Build fails**: Check build logs in Cloudflare Dashboard
- **Assets not loading**: Verify paths are relative (Vite handles this automatically)

## Your Site URL

After deployment, your site will be available at:

- `https://linggensite.pages.dev` (or your custom domain)
