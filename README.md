<div align="center">

# 🛸 ECI Centauri · Exoplanet ML — Design System

```text
 ╔═══════════════════════════════════════════════════════════════════╗
 ║   N A V Y   ·  # 0 B 3 D 9 1        O R A N G E  ·  # F B 8 C 0 0 ║
 ╚═══════════════════════════════════════════════════════════════════╝
```

**The visual & component vocabulary** behind the presentation deck, the IEEE paper, the live demo and every figure of the **[Exoplanet ML Classifier](https://github.com/AnderssonProgramming/exoplanet-ml-classifier)** : a reproducible, leakage-free tabular pipeline that decides whether a NASA Kepler Object of Interest is a genuine exoplanet candidate or a false positive.

<br/>

<p align="center">
  <img src="https://img.shields.io/badge/NASA%20Navy-%230B3D91-0B3D91?style=for-the-badge&labelColor=0B3D91" alt="Navy"/>
  <img src="https://img.shields.io/badge/NASA%20Orange-%23FB8C00-FB8C00?style=for-the-badge&labelColor=FB8C00" alt="Orange"/>
  <img src="https://img.shields.io/badge/Canvas-%23FAFAFA-FAFAFA?style=for-the-badge&labelColor=FAFAFA&logoColor=0B3D91" alt="Canvas"/>
  <img src="https://img.shields.io/badge/Ink-%230E1116-0E1116?style=for-the-badge&labelColor=0E1116" alt="Ink"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Inter-font-000?logo=googlefonts&logoColor=fff" alt="Inter"/>
  <img src="https://img.shields.io/badge/JetBrains%20Mono-code-000?logo=jetbrains&logoColor=fff" alt="JetBrains Mono"/>
  <img src="https://img.shields.io/badge/KaTeX-equations-329F35?logo=latex&logoColor=fff" alt="KaTeX"/>
  <img src="https://img.shields.io/badge/Lucide-icons-FB8C00" alt="Lucide"/>
  <img src="https://img.shields.io/badge/HTML5-deck-E34F26?logo=html5&logoColor=fff" alt="HTML"/>
  <img src="https://img.shields.io/badge/CSS3-tokens-1572B6?logo=css3&logoColor=fff" alt="CSS"/>
  <img src="https://img.shields.io/badge/Vanilla%20JS-zero%20build-F7DF1E?logo=javascript&logoColor=000" alt="JS"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Slides-20-0B3D91?logo=googleslides&logoColor=fff" alt="Slides"/>
  <img src="https://img.shields.io/badge/Preview%20cards-27-FB8C00" alt="Preview cards"/>
  <img src="https://img.shields.io/badge/Components-13-2196F3" alt="Components"/>
  <img src="https://img.shields.io/badge/Design%20tokens-60%2B-7E57C2" alt="Tokens"/>
  <img src="https://img.shields.io/badge/License-Apache%202.0-2196F3" alt="License"/>
  <img src="https://img.shields.io/badge/NASA%20Space%20Apps%202025-Global%20Finalist-FB8C00?logo=nasa&logoColor=fff" alt="Space Apps Finalist"/>
</p>

<br/>

<sub>**Built for** the 15 May 2026 MLEA_M presentation at **Escuela Colombiana de Ingeniería Julio Garavito** · **Team** ECI Centauri — *Andersson Sánchez · Cristian Pedraza*</sub>

</div>

---

## 🌌 What is this?

This is a **complete, self-contained design system**, not a library, not a stylesheet, not a slide template, it's a *system* with all four layers wired together:

| Layer | What you get |
|---|---|
| 🎨 **Tokens** | A single [`colors_and_type.css`](colors_and_type.css) with the full palette, the typographic scale, spacing, radii, shadows and motion. **All design decisions live in CSS variables**, so swapping the palette swaps the deck, the paper figures and the demo in one move. |
| 🧩 **Components** | 13 self-contained HTML/CSS components in [`preview/`](preview/) with every metric tile, equation card, leaderboard table, confusion-matrix glyph and badge used in the project. |
| 🎬 **Slides** | A 20-slide [`deck/`](deck/) with a custom `<deck-stage>` element, full-bleed `1920×1080` canvas, KaTeX equations, lazy QR codes and zero dependencies beyond two CDNs. |
| 🛰 **UI Kit** | A working React [`ui_kits/classifier-demo/`](ui_kits/classifier-demo/) that recreates the *predict-a-KOI* demo using a deterministic mock model and an instant audience interaction without serving the joblib. |

Everything is **pure HTML/CSS/JS**, no build step, no `npm install` (the React kit is the one exception, and ships with its own README). Drop the folder on a static host and ship.

---

## 🎯 Why this exists

Because the project is being presented in front of **two professors and students**, and one master's-grade ML codebase. Three rules drove every decision:

1. **Two brand colours, never both saturated at once.** NASA navy `#0B3D91` is the primary surface; NASA orange `#FB8C00` is the accent. Neutrals run from `#0E1116` ink to `#FAFAFA` page. The plot semantics (`#2196F3` positive class, `#FF5722` negative) match the codebase's `src/visualization.py` so the deck, the paper and the matplotlib figures all read as one publication.
2. **Honest copy, no hype.** *"Lowering the threshold trades a small precision loss for a meaningful recall gain"*, not *"revolutionary AI breakthrough"*. The voice is restrained, scientifically rigorous and free of marketing words.
3. **Projector-ready on the first slide.** `#FAFAFA` near-white background for content slides (chosen for projector contrast), saturated navy for title/closing/section dividers (with a faint orange wash and a sparse star-field built from radial gradients, no photographic backgrounds that smear on cheap projectors).

---

## 📦 Folder index

```text
ECI Centauri — Exoplanet ML Design System/
│
├── 🎨  colors_and_type.css      All design tokens — palette · typography · spacing · radii · shadows · motion
│
├── 🎬  deck/                    The 20-slide IEEE-presentation deck (HTML/CSS/JS)
│   ├── deck.css                 Slide-level styling — section chrome, body grids, card variants, KaTeX tweaks
│   ├── deck-stage.js            Custom <deck-stage> element — scales 1920×1080 to viewport, keyboard nav
│   ├── image-slot.js            Drop-to-fill <image-slot> custom element with reframe + sidecar persistence
│   └── index.html               The deck itself — 20 sections, one per slide
│
├── 🖼  assets/                   Brand assets + figure exports
│   ├── eci-centauri-logo.png    Space Apps team mark (used in title-row and closing slide)
│   ├── eci-university-logo.png  ECI Julio Garavito university lockup (used in every content-slide header band)
│   ├── andersson-profile.jfif   Author headshot
│   ├── cristian-profile.png     Author headshot
│   ├── ml-architecture.png      Full pipeline architecture diagram (Eraser export)
│   └── figures/                 20 PNG figures imported from reports/figures/ of the main repo
│
├── 🧩  preview/                  27 component preview cards — type · colours · spacing · components · brand
│   ├── _card.css                Shared card chrome for the 27 previews
│   ├── colors-{primary,accent,neutrals,semantic,contrast}.html
│   ├── type-{display,headings,body,mono,numerics}.html
│   ├── spacing-{scale,layout,radii,shadow}.html
│   ├── comp-{badges,buttons,callout,confusion,equation,featbar,fields,metric-card,table}.html
│   └── brand-{chrome,figures,icons,logo}.html
│
├── 🧪  ui_kits/                  Interactive demo recreating the predict-a-KOI app
│   └── classifier-demo/         React + Vite mock with a deterministic local model (mockModel.js)
│
├── 📜  SKILL.md                  Agent-skill manifest — makes this folder portable to Claude Code
├── ⚙️  .gitignore                Project ignore rules for OS/IDE/Temp files
├── 📄  LICENSE                   Apache 2.0
└── 📘  README.md                 You are here
```

---

## 🚀 Quick start

### View the deck

The deck needs an HTTP server (one CDN fetch + one `<deck-stage>` custom element). Pick one:

<details>
<summary><b>Option A · Python</b> (already on your machine)</summary>

```powershell
cd "ECI Centauri — Exoplanet ML Design System"
python -m http.server 8000
```
Open <http://localhost:8000/deck/index.html>.

</details>

<details>
<summary><b>Option B · Node / npx</b></summary>

```powershell
npx serve -l 8000
```
Open <http://localhost:8000/deck/index.html>.

</details>

<details>
<summary><b>Option C · VS Code Live Server</b></summary>

Right-click `deck/index.html` → *Open with Live Server*.

</details>

### Export the deck to PDF

1. Open <http://localhost:8000/deck/index.html> in **Chrome / Edge**.
2. Press **Ctrl + P** → *Save as PDF*.
3. **Margins:** None · **Scale:** Default · **Background graphics:** ✅ On.
4. Each slide fits one 1920 × 1080 page.

### Browse the component previews

Open <http://localhost:8000/preview/comp-metric-card.html> (and the other 26 files in `preview/`) to inspect each component in isolation.

---

## 🎨 Design tokens at a glance

### Colour palette

<table>
<tr>
  <th align="left">Role</th><th align="left">Token</th><th align="left">Hex</th><th align="left">Used on</th>
</tr>
<tr><td>🔵 Primary surface</td><td><code>--nasa-navy</code></td><td><code>#0B3D91</code></td><td>Title slide, closing slide, dark cards, chart axes</td></tr>
<tr><td>🟠 Accent</td><td><code>--nasa-orange</code></td><td><code>#FB8C00</code></td><td>Highlights, winning row, eyebrows, badges, bullet markers</td></tr>
<tr><td>⚪ Page</td><td><code>--bg-1</code></td><td><code>#FAFAFA</code></td><td>Body background of all content slides</td></tr>
<tr><td>⚫ Ink</td><td><code>--fg-1</code></td><td><code>#0E1116</code></td><td>Primary text on light surfaces</td></tr>
<tr><td>🟦 Positive class</td><td><code>--signal-positive</code></td><td><code>#2196F3</code></td><td>CANDIDATE points in scatter plots, "good" metric values</td></tr>
<tr><td>🟥 Negative class</td><td><code>--signal-negative</code></td><td><code>#FF5722</code></td><td>FALSE POSITIVE points, "bad" metric values</td></tr>
<tr><td>🟨 Highlight star</td><td>—</td><td><code>#FFD56B</code></td><td>Sparse star-field on title slide, code-literal accent in snippets</td></tr>
<tr><td>📐 Hairline border</td><td><code>--line</code></td><td><code>#E1E5EC</code></td><td>Card borders, table dividers, KPI strip separators</td></tr>
</table>

The rule: **only one accent at full saturation per block**. Two saturated brand colours in the same card or chart compete; one accent + neutrals breathes.

### Typography

| Tier | Family | Where it lives |
|---|---|---|
| **Display** | Inter 800 · −0.025em tracking | Title slide H1 (76 px), closing slide H1 (116 px) |
| **Heading** | Inter 700 · −0.022em tracking | Slide titles (56 px), section dividers (120 px) |
| **Body** | Inter 400/500 | Slide bullets (24 px), card descriptions (16 px), paper body |
| **Mono** | JetBrains Mono | Identifiers (`koi_period`), code snippets, numbers in leaderboard |
| **Math** | KaTeX serif | All equations on slides 8 and 12 |

### Spacing scale (4-px base)

```text
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96
└─ gap            └─ card padding         └─ slide gutter
```

### Radii

```text
xs 2px (chips/tags) · sm 4px (inputs/code) · md 8px (default)
lg 12px (panels)    · xl 20px (hero)       · pill (badges)
```

### Shadow ramp

Four soft levels tinted with navy at 5–12 % alpha (`0 8px 24px rgba(11,26,64,0.08)` et al.). **No black shadows · no inner glows.**

---

## 🧩 What's in the deck — slide-by-slide map

The deck is the system's flagship deliverable. 20 slides, designed to fill an entire IEEE master's presentation slot.

| # | Slide | Hero element | Layout pattern |
|--:|---|---|---|
| 01 | 🪐 **Title** | Authors' photos in a centred spotlight, university chip top-right, decorative 3D planets floating in the side bands | Dark navy + star-field |
| 02 | 🎯 **Problem & Motivation** | Bullet list of *why* + dark "Problem type" card + three false-positive type cards | `g-2-asym` + bottom row |
| 03 | 📊 **Dataset card** | Field × value table · class-distribution bar · 3 KPIs · 13-feature taxonomy | Two-row asymmetric |
| 04 | ⚠️ **Leakage trap** | 3-family leakage taxonomy on the left, F1≈0.99 vs 0.860 comparison on the right | `g-2-asym` + dark code-snippet card |
| 05 | 🔭 **EDA 1/2 — distributions & correlations** | Target distribution + correlation heatmap side by side | `g-2` figure pair |
| 06 | 🌀 **EDA 2/2 — PCA & K-Means** | PCA scatter + K-Means clustering on PCA | `g-2` figure pair |
| 07 | ⚙️ **Preprocessing pipeline** | 7-step `.pipe` flow + featured pipeline lesson + dark seed-snippet card | 7 steps + 2 cards + 4 KPIs |
| 08 | ∑ **Math foundations** | Three KaTeX equation cards with role-in-our-zoo footers | `g-3` equation cards |
| 09 | 🧠 **Seven-classifier zoo** | 7-row comparison table + 3-family taxonomy below | Full-width table + g-3 |
| 10 | 🏗 **Architecture in one picture** | Full-bleed Eraser pipeline diagram with reading-guide caption | Single hero figure |
| 11 | 🎛 **Hyperparameter tuning** | Grid table left, why-tune-these card + learning-curve figure right, 4-step protocol pipeline at bottom | Three-tier composition |
| 12 | 🎯 **Why F1 & MCC, not accuracy** | Two KaTeX equation cards + 3-card comparison row (accuracy vs F1 vs MCC) | `g-2` + `g-3` |
| 13 | 🏆 **Leaderboard** | 7-row leaderboard with winning row in orange + 3 featured metric tiles | Table + featured KPIs |
| 14 | 📈 **ROC & PR curves** | Overlay ROC + Overlay PR side by side | `g-2` figure pair |
| 15 | 🎚 **Confusion & threshold tuning** | Wide confusion-matrix grid + threshold table + Youden's-J method card + cost-asymmetry card | `g-2-asym` left-heavy |
| 16 | 🔍 **Feature importance & interpretability** | XGBoost bar chart + 4 stacked context cards | `g-2-asym-r` |
| 17 | 🧭 **Course extensions** | 3 family cards (Session 04 / 05 / 06) + 2 small figures | `g-3` + `g-2` figure pair |
| 18 | 🌍 **Application & impact** | 3 audience cards + 4-stat impact strip + 2 cards (honest limitation + production hand-off with code) | 3-tier vertical |
| 19 | ✨ **Conclusions & next steps** | 4 bullets + 3 metric tiles + dark repo card + 3 lesson cards + 4-step roadmap pipeline | Four-tier composition |
| 20 | 🙏 **Thank you** | Big "Thank.<br/>you." mark + email + advisors + 4 QR cards (LinkedIn × 2, GitHub × 2) | Closing/dark |

---

## 🎬 Custom HTML elements

The deck ships with two small, dependency-free custom elements:

### `<deck-stage width="1920" height="1080">`

Scales every `<section>` child to fit the viewport while preserving the **1920 × 1080** aspect ratio. Press **←/→** or **PgUp/PgDn** to navigate, **R** to reset to slide 1. Slide counter and label live in the bottom strip.

### `<image-slot id="…" shape="circle|rounded|rect|pill" placeholder="…">`

A drop-to-fill image placeholder with:

- **drag-and-drop or click-to-browse** ingestion
- **double-click reframe** (pan + zoom inside the mask, corner-drag to scale)
- **side-car persistence** to `.image-slots.state.json` so dropped images survive reload / share-link / PPTX export
- **session-only fallback** when no `id` is supplied (still usable, just doesn't persist)

You don't need it for slide 1, the deck already uses static `<img>` for the author photos, but it's there for future reuse in any image-driven component you want to add.

---

## 🛰 NASA Space Apps heritage

This design system is the polished-and-paper'd descendant of **[Exoplanet Hunter AI](https://www.spaceappschallenge.org/)**, the prototype that team **ECI Centauri** shipped in 48 hours at the **2025 NASA International Space Apps Challenge** and that earned a **Global Finalist** placement as one of the top global submissions worldwide.

| Hackathon component | Repository |
|---|---|
| 🌐 React + Three.js web frontend | [JAPV-X2612/ECI-Centauri-Frontend](https://github.com/JAPV-X2612/ECI-Centauri-Frontend) |
| ⚙️ FastAPI backend | [JAPV-X2612/ECI-Centauri-Backend](https://github.com/JAPV-X2612/ECI-Centauri-Backend) |
| 🧠 Light-curve CNN (Astronet v3) | [Ch0comilo/astronet-cnn-v3](https://github.com/Ch0comilo/astronet-cnn-v3) |
| 📊 Tabular ML classifier (this presentation) | [AnderssonProgramming/exoplanet-ml-classifier](https://github.com/AnderssonProgramming/exoplanet-ml-classifier) |

The hackathon system answered *"can we build something that triages KOIs in 48 hours?"* The MLEA_M presentation answers *"can we do it again, but reproducibly, with the methodology our master's panel will present in front of?"*

---

## 🎓 Where this lives

- **Course:** MLEA_M — *Machine Learning*, Master in Data Science, **Escuela Colombiana de Ingeniería Julio Garavito**, period 2026-1.
- **Presentation date:** May 15, 2026.
- **Authors:**
  - **Andersson David Sánchez Méndez** — [@AnderssonProgramming](https://github.com/AnderssonProgramming) · <andersson.sanchez-m@mail.escuelaing.edu.co>
  - **Cristian Santiago Pedraza Rodríguez** — [@cris-eci](https://github.com/cris-eci) · <cristian.pedraza-r@mail.escuelaing.edu.co>
- **Advisors:**
  - **Mario Julián Cañón Ayala** — *Ph.D. in Computational Modeling*
  - **Héctor Javier Hortúa Orjuela** — *AI Research Scientist*

---

## 🧷 Substitutions flagged for the reader

The system was extracted from the codebase: a couple of things had to be substituted because no canonical asset existed:

- **Fonts.** The codebase shipped no font files. The system loads **Inter** + **JetBrains Mono** from Google Fonts as the closest licensed match for *"Inter or Helvetica."* Drop your purchased Inter or Helvetica into `fonts/` and update the `@import` at the top of `colors_and_type.css` to swap.
- **Icons.** The codebase ships no icon system; the deck and previews use a hand-picked set of inline SVGs in the style of **[Lucide](https://lucide.dev)** (1.6-px stroke, 24-px grid). Swap to Phosphor or Heroicons if preferred, it shows that every icon is a small inline `<svg>` so a project-wide swap is a find-and-replace.

---

## 📄 License & citation

**Code & design files:** Apache License 2.0 — see [`LICENSE`](LICENSE).
**Logos & author photographs:** all rights reserved by their respective owners; reuse only with permission.

If you build on this design system, please cite:

```bibtex
@misc{eci_centauri_design_2026,
  title  = {ECI Centauri · Exoplanet ML — Design System},
  author = {S{\'a}nchez M{\'e}ndez, Andersson David and Pedraza Rodr{\'i}guez, Cristian Santiago},
  year   = {2026},
  note   = {Visual system for the MLEA\_M presentation at Escuela Colombiana de Ingenier{\'i}a Julio Garavito},
  howpublished = {\url{https://github.com/AnderssonProgramming/exoplanet-ml-classifier-design-system}}
}
```

---

<div align="center">

### 🪐 Built for a presentation. Engineered for anyone who has to give one next.

<sub>NASA navy · NASA orange · one accent at a time · honest copy · projector-ready · zero dependencies</sub>

<br/>

[![Code](https://img.shields.io/badge/Project%20code-AnderssonProgramming/exoplanet--ml--classifier-0B3D91?style=for-the-badge&logo=github&logoColor=fff)](https://github.com/AnderssonProgramming/exoplanet-ml-classifier)

</div>
