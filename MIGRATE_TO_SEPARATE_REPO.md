# Moving Linggensite to a Separate Repository

## Step 1: Create New Repository on GitHub

1. Go to GitHub and create a new public repository (e.g., `linggen-site` or `linggensite`)
2. **Don't** initialize it with README, .gitignore, or license (we'll bring those over)

## Step 2: Extract Linggensite with Git History (Recommended)

If you want to preserve git history for just the `linggensite` folder:

```bash
# From the root of your linggen repo
cd /Users/lianghuang/workspace/rust/linggen

# Use git subtree or filter-branch to extract just linggensite
# Option A: Using git subtree (simpler)
git subtree push --prefix=linggensite origin-linggensite main

# Option B: Using git filter-repo (more control, requires: brew install git-filter-repo)
git filter-repo --path linggensite --to-subdirectory-filter linggensite
```

## Step 3: Simple Method (No History - Faster)

If you don't need to preserve git history:

```bash
# 1. Create a new directory for the new repo
cd /Users/lianghuang/workspace/rust
mkdir linggensite-repo
cd linggensite-repo

# 2. Initialize new git repo
git init
git branch -M main

# 3. Copy all files from linggensite
cp -r ../linggen/linggensite/* .
cp -r ../linggen/linggensite/.* . 2>/dev/null || true  # Copy hidden files

# 4. Create initial commit
git add .
git commit -m "Initial commit: Linggen landing page"

# 5. Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/linggensite.git
git push -u origin main
```

## Step 4: Update Cloudflare Pages Settings

Since it's now a standalone repo, update your Cloudflare Pages build settings:

- **Root directory**: Leave empty (or `/`)
- **Build command**: `npm run build`
- **Build output directory**: `dist`

## Step 5: Files Already Prepared

The following files are already in the `linggensite/` folder and will be copied:

- ✅ `README.md` - Project documentation
- ✅ `.gitignore` - Git ignore rules for Node.js/Vite project
- ✅ `cloudflare-pages.md` - Deployment guide (updated for standalone repo)
- ✅ `public/_redirects` - SPA routing support for Cloudflare Pages

## Step 6: Clean Up Old Repo (Optional)

After confirming the new repo works:

1. Remove `linggensite/` from the main `linggen` repo (if desired)
2. Update any documentation that references the old path

## Step 7: Verification Checklist

- [ ] New repo created on GitHub
- [ ] All files copied to new repo
- [ ] `npm install` works in new repo
- [ ] `npm run build` works in new repo
- [ ] Cloudflare Pages connected to new repo
- [ ] Site deploys successfully
- [ ] All routes work (test `/docs`, `/docs/mcp`, etc.)

```

```
