# Writing Rules — The "Only Sayli Could Have Written It" Standard

Distilled from Sayli's own hiring-manager reference ("I read your resume 17 other times today"). The core test governs everything:

> **The test:** Remove Sayli's name. Read the bullet to 15 other designers at her level. If any of them could plausibly claim it as their own work — cut it or rewrite it. A great bullet points back to one person because it's anchored to a specific artifact, a decision she made, a constraint she faced, or a number she can defend.

Every bullet should do three things: **lead with the artifact** (name the actual thing — the edit-scope feature, the credit-analysis tool, the Vehicle Management module — not a category like "optimized experiences"); **name the constraint** that made it interesting (the trade-off, the technical limit, the rejected alternative); **anchor the outcome to a baseline** (from what, over what window, measured how). The numbers don't need to be huge — they need to be defensible.

---

## The five ways bullets go generic (catch and fix each)

### 1. The bullet that says nothing (JD voice)
**Tell:** strategic-sounding nouns, zero work. "Partnered with product leadership to define feature priorities and translate user insights into scalable solutions aligned with business goals." It mirrors the job posting's vocabulary instead of describing the doing.
**Fix:** name the artifact and the decision. Picture a specific screen or system by the end of the noun phrase.
- ✗ "Translated complex AI workflows into structured, decision-support interfaces aligned with business goals."
- ✓ "Mapped the credit-analyst review workflow into a structured decision-support interface for an AI credit-agreement tool, cutting review time by 50%."

### 2. The bullet that hedges its own ownership (bystander verbs)
**Tell:** "helped," "supported," "partnered with," "contributed to," "was involved in." The writer is *near* the work, not doing it. Audit the first word of every bullet — if more than ~1 in 4 is a hedge verb, there's a level problem.
**Fix:** pick the verb that exposes the real level (Owned, Led, Designed, Shipped, Built, Restructured, Defined). If the truest verb really is "helped," cut the bullet and use the space for one she owns.
- ✗ "Helped improve search and navigation across a school-management platform used by many schools."
- ✓ "Designed the search and filtering systems for a school-management SaaS serving 50+ schools, cutting admin support tickets by 22%."

### 3. The bullet with the suspicious number (range stat)
**Tell:** a single result written as a range ("15–30%", "1–2 minutes") or a number aggregated across many projects ("across client sites, lifts of 15–30%"). Real measurements come back as single values. A range is a guess in a costume, or aggregation hiding that no single project was strong enough to name.
**Fix:** one project, one number, one baseline. Trade scale for specificity. **Never invent or round a number** — only use values marked `[verified]` in `profile.md`. If a posting tempts a new figure, ask Sayli; don't fabricate.
- ✗ "Improved efficiency by 40–55% across multiple research and design projects."
- ✓ "Redesigned the IA, hierarchy, and data visualizations of an accessibility-testing tool, reducing developer reporting time by 55% in a study with 7 developers."

### 4. The bullet that's mostly adjectives (adjective stack)
**Tell:** more qualifiers than specifics — "scalable, accessible, inclusive, responsive experiences." Every design system aspires to all of those; the words do no work. "Beautiful UI", "user-friendly", "intuitive", "seamless" are aesthetic claims the reader is asked to grant.
**Fix:** replace each adjective with the specific noun or number it's gesturing at, or cut it. "Scalable design system" → "scaled from 12 to 58 components across iOS, Android, web." If "intuitive" only means "I think it felt clean," cut it.
- ✗ "Built scalable, accessible, intuitive design systems ensuring responsive experiences across platforms."
- ✓ "Built a data-driven design system with components for uncertain AI outputs, loading states, source-linked citations, and error conditions, adopted across the lab's credit-analysis tool."

### 5. The bullet that sounds technical (AI-vocabulary cosplay)
**Tell:** borrowed ML vocabulary standing in for real work — "established interface behaviors that improved user trust in non-deterministic systems." Every noun sounds load-bearing; none names a real thing. "Improved trust" is the unfalsifiable AI-era outcome.
**Fix:** name the specific AI design problem (regeneration flow, stop-generation, source citations under low confidence, confirmation diffs, human-in-the-loop verification, failure-state handling) and the failure mode it solved. Operationalize "trust" or drop it. Knowing which problems are the real ones is itself the proof she's done the work.
- ✗ "Designed AI interfaces that improved user trust in non-deterministic investigation systems."
- ✓ "Designed the human-in-the-loop workflow for a multi-agent investigation tool — AI query refinement, intent validation, entity configuration, and an edit-scope feature — so journalists could steer, correct, and verify agent outputs before generation."

---

## The consequence: tailor to the *specific* role
The five archetypes are the mechanics; the real cost of generic bullets is that they can't argue for a specific job. If the resume reads identically to every hiring manager, it has said nothing to any of them. So:
- A **fintech** posting → the credit-analysis tool, covenant variables, KYC/AML context, and regulatory workflow are the center of the page.
- A **research-heavy** posting → mixed-methods studies, sample sizes, synthesis frameworks lead; the IxDA, Microsoft, and older-adults work surface.
- An **AI / design-engineer** posting → Arbiter's human-in-the-loop patterns, prototyping in Claude/Cursor, the React PoC lead.
- An **edtech** posting → Discovery Education 0→1 + Korangle SaaS lead.
- A **mobile** posting → describe actual mobile-specific decisions, not a "responsive design" skills-line mention.
Use the JD's language to decide *what to surface*; write the bullets in the language of the doing.

## Bullet format reference
Strong shape: **[exposed verb] + [named artifact] + [the interesting constraint/decision] + [verified outcome with baseline].**
Not every bullet needs a metric — but every bullet needs to be unrepeatable. A specific artifact + a real decision can carry a bullet with no number. A number with no artifact cannot.

## Final pass before delivering bullets
1. Run the "only Sayli" test on each.
2. Read the first word of every bullet — kill hedge verbs.
3. Check every number against `profile.md` — is it `[verified]`? Single value, not a range?
4. Count adjectives — replace or cut.
5. Any AI phrase — does it name a real pattern + failure mode?
6. Does the set make the case for THIS posting, not "a design job"?

## Bullet ordering within a role: impact first, task second
Within every role, order bullets in two tiers:
1. **Impact bullets first** — one line each, stating what was done and what it achieved (verified outcome). These are compressed: no process detail, just the shipped thing + the number/result. If a role has multiple real achievements, stack ALL of them here, ranked most-impressive-first, before any task bullet.
2. **Task/process bullets after** — the how: research conducted, workflows designed, stakeholders partnered with, systems built. These support and explain the impact bullets above them but don't lead.
**Example (GT FSI Lab, two real achievements):**
1. "Shipped an AI-assisted credit-agreement decision-support tool that cut analyst review time by 50%." (impact)
2. "Redesigned, built, and shipped the lab's website in React with Hygraph, lifting Google PageSpeed scores from 36/79/92/64 to 95/100/100/100." (impact)
3. "Ran interviews and workflow analysis with underwriters, credit heads, and loan officers to define the tool's core flows." (task)
4. "Synthesized 15+ syndicated credit agreements via Jobs-to-be-Done and partnered with ML engineers on annotation schemas." (task)
Apply this ordering to every role, in every resume variant, by default.
