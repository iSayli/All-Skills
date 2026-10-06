# Building Slides

This skill governs how you build academic and technical presentation slide decks. Apply these rules to every slide you create unless the user explicitly overrides them.

## Formatting

1. Use bullet points (unnumbered is fine) for any slide that has more than two sentences. Long paragraphs on slides are hard to read during a talk. Bullets separate ideas visually and help the speaker pace delivery.

2. Title and content must have spacing between them, at least two blank lines, so the slide is easy to read at a glance. Dense slides lose audiences.

3. When citing papers, link directly to the paper (arXiv, ACM, SSRN, author site, or hosted PDF) and verify that the link is accurate before including it. A broken or hallucinated citation destroys credibility with an academic audience.

### Typography Consistency

3a. Use ONE font family throughout the entire deck. Never mix serif and sans-serif or use different fonts for headings vs body unless the user explicitly requests it. Variable font placement and size inconsistency makes slides look unpolished.

3b. Keep font sizes consistent across slides of the same type: all section headers the same size, all body text the same size, all card text the same size. Do not vary sizes slide-to-slide unless the content type genuinely differs.

## Content Overflow Prevention

Content MUST NOT touch or overflow the bottom edge of a slide. This is a hard rule.

4. Every slide must have at least 40px of bottom padding/margin. Content that gets cut off at the bottom is unacceptable and must be caught before committing.

5. In reveal.js, set `margin: 0.1` or higher in `Reveal.initialize()` and add CSS: `section { padding-bottom: 40px !important; max-height: 90vh; overflow: hidden; }`. If content overflows, split it across two slides rather than shrinking font size below 0.6em.

6. Limit bullet points to 5-6 per column on two-column layouts, and 7-8 on single-column layouts. If you need more, split the slide. A slide with content touching the bottom is worse than two slides that breathe.

7. Title slides must be vertically centered. Use `display: flex; align-items: center; justify-content: center; min-height: 100%;` on title slide containers. An off-center title slide looks broken.

8. Test every slide at 1280x720 viewport. If any content is clipped, the slide must be split or condensed before committing.

## Progressive Disclosure (MANDATORY — apply by default on every new slide deck)

9. **ALL bullet points MUST use `class="fragment"` by default.** This is not optional. Every `<li>` in the main slide deck gets `class="fragment"` so points appear one by one. The only exception is appendix slides, which are reference material and do not need progressive disclosure. Do NOT wait for the user to ask for this — it must be applied from the first version.

10. For two-column layouts, add `class="fragment"` to the `<div class="two-col">` container so both columns appear together after the intro text. For lists within, add `class="fragment"` to individual `<li>` elements so they appear one by one.

11. For highlight boxes and callout sections, add `class="fragment"` so they appear after the main content, serving as the punchline or takeaway.

12. Tables should use `class="fragment"` on individual `<tr>` rows so the audience processes one row at a time.

12a. In `Reveal.initialize()`, always set `center: true` so that slides with less content (especially title slides) are vertically centered by default. Never set `center: false` unless the user explicitly requests top-aligned content.

## Framing and Problem Setup

4. Setting up an academic problem is not about stories or anecdotes. It is about related work, gaps left by related work, or otherwise describing a problem quantitatively as reflected in the literature. You are setting yourself up to show, a few slides later, that you solve exactly this problem. If the problem setup is weak, the entire contribution falls flat.

5. Problems must be clear, well-defined, and well-researched. Assume experts in the audience have studied the issue deeply. Sounding ignorant of existing literature is worse than having a modest contribution.

6. Use bullet points to separate the elements of the problem. Explain what progress has been made toward solving it, or describe in detail what impact the problem has caused and how that impact is measured.

## Accuracy

7. Every claim must either follow from existing literature, a clearly stated argument, or a documented prior discussion. In very rare cases anecdotal evidence is acceptable, but you must explicitly state that it is not necessarily representative. If you do not have enough information to support a claim, ask the user what to include rather than guessing. Do not include unsupported claims.

## Titles

8. Titles should be short: 6 to 9 words is a good target. This keeps readability simple and effective. Not a strict rule, but a strong recommendation.

9. A title should summarize the key takeaway of the slide when the slide has a graph, finding, or result. Not every slide will have a takeaway, so some titles are merely descriptive and that is fine.

9a. **Avoid jargon and internal vocabulary in titles.** Do not use words like "Plugin", "Module", "Component", or other developer-facing terms when the audience is non-technical or student-facing. Use plain, descriptive language. "Better Retrieval for Social Media" is better than "Plugin 1: Better Retrieval". The audience should understand the title without context.

## Diagrams and Visual Structure

10. When describing a data pipeline or a series of steps, include a small Mermaid diagram or other cleanly formatted diagram that lays out the steps in sequence. Provide enough detail that a reader can follow the idea intuitively without referring to other slides.

## Examples

11. Examples are effective for explaining concepts. Use simple but relevant examples that highlight an individual concept cleanly without causing confusion. One good example is worth more than three paragraphs of explanation.

## Mathematics

12. Some presentations require a mathematical lens. Include mathematical descriptions and a breakdown of any metrics, along with a plain English explanation and ideally a worked example to make the concept accessible. Do not assume the audience knows every formula; define terms and notation.

## Preliminary Results

13. If you are presenting preliminary or small-sample experiments, be upfront. State that this is ongoing work and you welcome feedback, or that findings are from a small sample and generalizability is still being explored. Present findings in one or two sentences and move on. Do not overanalyze small-sample results; that will confuse the audience and invite unnecessary skepticism.

## Slide Text: Less is More

14. **Non-research slides should be concise.** Context slides, motivation slides, overview slides — keep them tight. Short phrases and sentence fragments are fine. Only research-framing slides (problem setup, methods, results) need precise, detailed language. If a slide is not presenting a research finding, it probably has too many words on it.

15. Do not write full sentences when a phrase will do. "Built by undergrad students" is better than "This product was built entirely by undergraduate students during their studies." The speaker will elaborate verbally.

16. Avoid filler phrases common in AI-generated text: "It is worth noting that", "In today's landscape", "This is particularly important because". Cut to the point.

## Proactive Use of Reference Materials

17. When building slides for a project, **proactively read all referenced materials** (CLAUDE.md key references, product decks, academic slides, reference documents) BEFORE writing the first slide. Do not wait for the user to point you to specific resources. The CLAUDE.md in each project directory lists what to draw from — use it.

18. When a slide deck covers a product or platform, include concrete examples from real data where available. Pull examples from existing academic slides and reference materials rather than inventing generic placeholders. Real examples are always more compelling than hypothetical ones.

## Slide Economy and Appendix Usage

19. Not every piece of content belongs in the main deck. If a slide is supplementary, nice-to-have, or only relevant if a specific question comes up, move it to the appendix. The speaker can navigate there if needed. The main deck should be tight and focused.

20. When the user says to remove something, move it to the appendix rather than deleting it entirely, unless the user explicitly says to delete it. This preserves content for potential use.

## Narrative Surprises

21. When the user designs a narrative reveal (e.g., "I want to surprise them by revealing this was built by a student"), do NOT put the spoiler on the slide. The speaker controls the reveal. Build the slide so the punchline comes through the speaker's words, not the slide text.

## General Principles

22. Separate research compilation from slide writing. Do research first (literature review, evidence gathering), then write slides as a second pass. Mixing the two produces unfocused slides.

23. Every slide should be justifiable: if someone asks "why is this slide here?" you should have a clear answer about what it contributes to the overall argument.

24. Versioning: never edit a slide deck in place. Always create a new versioned file (v1, v2, v3) and commit after each version so the user can compare drafts.

## Playwright Testing Requirements

When testing slides, presentations, or any HTML output with Playwright:

1. Always serve files via a local HTTP server (never test from file:// protocol). YouTube embeds and many CDN resources require an HTTP origin.
2. Wait for the full page to load including all JavaScript frameworks. For reveal.js, wait until `Reveal.isReady()` returns true.
3. Expand ALL fragments/animations on each slide before checking layout. Use `while(Reveal.nextFragment()){}` to reveal all content.
4. Check every slide for content overflow: `scrollHeight > clientHeight + 5` means content is cut off.
5. Check every image for overflow: if `img.clientHeight > section.clientHeight * 0.8`, the image is too large.
6. Take screenshots of every slide and visually verify them before marking tests as passed.
7. Never mark a test as passed based solely on the absence of JavaScript errors. Visual verification is required.
8. Test at realistic viewport sizes (1440x900 for laptops, 1920x1080 for projectors).
9. Navigate the presentation through its own controls (arrow keys, slide navigation) rather than jumping directly to slide indices. If slides are unreachable through normal navigation, document this as a navigation issue.

## Prompt Logging (NON-NEGOTIABLE)

ALWAYS log every raw prompt from the user to a `swapneel-raw-prompts.md` file in the project directory. Log prompts exactly as received, in sequence, with a numbered heading for each. Do this for EVERY conversation, not just when asked. This must happen BEFORE any other work begins. If you forget to log a prompt, log it as soon as you realize. There is no exception to this rule.

## Citation and Attribution Accuracy

25. **Never cite other people's work as SimPPL's contribution.** When referencing external research, papers, or statistics, cite the source briefly (author/org, year, or link). When referencing SimPPL's own work, make clear it is an internal contribution.

26. **Verify cited claims before including them.** If a slide references a statistic, finding, or external claim, verify it through web search or the source material. Hallucinated or inaccurate citations are unacceptable in academic or student-facing presentations.

27. Every claim on a slide must be either: (a) explicitly sourced from cited work, (b) a documented SimPPL contribution from reference materials, or (c) clearly marked as the speaker's opinion/observation. Unsourced factual claims are not allowed.
