---
name: design-system-audit
description: "Audit or bootstrap a frontend codebase's design system. Detects framework + stylesheet approach + existing token system (or absence of one), inventories drift, proposes semantic renames, deduplicates components, and produces a showcase output in the format that fits the project (live page / Storybook stories / static HTML / Markdown). Use this skill when the user asks to extract design tokens, build a design system, document components, find inline-styled drift, deduplicate components, make a UI cohesive, bootstrap a system from a codebase that has none, or prepare an engineer handover for a redesign. Framework-agnostic (React / Vue / Svelte / plain HTML; Tailwind / CSS modules / SCSS / CSS-in-JS / vanilla CSS / MUI / Chakra / Mantine)."
version: "2.0.0"
category: design-system
activation: auto
cost-tier: opus
inputs: [codebase-path, theme-files, existing-components-dir, mode]
outputs: [design-system-showcase, design-system-doc, drift-resolution-list, rename-plan]
---

# Design System Audit & Documentation

This skill takes a frontend codebase from "components exist somewhere" (or "no system at all") to "every token, primitive, and composed component is named, tokenised, and documented for engineer handover".

The skill operates in one of two modes, **auto-detected from the codebase**:

- **AUDIT mode** — a design system already exists (even if messy). Inventory, normalise drift, propose semantic renames, deduplicate components, document.
- **BOOTSTRAP mode** — no design system yet (raw values everywhere, no theme file, no component library). Extract implied tokens from the existing UI, propose a starter system, refactor a slice to use it, document.

The skill produces:

1. **Drift-resolution edits** — code changes that move stray inline styles / raw palette references / duplicated components into the token + component system.
2. **Rename plan (when applicable)** — proposed semantic renames for colorimetric tokens, with aliases kept for one deprecation cycle.
3. **Showcase output** — format chosen automatically based on the project (live page / Storybook stories / static HTML / Markdown-only).
4. **Reference docs** — at minimum a README pointer; ideally companion docs for handover.

---

## Non-negotiables

- **Token-first, always.** Semantic names (`--primary`, `--in-progress`, `--destructive-foreground`) over hex / raw palette references. Whether the project uses CSS custom properties, SCSS variables, CSS-in-JS theme objects, or a config file like `tailwind.config.js`, the principle is the same.
- **One source of truth per token.** A color appears in the theme file (whatever shape it takes) and is referenced everywhere else by name.
- **Component library tokens are inherited, not duplicated.** If the project uses MUI / Chakra / Mantine / Radix Themes, the library is the design system. Audit only the project-specific layer on top.
- **No build-breaking refactors mid-session.** Run the project's typecheck + build after every batch of changes.
- **Renames keep an alias for one cycle.** Never rename a token without keeping the old name as an alias initially — gives downstream code one cycle to migrate.
- **Honest mode banner.** Always say "running in AUDIT mode" or "running in BOOTSTRAP mode" up front so the user knows which phases apply.

---

## Phase 0 — Detect

Before anything else, read enough of the codebase to determine: framework, styling approach, component library (if any), and whether a design system already exists.

**Framework + bundler signals:**

| Signal | Implies |
|--------|---------|
| `package.json` `next` | Next.js (App Router or Pages Router — check `app/` vs `pages/`) |
| `package.json` `vite` + `react` | Vite + React |
| `vue` or `nuxt` in package.json, `.vue` files | Vue |
| `svelte` in package.json, `.svelte` files | Svelte |
| `@storybook/*` in package.json | Storybook present |
| No package.json, just `.html` + `.css` | Plain static site |

**Styling approach signals:**

| Signal | Implies |
|--------|---------|
| `tailwind.config.{js,ts}` or `@theme inline` in CSS | Tailwind (v3 or v4) |
| `*.scss` or `*.sass` files | SCSS |
| `*.module.{css,scss}` | CSS Modules |
| `styled-components` / `@emotion` in package.json | CSS-in-JS |
| `@vanilla-extract/css` in package.json | Vanilla Extract |
| Theme files with JS objects (`createTheme`, `extendTheme`) | Component-library themed |
| Only `.css` files with raw selectors | Vanilla CSS |

**Component library signals (read package.json):**

| Signal | Implication |
|--------|-------------|
| `@mui/material` | MUI — palette, typography, components are inherited |
| `@chakra-ui/react` | Chakra — `theme.ts` carries the tokens |
| `@mantine/core` | Mantine — `MantineProvider` theme |
| `@radix-ui/themes` | Radix Themes — radix tokens inherited |
| `shadcn` setup + base-ui or radix primitives | shadcn pattern — primitives in `components/ui/` |
| None of the above | Custom system (or none) |

**Existing system signals:**

| Signal | Implication |
|--------|-------------|
| Theme file with ≥ 10 named tokens | Existing system → AUDIT mode |
| Theme file with < 10 tokens, or only color tokens | Partial system → AUDIT mode (with bootstrap hints) |
| No theme file, raw colors scattered through stylesheets | No system → BOOTSTRAP mode |
| Component library present + project-local theme | AUDIT mode, focused on overrides |

**Output of this phase:** a one-paragraph project profile (framework · styling approach · library · mode) declared at the top of any output. Pin this in `scratchpad/design-system-audit.md` so the user can see what was detected.

---

## Phase 1 — Inventory tokens (AUDIT mode)

Skip to Phase 1B if in BOOTSTRAP mode.

Read every theme/token file:

1. **CSS custom properties** in `:root` / `.dark` / wherever theming happens.
2. **Preprocessor variables** in SCSS `_variables.scss`, LESS, etc.
3. **JS theme objects** — `theme.ts`, `createTheme()` call sites, `ThemeProvider` payloads.
4. **Framework theme configs** — `tailwind.config.*`, `chakra.theme.ts`, MUI `createTheme()`.
5. **Custom utility / mixin / recipe layer** — `@layer components`, SCSS mixins, `clsx`/`cva` recipes.

For every token, capture: name · value(s) (light + dark + any variants) · purpose · type (color / typography / spacing / radius / shadow / motion / z-index).

Flag immediately:
- **Tokens defined in one mode but not the other** (will break theme toggle)
- **Identical values for foreground + background pairs** (will be invisible — see Arbiter dark-mode status tokens as a worked example below)
- **Colorimetric names** (`--blue-500`, `--amber-warning`) — candidates for semantic rename
- **Tokens used at low alpha everywhere** (`bg-success/15`) — implies the full-saturation pair is rarely the intended usage

---

## Phase 1B — Extract implied tokens (BOOTSTRAP mode)

Skip to Phase 2 if in AUDIT mode.

The codebase has no theme file (or one with raw values). Build one by extracting what's there:

1. **Color frequency scan.** Grep for every hex / rgb / hsl / oklch literal across the codebase. Count occurrences. The top 10–20 colors are the implicit palette.
2. **Cluster by semantic role.** For each frequent color, look at the elements using it: is it body text, surfaces, brand, status, destructive, borders? Group accordingly.
3. **Propose a token shape.** Either CSS custom properties in a `tokens.css` / `theme.css` file, or a JS theme object, depending on the styling approach detected in Phase 0.
4. **Show the user the proposal before applying.** Bootstrap is structurally invasive — never ship it without explicit approval.

The token shape should match common semantic categories: `background`, `foreground`, `card`, `border`, `primary`, `secondary`, `muted`, `destructive`, plus per-status tokens (`success`, `warning`, `info`, `in-progress`, `draft`) when the UI has those states.

---

## Phase 2 — Inventory components

Map the component layers, framework-agnostic:

1. **Primitives** — buttons, inputs, badges, dialogs, popovers, tabs. May come from a library (MUI / Chakra / etc.) or be hand-built in `components/ui/` or equivalent.
2. **Custom primitives** — small components built for this project but conceptually primitive-level (status pills, chips, badges, dots, custom indicators).
3. **Composed domain components** — cards, panels, dialogs combining multiple primitives.
4. **Page-local compositions** — chunks of JSX / template markup inside route files that aren't extracted but probably should be. Flag these as duplication candidates.

For each, note: file path, props surface, variant count, where it's used.

If a component library is present, treat its primitives as *inherited* — list them under "from {library}", don't redocument.

---

## Phase 3 — Find drift

Grep the codebase for everything that violates the token-first / component-first principles. **These patterns generalise across styling approaches** — the regex changes per approach but the concept doesn't.

| Drift pattern | Where to look | Action |
|---------------|---------------|--------|
| Raw color literals in component code | `#[0-9a-fA-F]{3,8}`, `rgb\(`, `rgba\(`, `hsl\(`, `hsla\(`, `oklch\(`, `oklab\(` | Replace with token reference |
| Raw palette references from a library/preset | Tailwind: `(bg\|text\|border)-(blue\|red\|amber\|emerald\|slate)-[0-9]+`. MUI: `colors.red[500]`. Chakra: `red.500`. SCSS: known variable names from a preset | Replace with semantic token |
| Inline magic spacing / sizing | `style={{` (JSX), `style=` (Vue/Svelte template), `padding: \d+px` in CSS | Promote to design-token spacing or component prop |
| Duplicated component shapes | Visual diff of similar cards / pills / buttons across files | Extract into a shared component |
| `onClick` on `<div>` with `cursor:pointer` | `cursor-pointer.*onClick`, `cursor: pointer` + click handler nearby | Convert to `<button>` or accessible primitive |
| Arbitrary text sizes | `font-size: \d+px`, `text-\[\d+px\]` | Map to type-scale tokens |
| Hover/focus state recipes copy-pasted | Identical hover/focus class combos used in 3+ places | Promote to utility class or component |
| Tokens defined but unused | Token names in theme file with zero references | Either remove or flag for use |

For each drift item: capture `file:line`, drift type, proposed fix, effort estimate. Build the drift-resolution list.

**Show this list to the user before applying any fixes.** Drift fixes can be large; the user should approve in batches.

---

## Phase 4 — Propose normalisations + renames

For each drift item, decide:

1. **Token replacement** — value exists semantically; replace inline value with token reference.
2. **Promote to component** — repeated structure should become a component with props.
3. **Deduplicate components** — two similar components collapse into one with a variant prop.
4. **Add new semantic token** — value represents a real semantic; add to theme with semantic naming.
5. **Promote to utility class / recipe** — used 3+ times → utility.

**Renaming workflow** (when existing tokens have colorimetric names):

1. Identify every colorimetric token (`--blue-500`, `--amber-warning`, `$brand-blue`).
2. Map each to its semantic role (`--primary`, `--in-progress`, `--brand-primary`).
3. Build a rename plan: `{ oldName: newName, callsiteCount: N }`.
4. Show plan to user. Approve before applying.
5. Apply by **adding the new name first** (`--primary: var(--blue-500)`) so old name stays valid, then migrating callsites, then removing the alias after verification.
6. Never remove the old name in the same commit as adding the new one.

When proposing a NEW semantic token, name by intent (`--in-progress`, `--success`), never by shade (`--amber-warning`). The user shouldn't need to know that `success` is emerald.

---

## Phase 5 — Apply changes in batches

Group edits by domain so the user can review them before they pile up:

1. **Theme file changes** — new tokens, fixes to light/dark pairs, renames (with aliases).
2. **New utility classes / recipes / mixins** — depending on the styling approach.
3. **New or merged components.**
4. **Drift fixes** across the codebase, grouped by feature folder.

After each batch:
- Run the project's typecheck if it has one (TS / Flow / Vue tsc)
- Run the project's build
- Open the dev server and visually verify affected pages in both themes (if applicable)

Never push partial work that breaks the build.

---

## Phase 6 — Build the showcase output

The showcase format is **auto-detected from the framework**:

| Detected | Showcase output |
|----------|-----------------|
| Next.js (App Router) | `src/app/design-system/page.tsx` route (outside any nested layout) |
| Next.js (Pages Router) | `src/pages/design-system.tsx` |
| Vite + React | `src/design-system.tsx` mounted at a `/design-system` path |
| Vue + Vite/Nuxt | `views/DesignSystem.vue` or framework equivalent |
| Svelte / SvelteKit | `src/routes/design-system/+page.svelte` |
| Storybook present | Add `.stories.{ts,tsx,mdx}` files per primitive + composed component |
| Plain static site | `design-system.html` at project root |
| No framework or unknown | `DESIGN_SYSTEM.md` Markdown-only doc with code samples |

**Mandatory page structure** (regardless of framework):

```
Design System Showcase
├─ Sticky header (back-to-top + theme toggle when applicable)
├─ Hero (title + intro + anchor-link TOC)
├─ §1  Design Tokens
│   – Colors (with light/dark values shown when applicable)
│   – Typography (every text-size + scale token)
│   – Radii
│   – Spacing
│   – Motion (transitions, keyframes)
├─ §2  Primitives (or inherited library section)
│   – Every primitive, every variant
├─ §3  Custom UI primitives
│   – Built-in-this-project primitives
├─ §4  Composed domain components
│   – Cards, panels, dialogs — one or two representative configurations each
├─ §5  Utility classes & patterns
│   – Recipes, mixins, custom scales
└─ §6  Implementation notes
    – File structure, conventions, library inheritance, accessibility notes
```

**Specimen contract** (framework-adapted but conceptually constant):

Each component subsection follows the same shape:

1. **Component name + one-line description**
2. **Live preview** — multiple variants rendered side-by-side or in a small grid
3. **Import line** — exact code to import this component
4. **Source path** — file path so engineers can `Cmd-click` to source
5. **Notes (optional)** — a11y, gotchas, library-specific callouts

For frameworks that support live previews, render real components. For Markdown-only outputs, include screenshots + code snippets.

**Component-library inherited primitives** — if MUI / Chakra / Mantine is present, render the inherited primitives too but mark them clearly: "from {library}" + link to library docs. Document only the project's overrides in detail.

**Helpers to define at the top of the showcase file** (inline, no external dependencies):

- Section wrapper (anchor heading + subtitle)
- Specimen wrapper (preview + metadata)
- PreviewArea (styled border + padding)
- Swatch (color chip + label)
- TypeSample (type-scale row)
- RadiusSample (radius square)

Keep helpers in the file (~30 lines total).

---

## Phase 7 — Document for engineer handover

Build (or update) at least these companion docs at the repo root:

1. **README.md** — repo navigation guide with a "where to start" table by reader role.
2. **`design-rationale.md`** (optional but recommended) — why behind the design choices, organised as principles → per-decision rationale → per-element rationale → annotation template.
3. **`information-architecture.md`** (optional but recommended) — sitemap + per-route IA + state boundaries.

For the showcase itself, every specimen carries import line + source path so engineers `Cmd-click` to source.

---

## Phase 8 — Verify

Before declaring done:

```bash
# Project-typecheck (whichever applies)
npx tsc --noEmit   # or
vue-tsc --noEmit   # or
flow check         # or
svelte-check

# Project-build
npm run build   # or yarn build / pnpm build

# Project-dev (visual verification)
npm run dev
# Visit the showcase route
# Verify TOC anchors jump
# Hover every button — focus rings appear?
# Toggle theme — every swatch + component flips correctly?
# Tab through interactive elements — keyboard nav works?
```

If the project ships accessibility tooling (axe / pa11y / Storybook a11y addon), run it now and capture any contrast or keyboard regressions before handover.

---

## Anti-patterns to refuse

- **Per-component routes** — one scrollable showcase page beats nav-per-component every time.
- **Copy-to-clipboard buttons** — engineers select-and-copy from monospace blocks. Don't ship interactive doc widgets.
- **Side-by-side light/dark renderings** — doubles page weight. Engineers use the theme toggle.
- **Interactive prop playgrounds** — Storybook territory if the project has it. The showcase page documents "what exists"; live behavior is shown by the live component.
- **Renaming a token without keeping an alias** — leaves dangling references and breaks downstream code.
- **Adding new colors without semantic intent** — every new token must answer "what does this represent?" not "what shade is this?".
- **Bootstrap-mode invasive changes without explicit approval** — bootstrapping reshapes the codebase; the user must approve the shape first.
- **Documenting library tokens as if they're project tokens** — if the project uses MUI, the showcase says "MUI palette inherited" not redoc every shade.

---

## Worked example — Arbiter redesign (May 2026)

Concrete patterns the skill should recognise, distilled from a real handover. Project profile was: Next.js 16 App Router · Tailwind v4 with `@theme inline` · shadcn primitives reshaped to base-ui · existing system → AUDIT mode.

- **Status token trap.** `--in-progress` and `--in-progress-foreground` were identical OKLCH values in dark mode. The pills only used the foreground at `/15` alpha so contrast worked *as-used*, but the token contract `bg-{name} text-{name}-foreground` produced invisible text. The skill should flag identical foreground/background OKLCH pairs even when current usage masks the bug.
- **Hover state convention.** Four custom hover recipes all used `bg-muted` + `border-foreground/60` + `transition-colors`. Promoted to a "Hover patterns" utility row + named the convention in the showcase under §5, instead of one-off recipes per card.
- **Component dedupe.** Two near-identical case-study summary cards (one in home grid, one in /new examples). Merged into a single `CaseStudyCard` with optional `onClick` and `data` props. The original cards differed in 4 small ways — turning the differences into props was cleaner than keeping two components.
- **Primary hover failure.** Light-mode hover darkens (`--primary-hover: oklch(0.42 ...)`); dark-mode hover *brightened* (`oklch(0.70 ...)`) without adjusting the foreground. Foreground stayed nearly white → contrast 2.51:1 (fails AA). The skill should compute hover contrast as part of the audit, not just resting state.
- **Custom utility scale.** Added `text-2xs` (10px) and `text-3xs` (8px) as custom utilities for metadata captions. Documented in §1 typography + flagged in §5 with the comment "use these for small text, not arbitrary `text-[10px]`".
- **Showcase live trigger buttons.** Toast specimens fired real `toast.success()` / `toast.error()` calls — engineers saw the actual animation. Static screenshots would have been worse.

These are the kinds of findings the skill should produce. Aim for that depth regardless of framework.

---

## Inputs (optional)

When invoked, the skill accepts:

- `codebase-path` — root of the project (default: cwd)
- `theme-files` — comma-separated theme file paths (default: auto-detected in Phase 0)
- `existing-components-dir` — where primitives live (default: auto-detected)
- `mode` — force `audit` or `bootstrap` (default: auto-detected)

---

## Outputs

Per project, the skill produces:

- Showcase output in the format auto-detected for the framework
- Edits to the theme file (new tokens, fixes, semantic renames with aliases)
- Edits to component files replacing drift
- Optional `design-rationale.md` + `information-architecture.md` at repo root
- README updates pointing to the above
- A `scratchpad/design-system-audit.md` capturing: detected profile · drift-resolution list · rename plan · open items

Always run the Phase 8 verification before reporting done.

---

## When to NOT use this skill

- The user wants to design a *new* product from nothing (no codebase yet). → That's a brand / design system creation task, not this skill.
- The user wants a deep accessibility audit only. → Use `accessibility-checker` instead.
- The user wants per-component documentation across separate URLs in a docs site. → Use Storybook or a docs framework directly; this skill produces single-page showcases.
- The user wants to change visual design (not document existing). → Use `web-design-ux` instead.

If the user has both a chaotic codebase and wants a redesign, run `web-design-ux` for the design decisions first, then this skill to document the result.
