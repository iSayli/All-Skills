# Heuristics Checklist — AI SaaS Products

A per-dimension checklist for Phase 3, grounded in Nielsen's 10 usability heuristics, NNG's 5 visual design principles, and Laws of UX — rewritten for AI-powered SaaS products where generation, loading states, cost, and configuration are first-class UX surfaces.

Use as a reference during screen-by-screen audit. Not every item applies to every screen — use judgment.

**Sources:**
- Nielsen's 10 Usability Heuristics (nngroup.com/articles/ten-usability-heuristics)
- 5 Principles of Visual Design in UX (nngroup.com/articles/principles-visual-design)
- Laws of UX (lawsofux.com)

---

## Heuristic → Dimension mapping

| Nielsen Heuristic | Maps to dimension |
|-------------------|------------------|
| 1. Visibility of system status | Dimension 3 — System feedback |
| 2. Match between system and real world | Dimension 7 — Mental model + copy |
| 3. User control and freedom | Dimension 2 — Interaction and affordances |
| 4. Consistency and standards | Dimension 7 — Mental model alignment |
| 5. Error prevention | Dimension 2 — Interaction and affordances |
| 6. Recognition rather than recall | Dimension 5 — Configuration and control |
| 7. Flexibility and efficiency | Dimension 5 — Configuration and control |
| 8. Aesthetic and minimalist design | Dimension 8 — Visual design |
| 9. Help recognize, diagnose, recover from errors | Dimension 3 — System feedback |
| 10. Help and documentation | Dimension 4 — Copy and guidance |

When writing a finding, attribute it to the relevant heuristic for clarity in stakeholder reports.

---

---

## Dimension 1 — Information architecture and hierarchy

- [ ] Is the most important action on this screen the most visually prominent element?
- [ ] Does the visual hierarchy match the user's task priority, or the product's internal priority?
- [ ] Are related elements grouped together (proximity)? Are unrelated elements separated?
- [ ] Is there a clear primary action, secondary action, and destructive action — and are they visually distinct?
- [ ] Does the page have an identity? Does the user know what this page is for within 3 seconds of landing on it?
- [ ] Is the content-to-chrome ratio appropriate? Is UI chrome (navigation, headers, footers) taking more space than the content the user came for?
- [ ] For AI-powered products: is the user's configuration surface visually distinct from the AI's output surface?

---

## Dimension 2 — Interaction and affordances

- [ ] Does every interactive element look interactive? (Buttons look clickable, inputs look typeable, links look followable)
- [ ] Does every non-interactive element look static? (Static text is not styled like a button, non-clickable images don't have hover states)
- [ ] Are consequences of actions communicated before the user commits?
- [ ] Are destructive or costly actions reversible? If not, is an explicit confirmation required?
- [ ] Are actions that cost credits, money, or significant time clearly flagged at the point of commitment — not after?
- [ ] Is there a way to cancel or undo every major action?
- [ ] For forms and inputs: is the expected format communicated before the user types? Is an example shown?
- [ ] For AI-powered products: is there a preview or confirmation step between configuration and execution?

---

## Dimension 3 — System feedback and state communication

- [ ] For every operation that takes more than 1 second: is there a visible loading indicator?
- [ ] For every operation that takes more than 10 seconds: is there a time estimate?
- [ ] Are all system states designed and distinct? Check specifically: idle, loading, processing, partial (some done, some not), complete, failed, queued, no results.
- [ ] Does success look different from failure? Could a user mistake a failed state for a successful one?
- [ ] Are error messages specific (what went wrong, what to do) rather than generic ("something went wrong")?
- [ ] For AI generation specifically:
  - [ ] Is there a confirmation state after the user commits to a generation?
  - [ ] Is there a running state with real progress feedback?
  - [ ] Is there a failure state for every failure mode (pipeline failure, timeout, no results, thin results)?
  - [ ] Does a failure preserve the user's work? Does it communicate this?
  - [ ] Is there a recovery path from every failure?
- [ ] When the system transitions from one state to another, is the transition communicated? (Not a sudden page change, but a signal that "this phase has ended, this new phase has begun")

---

## Dimension 4 — Navigation and wayfinding

- [ ] Does the user always know where they are in the product?
- [ ] Does the user always know how to get back to where they came from?
- [ ] Does "back" go where the user expects?
- [ ] Are there breadcrumbs, step indicators, or progress markers for multi-step flows?
- [ ] Are navigation labels accurate — do they describe what the user will find, not what the product wants to call it?
- [ ] For AI-powered products: is it clear when the user is in a configuration phase vs an exploration phase? Do these look and feel different?
- [ ] If there are multiple surfaces that look similar (two chat inputs, two search boxes, two submit buttons): is it clear that they work differently?

---

## Dimension 5 — Configuration and control

- [ ] Does the user understand what each configuration choice does before making it?
- [ ] Is guidance copy present at the point of decision — not in a help centre, not below the fold?
- [ ] Does the user know the consequence of leaving a field empty?
- [ ] Does the user know if there are limits? (Maximum number of items, character limits, credit costs)
- [ ] For AI-powered products:
  - [ ] Does the user know what they control vs what the AI decides?
  - [ ] Does the user know what the AI will do with their input?
  - [ ] Can the user review AI-generated content before committing to it?
  - [ ] Is system-generated content visually distinguished from user-provided content?

---

## Dimension 6 — UX copy (all text on screen)

Run through every text element using this checklist. See `references/copy-audit-guide.md` for detailed patterns.

- [ ] Page title — does it describe the task or the thing?
- [ ] Section headers — do they name the content or the action?
- [ ] Button labels — do they name the action AND its consequence?
- [ ] Placeholder text — does it explain format and give an example?
- [ ] Helper/guidance text — is it at the point of decision?
- [ ] Empty states — do they explain why empty and what to do?
- [ ] Loading states — do they use user language (not engineering language)?
- [ ] Error messages — do they say what went wrong and what to do?
- [ ] Confirmation messages — do they say what was committed and what comes next?
- [ ] Are the same concepts called the same thing everywhere? (No "case study" on one screen and "report" on another)
- [ ] Are the product's terms words the target user would use? If not, is there a reason?

---

## Dimension 7 — Mental model alignment

- [ ] Does this screen reinforce the correct mental model of what the product does?
- [ ] Does the visual language of this screen match the visual language of adjacent screens?
- [ ] If this screen introduces a new concept or object, is it named and explained?
- [ ] Does the copy on this screen assume knowledge the user hasn't been given yet?
- [ ] For returning users: does this screen feel familiar, or does it look different enough to be disorienting?
- [ ] For AI-powered products:
  - [ ] Does the user know whether the AI generated this content or they created it?
  - [ ] Does the user know whether what they see is final or a draft?
  - [ ] Does the user know whether the object they're looking at can be edited, and what editing costs?

---

## Severity guide

Assign severity independently of implementation constraints.

**Critical** — Blocks the user from completing a primary task, or causes the user to complete the wrong task (e.g. they think they've done something when they haven't). Includes: silent failure states, unrecoverable errors, misleading CTAs that commit the user to something they didn't intend.

**Major** — Significantly slows or frustrates the completion of a primary task, or reliably produces user confusion that requires external help to resolve. Includes: missing guidance on consequential decisions, loading states with no time estimate, navigation that goes somewhere unexpected.

**Minor** — Creates friction or minor confusion but doesn't prevent task completion. Includes: inconsistent terminology, copy that's technically correct but unhelpful, visual alignment issues, missing helper text on low-stakes fields.

**Polish** — Cosmetic issues with no functional impact. Label but deprioritise. Don't let polish items inflate the finding count.

---

## Dimension 8 — Visual design principles

Based on NNG's 5 principles of visual design. Apply to every screen.

**Scale**
- [ ] Are the most important elements on screen the largest? Is size used to signal importance?
- [ ] Is there a clear size hierarchy — no more than 3 distinct size levels in use?
- [ ] Does the scale draw the eye to the right element first?

**Visual hierarchy**
- [ ] Can a new user understand what this screen is for within 3 seconds?
- [ ] Is the primary action visually dominant over secondary actions?
- [ ] Are typographic sizes used to signal content level (heading vs subtitle vs body)?
- [ ] For AI products: is the user's input area visually distinct from the AI's output area?

**Balance**
- [ ] Does the layout feel stable, or does it feel lopsided?
- [ ] If asymmetric, is it intentionally so (suggesting energy/movement) or accidentally so?
- [ ] Is white space used intentionally to create balance, not just to fill gaps?

**Contrast**
- [ ] Is text contrast sufficient against its background? (WCAG AA: 4.5:1 for body text)
- [ ] Are interactive elements visually distinct from non-interactive ones through contrast?
- [ ] Are destructive actions (delete, discard) visually distinct from primary actions through color contrast?
- [ ] Is reduced contrast used intentionally to de-emphasise secondary content — not accidentally making primary content hard to read?

**Gestalt principles**
- [ ] Are related elements grouped together (proximity)? Are unrelated elements visually separated?
- [ ] Are similar elements styled consistently (similarity)? Do they behave consistently?
- [ ] Is common region (border, background) used to group items that belong together?
- [ ] Does the layout create unintended groupings through accidental proximity?

---

## Laws of UX — key laws for AI SaaS audit

Reference these when explaining why a finding matters. They give the finding a principled grounding.

**Hick's Law** — Decision time increases with number and complexity of choices.
Apply when: entity configuration presents too many options simultaneously; onboarding asks for too many decisions upfront.
Audit question: How many distinct decisions does this screen ask the user to make? Can any be deferred, defaulted, or eliminated?

**Jakob's Law** — Users expect your product to work like other products they know.
Apply when: a visual pattern (chat input, search box, submit button) is used differently from how the same pattern works elsewhere.
Audit question: Does this element behave the way the user would expect it to based on their experience with other tools?

**Miller's Law** — Average person can only keep 7 (±2) items in working memory.
Apply when: entity configuration, step flows, or option sets exceed cognitive capacity.
Audit question: How many items is the user asked to hold in mind simultaneously on this screen?

**Peak-End Rule** — Users judge an experience by its peak and its end, not the average.
Apply when: evaluating failure states and completion states — these are the moments that define the user's memory of the product.
Audit question: What is the emotional peak of this flow (usually the highest-stakes moment)? What is the ending (completion or failure)? Are both designed?

**Tesler's Law** — Every system has inherent complexity that cannot be reduced, only transferred.
Apply when: simplifying configuration by hiding options. The complexity doesn't disappear — it moves to the user figuring it out later, or to the system making a wrong decision.
Audit question: When complexity is hidden or removed from the UI, where does it go? Is that transfer fair to the user?

**Zeigarnik Effect** — People remember uncompleted tasks better than completed ones.
Apply when: draft states, in-progress generation, interrupted flows. Users will remember that something is unfinished.
Audit question: Does the product surface incomplete or in-progress work so users can return to it? Or does it silently drop incomplete state?

**Goal-Gradient Effect** — Motivation increases as the goal gets closer.
Apply when: multi-step flows like search plan creation. Progress indicators aren't just informational — they increase motivation to complete.
Audit question: Does the user know how far they are from completion? Is progress made visible?

**Law of Proximity** — Elements close together are perceived as related.
Apply when: form fields, entity columns, navigation groups. Accidental proximity creates unintended perceived relationships.
Audit question: Are there any elements that are spatially close but conceptually unrelated? Any elements that are conceptually related but spatially separated?

**Selective Attention** — Users focus on stimuli related to their current goal.
Apply when: warning messages, guidance copy, and system status messages that appear outside the user's attention zone.
Audit question: Is critical information placed where the user's attention actually is during this task — not where it's convenient to place it?
