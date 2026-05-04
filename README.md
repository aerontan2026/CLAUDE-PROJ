# Website — AI-Assisted Project Collection

A collection of side projects, tools, and landing pages built with [Claude Code](https://claude.ai/code). Each folder is self-contained — jump to the one you're interested in.

---

## Projects at a Glance

| Project | What It Is | Stack | Status |
|---|---|---|---|
| [Icon-Cloner](#icon-cloner) | Figma plugin for AI icon style transfer | Vanilla JS, Figma Plugin API | ✅ Live |
| [RENT-tool](#rent-tool--rentpro) | Rental management PWA for landlords & agents | HTML/CSS/JS, Firebase | ✅ Deployed |
| [singapore-ai-job-map](#singapore-ai-job-map) | Interactive treemap of AI's impact on SG jobs | D3.js, static HTML | ✅ Ready |
| [waterproofing-framer](#waterproofing-framer) | Waterproofing company website | Next.js, Tailwind | 🚧 In progress |
| [FORMA-Studio](#forma-studio) | Marketing & design studio landing page | HTML/CSS | ✅ Static |
| [mirai-systems](#mirai-systems--softopia) | Digital engineering agency website (SG) | HTML/CSS | ✅ Static |
| [AquaShield Pro](#aquashield-pro) | Waterproofing solutions landing page (dark theme) | HTML/CSS | ✅ Static |
| [Daily news](#daily-news) | Daily AI × design digest | Markdown | 📰 Ongoing |

---

## Icon-Cloner

**Path:** `Icon-Cloner/`

A Figma plugin that uploads a reference style image + target icons, then uses AI to restyle all icons to match the reference — no manual Figma selection needed.

**Key features:**
- Free out-of-the-box via [Pollinations.ai](https://pollinations.ai) (no API key)
- Supports Gemini, Claude, OpenAI, OpenRouter, GitHub Models, and local Ollama
- Drag-and-drop multi-file upload, High-Fidelity mode, auto-retry on rate limits
- Export as Figma node, SVG, PNG, or JPEG

**Quick start:**
```bash
# 1. Clone this repo
# 2. Open Figma Desktop
# 3. Plugins → Development → Import plugin from manifest…
# 4. Select Icon-Cloner/manifest.json
# 5. Run: Plugins → Development → Cloner 2.0
```

[Full docs →](Icon-Cloner/README.md)

---

## RENT-tool / RentPro

**Path:** `RENT-tool/`  
**Live:** https://rent-pro-1a91c.web.app

A lightweight rental management PWA for Malaysian landlords and agents. Solves the real problem of multiple agents pitching the same unit at different prices, and landlords managing everything through WhatsApp + Excel.

**Key features:**
- Unit Listing system with vacancy / viewing / rented status
- Agent viewing-request portal (`viewing.html`) with duplicate detection and privacy protection
- Digital contracts (OL + TA) with canvas e-signatures for all three parties
- Tenant self-service portal (`portal.html`)
- Owner sign portal — no login required, just a shareable link
- Firebase Firestore cloud sync across devices + offline Service Worker

**Demo accounts:**

| Role | Email | Password |
|---|---|---|
| Landlord | landlord@rentpro.com | 123456 |
| Agent | agent@rentpro.com | 123456 |
| Tenant | tenant@rentpro.com | 123456 |

**Tech stack:** Pure HTML/CSS/JS · Firebase Auth + Firestore · Service Worker

**Deploy:**
```bash
cd RENT-tool
npx firebase deploy --only hosting
```

[Full docs →](RENT-tool/README.md)

---

## Singapore AI Job Map

**Path:** `singapore-ai-job-map/`

An interactive D3 treemap visualizing how AI may affect different job categories in Singapore. Each job has an AI exposure score (0–10) based on automation potential, workflow digitization, and human-trust requirements.

**Tech stack:** D3.js · Vanilla JS · Static HTML (no build step)

**Run locally:** just open `singapore-ai-job-map/index.html` in a browser.

**GitHub Pages deploy:**
1. Repo Settings → Pages → Deploy from branch → `main` / root
2. Access at `https://aerontan2026.github.io/singapore-ai-job-map/`

[Full docs →](singapore-ai-job-map/README.md)

---

## waterproofing-framer

**Path:** `waterproofing-framer/`

A Framer-inspired marketing website for a waterproofing company built with Next.js and Tailwind. Includes animated sections: Hero, Services, Process, Projects, Why Us, CTA Banner, and Footer.

**Tech stack:** Next.js · TypeScript · Tailwind CSS · Framer Motion

**Run locally:**
```bash
cd waterproofing-framer
npm install
npm run dev
# Open http://localhost:3000
```

---

## FORMA-Studio

**Path:** `FORMA-Studio/`

A single-page marketing website for a design and branding studio. Minimal editorial aesthetic — light blue-grey palette, dark type, clean grid layout. Pure HTML + CSS, zero dependencies.

**Run:** open `FORMA-Studio/index.html` directly in a browser.

---

## mirai-systems / Softopia

**Path:** `mirai-systems/`

A Singapore-based digital engineering agency landing page targeting the Asia-Pacific market. Built with Inter + Noto Sans JP, bilingual-ready structure, dark modern UI.

**Run:** open `mirai-systems/index.html` directly in a browser.

---

## AquaShield Pro

**Path:** `index.html` (repo root)

A standalone dark-themed landing page for a waterproofing and water seepage solutions company. Navy/blue color palette, single HTML file with embedded CSS.

**Run:** open `index.html` directly in a browser.

---

## Daily News

**Path:** `Daily news/Daily Ai design news/`

Markdown digests of daily AI × design news, generated and curated over time.

| File | Date |
|---|---|
| `digest-2026-04-24.md` | Apr 24, 2026 |
| `digest-2026-04-15.md` | Apr 15, 2026 |
| `digest-2026-04-08.md` | Apr 8, 2026 |
| `digest-2026-04-02.md` | Apr 2, 2026 |
| `digest-2026-04-01.md` | Apr 1, 2026 |
| `digest-2026-03-25.md` | Mar 25, 2026 |
| `digest-2026-03-24.md` | Mar 24, 2026 |

---

## Repo Structure

```
Claude code/
├── Icon-Cloner/             # Figma plugin — AI icon style transfer
├── RENT-tool/               # Rental management PWA (Firebase)
├── singapore-ai-job-map/    # D3 treemap — AI job impact in Singapore
├── waterproofing-framer/    # Next.js waterproofing marketing site
├── FORMA-Studio/            # Design studio landing page (static)
├── mirai-systems/           # Digital engineering agency site (static)
├── Daily news/              # AI design news digests (markdown)
├── Design-Workspace/        # Brand guidelines & design context files
├── index.html               # AquaShield Pro — waterproofing landing page
├── index-light.html         # Light-theme variant
├── waterproofing.html       # Alternate waterproofing page
└── Dashboard.tsx            # React dashboard component
```

---

## Built With

All projects in this repo were built with [Claude Code](https://claude.ai/code) — Anthropic's AI coding assistant — as the primary development workflow.

---

*© 2026 aerontan2026*
