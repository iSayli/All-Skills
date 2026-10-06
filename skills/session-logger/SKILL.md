---
name: session-logger
description: Maintain a durable, append-only chronological log of work done on a project so future sessions can pick up context without scrolling chat history. Use this skill when the user asks to record/log/document what has happened in a session, when the user asks "what have we done" or "where are we", when the user mentions session log, project log, scratchpad log, or wants a recap. Also use at the start of a new session if the user references prior work on a project (read the existing log first to load context). Logs live in `<project-root>/scratchpad/session-log.md` and are append-only — never rewrite history, only add new phase entries.
---

# Session Logger Skill

This skill describes how to maintain a `scratchpad/session-log.md` file in each project the user works on. The log is a chronological record of **state changes** — what got created, modified, decided, or broken — so future sessions can pick up where the last one left off.

## Non-negotiable

- **One log per project**, at `<project-root>/scratchpad/session-log.md` (create `scratchpad/` if it doesn't exist).
- **Append-only.** Never rewrite or reorder prior phase entries. Old entries describe what was true at the time they were written; correctness now is irrelevant.
- **Phase format** (described below) is mandatory. Don't invent new section structures.
- **Capture state changes, not conversation.** The log is the durable record; the chat is the verbose record.

---

## When to invoke this skill

This skill is triggered when the user:

- Asks to **record**, **log**, **document**, or **summarize** what has happened
- Asks **"what have we done"**, **"where are we"**, **"what's the state"**, or asks for a recap
- Mentions **session log**, **project log**, **scratchpad log**, **changelog**, or **status doc**
- References prior work on a project at the start of a new session (read the existing log first to load context)
- Has just completed a meaningful state change and the conversation has reached a natural pause

Do **not** auto-trigger this skill for every project edit. Triggering on natural pauses (commit, deploy, end of a multi-step task, user asks a recap question) is enough.

---

## On first invocation in a project

1. Check whether `scratchpad/session-log.md` exists.
2. If it does, **read it from top to bottom** before doing anything else. Treat it as authoritative context for what the project state was at the last session.
3. If it doesn't exist, create it using the **first-time template** below.

### First-time template

```markdown
# Session log — <project name>

**Started:** <YYYY-MM-DD>
**Working directory:** `<absolute path>`
**Repository:** <repo URL or "not a git repo">
**Branch:** <current branch>
**User:** <user name if known>
**Machine:** <OS, arch>

This file is a running record of work done on this project. Append new phase entries as the work progresses. Never rewrite prior entries.

---

## Phase 1 — <short title of the first chunk of work>

### Starting state
- <one-line description of the project's state at session start>

### Actions
1. <thing done>
2. <thing done>

### Files created
- `path/to/file.md` — <one-line purpose>

### Files modified
- `path/to/file.js` — <what changed>

### Decisions
- <decision, with one-line rationale>

### Open caveats
- <anything that could surprise future you>
```

---

## How to append a new phase

When the conversation reaches a natural pause and meaningful state has changed since the last phase entry, append a new phase block. Use the next phase number.

### Phase entry template

```markdown
## Phase N — <short title>

### Actions
1. <thing done>
2. <thing done>

### Files created
- `path` — <purpose>

### Files modified
- `path` — <what changed>

### Decisions
- <decision + one-line why>

### Open caveats
- <anything future you needs to know>
```

Sections are optional — omit any that don't apply to this phase. But always include at least one of `Actions` or `Decisions`. A phase with neither isn't really a state change.

---

## What counts as a "phase"

A phase is a chunk of work that ends with a meaningful change in state. Examples:

- A commit was made
- A new feature was scaffolded
- A bug was fixed
- A research artifact was produced (audit, plan, competitive research)
- A major decision was made (architectural, design, scope)
- A deployment happened
- A long-running process was started (dev server, monitor)
- A dependency was upgraded or downgraded
- The user explicitly asked for a recap

A phase is **not**:

- A single read of a file
- A single grep
- A failed experiment that didn't change state
- A clarifying question/answer with no follow-on action
- A small typo fix unless it's part of a larger phase

If in doubt: did this chunk leave the project measurably different than before? If yes, it's worth a phase entry.

---

## What to capture (and what to leave out)

### Capture
- **Files created/modified/deleted**, with the file path and a one-line purpose
- **Commits made** (SHA + message)
- **Decisions** — architectural, design, scope, naming — with the *why*
- **Caveats** — anything non-obvious that could surprise future you (a workaround, a known-broken thing, a pinned dependency, a process still running)
- **Long-running state** — servers started, ports occupied, PIDs, background tasks
- **External dependencies introduced** — new packages, accounts, services, API keys
- **Decisions deferred** — things explicitly punted to later

### Leave out
- **Every chat exchange.** The log is not a transcript.
- **Failed experiments** that didn't change state. (If a failed experiment *led to* a decision, log the decision, not the experiment.)
- **Tool calls.** No need to log every Read or Bash invocation.
- **Verbose explanations.** Be terse; use links/references to source files rather than reproducing content.
- **Things derivable from `git log`.** Don't repeat commit details that git already tracks. Just reference the SHA.

---

## Maintaining a "Running processes" section

If the session leaves processes running (dev servers, monitors, background tasks), maintain a running table near the top of the file (after the header, before Phase 1) or in the most recent phase's caveats:

```markdown
## Running processes (as of <date>)

| Port | What | PID file | Started in |
|---|---|---|---|
| 3001 | CRA prod build via `node server.js` | `/tmp/<project>-pid` | Phase 8 |
| 8765 | wireframes static server | — | Phase 5 |
```

Update this table whenever processes change state. If a process has been stopped, remove it from the table (don't strike-through — append-only doesn't apply to live state tables, only to phase entries).

---

## Maintaining an "Open items" section at the bottom

The end of the log should always have an **Open items** section: TODOs, deferred decisions, blockers, and things the user said they'd come back to. Group by category (security, design, codebase, process). When an item gets resolved, **add it to the relevant phase entry as a decision/action**, then **remove it from Open items**.

```markdown
## Open items (TODO when revisiting)

### Security
- <thing>

### Design
- <thing>

### Codebase
- <thing>

### Process
- <thing>
```

---

## Cross-referencing other scratchpad files

When a phase produces a research artifact in `scratchpad/`, link to it rather than duplicating content. Example:

```markdown
### Files created
- `scratchpad/design-audit-v1.md` — full design audit (632 lines)
- `scratchpad/competitive-research-v1.md` — peer site research (148 lines)
```

The session log is the index; the scratchpad files are the deep content.

---

## Resuming work in a later session

When the user opens a new session on the same project:

1. Read `scratchpad/session-log.md` from top to bottom before doing anything else
2. Pay special attention to:
   - **Most recent phase** — what was the last thing done?
   - **Open items** — what was pending?
   - **Running processes** — what might still be live?
   - **Decisions** — what choices were already made, so you don't relitigate them?
3. If the user asks "what's the state" or "where are we", summarize from the log rather than asking the user to explain.

---

## Anti-patterns

| Don't | Why |
|---|---|
| Rewrite or reorder prior phases | Phase entries are historical. Even if a fact is now wrong, the historical record stays — add a new phase that supersedes it. |
| Use vague phase titles like "Misc work" or "Updates" | Future you reads only the headings first. Make them descriptive. |
| Log every tool call | The log is for state changes, not actions taken. |
| Skip a phase because "we'll write it later" | Later doesn't come. Write the phase entry while the context is fresh. |
| Bury caveats inside Actions | Caveats deserve their own section — they're the highest-value content for future you. |
| Let the log grow unbounded with no summarization | When the log exceeds ~1000 lines, consider extracting older phases into a `session-log-archive.md` and starting fresh. Always preserve the most recent 5–10 phases inline. |

---

## Quick checklist before ending a session

When the user signals end-of-session ("we'll come back to this later", "let's stop here", switching projects), before the conversation closes:

1. Is the most recent meaningful state change captured as a phase entry?
2. Are running processes documented with kill commands?
3. Are open items up to date?
4. Are the file path references correct (you didn't make any up)?

If any answer is no, append a final phase or update the relevant section.
