# Yang Chi — Personal Portfolio

A minimal, production-grade personal portfolio website built with pure HTML, CSS, and Vanilla JS. No frameworks, no dependencies — just intentional design and clean code.

**Live Demo → [chiy48308.github.io/Self-Website](https://chiy48308.github.io/Self-Website)**

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts — Playfair Display + DM Mono |
| CI/CD | GitHub Actions → GitHub Pages |

---

## Features

- **Typewriter intro** — animated "Yang Chi" typing effect on page load
- **Scroll animations** — `IntersectionObserver`-based fade-up reveals
- **Warm dark theme** — deep charcoal (`#141210`) with warm off-white text, intentionally avoiding harsh pure-black
- **Responsive layout** — mobile-first, breakpoints at 768px and 480px
- **Work grid** — project cards with hover overlay and external links
- **Zero dependencies** — no npm, no bundler, open `index.html` and it works

---

## Pages / Sections

| Section | Description |
|---------|-------------|
| **Intro** | Full-screen typewriter overlay, fades out before Hero |
| **Hero** | Name, title, slogan — vertically and horizontally centered |
| **About** | Photo, bio, and skill list with category labels |
| **Work** | 2-column project grid with image, title, type, and year |
| **Contact** | Large italic heading + clickable email link |

---

## Project Structure

```
Self-Website/
├── public/
│   ├── index.html              # Main HTML
│   ├── css/
│   │   └── style.css           # All styles
│   ├── js/
│   │   └── main.js             # Typewriter + scroll animations
│   └── Perference/
│       ├── Logo.png            # Brand logo
│       ├── head.jpg            # Profile photo
│       └── works/              # Project screenshots
│           ├── RAG.png
│           ├── CV.png
│           ├── ELT.png
│           ├── GRV.png
│           └── Research.png
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deploy to GitHub Pages
└── .gitignore
```

---

## Local Development

No build step required. Simply open the file in your browser:

```bash
open public/index.html
```

Or serve locally with any static file server:

```bash
npx serve public
```

---

## Deployment

Pushes to `main` automatically trigger a GitHub Actions workflow that deploys the `public/` directory to GitHub Pages.

To set up:
1. Go to **Settings → Pages** in the repository
2. Set **Source** to `GitHub Actions`
3. Push to `main` — deployment runs automatically

---

## Selected Work

| Project | Type | Year |
|---------|------|------|
| PDF-RAG-ChatBot | RAG / LLM | 2026 |
| Weather ELT Pipeline | Data Engineering | 2026 |
| Computer Vision | Deep Learning | 2025 |
| Laravel ERP System | Backend Development | 2025 |
| 自動發音評估研究 | Research / NLP | 2025 |

---

© 2025 Yang Chi
