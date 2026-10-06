# Context Interview Guide — Phase 0

Use these questions to gather context before touching any screen. The audit is worthless without this. Adapt the questions to what the user has already told you — don't repeat information already given.

---

## Questions about the target user

1. Who specifically is using this product? Not a job title — describe the person. What are they trying to accomplish in their day, and where does this tool fit?

2. What is their level of expertise with tools like this? Are they a first-time user of AI-powered research tools, or do they have experience with similar products?

3. What other tools do they use to do the same job? (Knowing this tells you what mental models they arrive with.)

4. When they're in this product, what does success look like for them at the end of a session? What have they accomplished?

5. What vocabulary do they use for the things this product does? (Ask for their words, not the product's words. If they call a "case study" a "report," that gap is a finding.)

6. What are they most afraid of doing wrong in the product? (Loss aversion tells you where the UX stakes are highest.)

---

## Questions about the product

7. In one sentence: what does this product do that nothing else does?

8. What are the two or three primary tasks a user performs — the things they do every time they use the product?

9. Is AI generation a core part of the product? If yes:
   - Where exactly does AI generation happen in the flow?
   - How long does it take? (Seconds? Minutes? Longer?)
   - What does it cost? (Credits? Money? Time the user is waiting?)
   - What are the known failure modes? (What happens when it fails silently? What happens when it returns bad results?)
   - What does the user configure vs what does the AI decide?

10. Are there any features the team knows are confusing but hasn't had time to fix? What do they hear from users?

11. Are there any user recordings, session replays, or support tickets I should know about before auditing? (These are gold — ask for them if they exist.)

---

## Questions about the brief

12. What specific flow or set of screens am I auditing? (Be specific — "the creation flow" is too broad if it spans multiple pages with different states.)

13. Is there a specific problem the team is trying to solve, or is this an open audit?

14. Is there a new feature being designed or about to be designed that audit findings should connect to? (If yes, findings should be framed in terms of their impact on that feature.)

15. Who is the audience for the audit output? Engineers implementing changes? Founders making prioritisation decisions? Investors? The output format changes significantly.

---

## Questions about constraints (collect now, surface after audit)

16. Is this a live production product with real users, or a prototype? (This determines whether changes can be radical or must be incremental.)

17. What is the timeline? How long until something needs to ship?

18. Are there engineering constraints on what can be changed? (Existing architecture decisions, frameworks, third-party tools that can't be replaced.)

19. How large is the current user base? How established are their habits with the current product? (A product with 5 power users can absorb radical changes. A product with 5,000 established users needs a migration strategy.)

20. Is there a design team beyond the person I'm talking to, or is this a solo design effort? (Determines how much the audit can assume about execution capacity.)

---

## How to use the answers

After gathering context, write a one-paragraph user brief before starting the audit:

> "[Product name] is an AI-powered [category] tool used by [specific user]. Their primary tasks are [task 1], [task 2], and [task 3]. They arrive with a mental model shaped by [other tools they use]. Success looks like [outcome]. The audit covers [specific flow] and findings should connect to [new feature or design problem]. The product is [production/prototype] with [user base size]. Constraints: [list]. These will be surfaced after the audit, not during it."

This brief is the lens the entire audit is read through. Every finding is a finding because it damages this specific user's ability to complete these specific tasks — not because it violates an abstract principle.
