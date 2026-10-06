---
name: coding-agent
description: Structured coding workflow with planning, testing, version control, and documentation discipline. Use this skill whenever the user asks you to write code, build features, fix bugs, analyze data, run scripts, or do any software engineering task. Also trigger when the user mentions scratchpad, testing, data dictionaries, or wants you to follow a disciplined development process. This skill ensures code is minimal, tested, documented, and committed properly.
---

# Coding Agent Workflow

Follow this disciplined workflow for all coding tasks.

## Non-negotiable

All prompts must be logged in a file `swapneel-prompts.md` in raw form so there is always a prompt history to go back to.

After EVERY task completion (whether a single prompt or a multi-step workflow), append a structured change log entry immediately after the prompt in `swapneel-prompts.md`. The format is:

```
### Prompt N — [date]
[raw user prompt]

**TL;DR:** [1-2 sentence summary of what was done]

**Files changed:**
- `path/to/file1.ext` — [what changed and why]
- `path/to/file2.ext` — [what changed and why]
- `path/to/new_file.ext` — [NEW] [what it contains and why it was created]

**Key decisions:** [any non-obvious choices made, e.g. "used timestamp suffix instead of overwriting", "chose BERTopic over LDA because..."]

**Errors encountered:** [any errors hit and how they were resolved, or "None"]
```

This log serves two purposes: (1) it lets the user track exactly what changed per prompt so they can roll back or review, and (2) it builds a record of programming patterns and guidelines that future sessions can learn from.

## Rules

1. Always confirm all code is committed before you write new code. Always git commit and push changes after you make any changes so there is a historical record.

2. Always ask questions if you are unclear on the steps, choices, or order of tasks to complete.

3. Prioritize testing. Write tests into a local `tests` directory (create one if it doesn't exist). Always locally test code before confirming a task is complete. Code must be minimal, simple, documented, and tested, with outputs verified before committing.

4. Always plan your steps before implementing them. Write the plan in a `scratchpad` folder (create it if it doesn't exist). Version plans as `v1`, `v2`, etc. so it is easy to track plans and follow up if any plan is only partially executed.

5. Use web search to gather relevant materials where necessary. For every set of web searches, structure and document the information you gathered in the `scratchpad` folder. Version all research files (e.g., `research-topic-v1.md`, `research-topic-v2.md`) so that future work can draw on past resources and the most recent content is easy to identify, even if context is cleared or unavailable. Always include sources and date of research in each file.

6. Always read a few lines of any data files you are provided. Understand the columns, nature, and type of data. Flag any missing or malformed data in individual columns. Do this before writing any code that uses that data, and document it in `scratchpad` as a data dictionary.

7. Any time you write output files where the user is likely to rerun the code, timestamp them so reruns won't overwrite older versions. When reading these files back in, always read the most recent timestamped one unless otherwise specified.

8. Write modular code. Ensure each module is independently tested before moving forward with the next.

9. Never commit broken or untested code. Verify each commit is functionally correct by reviewing it before making a commit. Broken code can cause serious losses and downstream problems.

10. If you do not know how to fix something, look up surrounding knowledge through web search and discuss it with the user so they have input to offer.

11. Never hardcode filenames or paths because this breaks compatibility with rerunning or future use. Always ask for approval if you don't see a solution outside of hardcoding.

12. For any statistical analysis, make scientifically rigorous choices. List modeling choices and assumptions in the data generation process or methods. Verify if the data meet assumptions through diagnostic testing and rigorous posthoc analysis.

13. Always test changes locally before deploying or confirming a task is complete. For web applications and UIs, use browser automation (Playwright or similar) to verify the full user flow works end-to-end, not just that the build passes. A successful build does not mean a working application. If a test fails, debug the root cause, fix it, re-test locally, and only then deploy. If a fix cannot be verified locally (e.g. environment-specific issue), clearly explain the limitation to the user so they understand what to watch for and can adapt their prompts next time.

14. Never deploy untested code to production. The deployment step must always come after local verification passes. If you skip local testing and deploy broken code, the user loses trust and wastes time debugging in production what could have been caught in development.
