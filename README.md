# BTB Academy

Marketing and investor site for **BTB Academy** — a Dubai-based trading ecosystem
combining professional trading infrastructure, education and media production.

Single-page site with animated data visualisations covering the revenue model,
operating metrics, campus layout and growth roadmap.

## Stack

| Layer | Used |
| --- | --- |
| Framework | React 19, TypeScript, Vite 8 |
| Animation | Framer Motion |
| Charts | Recharts |
| Icons | Lucide |
| Styling | Plain CSS, per-component |

No CSS framework and no UI library — every component owns its styling.

## Getting started

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`.

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Type-check (`tsc -b`) then production build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint across the project |

Note that `build` runs `tsc -b` first, so a type error fails the build rather than
shipping.

## Sections

The page is composed in `src/App.tsx` in display order:

| Component | Shows |
| --- | --- |
| `Hero` | Headline, positioning, headline KPIs |
| `KPIDashboard` | Year-one operating metrics |
| `RevenuePyramid` | Revenue model by tier |
| `Charts` / `StackedBars` | Revenue and growth breakdowns |
| `TechStack` | Platforms and tooling |
| `CampusMap` | Physical campus layout |
| `EcosystemCards` | The six departments — education, trader rooms, marketing, sales, media, community |
| `GrowthTimeline` | Historical trajectory |
| `VisionTimeline` | Forward roadmap |
| `ContactForm` | Enquiry capture |

`Background` and `Ticker` render behind the hero. `App.tsx` also drives a custom
cursor (a dot tracking the pointer and a ring easing toward it via
`requestAnimationFrame`), which is why the page hides its own cursor.

## Layout

```
src/
├── App.tsx           Section composition, custom cursor, load transition
├── main.tsx          Entry point
├── index.css         Global styles and design tokens
├── App.css           Layout and cursor styles
├── components/       One folder per section, .tsx plus optional .css
└── assets/           Images
public/               favicon.svg, icons.svg
```

## Notes

Content is currently hard-coded inside the components rather than loaded from a
data file. Editing figures — revenue, student counts, timeline entries — means
opening the relevant component.
