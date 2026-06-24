# Design Company LP — Design System

A design system for **Design Company LP**, an independent design studio working at the seam of brand identity, digital product, and editorial. The system is editorial and Swiss-influenced but warm: generous whitespace, hairline rules, a precise grid, high-contrast serif display type, and a single confident accent.

> ⚠️ **Provenance & assumptions.** No brand materials, codebase, or Figma were provided — the intake form came back as "Other" on every question. This system was therefore **authored from first principles** as a coherent, defensible direction for a design studio brand. Nothing here is reverse-engineered from an existing product. Treat every specific (the name "Design Company LP", the persimmon accent, the Newsreader/Hanken/Space Mono pairing, the sample clients) as a **proposal to react to**, not a fixed fact. See "Open questions" at the bottom.

---

## Sources
None supplied. If you have any of the following, share them and the system will be re-grounded:
- A codebase or repo (re-attach via the **Import** menu)
- A Figma file (paste the link)
- Logo / brand asset files, a brand guide, or a live site URL
- Specific brand fonts (or licensed font files)

---

## Content fundamentals — how Design Company LP writes

The voice is **plain-spoken, declarative, and quietly confident** — a studio that lets the work argue for itself rather than hyping it.

- **Casing:** Sentence case everywhere — headlines, buttons, nav, labels. Never Title Case In Running UI. (Mono eyebrows are the one deliberate exception: they're UPPERCASE with wide tracking.)
- **Person:** "We" for the studio, "you" for the client. Warm but not chummy.
- **Sentence length:** Short, load-bearing lines. One idea per sentence. Em-dashes for the aside, not exclamation marks.
- **Numbers:** Concrete and specific — "within two working days", "14-week average engagement", "48 clients". Set figures and money in Space Mono.
- **Emoji:** **Not used.** No rocket ships, no sparkles. The personality comes from typography and restraint.
- **Vibe:** Editorial confidence. Think a studio monograph or a well-set annual report, not a SaaS landing page.

**Examples**
- Hero: *"We build brands that behave like products, and products that feel like brands."*
- Button: `Start a project` · `See selected work` · `Send brief`
- Eyebrow: `SELECTED WORK — 2025`
- Empty/confirmation: *"We read every note ourselves and reply within two working days."*
- Avoid: *"Synergize your brand journey! 🚀"*, *"Click Here To Learn More!!"*

---

## Visual foundations

**Overall feeling.** Warm editorial minimalism. The page reads like fine paper stock: a warm off-white ground, near-black ink, a precise column grid, and one hot accent used like a printer's spot color.

**Color.**
- Neutrals are **warm** — paper (`#FBF9F5 → #ECE6DA`) and ink (`#1B1915`), never pure white or pure black. Stone greys for muted text.
- A single accent: **persimmon `#D85230`** (a warm red-orange). It marks the single most important action on a view and the occasional editorial flourish — *never two persimmon actions on one screen*.
- Status colors (forest/amber/red/blue) exist for UI feedback only and stay muted to sit on warm paper.
- **No gradients.** Flat fills only. Dark sections invert to ink via the `.on-ink` scope.

**Type.** Three families in tension:
- **Newsreader** — high-contrast editorial serif. Display headlines, big quotes, dialog titles, numbers-as-statements. Often set in italic light for emphasis.
- **Hanken Grotesk** — clean grotesque. All body copy and UI.
- **Space Mono** — eyebrows (uppercase, `0.12em` tracking), metadata, prices, case numbers.
- Display is set tight (`-0.02em`, line-height ~1.05); body is relaxed (line-height 1.5–1.65).

**Spacing & layout.** 4px base grid. Generous outer margins (40px gutters at desktop), ~1160px max content width. Strong use of **hairline rules** (`--border-hair`) to divide sections and table rows — division by line, not by box or shadow.

**Backgrounds.** Solid warm paper, with occasional full-bleed **ink** sections (footers, callouts). No photographic texture, no patterns, no gradients. Imagery, when present, runs warm; portfolio thumbnails in the kits are intentional **typographic posters** (color block + serif name) standing in for real photography.

**Corner radii.** Tight and editorial — `2/4/8/12/18px` plus a pill. Default small (`4–8px`). Cards are nearly square. Nothing is bubbly.

**Cards.** Hairline border + tight radius, flat by default. They **lift only on interaction** (a 2px translate + soft shadow). Ink cards for emphasis. Avoid heavy resting shadows — the system is hairline-first.

**Shadows.** Restrained, warm-tinted (`rgba(27,25,21,…)`). `xs/sm` for raised cards, `md` for popovers/tooltips, `lg` for modals only. Most surfaces use no shadow at all.

**Borders.** 1px hairlines do most structural work; `1.5px` ink borders for emphasis (e.g. checkbox boxes, strong outlines). Focus uses a 3px persimmon-wash ring (`--shadow-ring`) plus an ink border.

**Motion.** Quick and confident. `--ease-out` (cubic-bezier(.22,1,.36,1)) at 120–360ms. Fades and small translates; **no bounce, no spring, no infinite loops**. Buttons nudge down ~0.5px and scale 0.99 on press; icon buttons scale 0.94.

**Hover / press.**
- Buttons: darken the fill (ink → ink-2, persimmon-500 → 600). Secondary/ghost gain a `paper-2` wash.
- Press: slight scale-down, never a color flip to a new hue.
- Links: persimmon, underline on hover with 3px offset.

**Transparency & blur.** Used sparingly — only the sticky nav (86% paper + 10px backdrop blur) and the modal overlay (42% ink + 2px blur). Not a decorative motif.

---

## Iconography

- **System:** [Lucide](https://lucide.dev) — clean 24×24 line icons, ~1.8–2px stroke, round caps/joins. This is a **substitution**: no brand icon set was provided. Lucide's even stroke weight and geometric-humanist feel suit the editorial grotesque body type. **Flag for the user:** swap to a licensed/brand set if one exists.
- **Delivery:** icons are currently **inline SVG paths** within components and kits (so the bundle stays self-contained and the cards render offline). For production, link Lucide from CDN (`https://unpkg.com/lucide@latest`) or install the package.
- **Stroke, not fill.** Icons are outline-style to match the hairline aesthetic. Avoid mixing filled and outline icons.
- **No emoji as icons.** No unicode-glyph icons. The only non-Lucide marks are the brand logomark (`assets/`) and tiny inline UI chevrons/checks/×'s drawn to match Lucide's geometry.
- **Sizing:** 16px in dense UI / inputs, 18px in sidebars, 18–20px in icon buttons. Keep hit targets ≥ 32px.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- `assets/` — `logomark.svg`, `logomark-ink.svg`, `logomark-reverse.svg`.
- `readme.md` — this guide. `SKILL.md` — Agent-Skills wrapper.

**Foundation cards** (`guidelines/`, shown in the Design System tab)
- Type: `type-display`, `type-body`, `type-mono`, `type-scale`
- Colors: `color-neutrals`, `color-accent`, `color-semantic`
- Spacing: `spacing-scale`, `radii`, `shadows`
- Brand: `brand-logo`, `brand-voice`

**Components** (`components/<group>/`, bundled to `window.DesignCompanyLPDesignSystem_b7b319`)
- `core/` — **Button**, **IconButton**, **Badge**, **Tag**, **Avatar**, **Card** (+ `CardMedia`, `CardBody`)
- `forms/` — **Field**, **Input**, **Textarea**, **Select**, **Checkbox**, **Radio**, **Switch**
- `feedback/` — **Banner**, **Dialog**, **Tooltip**
- `navigation/` — **Tabs**
- Each has a `.d.ts` (props), `.prompt.md` (usage), and a directory `@dsCard` HTML.

**UI kits** (`ui_kits/`)
- `studio-site/` — editorial marketing site (hero, work index, services, contact dialog).
- `client-portal/` — client project dashboard (sidebar, deliverables table, milestone rail, invite dialog).

**Starting points:** Button, Card, the studio site, and the client portal are tagged for the consuming-project picker.

---

## Open questions for the user
1. **Brand reality:** Is "Design Company LP" a placeholder or the real name? Do you have a logo, real clients, or a tagline to replace the invented ones?
2. **Accent:** Is persimmon the right spot color, or should we explore cobalt / forest / a deeper red?
3. **Type:** Newsreader + Hanken Grotesk + Space Mono are Google Fonts stand-ins. Do you have licensed brand fonts? (Fonts currently load from the Google Fonts CDN; we can self-host on request.)
4. **Icons:** Keep Lucide, or do you have a brand icon set?
5. **Surfaces:** Are the marketing site and client portal the right two products to model, or is there an app/docs/other surface to prioritize?
