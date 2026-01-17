# Skytz Consulting

**Elite Direct Search for Sales Engineering & Executive Leadership**

A premium recruitment consultancy specializing in revenue-critical technical talent for engineering-driven companies across Germany, Switzerland, and the United States.

---

## 🏛️ Brand Positioning

> "I secure revenue-critical engineering leadership and Sales Engineers for the world's most demanding technical firms."
> 
> — Philipp Hoffschröer, Founder

### Trust Anchors

| Client | Relationship | Achievement |
|--------|-------------|-------------|
| **Megger Group** | Partner since 2016 | 9+ key placements across Sales Engineering, Business Development, and Leadership |
| **SWR Engineering** | Growth Partner | Strategic expansion support |
| **Happersberger Otopront** | Medical Sector | Head of International Sales |

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS 4 with Swiss Industrial design system
- **Animation:** Framer Motion
- **i18n:** react-i18next with path-based routing (`/de`, `/en`, `/fr`)
- **Icons:** Lucide React

---

## 🌍 Internationalization

Three-language support optimized for DACH and US markets:

| Language | Path | Primary Markets |
|----------|------|-----------------|
| German | `/de` | Germany, Austria, Switzerland (D-A-CH) |
| English | `/en` | United States, United Kingdom |
| French | `/fr` | Switzerland (Romandie), France |

### SEO: Hreflang Implementation

Automatic hreflang tag injection for proper Google indexing:
- `de-DE`, `de-CH`, `de-AT` → `/de/*`
- `en-US`, `en-GB` → `/en/*`
- `fr-CH`, `fr-FR` → `/fr/*`
- `x-default` → `/de/*`

---

## 🎨 Design System

### Swiss Industrial Precision

| Token | Value | Usage |
|-------|-------|-------|
| `slate-950` | `#020617` | Deep text, void backgrounds |
| `slate-50` | `#f8fafc` | Clean background canvas |
| `blueprint-600` | `#2563eb` | Primary CTA, trust signals |
| `Inter` | `-0.035em` tracking | Headlines (H1) |

### Key Components

- **Bento Grid:** 12-column responsive layout with generous "air"
- **Swiss Bank Card:** Premium dark gradient for authority tiles
- **Clarity Transition:** Headshot grayscale→color reveal on scroll/hover

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer
│   └── ui/            # BentoCard, LanguageSwitcher
├── hooks/
│   └── useLanguage.js # i18n path utilities
├── locales/
│   ├── de.json        # German (primary)
│   ├── en.json        # English
│   └── fr.json        # French
├── pages/
│   ├── Home.jsx       # Persuasion engine (Bento Grid)
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── CaseStudies.jsx
│   ├── Privacy.jsx
│   └── Terms.jsx
├── App.jsx            # Router + Hreflang SEO
├── i18n.js            # i18next configuration
└── index.css          # Swiss typography + custom utilities
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 📊 Key Metrics (Trust Signals)

- **85%** of placements from passive candidates (direct outreach)
- **95%** client rehire rate
- **10+ years** of precision search experience
- **Partner since 2016** with Megger Group

---

## 🏢 Legal Structure

**Operating Entity:** Laurasia LLC (Wyoming, USA)  
**DACH Executive Partner:** Philipp Hoffschröer  

Address:
```
Laurasia LLC
1309 Coffeen Avenue STE 1200
Sheridan, WY 82801
United States
```

---

## 📬 Contact

- **Email:** philipp@skytz.de
- **Phone:** +49 176 8017 8907
- **Website:** [skytz-consulting.com](https://skytz-consulting.com)

---

<p align="center">
  <sub>Built with precision. Deployed with confidence.</sub>
</p>
