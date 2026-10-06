# Literature Scout Protocol

## Search strategy

Use the Dataset Constraint Card to extract 3–5 seed keywords. Then run parallel searches:

### Search pass 1: Direct domain
Query: `[domain] + [outcome variable] + [population]`
Target: Google Scholar, Semantic Scholar, ACL Anthology (for NLP venues), SSRN (for social science)
Filter: 500+ citations OR published in last 2 years at target-adjacent venues

### Search pass 2: Method transplant
Query: `[method used in dataset analysis] + [adjacent field]`
Goal: Find papers that used similar methods in a different domain

### Search pass 3: Theory application
Query: `[candidate theory name] + empirical`
Goal: Find how the theory has been operationalized in prior work

### Search pass 4: Venue-specific
Query: `site:[venue proceedings URL]` + domain keywords
Goal: Understand what this specific venue has already published on this topic

## Extraction template (per paper)

```
Paper:
- Title, authors, year, venue
- RQ posed (verbatim if possible)
- Theory used
- Dataset type (experimental / observational / survey / log data / etc.)
- Key finding (one sentence)
- Cited by N papers
- Relevance zone: Core / Adjacent / Distant
- Cross-field transplant potential? Y/N — explain
```

## Synthesis output

After extracting 20–40 papers, produce:

1. **Saturation map**: Which questions are well-answered already?
2. **Gap map**: Which questions are posed but not answered well?
3. **Blank spots**: Which questions have not been asked at all?
4. **Cross-field opportunities**: Methods or theories from adjacent fields not yet applied here
