---
name: redesign-rationale
description: "Map a redesigned UI against a previous UX audit (findings + old-flow screenshots) and produce a screen-by-screen comparison, principle-grounded rationale, and ready-to-paste Figma annotations for every redesign decision. Use this skill when the user has an existing UX audit doc, an old design (PDF/screenshots/URLs), and a new design (codebase or Figma), and wants to defend the redesign findings-by-finding, prepare a stakeholder handover, or generate annotations for a Figma walkthrough. Distilled from the Arbiter redesign handover (May 2026)."
version: "1.0.0"
category: handover
activation: auto
cost-tier: opus
inputs: [audit-doc, old-flow-asset, new-design-path]
outputs: [redesign-comparison, design-rationale, figma-annotations]
---

# Redesign Rationale & Audit Mapping

This skill governs how you take three inputs — (1) a UX audit naming specific problems, (2) the old design those problems were found in, (3) the new design that's supposed to fix them — and produce the artifacts that justify the redesign to engineers, designers, and stakeholders.

The skill produces three artifacts at the repo root:

1. **`redesign-comparison.md`** — old flow → new flow, screen-by-screen, with every audit finding mapped to its resolution status (Resolved / Partially / Open).
2. **`design-rationale.md`** — design principles + per-decision rationale + per-element rationale + trade-offs + Figma annotation template + ready-to-paste annotations.
3. **(Optional) `user-journey-document.md` updates** — if the project has a journey doc that's now out of date, refresh it as the source-of-truth for behaviour.

---

## Non-negotiables

- **Every claim cites a finding ID or a principle.** Rationale that doesn't tie back to either an audit finding or a named principle is decoration; cut it.
- **Audit findings keep their original IDs.** If the audit uses `Q.10`, `G.6`, etc., reuse those IDs everywhere — stakeholders cross-reference them.
- **Resolution status is honest.** Resolved / Partially Resolved / Open. Don't claim Resolved when only the structural premise is gone but the actual surface is still missing.
- **Figma annotations are short.** ≤ 3 sentences. The doc is the long form; the annotation is the headline.
- **One principle per change, max two.** If a redesign decision expresses 5 principles you've named your principles wrong.

---

## Phase 1 — Read the audit

Parse the audit doc cover to cover:

1. **Problem areas** — the structural categories the audit identifies (often P1–P5 or similar). For each, capture: title, hypothesis, how-users-fail-today, impact, referenced findings.
2. **Findings inventory** — every finding gets a row: ID · screen · description · severity · source (audit / team / both).
3. **Severity rubric** — the audit's own definition of Minor / Major / Critical. Use it.
4. **Dependency chain (if present)** — many audits argue the problem areas are sequential (P1 must resolve before P2 can be designed properly). Note this — it shapes the order of the redesign moves you'll defend.
5. **Design implications (if present)** — some audits ship directions ("the entity section needs to be elevated in the visual hierarchy"). Capture each one as a separate row; you'll cross-check the redesign against these in Phase 4B.
6. **Constraint annotation (if present)** — if the audit flagged certain findings as deferred due to production / timeline / engineering constraints, note this. It distinguishes "open as gap" from "open as deferred" in Phase 9's matrix.

**Companion skill.** If the audit was produced by the `ux-audit` skill, this phase consumes its Output A (findings by screen) and Output B (problem clusters) as the canonical inputs. Output C (design implications) feeds Phase 4B. Output D (constraint annotation) feeds Phase 9.

**Output of this phase:** an internal map (in your scratchpad, not yet committed) of `{findingId: {screen, severity, description, problemArea, designImplication?, constraint?}}`.

---

## Phase 2 — Read the old design

Sources are usually: a PDF with screenshots, a Figma file, screenshots in a Drive folder, or a live URL.

For each previous screen:

1. **Name the screen** — match the labels the audit uses (e.g. "Query analysis page", "Homepage", "Final case study").
2. **List what's on it** — major regions, primary action, secondary actions, anything the audit explicitly criticised.
3. **Map findings to elements** — for every finding tagged to this screen, note which element on the screen the finding is criticising.

You're building a map of `{screenName: {layout, primaryAction, criticisedElements: [{element, findings[]}]}}`.

---

## Phase 3 — Read the new design

If the new design is a codebase:

1. **Routes / pages** — every URL.
2. **Modes within pages** — single-URL surfaces that swap roles via state flags (the Arbiter `/cases/2` was 6+ modes on one URL).
3. **Persistent UI** — sidebar, top bar, mobile patterns.
4. **Overlays** — dialogs, sheets, popovers — what triggers them, what they contain.

If the new design is Figma:

1. **Frame inventory** — name + screen → URL mapping if available.
2. **Components used** — primitives and composed components, mapping back to a target codebase if one exists.

**Output of this phase:** a map of `{newScreenOrMode: {role, contents, replaces: oldScreenName}}`.

---

## Phase 4 — Map findings to resolutions

For every finding from Phase 1, decide its status in the new design:

| Status | Definition |
|--------|-----------|
| **Resolved** | The new design eliminates the underlying behaviour the audit criticised. State the new behaviour explicitly. |
| **Partially resolved** | The structural premise is addressed but a specific manifestation still exists. State what's still there. |
| **Open** | The new design doesn't address it. Sub-classify as **Open — gap** (genuine miss / future work / not in scope) or **Open — deferred** (the audit's Phase 6 constraint annotation flagged this as intentionally deferred — e.g. production-risk too high to ship now). Always state which sub-class and the reason. |

Resist the urge to call everything Resolved. A redesign that resolves 30 of 38 findings honestly is more defensible than one that claims 38 of 38 with hand-waving.

**Output of this phase:** the findings-resolution matrix — one row per finding, columns: ID · description · resolution status · cited new behaviour. This is the table that goes in `redesign-comparison.md`.

---

## Phase 4B — Cross-check against design implications

Skip if the audit didn't include design implications.

A finding can be technically Resolved (the broken behaviour is gone) while the audit's design implication (the direction it suggested) is still unmet. Example: a finding "Q.10 — entity section visually overwhelming" with implication "the entity configuration needs to feel like one decision, not five" might be marked Resolved because the section was split into per-category cards — yet still fail the implication because the new design has six cards instead of five.

For every design implication from Phase 1:

| Alignment status | Definition |
|------------------|-----------|
| **Met** | The redesign delivers on the implication. Cite the specific design move. |
| **Partial** | The implication is partly addressed. State what's still missing. |
| **Unmet** | The implication isn't reflected in the new design. State why (conscious trade-off / overlooked / superseded by a different decision). |

Capture this as a separate table in `redesign-comparison.md` — directly after the findings-resolution matrix. Stakeholders will look at both: findings tell them "is the broken thing fixed", implications tell them "is the better thing built".

If the audit marked some implications as **Conditional** ("depends on prior design decision X"), check whether the prior decision was made. If yes, the implication is now actionable and you can grade it. If no, mark it **Pending** rather than Met/Partial/Unmet.

---

## Phase 5 — Extract design principles

Look at the resolutions in Phase 4 and identify the patterns. The principles are the underlying *claims* the redesign makes — usually 5–10 of them. Each principle:

- Names a behaviour change at a higher level than any one screen.
- Maps to one or more audit problem areas.
- Is a short, quotable conviction (one sentence).

Worked example: in the Arbiter redesign, ten principles emerged:

1. Make state visible (resolves P3 — state and transition opacity)
2. Compress the funnel into a workspace (P1 + P2)
3. Configuration teaches itself in-place (P4)
4. Feedback by default, not on-demand (P5)
5. Status pills + versions are vocabulary (P1 + P3)
6. The sidebar is the persistent IA; the work happens in the right panel (P2)
7. One URL per case study, forever (P1 + P3)
8. Mobile collapses splits to single panels — don't shrink, swap (new constraint)
9. Chat is the primary feedback channel (P5)
10. Re-edit creates a version; never destroys data (P1 + P3 + F.4)

Aim for that level of crispness.

---

## Phase 6 — Write per-decision rationale (the "big moves")

For every major redesign decision (usually 10–20 of them), write a block:

```markdown
### {Decision title — what changed at the page level}

**Decision.** {One sentence — the actual change.}

**Why.** {1–3 sentences. Tie back to the audit finding(s) and the principle being expressed.}

**Resolves.** {Comma-separated finding IDs.}
```

A "big move" is page-level (home went from prompt to dashboard) or system-level (versions are first-class). Not element-level (the chat input is pill-shaped). Save element-level for Phase 7.

---

## Phase 7 — Write per-element rationale

Walk every screen in the new design. For each meaningful element, write one bullet:

```markdown
- **{Element name with context}.** {One-line rationale + optional principle tag + optional finding ID.}
```

Hit:

- Primary actions (where they live, what they're labelled)
- State indicators (status pills, edited tags, pinging dots)
- Layout decisions (responsive behaviour, mobile patterns)
- Hover / focus / active states
- Anything that resolves a specific finding

Skip purely decorative styling. If removing the rationale wouldn't confuse a future designer, don't write it.

---

## Phase 8 — Produce Figma annotation template + annotations

Define the annotation template at the doc level so other annotators follow the same shape:

```markdown
> **{One-sentence behaviour change.}** Resolves {finding IDs}. Expresses **{Principle name}** — {one-sentence reason}.
```

Then produce annotations for every element on every screen. For each element:

```markdown
**{Element label so the user can locate it in Figma}**
> **{Behaviour change sentence}.** Resolves {IDs}. Expresses **{Principle name}** — {reason}.
```

A pasteable annotation has three parts:

1. **Bold sentence** (the headline) — what changed for the user. Can be lifted alone if Figma annotations are dense.
2. **Resolves clause** — optional but useful when stakeholders want audit linkage.
3. **Expresses clause** — the principle citation, which survives even if the audit gets re-numbered.

Tone: anchor to the user's behaviour, not the system. Cite finding IDs by their exact format. Keep each ≤ 3 sentences.

---

## Phase 9 — Acknowledge trade-offs and open gaps

Two final sections in `design-rationale.md`:

- **Trade-offs accepted** — things the redesign knowingly gave up. (e.g. "We lost the standalone analyse page" — explain why the lost thing was worth losing.)
- **What we deliberately didn't change** — things you considered changing and decided not to. (e.g. "Dark theme as default" — explains the absence of a change.)

In `redesign-comparison.md`, an **Open** section lists everything the audit named that's still unresolved + new gaps introduced by the redesign. When the audit shipped constraint annotation (Output D from `ux-audit`), split this section into two: **Open — deferred** (with the citing constraint) and **Open — gap** (genuine misses). Stakeholders read the two differently — deferred items are sequencing decisions, gaps are unfinished work.

These two sections are how the doc avoids reading like marketing.

---

## Phase 10 — Verify

Before declaring done:

1. **Every audit finding appears in the resolution matrix.** Grep the audit for finding IDs; verify each one appears in `redesign-comparison.md`. None missed.
2. **Every "Resolved" claim cites the specific new behaviour.** No hand-waving.
3. **Every principle is invoked at least once in the per-decision rationale.** Unused principles aren't principles, they're posters.
4. **Every annotation in Phase 8 is ≤ 3 sentences.** If they're longer they belong in the long-form doc.
5. **The README points to the new docs** so the handover is navigable.

---

## Anti-patterns to refuse

- **Marketing copy.** "We delight users with a clean, modern interface." Cut this. Replace with finding-cited rationale.
- **Listing every change without grouping.** Principles → big moves → elements is the hierarchy. A flat list of 200 changes is unreadable.
- **Hiding open issues.** If something's still broken, name it in the Open list. Stakeholders will find it eventually; better that you flag it.
- **Re-numbering audit findings.** Stakeholders have the original audit. Use its IDs verbatim.
- **Writing principles after-the-fact to fit decisions.** Principles should be patterns *across* decisions; if you can't find a principle that applies to multiple decisions, it's a one-off decision, not a principle.
- **Annotations longer than the element they describe.** If the annotation is longer than "what's on screen", the design needs simplification before the annotation does.

---

## Worked-example heuristics (from the Arbiter handover)

- The audit's P1 (broken mental model) wasn't resolved by better copy — it was resolved by *structure*: a case study exists in a registry from the moment it's created, with a sidebar entry, a status pill, and a single URL. The principle that emerged: "Make state visible".
- The audit's P5 (no feedback during generation) had a useful collapsed accordion called "Show Summary". The fix wasn't "open it by default" — it was "move the trace into the chat column which is already on screen". The principle: "Chat is the primary feedback channel".
- A finding (`Q.13` — "no guidance on which entity types to use or avoid") was marked Resolved only after the actual scope panel got inline hints under each section header. A vaguer fix (a tooltip somewhere) would have been Partial.
- The audit's `Q.14` (Facebook page/group format ambiguous) stayed **Open** in the matrix because the redesign didn't actually fix it. The honest matrix is more defensible than a hand-waved one.

These are the kinds of judgments the skill should produce.

---

## Inputs (optional)

When invoked, the skill can take:

- `audit-doc` — path or URL to the UX audit (default: search for `*-audit.md` or `*audit*.pdf` at repo root)
- `old-flow-asset` — path or URL to the previous design's screenshots/PDF/Figma (default: search for `*.pdf` near the audit)
- `new-design-path` — codebase root or Figma URL of the new design (default: cwd if codebase)
- `journey-doc-path` — existing journey doc to refresh (optional)

---

## Outputs

- `redesign-comparison.md` at repo root
- `design-rationale.md` at repo root
- `user-journey-document.md` updates (if one existed)
- README updates pointing to the three above

Always run Phase 10 verification before reporting done.

---

## When to NOT use this skill

- The user only has a redesign, no audit. → Use `web-design-ux` for design critique instead.
- The user only has an audit, no redesign yet. → That's an elicitation / planning task, not this skill.
- The user wants competitive research. → Different skill.

If the user has a redesign and *no* audit but wants rationale anyway, you can run the skill in a "principle-extraction-only" mode: skip Phases 1–4, start from Phase 5, derive principles from the patterns of change in the codebase alone. Note in the output that no audit findings were cited because none were provided.
