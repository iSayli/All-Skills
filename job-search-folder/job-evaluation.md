# Job Evaluation Framework

This file defines HOW to filter, score and report roles. What counts as a good role (titles, level, geography, industries, signals, floors) lives in `job-search.md`. Score against that file; do not restate it here.

---

## Step 0: Hard filters (before scoring)

Drop the role (do not score) if any of these is true:

- Internship, unpaid, freelance-only or temporary
- Clearly closed, or no longer accepting applications
- Posted more than 90 days ago (never show these)
- Duplicate of a role already in `jobs-tracker.csv` or already reported this run (same company + same role, any board)
- Fundamentally not a design role (primarily engineering, graphic, marketing, UX writing, design ops)
- US role that explicitly says no visa sponsorship / requires existing US work authorization

---

## Freshness (applies to every role, based on the company's own posted date)

Use the date on the company's own page or ATS data (for example `publishedAt` in the Ashby, Lever or Greenhouse feeds). Aggregator dates are often reposts, so use them only if nothing better exists.

| Age | Treatment |
|---|---|
| Last 24 hours | Report first. Mark "NEW <24h". |
| 2-7 days | Report second. Mark "NEW this week". |
| 8-30 days | Normal. |
| 31-90 days | Do not put in the tiers. List in a separate "Stale (31-90 days)" section at the bottom with age shown. |
| Over 90 days | Drop. Never show. |
| No posted date | Try to find it (ATS feed, company page, Google cache of the posting). If it still can't be found, keep the role, flag "posted date unknown", and rank it with the normal group. |

Rules:
- Freshness decides ORDER and SECTION, not the score. Score the role on fit alone.
- Within each tier, order: <24h, then 2-7 days, then 8-30 days. Within the same age group, higher score first.
- A role that is "still open on the company board" is not a reason to treat it as fresh. Age is age.
- If a repost seems to have reset the date (same title, same text, new date), use the earliest date you can find and say so.

---

## Scoring

### 1. Role fit: 25 points
How closely does the role match Product Design / UX Design work?

- 25 = strongly Product Design focused
- 15 = mixed but still substantially Product Design
- 5 = loosely related
- 0 = fundamentally not a Product Design role

### 2. Responsibilities fit: 20 points
Read the actual responsibilities. Look for end-to-end ownership, research, prototyping, complex workflows, 0→1 work, design systems, engineering and PM collaboration, AI/ML interaction design.

### 3. Experience fit: 15 points
- 15 = excellent match
- 10 = reasonable stretch
- 5 = significant stretch
- 0 = clearly inappropriate level

Apply the experience rules in `job-search.md` (including the 1-3 years / ₹8 LPA exception).

### 4. Domain / problem fit: 15 points
AI, fintech and financial services, edtech, accessibility, B2B SaaS, complex workflows, enterprise software. Stronger relevance scores higher.

### 5. Location / work arrangement: 10 points
Use the geography preferences in `job-search.md`. Preferred India cities and remote India score highest. US roles score by work-authorization clarity.

### 6. Company / opportunity quality: 10 points
Product maturity, interesting design problems, credibility, room for ownership, long-term career relevance. Do not over-weight prestige. A small YC company with real design ownership can outscore a famous company with a narrow role.

### 7. Application feasibility: 5 points
Employment type, work authorization, clearly open, easy to apply, compensation at or above the floor (or unlisted and flagged).

---

## Classification

- 90-100: Exceptional match
- 80-89: Strong match
- 70-79: Good match
- 60-69: Possible / stretch
- Below 60: Do not report

---

## Judgment rules

- Do not score by keyword matching. A title like "AI Product Designer" is not automatically strong. A plain "Product Designer" role with complex AI workflows, research, prototyping and engineering collaboration can be much stronger.
- If a job description is thin, check the company site or other listings of the same role before scoring.
- When two listings are the same job, report the one with the best source (see `search-sources.md`).
- Do not judge a source or role as "not found" just because one fetch method failed. Try another method first (see `search-sources.md`, "Reading listings").

---

## Report format

Order of sections:

1. **Tier A (80+)**, then **Tier B (70-79)**, then **Tier C (60-69, stretch)**. Inside each tier, order by freshness (<24h, 2-7 days, 8-30 days), then by score.
2. **Stale (31-90 days)**, a short separate list, outside the tiers, with age shown.
3. **Coverage** (required, see below).

For each role:

1. Company, title, location, work arrangement
2. Direct application link
3. Posted date and age (for example "posted 2026-10-05, 1 day ago")
4. Experience asked, salary if listed
5. Score and a 1-2 sentence reason grounded in the actual responsibilities
6. Flags: NEW <24h / NEW this week, visa sponsorship, experience stretch, salary unlisted, posted date unknown, YC batch, funding stage

Skip roles already in `jobs-tracker.csv`. Do not write resume bullets, outreach, or pitch angles here. That is the job application tailor skill's job.

---

## Coverage line (required at the end of every report)

A short table covering every source group in `search-sources.md`:

`Source | Reached? (yes / partly / blocked) | Method used | Candidates found | Kept after filters`

Include a separate row for Indian-company sources (Indian ATS such as Keka, Zoho Recruit, Darwinbox, Freshteam; own career pages; Naukri; Instahyre; Cutshort). Add a "Mix check" line: how many candidates came from Indian-company sources versus global startups found on Greenhouse / Lever / Ashby.

Then 2-3 lines:

- Number of search queries run and number of new companies discovered this run
- Sources that were blocked or needed a login, so I know the gap
- Honest judgment: is the result thin because few roles exist, or because coverage was shallow?

If any source group in Tier 1-4 was not attempted, say so and say why. Do not skip a group silently.
