# ECI Centauri — Exoplanet ML Classifier · Design System

A design system for the **Exoplanet ML Classifier** — a graduate-level Master's defense project at **Escuela Colombiana de Ingeniería Julio Garavito** (MLEA_M, 2026-1) and a continuation of team **ECI Centauri**'s NASA Space Apps Challenge 2025 *Global Finalist* entry. The classifier is a reproducible binary-classification pipeline that decides whether a NASA Kepler Object of Interest (KOI) is a genuine exoplanet candidate or a false positive.

This system is the visual & component vocabulary for the defense deck, the IEEE paper, the README, and the demo web app.

## Sources used to derive the system
- **Codebase** (read-only mount): `exoplanet-ml-classifier/` — Python ML pipeline (scikit-learn, XGBoost, SHAP) with `src/`, `notebooks/`, `reports/`. Visualization conventions came from `src/visualization.py`.
- **Slide brief**: `exoplanet-ml-classifier/reports/slides/PROMPT_FOR_SLIDES_AI.md` — the source of truth for slide sequence, color constraints, and accent rules.
- **Brand mark**: `uploads/eci-centauri-logo-blue.png` — copied to `assets/eci-centauri-logo.png`.
- **NASA mission palette**: navy `#0B3D91` and orange `#FB8C00`, derived from the logo and confirmed by the slide brief.
- **Author specs**: Inter / Helvetica sans-serif, near-white background `#FAFAFA`, no emoji in slide bodies (one allowed in titles), LaTeX for all equations.
- **Heritage repos** (referenced, not imported): JAPV-X2612/ECI-Centauri-Frontend, JAPV-X2612/ECI-Centauri-Backend, Ch0comilo/astronet-cnn-v3.

## Folder index

| Path | What's inside |
| --- | --- |
| `colors_and_type.css` | All design tokens — palette, typography, spacing, radii, shadow, motion. |
| `assets/` | Logo + `figures/` snapshots from the project's `reports/figures/`. |
| `preview/` | 27 design-system cards (Type / Colors / Spacing / Components / Brand). |
| `slides/` | 7 slide templates — title, section, content, results, equations, figures, closing. |
| `ui_kits/classifier-demo/` | Interactive React UI kit recreating the predict-a-KOI demo. |
| `SKILL.md` | Agent-Skill manifest so this folder is portable to Claude Code. |

## Content fundamentals

**Voice.** Scientifically rigorous, course-grade, restrained. We talk to two professors and ~30 master's students; *we* the team, *the model* the algorithm, *you* the audience. Sentences are short, claims always paired with a number or figure citation. No hype words ("revolutionary", "amazing"); honest qualifiers preferred ("partly manual", "modest precision loss", "scientifically more costly").

**Casing.** Sentence case for headlines and bullets; UPPERCASE-with-spaced-tracking only for eyebrows and column headers. Title-case is reserved for the slide title and product name. Code identifiers stay lowercase with underscores (`koi_period`, `RANDOM_SEED`).

**Numbers.** Always tabular figures (`font-feature-settings: 'tnum'`) when in a table. Four decimals for headline metrics (F1, ROC-AUC, MCC); two decimals for engineering numbers; two significant figures inside prose. Percentages get `pp` (percentage points) when comparing.

**Emoji.** None inside slide bodies, paragraphs, or component labels. **One** emoji per slide *title* is allowed for warmth — picked from a tight palette: 🪐 🚀 🛰 📊 📐 🧠 ★. Never in tables, never as bullet markers (orange squares are the bullet).

**Examples (real copy from the project):**
- Title: *"Tabular vetting of NASA Kepler Objects of Interest"*
- Bullet: *"Lowering the threshold trades a small precision loss for a meaningful recall gain — the right call when missed planets cost more than wasted follow-ups."*
- Caption: *"XGBoost dominates the convex hull on both curves."*
- Honest limitation: *"The model only consumes tabular features; light-curve shape is not used here."*

## Visual foundations

**Color.** Two brand colors **maximum** in any block: NASA Navy `#0B3D91` for primary surfaces, headers, dense text and chrome; NASA Orange `#FB8C00` for accent lines, the winning row, badges, and emphasized eyebrows. Neutrals run from `#0E1116` ink to `#FAFAFA` page. Plot semantics from `src/visualization.py` are honored: positive class `#2196F3`, negative `#FF5722` — used in the confusion matrix, badges, and prediction gauge. Dark sections use full navy with orange-only accents (never both saturated at once, per the slide brief).

**Type.** **Inter** sans (300/400/500/600/700/800) for everything UI; **JetBrains Mono** for code, identifiers, and numerics; serif math for equations. Tracking is tight at display sizes (`-0.022em` on H1, `-0.025em` on hero) and `0.16em` on uppercase eyebrows. Defense-deck minimums: 24px body, 28px bullets, 56–80px slide titles.

**Spacing.** 4-px base, scale `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96`. Slide gutters live at 64–96px, card padding at 16–24px, inline gaps at 8–12px. 12-column grid on a 1920×1080 canvas with an 80-px header band and 56-px footer band.

**Backgrounds.** **Near-white** `#FAFAFA` is the rule for content slides — picked for projector contrast. Title and section dividers use saturated NASA Navy with a faint orange wash + a sparse star-field built from radial gradients (no photographic imagery — keeps the deck crisp on every projector). No textures, no full-bleed photos, no gradient slop.

**Animation.** Conservative. Durations 120 / 200 / 320 ms; standard easing `cubic-bezier(0.2, 0.0, 0.0, 1)`. Hover states *darken* primary buttons and *lighten* the accent (Navy 800, Orange 700). One pulsing dot is allowed — on the "awaiting prediction" empty state — at a 1.6s cadence.

**Hover / press.** Hover: shift one step toward the strong end of the ramp (Navy → Navy 800) or apply `--bg-3` on transparent buttons. Press: no shrink — we shift one more step on color and use a 3-px focus ring `rgba(11,61,145,0.35)` for keyboard.

**Borders & lines.** Hairlines at `--line` `#E1E5EC`; strong dividers at `--line-strong` `#C8CFD9`. The signature accent is a **left-rule** on equation cards (6-px orange) and a **section bar** (8-px orange beside section titles). Never a colored *left border + rounded corners* on a content card — that pattern is excluded.

**Shadows.** Four soft levels, all tinted with navy at 5–12% alpha (`0 8px 24px rgba(11,26,64,0.08)` etc.). No black shadows; no inner glows.

**Transparency / blur.** Used sparingly. White-on-navy text drops to 78–85% alpha for de-emphasis; chrome bands stay opaque so projectors don't blur them. No backdrop-blur.

**Imagery vibe.** All "imagery" is data — matplotlib outputs from `src/visualization.py` rendered with `sns.set_theme(style="whitegrid")` at 150 dpi. No 3-D charts, no clipart, no stock photos. Figures get a 1-sentence take-away caption, never a description of what the chart literally shows.

**Corner radii.** xs `2px` for chips/tags · sm `4px` for inputs/code · md `8px` default · lg `12px` for panels · xl `20px` for hero · pill for badges. Decks favor 8–12 px; documents favor 4–8 px.

**Cards.** Default card = white surface, 1-px `--line` border, `12px` radius, `shadow-1` resting / `shadow-2` for emphasized panels. Featured card (the winning row, the F1 metric) gets a 2-px **orange** border and an `--orange-050` tint — the only "hero card" pattern.

**Layout rules (fixed elements).** Slide header band: 80 px, logo on the left, breadcrumb after, slide counter on the right (mono). Footer band: 56 px, author + repo URL, mono. The corner watermark on non-title slides is the logo at 36–48 px in the top-left.

## Iconography

**Approach.** Stroke icons, navy default, orange for emphasis — **Lucide** (1.6-px stroke, 24-px grid) is the chosen system. The codebase has no icon font of its own (the README uses GitHub badge images and a few emoji that we deliberately don't carry into formal artifacts), so Lucide is the closest CDN match and is **flagged as a substitution** here. Icons live as inline SVG in components, sized 16/20/24 px.

**Emoji.** Allowed once per slide *title*, never in body. The codebase README uses many emoji — those are kept for the GitHub experience but excluded from formal deliverables.

**Unicode characters as iconography.** Reserved for math-adjacent contexts only: ⊕ (Earth), ☉ (Sun), ★ (finalist badge), → (flow arrows in callouts).

**Logos.** Two lockups: full color on light surface, full color on navy surface (drop-shadow only). The 36–48 px corner watermark is the same asset, no monochrome variant.

**Logo path.** `assets/eci-centauri-logo.png`.

## Substitutions flagged for the user

- **Fonts.** No font files were shipped in the codebase. We use **Inter** + **JetBrains Mono** loaded from Google Fonts as the closest licensed match for "Inter or Helvetica." If you prefer the actual Helvetica or have purchased Inter desktop files, drop them in `fonts/` and update the `@import` at the top of `colors_and_type.css`.
- **Icons.** No icon system was found in the codebase. **Lucide** (CDN: `https://unpkg.com/lucide-static@latest/icons/`) is used as the closest stroke/weight match. Swap to Phosphor or Heroicons if preferred.

## Caveats

- The companion frontend repos (JAPV-X2612/*) were referenced but not imported — the design system is anchored on the *current* graduate codebase, not the hackathon prototype.
- The UI kit's prediction is computed by a small deterministic stand-in (`mockModel.js`) so the demo runs without the joblib. Wire `best_xgboost.joblib` server-side when you take this to production.
