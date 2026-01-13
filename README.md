<p align="center">
  <img src="src/assets/logo.svg" width="120" alt="Linggen Logo">
</p>

# Linggen: Stop re-explaining to AI.

**The free and local app for your AI’s memory.**

Linggen indexes your codebases and tribal knowledge so your AI (Cursor, Zed, Claude, etc.) can actually understand your architecture, cross-project dependencies, and long-term decisions.

**New in v0.5.0: Skills.** Keep reusable AI “ways of working” in `.linggen/skills/` and share them across projects.  
**Also in v0.4.0+: Anchored Memory.** Stop managing fragmented rules in `cursor.rules`, `claude.md`, or `agents.md`. Anchor your architectural decisions directly in the code with Linggen.

[Website](https://linggen.dev) • [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=linggen.linggen-vscode) • [Documentation](https://linggen.dev/docs) • [Pricing](https://linggen.dev/pricing)

---

## 🌀 Why Linggen?

Traditional AI chat is "blind" to anything you haven't manually copy-pasted. Linggen bridges this "context gap" by providing:

- **🧠 Anchored Persistent Memory:** Store decisions in `.linggen/memory` and link them via code anchors. AI fetches context by ID via MCP.
- **🌐 Cross-Project Intelligence:** Work on Project A while your AI learns design patterns or auth logic from Project B.
- **📊 System Map (Graph):** Visualize file dependencies and "blast radius" before you refactor.
- **🔒 Local-First:** All indexing and vector search (via LanceDB) happens on your machine. Your code never leaves your side.

---

## 🚀 Quick Start (macOS)

Install the CLI in seconds and start indexing:

```bash
curl -sSL https://linggen.dev/install-cli.sh | bash
linggen start
linggen index .
```

_Windows & Linux support coming soon._

---

## 💬 How to use it with your AI

Once Linggen is running and your project is indexed, simply talk to your MCP-enabled IDE (like Cursor or Zed):

> "Call Linggen MCP, find out how project-sender sends out messages, and ingest it."

> "Call Linggen MCP, load memory from Project-B, learn its code style and design pattern."

> "Load memory from Linggen, find out what is the goal of this piece of code."

---

## 📂 The Linggen Ecosystem

- **[linggen](https://github.com/linggen/linggen):** The core engine and CLI runtime.
- **[linggen-vscode](https://github.com/linggen/linggen-vscode):** VS Code extension for Graph View and automatic MCP setup.
- **[linggensite](https://github.com/linggen/linggensite):** (This Repo) The landing page and documentation site.

---

## 🛠 This Repo: `linggensite`

This repository contains the source for [linggen.dev](https://linggen.dev). It is built with **React**, **Vite**, and **Tailwind CSS**, and deployed via **Cloudflare Pages**.

### Development

```bash
npm install
npm run dev
```

---

## 📜 License & Commercial Use

Linggen is open-source under the **MIT License**.

- **Individuals & Small Teams (<5 users):** 100% Free.
- **Open Source Projects:** 100% Free.
- **Commercial Use:** Teams of 5+ or companies using Linggen in a professional environment are required to purchase a **Commercial License**.

For more details on licensing and enterprise features, visit our [Pricing Page](https://linggen.dev/pricing).

MIT © [Linggen](https://linggen.dev)
