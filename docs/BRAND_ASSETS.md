Brand Assets — WillPatra

This document collects the brand tokens and assets found in the project. Use it as a single source of truth for fonts, colors, logos, spacing and common UI patterns.

1) Fonts

- Inter (variable available via CSS variable `--font-inter`)
  - Files (local): `app/fonts/inter/Inter-Regular.woff2`, `Inter-Medium.woff2`, `Inter-SemiBold.woff2`, `Inter-Bold.woff2`
  - Usage: Primary UI typeface for body text, forms, UI controls. We use weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold).

- DM Sans (variable available via CSS variable `--font-DM-Sans`)
  - Files (local): `app/fonts/dm-sans/DMSans-Regular.ttf`, `DMSans-Medium.ttf`, `DMSans-SemiBold.ttf`, `DMSans-Bold.ttf`, `DMSans-ExtraBold.ttf`
  - Usage: Secondary typeface for headings, microcopy where a simpler geometric sans is desired.

- Clash Grotesk (variable available via CSS variable `--font-clash-grotesk`)
  - Files (local): `app/fonts/clash-grotesk/ClashGroteskSemibold.woff2`
  - Usage: Accent / display headings where brand personality is required (hero titles, special sections).

Notes:
- Fonts are loaded locally via `app/fonts.js` using Next.js `localFont`. Use the CSS variables `--font-inter`, `--font-DM-Sans`, and `--font-clash-grotesk` to reference them.
- Body fallback: `sans-serif`.

2) Color tokens (CSS variables)

The site defines global color tokens in `public/css/app.css` under `:root`. These are the canonical values used across components.

Primary tokens (from `:root`):
- --heading-color: #0e0e0e
- --body-color: #3c3c3c
- --accent-color: #4c1027
- --light-bg: #ffffff
- --dark-bg: #0e0e0e
- --white-bg: #fff8ef
- --white-color: #fff8ef
- --light-color: #fff8ef
- --light-color2: #dbdbdb
- --light-color3: #dbdbdb1a
- --green-bg: #0c9347
- --grey-color: #747474
- --purple-color: #e5abf3

Suggested semantic palette (derived):
- Primary (brand): #4c1027 (var: `--accent-color`) — use for primary actions (CTA), highlights.
- Primary-Text: #0e0e0e (var: `--heading-color`) — headings and prominent text.
- Body-Text: #3c3c3c (var: `--body-color`) — paragraph and body copy.
- Background (light): #fff8ef (var: `--white-bg`) — page panels, cards.
- Background (page): #ffffff (var: `--light-bg`) — main page background.
- Dark: #0e0e0e (var: `--dark-bg`) — used in dark theme or on light text backgrounds.
- Accent-Green: #0c9347 (var: `--green-bg`) — success states, badges.
- Neutral Grey: #dbdbdb / #747474 (var: `--light-color2`, `--grey-color`) — borders, muted text.
- Accent-Purple: #e5abf3 (var: `--purple-color`) — optional accent usage.

3) Logos and iconography

Files (public):
- `public/images/logo/logo-dark.svg` — dark version (for light backgrounds).
- `public/images/logo/logo-white.svg` — white/positive version (for dark backgrounds).
- `public/images/logo/WillPatra.svg` — brand mark (usage depends on layout).

Logo usage rules:
- Use `logo-dark.svg` on light backgrounds. Clear space: 16px (or 1x the cap-height) around the logo.
- Use `logo-white.svg` on dark backgrounds or overlays.
- Prefer SVG for web where possible to preserve sharpness and reduce file size.
- Provide alternate raster PNG fallbacks for legacy systems if needed.

Iconography:
- Icons live under `public/images/icon` and `public/images/icons`. Prefer SVG versions when integrating UI components.

4) Spacing and layout tokens

The project defines sizing tokens in `:root` for typographic scale (e.g., `--fs-xl-20` etc.). Use these as reference when spacing text and headings.

5) Buttons & UI patterns

- Primary button
  - Background: `--accent-color` (#4c1027)
  - Text color: `--light-bg` / white (#ffffff)
  - Example class: `.sofax-default-btn` (uses `background-color: var(--accent-color)` and `color: var(--light-bg)`)

- Outline / Secondary button
  - Border & text: `--heading-color` (#0e0e0e)
  - Background: transparent
  - Example class: `.sofax-default-btn.outline-btn` (use `color: var(--heading-color)` to ensure contrast on light backgrounds)

Accessibility notes:
- Ensure all text buttons meet WCAG contrast: 4.5:1 for normal text. With the current tokens `--heading-color` (#0e0e0e) on `--light-bg` (#ffffff) contrast is high.
- For outline buttons on light backgrounds, use `--heading-color` for text (we added this to the CSS).

6) Export & design system suggestions

- Provide master fonts in Figma: Inter (weights 400/500/600/700), DMSans (400/500/600/700), Clash Grotesk (Semibold).
- Export logos as SVG + 2 raster sizes (1x and 2x PNG) for use in emails and older platforms.

7) Where to find assets in repo

- Fonts: `app/fonts/*`
- Logos: `public/images/logo/*`
- Colors + tokens: `public/css/app.css` (see `:root`)

8) Next steps (optional)
- Create a small 1-page style guide in `docs/BRAND_ASSETS.md` with visual swatches and example component states.
- Export optimized SVGs and add `logo` variants (inverse, monochrome) if missing.

---

If you want, I can:
- Add color swatches to this document (visual) and precise contrast ratios.
- Generate downloadable optimized SVG/PNG assets into a `docs/assets/` folder.
- Create a Figma import-ready JSON or tokens file (for Figma Tokens plugin).

Tell me which of the optional follow-ups you'd like me to do next.