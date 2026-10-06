# Resume Variants — Recipes

> Each variant is a 1-page, ATS-safe, single-column resume generated from the same `profile.md` facts. A recipe defines: target roles, lead title, summary angle, skills order, which experiences lead and which are cut, and seniority handling. Generate by selecting bullets from `profile.md` and sharpening them with `writing-rules.md`. Never change a fact or date between variants — only what leads and how it's framed. When a fact here disagrees with `profile.md`, `profile.md` wins.

## Shared rules for every variant
- 1 page, single column, no layout tables (ATS-safe). Real bullet lists; right-aligned dates via tab stop.
- Lead with shipped, owned work (the 2026 junior market rewards this over "eager to learn").
- AI fluency is assumed in 2026. The differentiator is that Sayli *designs* AI systems, *prototypes in code* (React/Cursor/Claude), and closes the **build → test → learn loop**: build fast, test with real users, fold findings back into the design. Never let a code-forward variant drop the research/validation half.
- Product Designer stays the title anchor in every variant; qualifiers may be added, never swapped in.
- Specificity over adjectives; verified numbers only (see `writing-rules.md`). Never use anything marked RETIRED or STALE in `profile.md`.
- Bullet order within each role: impact first, task second (see `writing-rules.md`).
- **Contact line (Oct 2026):** Open to relocate · sayli2402pednekar@gmail.com · 8450940260 · linkedin.com/in/SayliPednekar · saylipednekar.com. No city, no US phone.
- **Dates (all variants, identical):**
  - Arbiter (SimPPL), Product Design Consultant — Apr 2026 – June 2026
  - Georgia Tech Financial Services Innovation Lab, Product Designer — May 2024 – Jul 2026 (internship May–Aug 2024, full-time from May 2025; one entry)
  - Discovery Education — Aug 2024 – Apr 2025
  - Microsoft Accessibility Insights — Aug 2023 – Dec 2023
  - Korangle — Feb 2022 – Feb 2023
  - Nothing is "Present" or "currently" except the reading group (Oct 2025 – Present) if included.
- Education: GT M.S. HCI (Aug 2023 – May 2025), Mumbai B.Tech CE (Aug 2019 – May 2023).
- Arbiter scale: use client names (Rappler, Deutsche Welle, Ofcom), not user counts.
- GT pipeline wording: "lightweight LLM extraction pipeline" built from prompt instructions + annotation schemas authored with users, later used by engineering/ML as reference. The weeks→days claim attaches to the CreditSeer LLM-pipeline and Figma-to-code workflows.

## Seniority handling (applies across variants)
- **Intern / new-grad:** frame early-career; education can move higher; foreground learning velocity + the engineering/AI-prototyping edge; ~1 year of concentrated relevant work is fine to foreground; soften org-strategy claims.
- **Junior / associate:** early-career toned summary (no "X years"); still lead with shipped, owned work; truthful ownership verbs.
- **2+ / mid:** lean on the cumulative "3+ years" track record (Korangle → GT intern→FT → Discovery → Arbiter); foreground systems thinking and end-to-end ownership.
- The flex is in framing and what leads — never in dates, titles, or numbers.

---

## Variant 1 — AI / Agentic
**Files:** `Sayli_Pednekar_AI_Systems_Resume.docx` (mid), `Sayli_Pednekar_AI_Systems_Junior_Resume.docx` (junior). Script: `variant_ai.js`.
**Target roles:** AI product designer, agentic/AI-systems design, design engineer, enterprise SaaS / developer tools.
**Lead title:** Product Designer (AI Systems).
**Summary angle:** CE + HCI background; designs and prototypes AI systems; makes agentic, non-deterministic systems steerable and correctable; builds in React/Cursor/Claude; closes the build → test → learn loop.
**Skills order:** AI & Product → Research → Build & Tools.
**Experience order:** Arbiter (HITL, UX audit) → GT lab (AI credit decision-support; names validating with analysts/underwriters) → Discovery (1–2 lines) → Korangle (SaaS ownership). Microsoft cut.
**Extras:** Reading group only. Publications and secondary research cut.
**Mid vs junior:** summary framing only; same experiences and bullets.

## Variant 2 — Fintech
**Files:** `Sayli_Pednekar_Fintech_Resume.docx` (mid), `Sayli_Pednekar_Fintech_Analyst_Resume.docx` (analyst/junior). Script: `variant_fintech.js`.
**Lead title:** mid = "Product Designer · Fintech & AI Systems"; junior = "Product Designer · Fintech".
**Summary angle:** mid = CE+HCI, deep fintech, regulatory constraints (KYC/AML/CCPA/UDAAP), 3+ years, React/Cursor prototypes, research on accessible digital finance. Junior = recent MS HCI grad, wireframes→hi-fi execution, design systems/IA/WCAG, CE foundation bridges design and code.
**Skills order:** mid = Product & Design / Research & Domain (regulatory) / AI & Build. Junior = Design fundamentals / Research / Domain & Build.
**Experience order:** GT lab → Arbiter (HITL) → Korangle (Fee Payment, design system) → Microsoft (WCAG + research). Discovery cut. Junior trims Arbiter to 1 bullet.
**Publications:** both included (Gerontechnology first, IEEE ICCT second).

## Variant 3 — Edtech
**File:** `Sayli_Pednekar_Edtech_Resume.docx` (early-career). Script: `variant_edtech.js`.
**Lead title:** "Product Designer · Edtech & Learning".
**Summary angle:** learning products end-to-end — B2B2C game-based literacy for middle schoolers plus B2B school-management SaaS; participatory research; design-systems and prototyping craft.
**Skills order:** Design (0→1) / Research (participatory, co-design) / Build & Tools.
**Experience order (relevance-led):** Discovery Education (Fable Tales folded into a bullet) → Korangle → Arbiter (1 transferable AI bullet) → GT lab (1 transferable bullet). Microsoft cut. The GT website bullet is optional here.
**Extras:** Reading group; Publications section with just the Luminara **poster** (HCII 2026).
**Note:** relevance-ordered, so Discovery leads even though GT is more recent.

## Variant 4 — B2C / Consumer  ⬜ not built (deprioritized)
If revived: emphasize engagement/adoption, visual and brand craft, storytelling; lead with Discovery's student-facing game design and Korangle's brand/visual-identity work.

## Variant 5 — UX Researcher
**File:** `Sayli_Pednekar_UX_Researcher_Resume.docx` (1–3 yr). Script: `variant_uxr.js`.
**Lead title:** "UX Researcher · Mixed-Methods & Product Strategy".
**Summary angle:** mixed-methods researcher with CE+HCI background; turns qual+quant evidence into product strategy and scoping; fintech/edtech/journalism/accessibility; engineering fluency means working with data and technical constraints.
**Section order:** Summary → Experience → Skills → Education → Publications.
**Experience order (research-framed, "researcher who designs"):** Arbiter (observational framework, transcript analysis, UX audit + PostHog, quantitative evaluation plan) → GT lab (research planning and scoping per KYC/AML/CCPA/UDAAP; generative interviews; synthesis) → Discovery (discovery research, workshops n=8, playtesting) → IxDA (5-researcher news-trust study, 700+ survey, 10 interviews) → Microsoft (learnability study with 7 developers, cognitive walkthroughs, 55%) → Korangle (interviews, usability tests, IA).
**Publications:** all relevant ones. Build note: `compact: true` plus the `order` array fit six entries on one page.

## Variant 6 — General / Master
**File:** `Sayli_Pednekar_General_Resume.docx`. Script: `variant_general.js`.
**Lead title:** "Product Designer" (no domain qualifier). Default for generic applications, recruiter requests, or LinkedIn-style use.
**Summary angle:** the current resume's summary — HCI and engineering background, 3+ years across AI, fintech, and edtech, owning UX at early-stage companies, mixed-methods research, design systems, rapid AI prototyping.
**Section order:** Summary → Experience → Education → Skills → Publications (matches her own authored resume).
**Experience:** Arbiter, GT lab, Discovery, Microsoft, Korangle, each with its strongest, most broadly legible bullets. Arbiter leads with the search-plan failure drop (~46% → near-zero) and the first UX audit.
**Publications:** all three, with Luminara labeled a poster.
**Source of truth:** the Oct 2026 resume (`Sayli Pednekar Product Designer.pdf`) is the baseline for this variant's wording.

## Website bullet (GT lab)
Variants that include the GT lab carry the bullet on redesigning, building, and shipping the lab's website in React + Hygraph + Node.js (800+ monthly users) with PageSpeed 36/79/92/64 → 95/100/100/100 (Performance/Accessibility/Best Practices/SEO). The agentic-browsing readiness score (0/2 → 1/2) stays in `profile.md` only.

## Publications
Three verified items (see `profile.md`): Gerontechnology 25(3), 2026; **HCII 2026 poster** "Guardians of Luminara" (always say "poster"); IEEE ICCT 2023. Fintech and UXR carry all three; Edtech carries Luminara only; General carries all three; AI/Agentic carries none unless asked.

## Open items to confirm with Sayli before the next build
- Whether to add an F-1 / STEM OPT line to the resume itself (currently stated only in outreach and application forms).
- Whether the "Present" fix has been applied to a given generated .docx — regenerate from the scripts rather than patching old files.
