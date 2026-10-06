# Job Evaluation Framework

This file defines HOW to score and report roles. What counts as a good role (titles, level, geography, industries, signals, floors) lives in `job-search.md`. Score against that file; do not restate it here.

Score every discovered job from 0-100.

---

## Step 0: Hard filters (before scoring)

Drop the role (do not score) if any of these is true:

- Internship, unpaid, freelance-only or temporary
- Clearly closed, or no longer accepting applications
- Duplicate of a role already reported (same company + same role, any board)
- Fundamentally not a design role (primarily engineering, graphic, marketing, UX writing, design ops)
- US role that explicitly says no visa sponsorship / requires existing US work authorization

Posted more than ~45 days ago: keep only if the company page still shows it as open, and flag the age.

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

---

## Report format

Group by classification: Exceptional / Strong, Good, then Possible / stretch (clearly separated).

For each role:

1. Title, company, location, work arrangement
2. Direct application link
3. Posted date / freshness
4. Experience asked, salary if listed
5. Score and a 1-2 sentence reason grounded in the actual responsibilities
6. Flags: visa sponsorship, experience stretch, salary unlisted, stale risk, YC batch, funding stage

Skip roles reported in earlier runs. End with a short note on which sources or queries were productive or empty, to feed the learning sections in `search-sources.md` and `search-queries.md`.

Do not write resume bullets, outreach, or pitch angles here. That is the job application tailor skill's job.
