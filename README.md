# Amit Chakraborty — Book Portfolio

A cinematic, book-themed interactive portfolio built with Vite + React + TypeScript.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

---

## 🎨 IMAGE GENERATION PROMPTS (Nano Banana 3)

Generate these images and place them in `/public/images/`:

### 1. `cover-hero.jpg` — Book Cover Hero Image
```
Cinematic editorial portrait: A warm amber and dark brown atmospheric background.
Intricate golden circuit board patterns dissolving into ancient Sanskrit manuscript
calligraphy in the upper region. A central abstract geometric form — an icosahedron
made of saffron glowing lines — floats in the center-right, casting warm light.
Scattered luminous code fragments in golden ink fade like burning parchment.
Floating dust particles catch warm candlelight. The atmosphere: luxury, intelligence,
warmth, gravitas. Color palette: deep mahogany (#1A0800), burning saffron (#E8771A),
old gold (#C9A84C), warm cream (#FFF8EF). Wide landscape format, 16:9 ratio.
Extremely cinematic, Leica anamorphic lens, dramatic shallow depth of field.
No people, no faces. Pure abstract atmosphere.
```

### 2. `chapter-divider.jpg` — Chapter ornament
```
Hand-crafted book ornament on aged cream parchment (#FFF8EF). Central hexagram
formed by interlocking triangles with fine pen hatching. Surrounding botanical
flourishes — thin-line fern leaves and small flowers — intertwined with circuit
board traces. Saffron and gold ink (#E8771A, #C9A84C). In the manner of a Victorian
scientific illustration crossed with a technical drawing. Ultra-detailed linework,
perfect symmetry. Square format. White background.
```

### 3. `profile.jpg` — (Optional) Abstract profile
```
Abstract geometric avatar: A stylized human silhouette composed of floating golden
polygons and saffron light rays. No realistic facial features — pure geometry.
Circuit node connections visible throughout the form. Dark mahogany background.
Warm amber rim lighting. The subject radiates intelligence and calm authority.
Cinematic, 8K, Unreal Engine render quality. Square format 1:1.
```

---

## Architecture

### Tech Stack
- **Vite + React 18 + TypeScript** — core framework
- **Zustand** — global book state (current spread, animations, theme, interactions)
- **GSAP** — page turn animations (custom 3D CSS transforms + timeline)
- **Three.js** — ambient floating dust particles, paper scraps, glowing orbs
- **@tanstack/react-virtual** — virtualized project list in Chapter III
- **Cormorant Garamond** + **EB Garamond** + **Cinzel** — book typography

### Book Spreads (8 total)
| # | Label | Left | Right |
|---|-------|------|-------|
| 0 | Cover | Book cover + stats | Table of Contents |
| 1 | Foreword | About opener + stats | Biography + timeline |
| 2 | Chapter I | Experience opener | Experience accordion |
| 3 | Chapter II | Projects opener | Featured projects (3) |
| 4 | Chapter III | More projects (virtualized) | Blog posts |
| 5 | Chapter IV | Skills (left half) | Skills (right half) + stack |
| 6 | Chapter V | Testimonials opener | 3 testimonials |
| 7 | Colophon | Services + process | Contact form + links |

### Navigation
- **Arrow keys** ← → to turn pages
- **Scroll wheel** to turn pages
- **Touch/swipe** left/right or up/down
- **Chapter dots** (right side) to jump to any spread
- **Bottom nav** prev/next buttons

### Zustand Store
```ts
bookStore: {
  currentSpread: number       // Active spread index
  isAnimating: boolean        // Prevents double turns
  direction: 'forward'|'backward'
  expandedExperience: string  // Which exp card is open
  hoveredProject: string      // Hover state for projects
  theme: 'day'|'night'        // Paper color theme
}
```

### Color Palette
```css
--paper-1: #FFF8EF     /* Warm ivory page */
--ink: #1C0A00         /* Deep brown ink */
--saffron: #E8771A     /* Primary accent */
--gold: #C9A84C        /* Secondary accent */
--spine: #1A0800       /* Dark cover / spine */
```

### Fonts
- `Cormorant Garamond` — chapter numbers, headings, display
- `EB Garamond` — body text, pull quotes
- `Cinzel` — caps headers, labels, navigation
- `Space Grotesk` — tech pills, UI elements

---

## Deploy

```bash
npm run build
# Deploy /dist to Vercel / Netlify / any static host
```

For Vercel: just connect the repo, it auto-detects Vite.


---

## 👨‍💻 About the Author

**Amit Chakraborty**
*Principal Architect · Founding Engineer*

- 📧 **Email**: [amit@devamit.co.in](mailto:amit@devamit.co.in)
- 🌐 **Portfolio**: [devamit.co.in](https://devamit.co.in)
- 💼 **LinkedIn**: [devamitch](https://linkedin.com/in/devamitch)
- 🐦 **Twitter**: [@devamitch](https://x.com/devamitch)

> *8+ years of experience. 18+ production apps shipped. Specializing in React Native, Web3, and AI/ML pipelines.*
