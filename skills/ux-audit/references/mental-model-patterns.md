# Mental Model Patterns — AI SaaS Products

Common mental model failures specific to AI-powered SaaS tools. Use during Phase 2 to identify gaps between what users expect and what the system does.

---

## Pattern 1 — The pipeline vs the object

**What users expect:** They created a thing. It exists. They can return to it, edit it, share it.

**What AI products often do:** They run a pipeline. The output is a snapshot. Returning to it and "editing" it triggers a new pipeline run, not an edit of the original object.

**Failure mode:** Users treat the output as a static document. They don't understand why "editing" takes time, costs money, or produces a different result. They also don't understand versioning — they think editing replaces; the system actually versions.

**Audit signal:** Does the product have a clear name for the object being created? Does it have explicit lifecycle states (draft, running, complete, failed)? Is the difference between configuration and output visually distinct?

---

## Pattern 2 — Two identical surfaces, different scopes

**What users expect:** If it looks the same, it works the same.

**What AI products often do:** Use the same visual pattern (a chat input, a search box, a submit button) in different contexts with completely different behaviours — one is global, one is scoped; one creates, one queries; one costs credits, one doesn't.

**Failure mode:** Users apply the mental model from the first surface to the second. When the second surface behaves differently, they conclude something is broken rather than different.

**Audit signal:** Are there two text inputs, two search boxes, two back buttons, or two submit buttons in the product that look identical but work differently? This is always a problem.

---

## Pattern 3 — Configuration vs execution confusion

**What users expect:** When I click "submit" or "create", I'm done. The thing is made.

**What AI products often do:** Separate configuration (defining what to create) from execution (actually creating it) without clearly communicating which phase the user is in.

**Failure mode:** Users think they've created something when they've only configured it. Or they configure carefully and don't realise they still need to commit. Or they commit without realising their configuration choices matter.

**Audit signal:** Is there a clear visual and copy distinction between the configuration phase and the execution phase? Does the user know at every moment which phase they're in and what committing will do?

---

## Pattern 4 — Silent state changes

**What users expect:** If nothing visible changed, nothing happened.

**What AI products often do:** Process in the background, succeed or fail silently, update state without surfacing it to the user.

**Failure mode:** Users think the system is frozen when it's working. They think it succeeded when it failed. They re-submit, triggering duplicate runs. They navigate away, losing progress.

**Audit signal:** Are there any operations that can complete or fail without a visible status change? Is silence ever used to communicate success? Are loading states present for every operation that takes more than 1 second?

---

## Pattern 5 — Reversibility assumptions

**What users expect:** I can undo this. Going back means going back.

**What AI products often do:** Make actions partially or fully irreversible without communicating this. "Back" navigates to a different place than expected. Editing triggers a new run that can't be stopped. Deleting is permanent.

**Failure mode:** Users avoid using features because they're afraid of consequences they don't understand. Or they trigger irreversible actions accidentally and have no recovery path.

**Audit signal:** For every action in the flow, is its reversibility communicated before the user commits? Is "back" navigation consistent with where the user expects to go? Are destructive or costly actions confirmed?

---

## Pattern 6 — Cost opacity

**What users expect:** I know what this will cost before I do it.

**What AI products often do:** Show cost after the fact (you spent 78 credits), show it as a formula (15 × number of posts), or not show it at all.

**Failure mode:** Users over-spend credits on low-quality outputs. They don't understand why some actions are expensive and others aren't. They make configuration decisions without knowing the cost implications.

**Audit signal:** Is the cost of every credit-consuming action communicated as an estimated range before the user commits? Is the cost formula translated into a human-readable estimate?

---

## Pattern 7 — The learning cliff

**What users expect:** I'll figure it out as I go.

**What AI products often do:** Front-load complexity. The most consequential decisions (what to search for, which entities to include, what date range) happen before the user has seen any results. Users can't calibrate their choices without knowing what "good" looks like.

**Failure mode:** Users accept all defaults because they don't know what they're deciding. Or they make informed-sounding choices that turn out to be wrong, and can't understand why the output is off-target.

**Audit signal:** Does the product offer any preview or feedback mechanism before the user commits to an expensive operation? Is there a "preview" or "sample" mode? Are example outputs shown before the user configures anything?

---

## Pattern 8 — The empty canvas

**What users expect:** The product will tell me what to do first.

**What AI products often do:** Generate an output and present it with no guidance on how to interrogate or extend it. "Ask anything" on a blank chat is not guidance.

**Failure mode:** Users don't know what questions to ask, what insights to look for, or what the product is capable of showing them. They ask broad questions that get broad answers and conclude the product isn't useful.

**Audit signal:** When a user completes a major task (case study generated, analysis complete, file processed), what is the first thing they see? Is it guidance toward what to do next, or an empty invitation?
