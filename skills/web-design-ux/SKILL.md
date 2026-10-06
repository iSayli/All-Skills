---
name: web-design-ux
description: Design and build web applications that communicate data-driven narratives through intentional visual hierarchy, semantic color systems, analytical context, and transparent data access. Use this skill whenever the user asks you to build, redesign, or improve a website, dashboard, landing page, or any web-based interface. Also trigger when the user mentions color schemes, layout, UX, data visualization, marketing copy, web narrative, or wants to make a site more professional, marketable, or communicative. This skill synthesizes lessons from iterative multi-project web development including academic research dashboards, trust-and-safety platforms, and SaaS landing pages.
---

# Web Design & UX Skill

This skill governs how you design, build, and refine web applications. It applies to dashboards, landing pages, data visualization platforms, marketing sites, and any web-based interface. The principles here were distilled from 66+ rounds of iterative refinement across research dashboards (DevOps Discourse Analysis, STM Digital Identity), trust-and-safety platforms (Arbiter), and SaaS landing pages.

## Non-negotiable

All prompts must be logged to `sayli-prompts.md` (or the project's prompt log) in raw form. Use `scratchpad/` for plans and research. Document all web searches. Version files (v1, v2, v3) unless the user specifies otherwise.

---

## I. Before You Touch Any Code

### 1. Competitive research first, design second

Before proposing any UI, research 3-5 comparable products or platforms in the same domain. Study their visual language, information hierarchy, and what they do well vs. poorly. Document findings in `scratchpad/competitive-research-v1.md` with screenshots or descriptions and source URLs.

**Why:** The Arbiter project required studying Graphika, OpenMeasures, TrustLab, Palantir, Dataminr, and academic labs before any design work. The DevOps dashboard was modeled after the STM discourse-analysis webapp at discourse-analysis.vercel.app. Design in a vacuum produces generic output. Design informed by market research produces something that feels professional because it follows conventions users already expect.

**Example:** Before building the DevOps /investigate page, the reference site's EDA page was studied via Playwright: its 3-tab structure (Corpus Overview, Topic Investigation, Entity Investigation), pagination pattern, and data drill-down approach were adapted for the devops dataset.

### 2. Read the data before designing anything

Never design a visualization or page layout before reading the actual data. Load a sample, check column types, value ranges, cardinality, and edge cases. The design must serve the data, not the other way around.

**Why:** In the Arbiter project, the agent mistook Bluesky data for Telegram. In AI-Overview-Tracker, google.com appeared as a top citation because it was a redirect wrapper. In the DevOps project, the outlier rate (34.6%) and partner-issued dominance (94%) fundamentally shaped what the dashboard needed to communicate.

### 3. Plan the information architecture before components

Write a page-level plan: what pages exist, what story each tells, what data each needs, and how they connect. This is the site's narrative structure. Individual components are implementations of this structure, not the other way around.

**Example (DevOps dashboard):**
- Overview: "What is this dataset?" (big picture stats, top topics, company breakdown)
- Topics: "What themes emerged?" (searchable topic catalog)
- Company/Compare: "How do companies differ?" (per-company and cross-company analysis)
- Timeline: "How did it evolve?" (temporal patterns, three waves)
- Multihoming: "Who is platform-locked?" (entity-platform distribution)
- Insights: "What does it mean?" (6 research-grounded analytical visualizations)
- Investigate: "Can I verify this?" (transparent access to raw data)
- Methodology: "How was this built?" (reproducibility documentation)

---

## II. Color is Language

### 4. Design a semantic color system before writing any chart code

Colors must carry meaning. Before implementing any visualization, create a shared color constants module (e.g., `lib/colors.ts`) that maps concepts to colors. Every chart imports from this module. Never hardcode hex values in page components.

**Mandatory color categories:**
- **Brand/entity colors** (e.g., company brand colors, platform brand colors)
- **Theme/category colors** (e.g., AI = violet, Security = red, Cloud = blue)
- **Status colors** (e.g., active = green, disappeared = red)
- **Scale colors** (e.g., high/medium/low mapped to blue/amber/red)
- **Neutral color** for single-series charts where category isn't relevant
- **Issuer/source type colors** if the data has provenance categories

**Why:** In the DevOps project, the user's guidance was explicit: "colors mean things to people... in good research, you will use colors to your advantage and imply certain categories or certain classes or certain sizes of company based on the color." Before the unified color system, charts used random HSL gradients, ad-hoc hex arrays, and inconsistent platform count colors. After: Amazon is always orange, Microsoft always blue, Alphabet always green — readers build a mental model after seeing the pattern 2-3 times.

**Rules:**
- Same concept = same color everywhere. If AWS is orange on the Overview page, it must be orange on Timeline, Multihoming, Compare, and Investigate.
- Use brand-aligned colors when they exist (AWS orange, Azure blue, GCP green, GitHub violet).
- Use colorscale constants for heatmaps (e.g., "YlOrRd" for diverging intensity, "Blues" for sequential).
- Never use more than 10 distinct colors in a single chart. If you need more, group or paginate.
- Muted/lighter versions of a color = secondary status. Full saturation = primary/active.

### 5. Consistent color carries across pages and modalities

If your site has slides, PDFs, or exports, the same color system should apply. If Arbiter uses dark theme with HSL-based CSS variables, every chart within Arbiter respects that theme. If DevOps uses Tailwind-friendly hex values, those same values appear in Plotly charts.

---

## III. Every Plot Must Communicate

### 6. Every visualization needs a takeaway, not just a title

A chart without context is decoration. Below every plot, add 1-3 sentences explaining:
- **What pattern the reader should notice** (the "what")
- **Why it matters** (the "so what")
- **What broader trend it reflects** (the "now what")

**Format:** Bold "Takeaway:" followed by concise, domain-informed prose.

**Why:** The user's guidance was: "just providing someone with a plot doesn't mean they will understand what's on the plot." The DevOps dashboard went from zero takeaways to 25+ across 8 pages. Each takeaway required domain knowledge: understanding that Kubernetes is CNCF-governed and platform-neutral, that Elastic is AWS-biased due to managed Elasticsearch, that the SolarWinds breach drove security discourse spikes.

**Example (good):**
> **Takeaway:** Kubernetes (CNCF-governed, open-source) shows the most balanced cross-platform distribution, consistent with its role as the de-facto container orchestration standard. Elastic skews heavily toward AWS, reflecting its deep integration with Amazon's managed Elasticsearch service.

**Example (bad):**
> This chart shows entity-platform distribution. Different entities have different distributions.

### 7. Do follow-up research to write informed takeaways

You cannot write a good takeaway from chart data alone. Before writing takeaways, research:
- What the technologies/companies/entities actually are
- What categories they belong to (open-source vs proprietary, CNCF vs non-CNCF)
- What services they sell or what platforms they run on
- What industry events (breaches, launches, acquisitions) explain temporal patterns
- What the academic literature says about the observed pattern

Use web search. Document findings in `scratchpad/`. Reference specific facts in takeaways.

### 8. Descriptions before charts, takeaways after

Each visualization should have:
1. **Pre-chart description** (1-2 sentences): What the chart shows, how to read it, what the axes/colors mean
2. **The chart itself**
3. **Post-chart takeaway** (1-3 sentences): What the data reveals, why it matters

This "sandwich" pattern ensures comprehension regardless of whether the reader is a domain expert or a newcomer.

---

## IV. Layout and Visual Hierarchy

### 9. Progressive disclosure: overview first, details on demand

Structure information from general to specific:
1. **Landing/Overview**: Big picture stats, hero metrics, key findings (the "executive summary")
2. **Themed pages**: Each exploring one analytical dimension (topics, companies, timeline)
3. **Investigation/Raw data**: Drill-down access to underlying evidence
4. **Methodology**: How everything was built (for reproducibility)

Users should be able to stop at any level and walk away with understanding proportional to their investment.

### 10. Use a card-based layout with consistent spacing

Cards (`rounded border bg-white p-4-6 shadow-sm`) create visual grouping. Each card = one idea or one chart. Use consistent Tailwind spacing:
- `space-y-6` between sections
- `gap-4` or `gap-6` within grids
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` for responsive grids
- `mb-4` between description and chart within a card

### 11. Hero sections establish page identity

Each major page should have a hero banner establishing its purpose:
- Gradient backgrounds differentiate pages visually (blue-to-teal for overview, indigo-to-blue for investigation, purple-to-pink for insights)
- Hero contains page title + 1-2 sentence description
- Stat cards immediately below the hero give quick quantitative orientation

### 12. Responsive design is non-negotiable

Every layout must work on mobile. Use Tailwind's responsive prefixes (`md:`, `lg:`) for grid breakpoints. Charts should have minimum heights but scale with container width. Tables should be horizontally scrollable on mobile (`overflow-x-auto`).

---

## V. Writing Marketing and Explanatory Copy

### 13. Copy is functional, not decorative

Every sentence on the site must do one of:
- **Orient** the reader (what am I looking at?)
- **Explain** the methodology (how was this produced?)
- **Interpret** the finding (what does this mean?)
- **Persuade** the reader (why should I care?)

Cut anything that doesn't serve one of these functions. Avoid filler phrases like "in this section we explore" or "as can be seen in the chart below."

### 14. For landing pages: benefit-driven, not feature-driven

Features: "We use BERTopic with HDBSCAN clustering."
Benefits: "Discover what 1,623 press releases reveal about how Fortune 500 companies adopt DevOps."

Lead with what the user gains, not what the technology does. Technical details go on methodology or "how it works" sections.

### 15. For research dashboards: precision over persuasion

Academic audiences punish overclaiming. Use hedging language when appropriate: "suggests," "consistent with," "this pattern indicates." State sample sizes and limitations. If a finding comes from 8 data points, say so.

### 16. Tone matches audience

- **Academic dashboard**: Formal, precise, hedged, citation-aware
- **SaaS landing page**: Professional, confident, benefit-driven, action-oriented
- **Trust-and-safety platform**: Authoritative, data-centric, journalist-friendly (no jargon)

Read the existing copy on the site before writing new copy. Match its register.

---

## VI. Data Visualization Specifics

### 17. Chart type selection

| Data shape | Chart type | When |
|------------|-----------|------|
| Ranked categories | Horizontal bar | Top N topics, documents by company |
| Part-of-whole | Pie or donut | Issuer type distribution (<5 categories) |
| Temporal trends | Line + markers | Topic frequency over time, entity mentions |
| Category comparison | Grouped bar | Cross-company topic prevalence |
| Matrix/correlation | Heatmap | Company-topic matrix, entity-platform matrix |
| Distribution | Histogram | Topic size distribution |
| Network | Scatter (node-link) | Entity co-occurrence |
| Process flow | Mermaid diagram | Data pipeline, methodology |

### 18. Chart formatting rules

- Y-axis headroom: add 10-20% above max value to prevent annotation cutoff
- Log scale when data spans >2 orders of magnitude
- Tick angle -45 for long x-axis labels
- Legend orientation "h" (horizontal) below chart, or "v" (vertical) to the right with adequate margin
- Margin: `l: 120-300` for horizontal bars with labels; `b: 80-200` for angled x-labels
- Hover templates: `"%{y}<br>%{x} documents<extra></extra>"` (include units)
- Height: minimum 300px for simple charts, 400-500px for complex ones

### 19. Heatmap conventions

- Sequential data (counts, frequencies): use "Blues" colorscale
- Diverging data (comparisons, deviations): use "YlOrRd"
- Always show colorbar with clear title
- Set `zmin` and `zmax` to prevent outliers from washing out the scale

---

## VII. Component Architecture

### 20. Shared components reduce drift

Create reusable components for recurring patterns:
- `Card` — consistent container with title and children
- `PlotlyChart` — wrapper with sensible defaults (transparent bg, responsive)
- `StatCard` — metric display (value + label)
- Color constants module — single source of truth for all colors

When you find yourself copying chart configuration across pages, extract it into a shared utility.

### 21. Data fetching pattern

For static data dashboards:
- Store pre-generated JSON in `public/data/`
- Use SWR hooks (`useSWR`) for client-side fetching with caching
- Define TypeScript interfaces for every data shape
- Keep all hooks in a single `lib/data.ts` file

For dynamic data:
- API routes in `app/api/`
- Server components where possible
- Client components only for interactive charts

### 22. Never violate React's Rules of Hooks

`useMemo`, `useState`, and all hooks must be called before any conditional `return` statement. If your component has an early return for loading states, move all hooks above it. Use null-safe defaults (`data ?? {}`, `items ?? []`).

**Why:** This caused two pages (/timeline and /investigate) to crash in production with React error #310. The fix is trivial but the error is invisible during SSR — only appears on client-side hydration.

---

## VIII. Testing and Deployment

### 23. Playwright-verify every route before deploying

After every change:
1. `npm run build` — must pass with zero errors
2. `npx next start -p <port>` — start production server
3. Use Playwright (headless) to visit every route, check for:
   - HTTP 200 status
   - No `pageerror` events (React crashes)
   - No "Application error" in body text
   - Content actually renders (body text length > 50 chars)
4. Only then commit and push

**Why:** Two pages were deployed broken (React #310 error) because the build passed but the client-side rendering crashed. Build success !== working application.

### 24. Never push without local verification

This is the single most repeated correction in the user's history. Build, serve, test every route. For Python scripts: run the script, verify output files exist and contain expected data. Then commit.

---

## IX. Iterative Refinement Process

### 25. Design evolves through named phases

Real design work goes through predictable phases:
1. **MVP/Scaffold**: Get pages rendering with data, minimal styling
2. **Narrative injection**: Add context, descriptions, findings — transform from data display to story
3. **Transparency layer**: Add investigation/verification tools so users can check claims
4. **Visual polish**: Unified color system, consistent spacing, responsive layout
5. **Communication refinement**: Takeaways, informed annotations, marketing copy

Don't try to do phase 5 work during phase 1. Each phase builds on the previous.

### 26. When asked to improve communication, do research first

The user's instruction: "you might want to also do a couple of follow-up searches for each plot that you're assessing. You might want to reread about the technologies or identify what categories the technologies fall into." Improvement without domain understanding produces generic, unhelpful text.

---

## X. Anti-Patterns to Avoid

### 27. Never use random/procedural colors

HSL gradients (`hsl(${210 + i * 8}, 70%, ${45 + i * 2}%)`) produce colors that carry no meaning. Always map colors to concepts.

### 28. Never leave a chart without context

A bar chart labeled "Documents by Company" with no description or takeaway forces the reader to interpret on their own. They will either misinterpret or disengage.

### 29. Never hardcode the same color value in multiple files

If `#3b82f6` appears in 6 different page files, changing the color scheme requires 6 edits. Use a shared constants module.

### 30. Never design for desktop only

Mobile traffic is often 40%+. Every grid, chart, and table must degrade gracefully.

### 31. Never assume the audience knows the domain

Even for academic dashboards, explain what Kubernetes is (container orchestration), what CNCF means (Cloud Native Computing Foundation), what "partner-issued" means (vendor announces, not the company). First-time visitors need orientation.

---

## Playwright Testing Requirements

When testing web pages, dashboards, landing pages, or any HTML output with Playwright:

1. Always serve files via a local HTTP server (never test from file:// protocol). YouTube embeds and many CDN resources require an HTTP origin.
2. Wait for the full page to load including all JavaScript frameworks. For reveal.js, wait until `Reveal.isReady()` returns true.
3. Expand ALL fragments/animations on each slide before checking layout. Use `while(Reveal.nextFragment()){}` to reveal all content.
4. Check every page/slide for content overflow: `scrollHeight > clientHeight + 5` means content is cut off.
5. Check every image for overflow: if `img.clientHeight > section.clientHeight * 0.8`, the image is too large.
6. Take screenshots of every page/slide and visually verify them before marking tests as passed.
7. Test interactive elements: click buttons, expand dropdowns, try different configurations.
8. Never mark a test as passed based solely on the absence of JavaScript errors. Visual verification is required.
9. Test at realistic viewport sizes (1440x900 for laptops, 1920x1080 for projectors).
10. Navigate the site through its own UI (nav links, sidebar, header menus, buttons) rather than jumping directly to URLs. If a page has no navigable path from the homepage, document this as a missing navigation issue. The goal is to test the user journey, not just individual pages in isolation.

---

## XI. Typography and Spacing (Learned from Arbiter Technical Reports, 8 iterations)

### 33. Font sizes must be readable at first glance

**Minimum font sizes:**
- Body text in reports/articles: 15-16px (`text-[15px]` or `text-base`)
- Body text in cards/panels: 14px (`text-[14px]`)
- Captions, labels, uppercase headers: 12-13px (`text-[12px]` or `text-[13px]`)
- Badge/pill text: 11px (`text-[11px]`) absolute minimum
- NEVER use text-[9px] or text-[10px] for anything

**Why:** Across 8 iterations of technical reports, font sizes defaulted to 10-12px because the design was treated as a dashboard (dense data display) rather than a report (readable prose). The user corrected this: "Why such a small font size? You can do good design with slightly larger, readable font." Reports are meant to be read, not scanned at a glance.

**Rule:** When in doubt, go one size up. 14px is almost always better than 12px. The cost of slightly larger text is zero, the cost of unreadable text is a user who leaves.

### 34. Every container needs explicit bottom padding

When content is placed inside fixed-height or min-height containers (cards, tiles, mosaic blocks), always add explicit bottom padding (`pb-6` or `pb-8`) so text never touches the bottom edge. Use `min-h-[Xpx]` instead of `h-[Xpx]` so content can expand if needed.

**Why:** In the Arbiter technical reports, theme mosaic tiles used `h-20` (80px fixed height) with `p-4` padding. Short content fit, but the bottom text was flush against the container edge with zero breathing room. This persisted through 8 iterations because Playwright screenshots at thumbnail resolution (720px) masked the issue.

**Rule:** After setting any container height, mentally add 2 lines of text plus the padding and verify it fits. Never use fixed `h-*` for content containers; use `min-h-*` with generous bottom padding.

### 35. Verify at actual viewport resolution, not thumbnails

Playwright screenshots captured at 1440x900 but reviewed at ~360px width in chat thumbnails. At that scale, spacing issues, font readability, and padding problems are invisible.

**Rule:** When reviewing screenshots, open them at actual resolution. If reviewing in chat, explicitly check:
- Can you read the smallest text in the screenshot?
- Is there visible spacing between every element and its container edge?
- Do any elements touch or overlap their boundaries?

If any answer is no, fix before committing.

### 36. Gap and spacing consistency

Use a consistent spacing scale throughout. Pick either 4px or 8px as the base unit:
- Between items in a list: `gap-3` (12px) or `gap-4` (16px)
- Between sections: `mb-20` (80px) or `py-20`
- Between a heading and its content: `mb-6` (24px)
- Inside cards: `p-5` (20px) or `p-6` (24px)
- Between cards in a grid: `gap-4` (16px) minimum

**Never** use `gap-1` (4px) or `gap-2` (8px) between content cards. That spacing is for inline badges or icon groups, not for cards that contain multi-line text.

---

## XII. Iterative Quality Standards (Learned from Arbiter, V1-V8)

### 37. First iteration should meet baseline quality

The first version of any design should already have:
- Readable font sizes (see rule 33)
- Proper spacing and padding (see rule 34)
- Human-sounding copy (not jargon-heavy or AI-sounding)
- Source attribution on charts
- Finding-oriented chart titles (state the insight, not the chart type)
- Mobile responsive layout

Do not plan to fix these in later iterations. They are baseline expectations, not polish.

**Why:** Across the Arbiter project, issues like "text-[10px] everywhere", "no padding on tiles", "AI-sounding subtitles", and "no source attribution on charts" persisted through 5+ iterations. Each one was a baseline quality requirement that should have been present in V1.

### 38. Reviews must produce actionable, scoped fixes

When reviewing a design (using this skill or any review process), produce fixes in three tiers:
1. **Critical bugs** (function name wrong, build errors, broken interactions)
2. **Readability issues** (font size, spacing, padding, contrast, mobile layout)
3. **Content issues** (AI-sounding language, missing context, wrong framing)

Fix all critical and readability issues in the same iteration. Do not defer readability to a future version.

### 39. Design for the audience, not the data

Reports for journalists should feel like journalism (readable prose, evidence inline, clear narrative).
Dashboards for analysts should feel like tools (dense data, filters, sortable tables).
Landing pages for prospects should feel like marketing (benefit-driven, action-oriented, clean).

The single most common mistake is designing a report that looks like a dashboard, or a landing page that looks like documentation. Ask "who reads this?" before choosing font sizes, information density, and interaction patterns.

### 40. Evidence chains require platform-native presentation

When showing social media posts as evidence, they must look like the platform they came from:
- Twitter/X: Dark background (#000), rounded card, X logo SVG, handle + display name, gray timestamp, gray interaction counts
- YouTube: Darker background (#0f0f0f), red play button, channel avatar, video title, channel name
- Bluesky: Sky blue accent, butterfly icon

Custom-styled cards that don't match platform aesthetics reduce trust. Readers should instantly recognize "this is a tweet" without thinking about it.

### 41. Interactive elements require explicit nudges

Users do not explore unless you tell them to. Every clickable element (chart bar, actor name, theme tile, domain card) needs:
- A visible affordance (arrow icon, underline, hover state)
- Text nudge nearby ("Click any actor to explore their posting patterns")
- Visual feedback on hover (border color change, subtle scale)

Do not assume users will discover interactions. If the interaction is important to the experience, make it impossible to miss.

### 42. Sidebar/panel depth must be introduced in the main content

If your sidebar has 5 layers of investigation depth, introduce this concept in the main report body. Show the user that deeper investigation is possible before they click into the sidebar. A brief callout ("This report supports 5 levels of investigation depth") or a visible depth indicator gives users a reason to explore.

---

## XIII. Data-Driven Report Design (Distilled from NYT, Graphika, Bellingcat, ProPublica research)

### 43. Chart titles state the finding, not the chart type

**Bad:** "Top 10 actors by interaction share"
**Good:** "MetaWin captures 39.4% of all engagement from just 4 posts, while 74 posts from Live Trading Malayalam barely register"

The title is the most-read element of any chart. Use it to communicate the insight. Readers who only scan titles should still understand the key findings.

### 44. Source attribution on every visualization

Every chart, table, and data card needs a source line: "Source: Arbiter analysis of 6,345 posts across Twitter, YouTube, and Bluesky." This is the single biggest trust signal according to CHI 2025 research on data visualization trust (83.8% of participants cited clarity/sourcing as the primary trust factor).

### 45. Every number needs a comparison

Raw numbers mean nothing without context. "59.1M interactions" is meaningless. "59.1M interactions from 4 posts (14.8M per post, 7,000x the median)" is informative. Always provide:
- A denominator (% of total)
- A comparison (median, average, or a named benchmark)
- Or a ratio (per post, per day, per platform)

### 46. Write methodology that protects IP while building trust

State what the system DOES ("surfaces claims for human review") not HOW it does it ("uses GPT-4o with AFaCTA classification via BM25 retrieval"). Mention that methods are "grounded in peer-reviewed research published at leading ML and NLP conferences." Make proprietary methods available to enterprise partners. Acknowledge limitations explicitly.

### 47. Scalable fact-checking framing

Do not say "we fact-check" or "we identify misinformation." Say "we fact-source": our system surfaces claims and groups related ones together so that one journalist's fact-check can scale to thousands of posts across platforms. The problem we solve is that fact-checks do not scale. Our system makes them scale.

---

## Prompt Logging

ALWAYS log every raw prompt from the user to `sayli-prompts.md` in the project directory. Log prompts exactly as received, in sequence, with a numbered heading for each. This is non-negotiable.
