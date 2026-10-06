# AI UX Patterns Reference

A structured audit checklist of AI-specific UX patterns drawn from Aiverse (aiverse.design/patterns) and Shape of AI (shapeof.ai). Use during Phase 3 to identify patterns that are present, missing, or incorrectly implemented in the product being audited.

Organized by the phase of the AI interaction they serve. For each pattern: what it is, what to look for in the audit, and the common failure mode.

---

## Phase 1 — Onboarding (How users discover what AI can do)

### Suggested prompts
**What it is:** Pre-filled example queries shown near the input that help users understand what to ask.
**Look for:** Are suggested prompts shown when the input is empty or on first visit? Are they specific enough to teach the user what the product can do — or so generic they're useless ("Try asking me anything")?
**Failure mode:** No suggested prompts → blank canvas problem. Users don't know what to type. Generic prompts → users don't understand the product's specific capabilities.
**Audit signal:** "What are you investigating today?" with no examples is a blank canvas. "Try: 'Discourse around the women's reservation bill'" teaches what the product does.

### Follow-up / Intent validation
**What it is:** When the user's initial prompt is vague, the system asks a clarifying question before proceeding — rather than making assumptions and running.
**Look for:** Does the product detect vague queries? Does it surface clarifying questions before committing to an expensive operation? Is the follow-up skippable?
**Failure mode:** System takes a vague query and builds a broad, off-target result. User has no opportunity to correct intent before credits are spent.
**Audit signal:** "China development project" is broad. Does the system ask what angle the journalist is investigating before building the search plan?

### Disclaimer / AI disclosure
**What it is:** Clear communication that content is AI-generated and may be incomplete or incorrect.
**Look for:** Is there a disclosure near AI-generated content (summaries, entity extraction, suggested phrases)? Is it visible at the point the user relies on it — not buried in settings?
**Failure mode:** User treats AI-generated suggestions as authoritative without knowing they may be wrong. Critical for journalism tools where accuracy matters.
**Audit signal:** "Suggestions are generated from online data and may be incomplete. Review and edit before running your search." — correct placement and tone.

---

## Phase 2 — Input (How users express intent and expand context)

### Prompt assistance
**What it is:** Helping users express their intent more effectively — through suggestions, enhancements, templates, or follow-up questions.
**Look for (5 sub-patterns):**
1. **One-click enhance** — Button that rewrites a vague query to be more specific. Does it offer options or auto-rewrite?
2. **Scoring prompts** — Real-time feedback on query quality (broad / moderate / specific) as the user types.
3. **Following up** — System asks clarifying questions after detecting vagueness (see above).
4. **Use-case templates** — Pre-built investigation templates the user can select and customise.
5. **Plan mode** — A preview or draft mode that shows what the system will do before committing.
**Failure mode:** No prompt assistance → users submit poor queries and get poor results without understanding why.

### Structured input
**What it is:** Offering lightweight structure — entity fields, date pickers, platform selectors — alongside or instead of a freeform prompt.
**Look for:** Does the product combine freeform query input with structured controls (platforms, dates, entity types)? Are the structured controls clearly labelled as scope-setting rather than preferences?
**Failure mode:** Structured input that looks like a filter (optional, secondary) when it's actually required for meaningful output.

### Expanding context (Knowledge bases / connectors)
**What it is:** Allowing the AI to reference external data sources to improve its responses.
**Look for:** Can users add sources (URLs, documents, profiles) to the search scope? Is it clear what the system does with these sources — does adding a source mean collecting from it, or filtering for posts about it?
**Failure mode:** Source/connector input with no explanation of what it does. User adds sources without understanding the mechanism.

---

## Phase 3 — Output (How the AI responds)

### Processing steps
**What it is:** Showing the AI's progress through named, distinct steps so users understand what's happening during generation.
**Look for:** Are generation steps shown in plain language? Are there at least 3 distinct states (not just a spinner)? Is progress updated in real-time?
**Failure mode:** Single spinner with no steps → user can't tell if the system is working or frozen. Engineering-language steps ("Emotion and Sentiment Analysis: 1,629 posts") → user can't map to their task.
**Audit signal:** "Collected 1,853 posts from Facebook about this topic" is user language. "Emotion and Sentiment Analysis: 1,629 posts" is engineering language.

### Streaming
**What it is:** Gradually revealing AI output as it's generated — showing progress instead of waiting silently.
**Look for:** Is output streamed or does it appear all at once after a delay? During generation loading, does the user see anything or just a spinner?
**Failure mode:** Silent wait with no progressive output → user assumes nothing is happening.

### Preview output
**What it is:** Showing a lightweight sample of what the full output will look like before committing to a costly full generation.
**Look for:** Can users see 5–10 sample results before committing credits to a full case study run? Is there a "preview" or "draft" mode?
**Failure mode:** No preview → users commit full credits to a query that returns off-target results with no way to validate intent first.
**Shape of AI name:** "Sample response" — confirm user intent for complicated prompts before executing.

### Variations
**What it is:** Presenting multiple alternative outputs for the same input.
**Look for:** When the system extracts entities or suggests topics, does it offer alternatives? Or does it present only one interpretation as authoritative?
**Failure mode:** Single-interpretation output → user accepts the system's interpretation as correct without knowing alternatives exist.

### Citations / Footprints
**What it is:** Showing where the AI's output came from — which sources, which posts, which data.
**Look for:** Can the user trace the AI's output back to specific posts or sources? Are answers in the Analyst chat grounded in specific posts with citations?
**Failure mode:** No citations → user can't verify claims. Critical for journalism. The user is trusting the AI's interpretation of data they can't see.
**Audit signal:** Posts with source attribution ("@geoeconomics · Twitter") is correct. A summary with no source links is a trust problem.

### Confidence indicators
**What it is:** Showing how sure the AI is about its response, to help users gauge reliability.
**Look for:** When the Analyst has limited data to answer a question, does it say so? Is there a mechanism for "I don't have enough data to answer this confidently"?
**Failure mode:** AI answers with full confidence when its dataset is thin. User trusts an unreliable answer.
**Audit signal:** "I don't have enough LinkedIn data to answer this confidently — this analysis is based on Twitter and Facebook only." is correct.

---

## Phase 4 — Refinement (How users edit and improve results)

### Inline actions
**What it is:** Allowing users to edit specific parts of a result directly — not just through a prompt or separate edit flow.
**Look for:** Can users add, remove, or modify entity chips and search phrases directly inline? Or do they have to navigate to a separate edit screen?
**Failure mode:** Edit requires navigating away from the result → loses context, increases friction, reduces likelihood of editing.

### Cost estimates (Governors)
**What it is:** Transparent estimates of what an action will cost (credits, time, compute) before the user commits.
**Look for:** Is a cost estimate shown before the user clicks Create/Run/Update? Is it a real range ("estimated 800–2,400 credits") or a formula the user has to compute themselves ("15 × number of posts")?
**Failure mode:** Formula-based estimate → user can't evaluate the cost. No estimate → user can't make an informed decision.

### Draft mode
**What it is:** A lower-cost, faster rough version before committing to full generation. Supports exploration without credit risk.
**Look for:** Is there a way to validate the search plan against a small sample of posts before running the full case study? Can the user "test" before committing?
**Failure mode:** No draft mode → users who are unsure commit full credits and get poor results, losing both money and confidence.

### Verification / Confirmation
**What it is:** Asking the user to confirm significant or irreversible actions before executing.
**Look for:** Is there a confirmation step before: running a full case study, updating and re-running, deleting a case study?
**Failure mode:** No confirmation → accidental submissions, wasted credits, broken trust.
**Audit signal:** Confirmation modal showing "Updating will save v2 and rerun against your new criteria. Generation typically takes 8–12 minutes." with diff of what changed is correct.

### Controls (Cancel / Pause)
**What it is:** Allowing users to stop or pause an in-progress AI operation.
**Look for:** Can the user cancel a running query or generation? Is there a way to stop mid-pipeline if they submitted the wrong query?
**Failure mode:** No cancel → user who submits a wrong query must wait for the full pipeline to complete before trying again. Credits are wasted.

---

## Phase 5 — Trust (Governors and trust builders)

### Action plan (Plan mode)
**What it is:** Showing what the AI will do before it does it, for oversight and course-correction.
**Look for:** Before running a case study, does the user see a summary of what will be collected, from where, using which phrases?
**Failure mode:** Execution without a visible plan → user has no oversight of what the system is about to do.
**Audit signal:** The Search Plan / Case Study Scope panel showing entities, phrases, platforms, date range before "Create Case Study" is a correct implementation.

### Disclosure
**What it is:** Clearly marking content and interactions guided or delivered by AI.
**Look for:** Is it clear which parts of the product are AI-generated vs. user-configured? Are system-suggested entities visually distinct from user-added ones?
**Failure mode:** User treats AI-generated entity extraction as authoritative and doesn't review it — especially problematic when the extraction is wrong.

### Data ownership and memory
**What it is:** Control over what the AI knows about the user and their data.
**Look for:** Can users see and edit what the AI has learned from their case studies? Is there a clear explanation of how the product uses their queries and case study data?
**Failure mode:** No visibility into what the product retains → trust erosion over time, especially for journalists who need to protect sources and unpublished investigations.

---

## How to use this reference in the audit

For each pattern area, ask three questions:

1. **Present and correct?** The pattern exists and is implemented in a way that matches user expectations and the product's context.

2. **Present but broken?** The pattern exists but is implemented incorrectly — e.g. suggested prompts that are too generic to teach anything, or a confirmation modal that doesn't show what will change.

3. **Missing?** The pattern is absent and its absence is causing a user failure mode. Note whether the missing pattern is a critical gap (users can't complete their task) or an improvement opportunity (users can complete their task but with more friction or uncertainty).

Only flag missing patterns as findings when their absence causes a real user failure. Not every product needs every pattern.
