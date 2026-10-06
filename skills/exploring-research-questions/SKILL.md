---
name: exploring-research-questions
description: Launches an agentic system that ingests a dataset, profiles its structure and collection constraints, surveys related academic literature, identifies theoretically grounded research questions, evaluates novelty and field impact, and produces a cohesive, reviewer-vetted research agenda. Use when a user wants to discover what research questions are worth asking about a dataset, explore related literature, or develop an academically rigorous research proposal from empirical data.
---

# Exploring Research Questions from a Dataset

Activate a multi-agent pipeline that transforms a raw dataset into a publication-ready research agenda with theoretically grounded, narratively cohesive questions scoped to a user-specified target venue.

## Quick-start checklist

Copy and track progress:

```
Research Agenda Progress:
- [ ] Phase 0: Clarify target venue and dataset
- [ ] Phase 1: Dataset Profiling Agent — understand data parameters and constraints
- [ ] Phase 2: Literature Scout Agent — map the research landscape
- [ ] Phase 3: Theory Grounding Agent — identify theoretical underpinnings
- [ ] Phase 4: Venue Calibration Agent — read papers from target venue
- [ ] Phase 5: RQ Synthesis Agent — draft cohesive research questions
- [ ] Phase 6: Senior Reviewer Agent — critique the draft RQs
- [ ] Phase 7: RQ Refinement — revise based on review
- [ ] Phase 8: Final Proposal — output the polished research agenda
```

## Phase 0: Clarify inputs

Before starting, confirm two things with the user if not already provided:

1. **Dataset**: path, file, or description of the dataset
2. **Target venue**: where the paper should aim to be published

If venue is missing, ask:
> "What publication venue(s) are you targeting? (e.g., NeurIPS, ICML, ICLR, Nature, PNAS, Management Science, Marketing Science, APSR, Nature Human Behaviour, CHI, WWW, etc.) This shapes how research questions are framed, what theories are expected, and what counts as a meaningful contribution."

Do not proceed until venue is confirmed.

---

## Phase 1: Dataset Profiling Agent

**Goal**: Build a precise understanding of what the data *can* and *cannot* answer.

Run this profiling protocol on the dataset:

```
Dataset Profile:
1. Schema audit — enumerate all variables, types, and value ranges
2. Observational unit — what does one row represent?
3. Collection mechanism — how was data gathered? (survey, log, scrape, experiment, admin records)
4. Temporal scope — time period, event window, panel vs. cross-section
5. Geographic/demographic scope — who/what is represented?
6. Sample selection — how were units included or excluded?
7. Known biases — platform effects, self-selection, censoring, survivorship
8. Missingness map — which variables have gaps, and why?
9. Identifiability audit — which causal questions can be addressed? (randomization? natural experiment? observational only?)
10. Scale — N observations, M variables, any hierarchical structure (users → sessions → actions)?
```

Output a **Dataset Constraint Card** (1 page max) summarizing: what the data measures well, what it cannot answer, and what analytic strategies are plausible given its structure.

---

## Phase 2: Literature Scout Agent

**Goal**: Map the intellectual neighborhood of the dataset—not just direct matches, but adjacent fields.

See [LITERATURE_SCOUT.md](LITERATURE_SCOUT.md) for the full search and synthesis protocol.

Summary of tasks:
- Search for papers using the dataset's domain, outcome variables, and population as keywords
- Retrieve highly cited papers (500+ citations) as anchors
- Identify papers from *adjacent* fields that study related phenomena with different methods or populations
- Extract: RQ posed, theory used, method, dataset type, main finding, venue
- Flag cross-field transplants — methods or theories from adjacent fields not yet applied to this domain

Produce a **Literature Map** with three zones:
1. **Core** — directly related work (same domain, similar data)
2. **Adjacent** — related phenomena, different domain or method
3. **Distant but generative** — theoretical or methodological inspiration

---

## Phase 3: Theory Grounding Agent

**Goal**: For each candidate research area, identify the theoretical scaffolding that makes a question *scholarly* rather than merely descriptive.

For each candidate RQ direction:

```
Theory Card:
- Theoretical framework name
- Core claim / mechanism
- Origin field
- How it applies to this dataset's domain
- What it predicts / what would confirm or challenge it
- Key citations (foundational + recent)
- Whether the dataset can operationalize the key constructs
```

Prefer theories that:
- Have been validated in *other* domains but not yet applied here (cross-field novelty)
- Generate specific, falsifiable predictions
- Are cited in high-impact papers at the target venue

See [THEORY_LIBRARY.md](THEORY_LIBRARY.md) for a curated list of high-leverage theories by domain.

---

## Phase 4: Venue Calibration Agent

**Goal**: Understand what the target venue rewards before proposing questions.

For the user-specified venue, retrieve and analyze 10–15 recent papers (last 3 years preferred):

```
Venue Profile:
- What kinds of RQs get accepted? (causal? descriptive? predictive? normative?)
- What theories appear most frequently?
- What methods are standard? (experiments, observational causal inference, ML, survey, mixed?)
- What counts as a "contribution"? (new theory? new method? new empirical context? replication?)
- What is the typical claim structure? (X causes Y? X moderates Y→Z? We introduce framework W?)
- What level of generalization is expected?
```

Cross-reference this with the Dataset Constraint Card from Phase 1. Flag any mismatches (e.g., venue expects causal claims but dataset has no identification strategy).

See [VENUE_PROFILES.md](VENUE_PROFILES.md) for pre-built profiles of common venues.

---

## Phase 5: RQ Synthesis Agent

**Goal**: Draft a cohesive set of 3–5 research questions that form a unified research agenda.

### Narrative coherence requirement

Research questions must NOT be a laundry list. They must either:

**(A) Build progressively** — each RQ answers a prerequisite question for the next:
> RQ1 establishes that X exists → RQ2 explains *why* X varies → RQ3 tests whether an intervention on X changes Y

**(B) Triangulate a core concept** — each RQ illuminates a different facet of one central phenomenon:
> All RQs orbit around "platform trust degradation" from different angles (behavioral, attitudinal, temporal)

State the **core concept** or **spine** of the agenda in one sentence before listing RQs.

### RQ quality criteria

For each proposed RQ, score on:

| Criterion | Question to ask |
|---|---|
| Answerable | Can the dataset, with realistic methods, answer this? |
| Theoretical grounding | Does an identified theory motivate this question? |
| Venue fit | Does this match what the target venue publishes? |
| Novelty type | Does it advance, challenge, or introduce a notion? |
| Cross-field leverage | Does it transplant an idea from an adjacent field? |
| Cohesion | Does it connect to the other RQs in the agenda? |

### Novelty taxonomy

Label each RQ with its contribution type:
- **Advances** — extends existing work to a new context, scale, or population
- **Challenges** — provides evidence against a received finding or assumption
- **Introduces** — proposes a new construct, mechanism, or framework
- **Bridges** — connects two literatures that have not spoken to each other

Draft the RQ set in [RQ_DRAFT.md](RQ_DRAFT.md).

---

## Phase 6: Senior Reviewer Agent

**Goal**: Simulate a rigorous peer review from the perspective of a senior editor or associate editor at the target venue.

Activate the reviewer persona:

> "You are a senior reviewer for [TARGET VENUE] with 15+ years of experience. You have read hundreds of submissions. Your job is to evaluate whether this research agenda merits publication at your venue. Be direct, specific, and constructive. Do not give false praise."

Run the review against [RQ_DRAFT.md](RQ_DRAFT.md) using this rubric:

```
Senior Reviewer Critique:

1. Core contribution clarity
   - Is it immediately clear what this paper adds to the field?
   - Would a reader know what to cite this paper for?

2. Theoretical depth
   - Are the theories merely invoked or actually load-bearing?
   - Are there stronger or more current theories that should be used?

3. Narrative coherence
   - Do the RQs tell a unified story, or do they feel disconnected?
   - What is the "spine" and is it compelling?

4. Identification / credibility
   - Given the dataset constraints, can the claims actually be supported?
   - Are there confounds or alternative explanations that are fatal?

5. Novelty audit
   - What exactly is new? Has this been done before in another venue?
   - Is the cross-field transplant actually novel or already standard?

6. Venue fit
   - Would this paper be desk-rejected, go to review, or be competitive?
   - Which specific papers at this venue does this compete with?

7. Fatal flaws (must fix before resubmission)
8. Major concerns (should fix)
9. Minor suggestions (nice to have)
```

Output the review as [REVIEWER_CRITIQUE.md](REVIEWER_CRITIQUE.md).

---

## Phase 7: RQ Refinement

**Goal**: Revise the research agenda in direct response to the reviewer critique.

For each fatal flaw and major concern in [REVIEWER_CRITIQUE.md](REVIEWER_CRITIQUE.md):
- Either fix it explicitly and note how
- Or argue why it is not a flaw (with evidence from the literature)

Do not make cosmetic changes. If a RQ cannot survive the reviewer's critique with the available data, **drop it** and replace it with one that can.

After revision, run one additional reviewer pass (abbreviated — only fatal flaws check) to confirm the issues are resolved.

Save revised agenda as [RQ_FINAL.md](RQ_FINAL.md).

---

## Phase 8: Final Research Proposal Output

Produce a structured document containing:

```markdown
# Research Agenda: [Dataset Domain]
**Target venue**: [VENUE]
**Dataset**: [Brief description]
**Core concept / spine**: [One sentence]

## Research Questions

### RQ1: [Title]
- **Question**: Full statement
- **Theory**: [Framework name + 1-sentence link]
- **Method**: [Feasible approach given data constraints]
- **Contribution type**: [Advances / Challenges / Introduces / Bridges]
- **Novelty rationale**: [Why this is publishable at target venue]

### RQ2 ... [repeat]

## Narrative arc
[2–3 sentences explaining how the RQs build on each other]

## Key related papers to cite
[5–10 anchor papers with venue, year, and relevance note]

## Identified risks
[Dataset limitations that reviewers will raise + planned mitigations]
```

---

## Feedback loop

After Phase 8, ask the user:
> "Do you want to (a) drill deeper into any one RQ, (b) swap the target venue and re-calibrate, or (c) proceed to outlining a full paper structure?"

This loop can repeat as many cycles as needed.

## Writing guidelines

Follow the write-like-a-human skill if available when producing any prose output, including the final research proposal, narrative arcs, and reviewer critiques. Write in clear, direct language. Avoid jargon unless it is standard in the target venue.
