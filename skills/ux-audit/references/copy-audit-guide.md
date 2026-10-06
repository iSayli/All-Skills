# UX Copy Audit Guide

UX copy is structure, not decoration. A wrong button label is a mental model problem expressed in copy. An empty state that says nothing is an IA problem expressed in copy. Audit copy as rigorously as visual design.

---

## Copy surfaces to audit

### Page and section titles
**What to check:** Does the title name the thing (noun) or the task (verb phrase)?
- "Case Study Scope" → names a thing (what is scope?)
- "Review what we'll search for" → names the task (clear)
- Rule: titles on action/configuration screens should be task-oriented. Titles on results/output screens can be noun-oriented.

**What to check:** Does the title communicate what phase the user is in?
- "Analysing your query" → communicates phase
- "Step 2 of 4: Build your search plan" → communicates phase + progress
- A blank page with only a logo → communicates nothing

### Button labels
**What to check:** Does the label name the action AND its consequence?
- "Save" → ambiguous (save what? what happens?)
- "Save Scope & Proceed" → names action (save scope) and consequence (proceed)
- "Create Case Study" before the case study exists → wrong (creates a draft/query)
- "Analyse query" → correct if that's what happens

**What to check:** Are destructive or costly buttons differentiated?
- "Update scope" next to "Cancel" → fine
- Primary blue "Delete" → wrong (destructive action should never be primary)
- "Create Case Study (78 credits)" → right (cost visible at point of commitment)

### Placeholder text
**What to check:** Does it explain format AND give an example?
- "Describe the investigation or add keywords separated by commas" → explains format but no example
- "e.g. 'women's reservation bill India' or '131st amendment, lok sabha, 33% quota'" → shows both modes through example
- Rule: placeholder text should show, not tell. An example is worth more than a format instruction.

**What to check:** Does it disappear at the worst moment?
- Placeholder text disappears on typing. If the placeholder contains an instruction the user needs while typing (e.g. "press Enter after each URL"), it should be a persistent helper line below the input, not a placeholder.

### Empty states
**What to check:** Does it explain why empty and what to do?
- Empty sidebar section with no label → wrong
- "Your case studies will appear here once you create one" → explains why empty
- "Your case studies will appear here — [+ New Case Study →]" → explains why + action

**What to check:** Is it using empty-state language on a non-empty state?
- "Start exploring this case study / Ask about actors, themes, claims" → this reads as empty state
- If data has been collected and is ready, the copy should communicate readiness, not invitation
- "1,868 posts collected across 4 platforms — here's what we found" → communicates readiness

### Loading and generation states
**What to check:** Is it communicating what the system is doing in user language?
- "Emotion and Sentiment Analysis: 1,629 posts" → engineering language
- "Analysing how people feel about this topic — 1,629 posts" → user language

**What to check:** Is there a time estimate?
- "Loading..." → useless
- "This usually takes 10–30 seconds" → useful
- "Estimated time: 8–12 minutes" → exact and useful

**What to check:** Is there a queued state?
- If the system can be busy, is "queued" communicated separately from "running"?

### Error messages
**What to check:** Does it say what went wrong AND what to do?
- "Something went wrong" → says nothing
- "Regeneration failed mid-pipeline. v2 stays current — the failed attempt didn't produce a new version. You can retry without re-entering the scope." → says what happened + what is preserved + what to do

**What to check:** Is it using blame language?
- "You entered an invalid URL" → blame
- "That URL format isn't supported — try facebook.com/PageName" → helpful

**What to check:** Are all failure modes covered?
- Generation failed
- Generation timed out
- Generation succeeded but returned no results
- Generation succeeded but returned very few results (thin data)
- Network error mid-generation
These are different states that each need different copy.

### Section subtitles and guidance copy
**What to check:** Does guidance appear where the decision is made, not before or after?
- Example query at the bottom of a long configuration page → too late
- Example query at the top of the configuration section → right moment

**What to check:** Does it explain what the section does AND give usage guidance?
- "People" → label only
- "Names of individuals whose mentions you want to track. Use full names — e.g. 'Narendra Modi' not 'Modi.'" → explains what + how

**What to check:** Does it warn about consequences where relevant?
- "Places — Use sparingly. Broad place names can return unrelated posts." → warns at point of decision
- Places warning buried in a help article → not useful

### Navigation labels
**What to check:** Does the label match the destination?
- "Back to case studies" → goes to homepage? wrong
- "Back to case studies" → goes to case study list? right

**What to check:** Are parallel elements named consistently?
- "Search by Topic" / "Search by Accounts" → inconsistent (topic vs accounts, by vs by)
- "Search by topic" / "Search by account" → consistent

---

## Copy patterns to flag

| Pattern | Problem | Direction |
|---------|---------|-----------|
| Same label, different destination | User builds wrong expectation | Label must reflect destination, not intent |
| Action label that names creation before creation happens | Wrong mental model | Label must reflect what this specific click does |
| Placeholder as the only instruction | Instruction disappears on type | Move instructions to persistent helper text |
| Empty state on a ready state | User thinks nothing happened | Copy must communicate the state the system is in |
| Engineering language in user-facing copy | User can't map to their task | Translate to user's vocabulary |
| "Click here" or "Learn more" without context | Inaccessible and generic | Label must describe what they'll learn or do |
| Vague CTA ("Save", "Submit", "Done") | User doesn't know consequence | Label the action + consequence |
| Warning buried below the fold | User misses it before committing | Warning at the point of decision |
| Two objects called the same thing | Mental model confusion | One name per concept, consistently |
| Technical term without explanation | Excludes non-expert users | Either explain inline or use user vocabulary |

---

## Copy audit worked examples (from Arbiter)

**Before:** "Explore the drivers of social conversations across communities"
**Problem:** Describes capability, not the user's job. Journalists don't think in terms of "driving social conversations."
**After:** "What are you investigating?" — uses the journalist's verb, invites action

**Before:** Arrow icon (→) as submit button
**Problem:** No label means no expectation-setting. Users don't know if clicking creates a case study or submits a query.
**After:** "Analyse query" — names what happens next, not what ultimately gets created

**Before:** "Generating Summary... Searching and grounding recent discourse..."
**Problem:** Engineering process language. "Grounding" is an ML term.
**After:** "Building your search plan... Drawing on trusted sources to understand your topic"

**Before:** "Final Entities to Search (12)"
**Problem:** "Final" implies done. "Entities" is jargon. "12" has no reference point.
**After:** "Search plan — review and adjust before running · 41 entities selected"

**Before:** "Start exploring this case study / Ask about actors, themes, claims, sentiment..."
**Problem:** Empty-state visual language when data is ready. Reads as nothing found.
**After:** "1,868 posts collected across 4 platforms — here's what we found"

**Before:** Section label "TOPICS - SEARCH PHRASES" with ⓘ icon
**Problem:** Label only. No explanation of what phrases do or how they affect results.
**After:** "Search phrases — Keywords and phrases the system will use to find relevant posts. More specific phrases return more focused results. Up to 20 phrases."
