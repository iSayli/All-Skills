---
name: "job-application-tailor"
description: "Tailor Sayli Pednekar's job applications to specific design roles (UX, UI, Product Design, UX Research, Design Engineer, UX/UI). Use this skill whenever Sayli pastes a job description, asks which of her experiences fit a role, asks to write or rewrite resume bullets, asks to draft a message to a recruiter or hiring manager, asks for a tailored summary or 'why this company' paragraph, asks to gap-check her profile against a posting, or asks for interview prep like 'tell me about yourself' — even if she just says 'tailor this', 'make me a resume for this', 'help me apply', or 'reach out to this recruiter'. The skill selects relevant experiences by domain (fintech, edtech, journalism, accessibility, AI systems), writes bullets only Sayli could have written, never invents or inflates numbers, and flexes seniority framing to the target role."
metadata:
  version: "2.1.0"
  category: career
  activation: auto
  inputs: [job-description, role-type, company-context, optional-recruiter-name]
  outputs: [experience-selection, tailored-bullets, tailored-summary, skills-reorder, outreach-message, gap-check, interview-prep]
---

# Job Application Tailor — Sayli Pednekar

This skill tailors Sayli's applications to specific design roles. It is opinionated about one thing above all: **every bullet must be one only Sayli could have written** — anchored to a real artifact, decision, constraint, or verified number. Generic, portable, JD-voice bullets are the failure mode this skill exists to prevent. The full philosophy lives in `references/writing-rules.md`; the non-negotiables below are the short version.

## How to use this skill

1. **Read `references/profile.md` first, every time.** It is the single source of truth for Sayli's roles, verified dates, verified metrics, links, work authorization, skills, and the raw bullet bank. Never state a date, number, title, or fact about Sayli that is not in that file. If something needed isn't there, ask her — do not infer or invent it.
2. **Identify the mode(s)** the request maps to (table below). Multiple modes often combine — e.g. "help me apply to this" usually = Tailor + Bullets + Summary.
3. **Read the relevant reference file** for that mode before producing output.
4. **Produce the output**, then offer the natural next step (e.g. after a gap-check, offer to write the bullets that close the gaps).

## Modes

| Mode | Trigger | Reference to read |
|------|---------|-------------------|
| **A — Tailor** | "which experiences fit this?", a pasted JD, "tailor my resume" | `profile.md` + `writing-rules.md` |
| **B — Bullets** | "write/rewrite bullets", "make these stronger" | `writing-rules.md` |
| **C — Summary + skills** | "write a summary for this", "reorder my skills" | `profile.md` + `writing-rules.md` |
| **D — Outreach** | "message this recruiter", "follow up", "cold email the HM" | `outreach-playbook.md` |
| **E — Gap-check** | "am I a fit?", "what am I missing for this?" | `profile.md` |
| **F — Interview prep** | "tell me about yourself", "why this company", case-study framing | `profile.md` + `writing-rules.md` |
| **G — Resume variants** | "make my fintech resume", "the AI/agentic version", "a junior/intern cut", "regenerate variant X" | `resume-variants.md` + `profile.md` + `writing-rules.md` |

Default when she just says "help me apply to this [JD]": run **A → B → C** in sequence (select experiences, write the bullets, write summary + skills), then offer D (outreach) and E (gap-check).

---

## Non-negotiables

These hold across every mode. They come straight from the hiring-manager logic in `writing-rules.md`.

- **The "only Sayli" test.** Before finalizing any bullet, ask: if I removed her name and read this to 15 other designers at her level, could any of them claim it as their own work? If yes, it's too generic — rewrite it around a specific artifact, constraint, or number. This is the whole game.
- **Never invent or inflate a number.** Every metric must already exist in `profile.md`, where each is marked verified. If a role tempts a new or rounder number, do NOT fabricate it — flag it and ask Sayli for the real figure. A range stat ("15–30%") is a tell of a guess; use single defensible values only.
- **Respect RETIRED markers.** If `profile.md` marks a number or bullet as RETIRED (a figure that couldn't be sourced or was superseded), it must never be used or reinstated in any resume or message, even if it still appears in an old resume file or draft Sayli pastes back in. Always use the replacement figure profile.md points to instead. When a bullet has an "How to defend the numbers" block (e.g. Arbiter), read it before using the number in interview prep or messaging — it contains caveats (sample size, blind spots, attribution) that must be volunteered, not just the headline figure.
- **Tailor to the *specific* role, not "a design job."** If the posting is a fintech role, fintech work is the load-bearing center of the page. If it's research-heavy, research leads. Mobile role → mobile-specific decisions in the bullets, not a "responsive design" skill-line mention. Match the JD's actual emphasis, never just its title.
- **Verbs carry the seniority signal.** Lead bullets with the verb that exposes the real level of ownership (Owned, Led, Designed, Shipped, Built, Restructured). Never lead with hedge verbs (Helped, Supported, Partnered, Contributed) unless that is the literal truth — in which case consider cutting the bullet. See the seniority-flex rules below.
- **The core identity is Product Designer — always.** Coding, research, and strategy are all in service of that; never let "design engineer" or "researcher" fully replace "Product Designer" as the anchor. Titles can add a qualifier (e.g. "Product Designer (AI Systems)"), never swap it out.
- **Sayli's real differentiator is the build → test → learn loop, not code fluency alone.** A lot of designers now show "I code" as a flex; that alone is table stakes in 2026. What's rarer, and what Sayli actually has evidence for, is closing the loop: build a working prototype fast (React/Cursor/Claude), put it in front of real users, extract real signal (usability data, drop-off, transcripts), and apply it back into the design immediately — not just "shipped code." Favor bullets that show the full loop over ones that only show the build. Concretely: the case-study flow (built it → 58% drop-off surfaced → redesigned → 20%), the GT credit tool (prototyped → validated with analysts/underwriters → shipped), Discovery (built playable prototype → playtested with students/educators → refined) are the loop; a bullet that only says "built a React prototype" is leaving half the story out. Never cut research out of an AI/build-forward resume to make room for code — the loop *is* the differentiator, and it needs both halves visible.
- **No adjective stacks.** Replace "scalable / accessible / intuitive / responsive" with the specific noun or number the adjective is gesturing at, or cut it. "Beautiful UI" and "user-friendly" never earn their place.
- **No AI-vocabulary cosplay.** Name the actual AI design problem (regeneration flow, stop-generation, source citations, confidence/uncertainty states, human-in-the-loop verification) and the failure mode it handled. Don't hide behind "non-deterministic systems" / "improved user trust" without the underlying mechanic and a real metric.
- **Mirror the JD's vocabulary in framing, never in the bullets.** Use the posting's language to *decide what to surface*; write the bullets in the language of the doing.
- **Honesty about authorization.** For any US role, Sayli's status is **F-1 visa, STEM OPT**, and she needs sponsorship for continued employment. State it that way, factually, per `outreach-playbook.md`. She is based in India and open to relocate. Never imply citizenship or a green card.
- **Both Arbiter and the GT lab have ended (Jun and Jul 2026).** Use past tense and end dates everywhere. Never write "currently" or "Present" for either; she is between roles.

---

## Seniority flexing

Sayli is early-career (graduated May 2025) but has a genuinely deep, 3+ year cumulative design track record across a startup, internships, a research lab, and consulting. Flex the framing to the posting — without ever changing a single fact or date:

- **Internship / new-grad postings** → frame as early-career; it's fine to foreground ~1 year of the most relevant concentrated experience and lead with learning velocity and range.
- **Associate / "0–2 yrs" postings** → frame as early-career with shipped, owned work; lead with end-to-end ownership at Korangle and the GT lab.
- **"2+ yrs" / lower-mid postings** → lean on the *cumulative* track record: Korangle (sole designer, 2022–23) + GT lab intern→full-time (May 2024 – Jul 2026) + Discovery Education (2024–25) + Arbiter consulting (Apr – Jun 2026). This honestly totals 2+ years of design work; emphasize breadth, domain depth, and systems thinking.
- Never claim a seniority title she hasn't held, and never stretch dates. The flex is in *which experiences lead and how they're framed*, not in the facts.

---

## Mode workflows

### A — Tailor (select experiences for a JD)
1. Read the JD. Extract: role type, domain, top 3–5 responsibilities, must-have skills, seniority signal, and any standout emphasis (e.g. "mobile", "design systems", "0→1", "research-heavy", "AI", "fintech compliance").
2. From `profile.md`, pick the **3–5 most relevant roles** and, within each, the **2–4 bullets** whose tags best match. Prefer recent + domain-matched. Drop roles that add nothing for this posting.
3. Output a short rationale ("Leading with GT lab + Ocrolus-style fintech + Arbiter AI work because the JD is fintech + AI + human-in-the-loop"), then the selected experiences in resume order, then hand off to Mode B to sharpen the chosen bullets.

### B — Bullets (write / rewrite)
Read `writing-rules.md`. For each bullet: lead with the exposed verb + the named artifact, add the constraint that made it interesting, anchor any outcome to a verified baseline from `profile.md`. Run the "only Sayli" test on each. Never fabricate a number.

### C — Summary + skills reorder
Write a 2-line summary using her real domains (fintech, edtech, journalism; accessibility secondary) tuned to the posting's emphasis. Reorder the skills lines so the JD's must-haves appear first. Use the summary variants and skills inventory in `profile.md` as raw material.

### D — Outreach
Read `outreach-playbook.md`. Pick the message type (LinkedIn note, cold email, post-application follow-up, no-response nudge, thank-you). **For any cold email or LinkedIn message, use Sayli's proven 5-paragraph format (template B) and write in her voice** — follow its structure and accuracy guardrails, and model on the reference examples there. Default tone: **direct, confident, and personal.** Reference one specific, true thing about the company/role. Handle sponsorship per the playbook.

### E — Gap-check
Compare the JD's must-haves against `profile.md`. Output three buckets: **Strong match** (with the evidence), **Partial / reframe** (real experience that needs angling), **Genuine gap** (don't have it — say so plainly, and note whether it's a dealbreaker or a "hunger to learn" line). Then offer to write bullets that surface the strong matches.

### F — Interview prep
Use `profile.md` for facts and `writing-rules.md` for the "specific over generic" instinct. Frame "tell me about yourself" as a 3-beat arc (engineering background → HCI/design → current AI-systems focus). For "why this company", connect a real Sayli interest/value to a specific, true thing about the company. For case studies, structure as problem → constraint → decision → outcome (with verified numbers only).

### G — Resume variants
Read `resume-variants.md`. Each variant is a 1-page, ATS-safe resume recipe (target roles, lead title, summary angle, skills order, which experiences lead vs cut, seniority handling). The reusable generator and per-variant content scripts are bundled in this skill under `scripts/` (`build.js` + `variant_ai.js`, `variant_fintech.js`, `variant_edtech.js`, `variant_uxr.js`, `variant_general.js`); copy them to a writable dir, `npm install docx`, and run to regenerate. Generate by selecting bullets from `profile.md` and sharpening with `writing-rules.md`. Never change a fact or date between variants — only what leads and how it's framed.

---

## Updating this skill

This skill is meant to be edited often. Keep the two concerns separate:

- **Facts change** (new role, new metric, updated dates, new portfolio link, new publication) → edit `references/profile.md` only. Add new bullets to the relevant role's bullet bank with domain/skill tags, and mark any new metric `[verified]` only once Sayli confirms it's defensible.
- **Methodology changes** (a new writing rule, a new message template, a new mode) → edit `writing-rules.md`, `outreach-playbook.md`, or this `SKILL.md`.

When asked to "update the skill", ask which of the two it is, make the edit in the right file, bump the `version` in the frontmatter, and re-package. Never let invented facts leak into `profile.md` — it is the source of truth and must stay clean.
