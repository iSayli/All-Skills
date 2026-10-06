# Structural Problem Patterns

Worked examples of how to synthesize screen-level findings into structural problems with hypotheses and dependency chains. Use during Phase 4.

---

## What makes a good structural problem

A structural problem explains multiple findings at once. If removing the structural problem would make five findings disappear, it's a real structural problem. If a finding stands alone without a root cause, it's a polish item — valid, but not structural.

**Good structural problem:** "The product has no shared language for what it's building — users can't tell when one thing ends and another begins."

This explains:
- Why the submit button label confuses users (H.3)
- Why the page after submission has no clear identity (Q.1)
- Why the chatbot on the homepage and the chatbot on the case study page are indistinguishable (G.4)
- Why the completed case study uses empty-state language (F.2)
- Why users can't retrace the flow after a demo (Q.3)

**Not a structural problem:** "The CTA is buried at the bottom of the page." This is a single finding, not a root cause. It may be *caused* by a structural problem (IA built around system architecture, not user tasks) but it is not itself structural.

---

## The dependency chain

Structural problems often have a dependency order — some must be resolved before others can be properly addressed.

**Template:**

```
P1 → P2 → P3 → New feature

P1 must be resolved before P2 can be properly designed.
P2 must be resolved before P3 can be properly designed.
The new feature is only designable after P1–P3 are resolved.
```

**Worked example (Arbiter):**

```
Mental model (P1) → IA (P2) → State/transition clarity (P3) → Configuration complexity (P4) → System feedback (P5) → Edit search plan feature

P1: Until the product has agreed on names and concepts for its objects (query, search plan, case study), nothing else can be properly named or structured.

P2: Until the IA reflects the user journey rather than the system pipeline, the structural home for any new feature is undefined.

P3: Until state transitions are designed as a system, the edit feature's state machine (editing → re-running → updated) has no framework to sit inside.

P4: Until users understand what entities do, editing entities post-generation will be as confusing as configuring them during creation.

P5: Until feedback states are systematic, adding new operations (edit, re-run, version) just adds new silent failures.
```

---

## Common structural problems for AI-powered SaaS

### The vocabulary gap

**Hypothesis:** The product has no consistent language for its core objects. Users, the UI, and the team all use different words for the same things, or the same words for different things.

**Signals:**
- The same action is labelled differently on different screens
- The product's object (document, project, analysis, case study) has no stable name
- Users in research call the thing something different from what the UI calls it
- The team uses internal names that don't appear in the UI

**Depends on:** Nothing. This is always the first structural problem to resolve.

**Unlocks:** Everything else. You can't name screens, buttons, or transitions correctly until you know what you're naming.

---

### IA built around the system, not the user

**Hypothesis:** The page structure and navigation reflect how the system works internally, not how the user thinks about their task. Screen boundaries are drawn at processing steps, not at user decisions.

**Signals:**
- Page titles describe what the system is doing ("Analysing query", "Generating summary") rather than what the user is doing ("Building your search plan")
- Navigation labels go to different places than their names suggest
- The primary CTA is not the most visually prominent element
- "Back" goes somewhere unexpected
- Tool-type content and content-type content share the same navigation level

**Depends on:** Vocabulary gap resolved (P1)
**Unlocks:** State/transition design, configuration UX, new feature placement

---

### State and transition opacity

**Hypothesis:** Every transition in the flow is either unlabelled as a commitment or fails to communicate what the user is now committed to. Users can't tell whether they can go back, what going back costs, or whether they've started anything yet.

**Signals:**
- No step indicators or breadcrumbs across a multi-step flow
- "Back" behaviour is unpredictable
- No confirmation state after a major action (generation, deletion, update)
- No distinction between loading, failed, queued, and no-results states
- Silent failure — the system fails and the user sees no change

**Depends on:** IA resolved (P2)
**Unlocks:** Configuration UX (user can only configure confidently if they understand their state), new feature state machines

---

### Configuration complexity exceeding context

**Hypothesis:** The product asks users to make expert-level decisions without the context, guidance, or consequence preview they need. Users either accept all defaults without understanding them, or make informed-sounding choices that silently degrade output quality.

**Signals:**
- No subtitles or guidance copy per configuration section
- Consequences of configuration choices not communicated before commitment
- No preview of what the current configuration will produce
- System-generated and user-added items are visually identical
- Complex configuration happens before the user has seen any output

**Depends on:** State clarity resolved (P3) — users can only configure confidently if they understand what they're committing to
**Unlocks:** New feature configuration design

---

### System feedback absent at critical moments

**Hypothesis:** The product provides feedback when users don't need it and withholds it when they do. The system communicates process (what the machine is doing) but not state (what the thing you created currently is).

**Signals:**
- Verbose loading steps that use engineering language
- No time estimate for long operations
- No confirmation state after a major action
- No failure state — silent failure reads as success
- Progress collapsed by default, requiring user action to see
- Generation complete looks the same as generation failed

**Depends on:** State machine designed (P3), IA resolved (P2)
**Unlocks:** Trust, return usage, the ability to design new operations confidently

---

## How to write the hypothesis

A hypothesis is one clear statement of what is fundamentally broken and why. It should:
- Name the root cause, not the symptom
- Be falsifiable — if this were fixed, the downstream findings would disappear
- Use the user's perspective, not the product's perspective

**Not a hypothesis:** "There are no breadcrumbs on the query analysis page."
(This is a finding, not a root cause.)

**Hypothesis:** "Every transition in the creation flow is irreversible from the user's perspective but unlabelled as such. The product treats screen changes as navigation events; users experience them as commitments they didn't consciously make."
(This explains breadcrumbs, back button confusion, confirmation dialogs, and destructive action clarity in one statement.)
