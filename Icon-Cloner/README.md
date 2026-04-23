# Cloner 2.0 — Figma Icon Style Transfer Plugin

Cloner 2.0 is a Figma plugin that lets you upload a **reference style image** + **target icons**, then uses AI to style-transfer all icons to match the reference — no Figma selection or export needed.

---

## Quick Start (Install in Figma)

1. Clone or download this repo
2. Open **Figma Desktop**
3. Go to **Plugins → Development → Import plugin from manifest…**
4. Select the `manifest.json` file from this folder
5. Run the plugin from **Plugins → Development → Cloner 2.0**

---

## How to Use

1. **Upload Reference Style** — drag & drop or click to upload an SVG or PNG
2. **Add Target Icons** — upload the icons you want to restyle (multiple files, drag & drop)
3. **Click ⚡ Transform Icons** — AI restyled each icon automatically
4. **Export** — choose format and click the export button:
   - **Figma** — places styled icons directly on canvas
   - **SVG / PNG / JPEG** — downloads the files

---

## AI Engine

| Mode | Provider | Key Required |
|------|----------|-------------|
| Default (Auto) | Pollinations.ai | ❌ Free, no account |
| Advanced | Gemini | ✅ Free key at aistudio.google.com |
| Advanced | OpenRouter | ✅ Free models available |
| Advanced | Claude | ✅ console.anthropic.com |
| Advanced | OpenAI | ✅ platform.openai.com |
| Advanced | GitHub Models | ✅ github.com/settings/tokens |
| Advanced | Ollama | ❌ Local — run `OLLAMA_ORIGINS=* ollama serve` |

Click **"▶ Use your own API key"** in the plugin to expand advanced settings. Keys are saved in localStorage.

---

## Features

- 🆓 Works out of the box — no API key needed (Pollinations.ai)
- 🎨 Upload SVG or PNG as reference style
- 📁 Upload multiple target icons at once with drag & drop
- ⚡ High-Fidelity toggle for 95% style match
- 🔁 Auto retry with backoff for Gemini rate limits
- 📦 Export as Figma node / SVG / PNG / JPEG (512×512)
- 🗑 Delete individual icons before/after transform

---

## File Structure

```
Icon-Cloner/
├── manifest.json   # Figma plugin config + network permissions
├── code.js         # Plugin sandbox — places SVG nodes on canvas
└── ui.html         # Full plugin UI + AI logic (self-contained)
```

---

## Network Access

The plugin makes direct API calls to AI providers from the Figma iframe. Allowed domains are declared in `manifest.json`:

- `https://text.pollinations.ai` — free, no key
- `https://generativelanguage.googleapis.com` — Gemini
- `https://api.anthropic.com` — Claude
- `https://api.openai.com` — OpenAI
- `https://openrouter.ai` — OpenRouter
- `https://models.inference.ai.azure.com` — GitHub Models
- `http://localhost:11434` — Ollama (local)

---

## Tips

- **SVG reference gives the best results** — the AI can read the exact color/stroke values
- **PNG reference** works too — describe the style in the text field that appears
- **Gemini free tier** has a rate limit (~15 req/min) — the plugin auto-waits between icons
- **High-Fidelity mode** sends a more detailed prompt and produces better style matching
- Keys entered in Advanced mode are saved to `localStorage` and auto-loaded next time

---

## License

MIT
