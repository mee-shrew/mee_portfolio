# Portfolio 1 Design System

## Context & sources
- **Source given:** a token extraction (colors, type, spacing, radii, button, links, breakpoints, motion) from a **Framer-built marketing website** (React 18.3.1, `data-framer-*` attributes). No URL, codebase, Figma, screenshots, copy or logo were attached.
- **Brand name** is inferred from a prior file in this project titled "비버매장연구소 상세" (Beaver Store Lab — detail). It reads as a store/retail research & consulting studio. Confirm or correct.
- Products represented: one surface — the **marketing website**.

## Index
- `styles.css` — entry point (`@import`s only) → `tokens/fonts.css, colors.css, typography.css, spacing.css, radius.css, motion.css, base.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (below), one card per folder
- `ui_kits/website/` — illustrative marketing-site click-through (see its README)
- `thumbnail.html`, `SKILL.md`
- `assets/` — **empty**: no logo or imagery supplied.

## Components
- core: **Icon** (Lucide via CSS mask)
- actions: **Button**, **IconButton**
- forms: **Input**, **Select**, **Checkbox** (incl. radio), **Switch**
- display: **Card**, **Badge**, **Tag**, **Accordion**
- navigation: **Tabs**, **NavLink**
- feedback: **Dialog**, **Toast**, **Tooltip**

No component inventory was provided, so this is a standard set sized for a marketing site. Intentional additions: **Icon** (single wrapper for the CDN icon set), **Accordion** (FAQ pattern typical of Framer service sites), **NavLink** (encodes the three extracted link colors).

## CONTENT FUNDAMENTALS
No real copy was provided — guidance below is inferred and should be validated.
- **Language:** Korean-first, with short English labels for eyebrows/nav ("Why", "Process", "FAQ"). The source's "Why" hover link confirms English nav labels.
- **Voice:** expert but plain; "we" (저희/우리) speaks to the store owner ("우리 매장", "you"). Polite 합니다/해요 endings; no slang.
- **Headlines:** one short claim, ≤ 2 lines, sentence case. Highlight at most one word in orange — e.g. "잘 되는 매장에는 **이유**가 있습니다".
- **Body:** concrete nouns (동선, 진열, 메뉴, 객단가) over adjectives; numbers as proof ("+32%", "4주").
- **CTAs:** verb-led, short — "상담 신청", "무료 진단 신청", "See our work".
- **Emoji:** not used. Unicode arrows not used as icons (use Icon).

## VISUAL FOUNDATIONS
- **Color:** warm off-white page `#f8f5f0` (cream) with `#f0ede8` sand blocks; text pure black `#000`, UI ink `#141412`; muted stone `#9c9a97` (50% alpha for footer links). One loud accent, orange `#ff6b35`, reserved for CTAs, highlight words, active dots. Slate `#7e8ea8` is a cool secondary used sparingly (charts/tags). No gradients.
- **Type:** Cabinet Grotesk 500 for display (72/64/32px), tight tracking (-0.03em), line-height ~1. Geist 500/600 for everything else (19/16/14px body, 13px 600 labels). 12px plain sans-serif for tiny links.
- **Spacing:** custom scale 5·8·10·15·20·25·30·50·100·250·300. Sections breathe at 100px vertical; gutters 50 / 30 / 20 across breakpoints (≥1200, 810–1199, ≤809). Card grids use tight 10px gaps.
- **Radii:** 10 (tooltips/small), 12 (inputs), 20 (cards, images, link blocks), 100px pill (buttons, badges, tabs), 50% (icon dots).
- **Cards:** flat — no shadow, no border; separated by tone (white on cream, sand, ink, orange). 20px radius, 25–30px padding.
- **Buttons:** 100px pill, padding `5px 5px 5px 15px`, label left + circular dark "dot" with arrow right. Hover darkens bg and rotates the arrow 45°; press scales to 0.97 in 0.1s `cubic-bezier(0.4,0,1,1)`.
- **Links:** ink by default; hover is a color-shift (to orange), never an underline.
- **Shadows:** none for content. Soft shadow only for floating UI (toast, dialog).
- **Transparency/blur:** sticky header uses 85% cream + 10px backdrop blur; dialog scrim ink 40% + blur.
- **Backgrounds:** solid fields only; full-bleed ink band to break rhythm. No textures, patterns or illustrations seen.
- **Imagery:** none supplied. Assume warm, natural-light store/interior photography, 20px radius. Use placeholders until provided.
- **Animation:** fast and quiet — scale press, color shifts, 0.2s hovers; Framer-style section fade/slide-up on scroll is plausible but unconfirmed.

## ICONOGRAPHY
No icon assets were found in the source. **Substitution:** Lucide (outline, 2px stroke) loaded from `unpkg.com/lucide-static@0.460.0` via the `Icon` component (CSS mask → inherits `currentColor`). Icons usually sit inside 30–50px circular dots (orange or ink). No emoji, no icon font, no unicode glyph icons. **Please supply the real icon set if one exists.**

## Logo
No logo was provided. The brand name is set in Cabinet Grotesk 500 wherever a mark would go. Do not draw one.

## Fonts
- Geist — Google Fonts woff2 (URLs from the source extraction).
- Pretendard (variable) — all Korean text. Self-hosted `assets/fonts/PretendardVariable.woff2`, scoped to Hangul via unicode-range and placed second in every font stack, so Latin stays Cabinet/Geist and 한글 is always Pretendard.
- Cabinet Grotesk 500/700 — self-hosted in `assets/fonts/` (downloaded from Fontshare, free license).
