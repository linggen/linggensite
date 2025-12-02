# Linggen Landing Page

The official landing page for Linggen - a local-first memory layer for AI coding.

Built with React, Vite, and deployed on Cloudflare Pages.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
linggensite/
├── public/          # Static assets and _redirects file
├── src/
│   ├── components/ # React components
│   ├── pages/      # Page components and docs
│   ├── assets/     # Images and logos
│   ├── constants.js # Global constants (e.g., DOWNLOAD_URL)
│   ├── App.jsx     # Main app with routing
│   └── main.jsx    # Entry point
├── dist/           # Build output (generated)
└── package.json
```

## 🌐 Deployment

This site is automatically deployed to [Cloudflare Pages](https://pages.cloudflare.com/) on push to the `main` branch.

### Manual Deployment

See [cloudflare-pages.md](./cloudflare-pages.md) for detailed deployment instructions.

## 🔧 Configuration

- **Download URL**: Update `src/constants.js` to change the download link
- **Routing**: React Router handles client-side routing
- **SPA Support**: `public/_redirects` ensures all routes work on Cloudflare Pages

## 📝 License

Copyright 2024 Linggen. All rights reserved.
