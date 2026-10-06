# Resume generators

Reusable Node scripts that build Sayli's 1-page, ATS-safe resumes from the recipes in
`../references/resume-variants.md` (facts come from `../references/profile.md`).

## Run
```
npm install docx
node variant_ai.js        # AI/agentic: mid + junior
node variant_fintech.js   # fintech: mid + analyst
node variant_edtech.js    # edtech (single)
node variant_uxr.js       # UX researcher (compact, custom section order)
```
Outputs are written to /mnt/user-data/outputs/.

## build.js
Shared generator. Content object fields: name, title, contact[], summary, skills[], experience[], education[],
optional publications[], optional extra{header,lead,body}, optional compact (true = 9.5pt dense),
optional order[] (section order, default ["summary","skills","experience","education","publications"]),
optional extraPosition ("afterExperience").

Never invent numbers — every metric must exist and be verified in profile.md.

## Also
```
node variant_general.js   # general / master resume
```
Contact line is "Open to relocate" + India phone (Oct 2026). Arbiter ended Jun 2026; GT lab ended Jul 2026 — no "Present" except the reading group. Regenerate from these scripts rather than patching old .docx files.
