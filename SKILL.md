---
name: eci-centauri-exoplanet-design
description: Use this skill to generate well-branded interfaces and assets for the ECI Centauri Exoplanet ML Classifier project — defense slides, paper figures, demo UIs, throwaway prototypes, etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key context:
- This is a graduate Master's defense project at **Escuela Colombiana de Ingeniería Julio Garavito** (MLEA_M, 2026-1).
- Continues the **ECI Centauri** NASA Space Apps 2025 Global Finalist entry.
- Visual identity is anchored on **NASA Navy `#0B3D91`** and **NASA Orange `#FB8C00`** on a near-white `#FAFAFA` background.
- Typography: **Inter** + **JetBrains Mono** (Google Fonts).
- Tone: scientifically rigorous, no emoji in slide bodies, LaTeX for all math.

Files to consult:
- `colors_and_type.css` — all design tokens
- `preview/` — 27 reference cards
- `slides/` — title / section / content / results / equations / figures / closing
- `ui_kits/classifier-demo/` — interactive React recreation of the predict-a-KOI demo
- `assets/eci-centauri-logo.png` — brand mark
- `assets/figures/` — matplotlib outputs from the pipeline
