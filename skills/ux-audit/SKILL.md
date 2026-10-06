---
name: ux-audit
description: "Conduct a structured UX audit of a SaaS or AI-powered product. Use this skill whenever the user shares screenshots, a prototype, a user flow, a Figma file, or describes a product they want audited — even if they just say 'review this', 'what's wrong with this flow', 'give me feedback on these screens', or 'help me find UX issues'. The skill gathers user context first, then audits systematically across heuristics, mental models, visual hierarchy, and UX copy, synthesizes findings into structural problem clusters with hypotheses, produces design implications as directions (not solutions), and surfaces implementation constraints after the audit — never before. Distilled from a full UX audit of Arbiter (an AI-powered social media investigation tool) conducted May 2026."
version: "1.0.0"
category: ux-design
activation: auto
cost-tier: opus
inputs: [screenshots-or-prototype, product-description, user-context]
outputs: [findings-by-screen, problem-clusters, design-implications, constraint-annotation, stakeholder-summary]
---

# UX Audit Skill

This skill produces rigorous, actionable UX audits of SaaS and AI-powered products. It is opinionated — mental-model-first, context-aware, structured by screen but synthesized into structural problems, with UX copy treated as a first-class audit surface.

The skill produces modular outputs. At the start, ask which the user wants:

| Output | When to use |
|--------|-------------|
| **A — Findings by screen** | Annotating Figma, briefing engineers, full reference |
| **B — Problem clusters** | Stakeholder presentation, root cause analysis |
| **C — Design implications** | Starting redesign work, briefing designers |
| **D — Constraint annotation** | Prioritising what to fix given timeline/production constraints |
| **E — Stakeholder summary** | 2-page exec summary of the two or three biggest issues |

Multiple outputs can be requested. Default to A + B + C if not specified.

---

## Non-negotiables

- **Context before audit.** Never start auditing until you understand the target user, their specific job, and the product's core value. A generic user is useless. The audit must be calibrated to a real person's mental model.
- **Mental model is the primary lens.** For every screen, ask: what does the user think this does vs what it actually does? That gap is the audit.
- **UX copy is a first-class surface.** Labels, placeholder text, button names, empty states, error messages, loading states — all audited explicitly. Not as an afterthought.
- **Synthesize, don't just list.** Individual findings must be grouped into structural problems with hypotheses. A flat list of 38 findings is not an audit. Five structural problems with root causes is.
- **Constraints come last.** Implementation constraints (production environment, timeline, user base size, engineering effort) are surfaced AFTER the audit, as annotation on findings — never as a reason to omit a finding or soften a conclusion.
- **Design implications are directions, not solutions.** Say "the entity configuration section needs to be elevated in the visual hierarchy" not "move the entity section to the top." The how is design work. The what is the audit.
- **Distinguish conditional from actionable.** Some directions can be stated now regardless of other decisions. Others depend on prior design decisions (naming, IA, mental model). Flag conditional directions explicitly with their condition.
- **Source attribution.** Track whether a finding came from the auditor's analysis, the product team's own notes, or both. Findings corroborated by both carry more weight.

---

## Phase 0 — Context gathering

Before touching any screen, understand:

**The target user**
- Who is this person specifically? Not "professionals" — a specific role, expertise level, and goal.
- What job are they doing when they use this product? What does success look like for them?
- What mental model do they arrive with? What other tools do they use that shape their expectations?
- What vocabulary do they use for the things this product does?

**The product**
- What is the core value proposition in one sentence?
- What are the two or three primary tasks a user performs?
- Is this an AI-powered product? If yes: where does AI generation happen, what does it cost (time, money, credits), and what are the failure modes?
- What is the current production state — is this a live product with real users or a prototype?

**The brief**
- What specific flow or task is being audited?
- Are there known user problems the team has already identified?
- What new feature or task is being designed or about to be designed? (Audit findings should connect to this.)

**Constraints (collect but do not use yet)**
- Is this going directly to production or is it a design exploration?
- What is the timeline?
- Are there engineering constraints on what can be changed?
- How large and how established is the current user base?

Store constraints. Do not reference them until Phase 6.

Read `references/context-questions.md` for a full context interview guide if the user hasn't provided enough information.

---

## Phase 1 — Screen and flow inventory

Map every screen in the flow being audited:

- Screen name and URL/route
- Primary purpose (one sentence)
- Which user task(s) does it serve
- What state the user arrives in (what they just did)
- What state they leave in (what they've committed to)

For AI-powered products, specifically map:
- Where does AI generation begin and end?
- What loading / generation states exist?
- What failure states exist (or don't)?
- Where does cost (time, credits, money) accrue?
- Where is the user's configuration vs the AI's output?

---

## Phase 2 — Mental model mapping

For each primary user task, map the gap between what users expect and what actually happens:

**What the user thinks they're doing** → **What they're actually doing**

This is the most important phase. Do not skip it or abbreviate it. The mental model gaps are where the most severe UX problems live.

For AI-powered products specifically, map:
- Does the user understand what the AI is doing at each step?
- Does the user understand what their inputs control vs what the AI decides?
- Does the user understand the lifecycle of the object they're creating (draft → running → complete → failed)?
- Are there two interaction surfaces that look identical but work differently? (Two chat boxes, two submit buttons, two back navigations that go to different places.)

Read `references/mental-model-patterns.md` for common mental model failure patterns in AI SaaS products.

---

## Phase 3 — Screen-by-screen audit

For each screen, audit across five dimensions:

**1. Information architecture and hierarchy**
Does the visual structure reflect the user's task priority? Is the most important action the most visually prominent? Is related information grouped (proximity), unrelated information separated?

**2. Interaction and affordances**
Does every interactive element look interactive? Does every non-interactive element look static? Are consequences of actions communicated before they're committed? Are destructive or costly actions reversible or confirmed?

**3. System feedback and state communication**
Does the user always know what the system is doing? Are all system states communicated (loading, processing, complete, failed, queued, partial)? Is progress visible during long operations? Are errors actionable?

**4. UX copy**
Audit every text element on screen:
- Page/section titles — do they name the thing or describe the task?
- Button labels — do they name the action and its consequence, or just the action?
- Placeholder text — does it explain the input format and give an example?
- Empty states — do they explain why empty and what to do?
- Error messages — do they say what went wrong and what to do?
- Loading states — do they say what's happening and how long?
- Tooltip/helper copy — is it placed where the user needs it, not after they've already decided?

**5. Mental model alignment**
Does this screen reinforce the correct mental model of what the product does, or create confusion? Does the visual language here match the visual language of adjacent screens?

Read `references/heuristics-checklist.md` for the full per-dimension checklist adapted for AI SaaS, including mappings to Nielsen's 10 heuristics, NNG visual design principles, and Laws of UX.

Additionally, cross-reference `references/ai-ux-patterns.md` during Phase 3 to check which AI-specific patterns (from Aiverse and Shape of AI) are present, broken, or missing. Key pattern areas to check for every AI SaaS audit: suggested prompts, intent validation, processing steps, preview/draft mode, cost estimates, citations, confidence indicators, cancel/pause controls, and disclosure.

---

## Phase 4 — Synthesize into structural problem clusters

After auditing all screens, group findings into 4–7 structural problems. Each problem:

- Has a **name** that describes the root issue, not a symptom
- Has a **hypothesis** — one clear statement of what is fundamentally broken and why
- Lists **how users fail** as a result (observable, specific failure modes)
- Lists **which findings** it explains
- Notes the **dependency order** — does this problem need to be solved before other problems can be addressed?

The goal is not to categorise findings. It is to explain *why* the findings exist and what root cause they share. A structural problem explains multiple findings at once.

Common structural problem categories for AI-powered SaaS:
- Broken mental model of what the product's core objects are
- Information architecture built around system architecture, not user tasks
- State and transition opacity — users never know what they've committed to
- Configuration complexity exceeding its context — users making expert decisions without guidance
- System feedback absent at critical moments

Read `references/structural-problem-patterns.md` for worked examples of synthesized problem clusters.

---

## Phase 5 — Design implications

For each structural problem, produce design directions at the B level:

**B-level directions** — what needs to change, without specifying how:
- "The entity configuration section needs to be elevated in the visual hierarchy — it should read as the primary task on this page, not a section to scroll past"
- "Every state transition needs to communicate reversibility and cost before the user commits"

Not C-level (too specific):
- "Move the entity section to the top of the page"
- "Add a modal before every action"

Not A-level (too abstract):
- "Improve the visual hierarchy"
- "Better communicate state"

**For each direction, mark it as:**
- **Actionable now** — holds regardless of other design decisions
- **Conditional** — depends on a prior design decision. State the condition explicitly: "Once the product has agreed on a name for the setup phase, this screen's header, breadcrumb, and submit button copy all follow from that decision."

**For AI-powered products, always address:**
- What does the AI do on each screen? Does the copy reflect this accurately?
- What happens when the AI fails, times out, or returns thin results?
- Where does the user configure and where does the user execute — are these visually distinct?
- What does "editing" mean in this product — does it replace, append, or version?

---

## Phase 6 — Constraint annotation

Now surface the constraints collected in Phase 0. For each structural problem and its design directions, annotate:

**Implementation effort** (Low / Medium / High)
Based on how much the constraint changes what's feasible:
- Directions that work within the current IA → Low
- Directions that require new components but not structural change → Medium
- Directions that require fundamental IA or mental model changes → High

**Production risk** (if the product is live with real users)
- Will this change the existing user's mental model abruptly?
- Does this require user testing before shipping?
- Does this affect the engineering team's ability to debug regressions?

**Sequencing note**
Which directions should be addressed first given the constraints? The dependency chain from Phase 4 is the guide — structural problems that block others should be addressed first regardless of effort, because fixing leaf problems without fixing root problems produces a cleaner-looking product with the same underlying confusion.

**Important:** Constraints never remove a finding from the audit. They annotate it. A finding that is too expensive to fix right now is still a finding.

---

## Outputs

### Output A — Findings by screen

Organized by screen. Each finding:
- ID (e.g. H.1, Q.3, G.6)
- Title (12 words max)
- Description (2–3 sentences, specific and observable)
- Source (Auditor / Team / Both)
- Severity (Critical / Major / Minor) — assessed independently of source and constraints
- Heuristic violated (optional but recommended)

### Output B — Problem clusters

For each structural problem:
- Problem name
- Hypothesis (1–2 sentences)
- How users fail today (3–4 specific observable failure modes)
- Impact on any new feature being designed
- Referenced findings (IDs)

### Output C — Design implications

For each problem, 2–5 directions. Each direction:
- The direction statement (B-level)
- Actionable now OR Conditional (with explicit condition stated)
- Referenced findings

### Output D — Constraint annotation

The full findings or directions list with:
- Implementation effort annotation
- Production risk annotation
- Sequencing recommendation

### Output E — Stakeholder summary

Two pages maximum:
- The two or three most important structural problems
- The observable user failure each produces
- The single most important design direction for each
- A dependency argument for why these come first

---

## Anti-patterns to refuse

- **Auditing without context.** Never start with the screens. Always understand the user first.
- **Flat lists without synthesis.** 40 findings is not an output. 5 structural problems with 40 supporting findings is.
- **Solutions in the audit.** The audit produces directions. Solutions come from design work informed by the audit.
- **Softening findings for constraints.** "This is hard to fix so it's minor" is not severity. Severity is how much it damages the user's ability to complete their task.
- **Treating UX copy as polish.** Copy is structure. A wrong button label is not a copy problem — it's a mental model problem expressed in copy.
- **Auditing only what's visually broken.** The most severe problems are often invisible — they're in what the user expects and doesn't get, not in what they see.
- **Generic heuristics without adaptation.** "Violates Nielsen #1" is not a finding. "The user has no way to know that clicking the arrow icon submits a query rather than creating a case study" is a finding.

---

## Worked examples (from the Arbiter audit, May 2026)

These are the kinds of findings and synthesis the skill should produce. Aim for this depth.

**Finding that looks visual but is mental model:** The submit arrow (→) on the homepage had no label. The finding is not "the button is unlabelled." The finding is: "Clicking this arrow submits a query that begins analysis — but the journalist thinks they're creating a case study. The unlabelled arrow is not a visual problem; it is a mental model problem. Every journalist who clicks it exits Phase 1 with the wrong expectation of what they've just done."

**Finding that looks like copy but is IA:** The "Back to case studies" button appears on two screens and goes to two different places. The finding is not "inconsistent button label." The finding is: "The navigation label makes the same promise in two places and breaks it in one. This is an IA problem — the two screens have no shared understanding of where 'case studies' lives — expressed as a copy inconsistency."

**Finding that looks like a missing feature but is a structural problem:** "There are no failure states." The structural problem: "G.6 — No failure state exists anywhere in the creation flow. When generation fails silently, the journalist has no vocabulary for what happened, no signal that anything went wrong, and no recovery path. This is not a missing component. It is the product treating its AI pipeline as infallible in its UI contract with the user."

**Synthesis example:** 38 findings across 6 screens synthesized to 5 structural problems:
- P1: No shared language for what the product is building (explains 11 findings)
- P2: IA built around the system pipeline, not the user's tasks (explains 8 findings)
- P3: Every state transition is invisible or misleading (explains 9 findings)
- P4: Configuration complexity exceeds its context (explains 7 findings)
- P5: System feedback absent at every critical moment (explains 6 findings, including the most severe: G.6)

Dependency chain: P1 → P2 → P3 → P4 → P5. The new edit-entities feature (Task 4) was undesignable until all five were addressed, because each problem made a different aspect of the edit flow incoherent.

**Constraint annotation example:** Finding G.6 (no failure states) — Critical severity regardless of constraints. Constraint annotation: "This is going directly to production with real users. Shipping without failure states means every pipeline error is invisible. Sequencing: this must be the first thing built, before any new features, because every new operation (edit, re-run, version) will produce new failure modes." The constraint did not change the severity. It changed the sequencing.

---

## Reference files

Load these as needed — do not load all at once:

- `references/context-questions.md` — Full context interview guide for Phase 0
- `references/mental-model-patterns.md` — Common mental model failures in AI SaaS products
- `references/heuristics-checklist.md` — Per-dimension audit checklist with NNG heuristics, visual design principles (scale, hierarchy, balance, contrast, Gestalt), and Laws of UX mappings
- `references/structural-problem-patterns.md` — Worked examples of synthesized problem clusters with dependency chains
- `references/copy-audit-guide.md` — UX copy audit patterns and worked examples
- `references/ai-ux-patterns.md` — AI-specific pattern checklist from Aiverse and Shape of AI (Wayfinders, Governors, Trust Builders, Refinement patterns)
