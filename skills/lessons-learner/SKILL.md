---
name: lessons-learner
description: Learn from past project lessons to improve agent performance on new projects. Use this skill whenever starting a new project, beginning a new task, or when the user asks you to apply lessons from past work. Also trigger when the user mentions learning from mistakes, improving quality, reviewing past patterns, or wants to capture new lessons from a completed project. This skill ensures agents benefit from accumulated experience across writing, webapp development, software engineering, literature review, and academic application projects.
---

# Lessons Learner

This skill helps you learn from past project lessons and capture new ones. It ensures you don't repeat mistakes and that you build on patterns that have proven effective.

## At the start of any new project

1. Read `~/.claude/lessons/LESSONS.md` to get the index of all available lessons
2. Identify which category (or categories) the current project falls into: writing, webapp-development, software-engineering, literature-review, or applications
3. Read the relevant category lesson file(s) from `~/.claude/lessons/<category>/`
4. For cross-category projects, read multiple files
5. Briefly summarize the 3-5 most relevant lessons for this specific project to the user so they know you are aware of them

## Capturing new lessons from a completed project

When the user asks to capture lessons from a project they just finished, or when a project wraps up:

1. Review the project's prompt history, commit diffs, and any correction patterns
2. Identify recurring mistakes, successful patterns, and user corrections
3. Categorize the project into one of: writing, webapp-development, software-engineering, literature-review, applications
4. Check the existing lessons in that category to avoid duplicates
5. Find the highest-numbered file in the category directory (e.g., `001-...`, `002-...`)
6. Create the next numbered file (e.g., `002-new-project-name.md`) following this format:

```markdown
# Lessons: [Project Description]

**Source project:** [project name/path]
**Category:** [category name]
**Project summary:** [2-3 sentence summary of what the project involved]

## Lessons

### 1. [Lesson title]
[1-3 sentence explanation with specific, actionable guidance]

### 2. [Lesson title]
...
```

7. Update `~/.claude/lessons/LESSONS.md` to add the new file to the category index
8. If any lessons are cross-cutting (apply to multiple project types), add them to the cross-cutting themes section

## Lesson quality standards

Each lesson should be:
- Specific and actionable (not vague advice like "be careful")
- Grounded in an actual mistake or pattern observed in a real project
- Written so an agent reading it for the first time knows exactly what to do or avoid
- Compressed to 1-3 sentences maximum

Do not duplicate lessons that already exist. If a new observation refines an existing lesson, update the existing one rather than adding a duplicate.

## When applying lessons during work

Don't just read lessons at the start and forget them. Actively check your work against relevant lessons before:
- Making a commit
- Presenting a draft to the user
- Generating a visualization
- Citing a reference or link
- Restructuring existing content
