# Search Query Library

This file defines WHAT to search. The seed queries are a starting point. Cowork is expected to expand this library over time. What counts as a good role is defined in `job-search.md`; where to search is in `search-sources.md`.

Cities to rotate through: Mumbai, Bangalore (Bengaluru), Pune, Hyderabad, Delhi NCR (Gurgaon, Noida), Chennai, "Remote India".

Run each query family across cities. Run at least 30 distinct queries per run, then expand.

---

## Recency (use on every platform and on Google)

- **Google:** use the Tools > "Past 24 hours" and "Past week" filters (URL parameter `tbs=qdr:d` for 24 hours, `qdr:w` for a week). Run the 24-hour and week passes first.
- **LinkedIn Jobs (public search):** `f_TPR=r86400` for the past 24 hours, `f_TPR=r604800` for the past week.
- **Indeed:** `fromage=1` (1 day), `fromage=7` (7 days).
- **Other boards:** use the "date posted" filter if there is one; otherwise sort by newest.

---

## Seed queries

### Core product design
"Product Designer" {city}
"UX Designer" {city}
"UX/UI Designer" {city}
"Product Design" India jobs
"Product Designer" remote India
"Product Designer" hiring India (past week)

### AI
"Product Designer" AI {city}
"AI Product Designer" India
"UX Designer" AI India
"Product Designer" LLM OR agents OR copilot India
"Product Designer" "human-in-the-loop"
"Product Designer" "AI agents" OR "GenAI" India

### Fintech
"Product Designer" fintech {city}
"Product Designer" financial services India
"Product Designer" lending OR credit OR banking OR payments OR insurance India
"UX Designer" fintech India
"Product Designer" KYC OR AML OR compliance

### B2B / SaaS
"Product Designer" B2B SaaS India
"Product Designer" enterprise India
"UX Designer" B2B India
"Product Designer" "design system" India

### Edtech
"Product Designer" edtech India
"Product Designer" learning OR education platform India

### Early-stage / YC
"Founding Designer" India
"First Designer" startup India
"Product Designer" "Y Combinator" India OR remote
"Product Designer" seed OR "Series A" OR "Series B" India
"Design lead" OR "Founding Designer" startup (check experience requirement)

### Google / ATS discovery (run with Past 24 hours, then Past week)
site:jobs.lever.co "Product Designer" India
site:boards.greenhouse.io "Product Designer" India
site:job-boards.greenhouse.io "Product Designer" India
site:jobs.ashbyhq.com "Product Designer" India
site:jobs.workable.com "Product Designer" India
site:apply.workable.com "Product Designer" India
site:careers.smartrecruiters.com "Product Designer" India
site:myworkdayjobs.com "Product Designer" India
site:keka.com OR site:zohorecruit.com "Product Designer"
site:wellfound.com/jobs "Product Designer" India

### Indian ATS and platform discovery (run with Past 24 hours, then Past week)
site:keka.com "Product Designer"
site:zohorecruit.com OR site:zohorecruit.in "Product Designer" OR "UX Designer"
site:darwinbox.in OR site:darwinbox.com "Product Designer" OR "UX Designer"
site:freshteam.com "Product Designer" OR "UX Designer"
site:naukri.com/job-listings "Product Designer" {city}
site:naukri.com/job-listings "UX Designer" {city}
site:instahyre.com "Product Designer" OR "UX Designer"
site:cutshort.io "Product Designer"
"Product Designer" careers Bangalore OR Mumbai OR Pune OR Hyderabad OR Gurgaon "apply now" (past week)
"Product Designer" "Experience: 2-5 years" OR "3-5 years" India
{Indian company} careers design

### Company discovery
{company} raised OR funding AI OR fintech India (then check their careers page)
"Series A" OR "Series B" India AI startup hiring designer
recently funded Indian fintech startups (past month)
YC W25 OR S25 OR W26 India startups design
{VC name} portfolio jobs design

### Company career discovery
"Product Designer" careers India
"UX Designer" careers {city}
{company} careers design

### US (secondary)
"Product Designer" AI "visa sponsorship"
"Product Designer" fintech "visa sponsorship"
"Product Designer" "open to international" remote

---

## Expansion rules

During every run, generate new queries from:

- Job titles found in good matches (strong or exceptional)
- Companies discovered, and their competitors or portfolio siblings
- Industry terminology that appears in good job descriptions
- New ATS domains seen
- Indian startup terminology and hiring phrases
- Funding announcements in AI, fintech and edtech

Do not rerun queries that keep returning the same results. Retire them to the Low-yield section.

---

## Learned queries (Cowork maintains this section)

Add entries as: `Query | Date added | Why added | Yield (relevant roles found)`

Only append. Do not edit the seed queries above unless I ask.

Yield counts are roles surfaced before verification, and "verified" means confirmed open on the company's own page.

LinkedIn guest search, `f_TPR=r86400`, keywords "Product Designer" / "UX Designer" / "UX UI Designer" / "AI Product Designer", location India | 2026-10-06 | 24-hour pass per the recency rules | About 60 design-titled roles, mostly senior, agency or entry-level; first lead for Skydo, EnKash, Runable, Coram
LinkedIn guest search, `f_TPR=r604800`, "Product Designer" per city (Bengaluru, Mumbai, Pune, Hyderabad, Gurugram, Noida, Chennai) | 2026-10-06 | City rotation | Best discovery query family: Lyzr, athenahealth, StarRez, Envoy, Tekion, Nielsen all came from here
LinkedIn guest search, `f_TPR=r2592000`, "Product Designer lending" / "payments" / "insurance" / "wealth OR investing" India | 2026-10-06 | Fintech domain terms from job-search.md | Jupiter, Stack Wealth, Ionic Wealth, ABCD, L&T Finance, Candescent; none of these could be verified open on the company page, or they were senior (L&T 7-12 yrs, Candescent 4-6+ yrs)
LinkedIn guest search, 30 days, "Product Designer KYC OR compliance" India | 2026-10-06 | Regulated-domain signal | No new roles; AiPrise came from YC / Ashby instead
LinkedIn guest search, 30 days, "Product Designer LLM OR agents OR copilot" India | 2026-10-06 | AI signal | Lyzr (verified), XenonStack (unverified)
LinkedIn guest search, 30 days, "AI UX Designer" India | 2026-10-06 | AI signal | HPE AI Experience (UX) Designer (unverified, big corporate), Teradata and Target (senior)
LinkedIn guest search, 30 days, "Product Designer II" India | 2026-10-06 | Level-targeted | Tekion, Nielsen, Truemeds, Brigit; Tekion and Nielsen verified but stale
LinkedIn guest search, 30 days, "UX Researcher designer", "Conversation Designer", "Design Technologist", "UX Engineer design" India | 2026-10-06 | "Judge by description" titles | Little: Amazon Design Technologist (engineering-heavy), Okta Senior UXR, Emergent UXR
LinkedIn guest search, 7 days, "Product Designer visa sponsorship AI" / "fintech visa sponsorship" United States; "Product Designer remote international" Worldwide | 2026-10-06 | US secondary | Many US roles (Ramp, Ivo, Brigit, Generative, Effective AI); sponsorship rarely stated in listing text, so every US role needs a manual visa check
`site:jobs.ashbyhq.com "Product Designer" India` plus Ashby feed scan with hyphenated slugs | 2026-10-06 | Ashby gives true publishedAt | Bjak, Ema, AiPrise, Atlys, Coram AI, Tekion
`{company} careers` for each discovered Indian company, then render the page with a browser | 2026-10-06 | Confirms open and dated on company page | Caught 3 closed or non-existent LinkedIn listings (Stack Wealth, Jupiter, Skydo)
`https://<slug>.keka.com/careers/` probe for an Indian company slug | 2026-10-06 | Detect Keka boards | Jupiter, Skydo, Truemeds, Signzy, Niyo, Mintifi found on Keka; no relevant design roles

## Low-yield queries (Cowork maintains this section)

Add entries as: `Query | Date retired | Why`

`site:naukri.com/job-listings "Product Designer" {city}` | 2026-10-06 | Returned no Naukri job pages, only Dribbble profiles and Wikipedia
`site:darwinbox.in OR site:darwinbox.com "Product Designer" OR "UX Designer"` | 2026-10-06 | No Darwinbox job pages indexed
`site:keka.com "Product Designer" OR "UX Designer"` | 2026-10-06 | Returned Keka's own marketing and one agency posting (Techdome); use the subdomain probe and browser render instead
`site:instahyre.com "Product Designer" OR "UX Designer"` | 2026-10-06 | Mostly closed or years-old listings
`site:cutshort.io "Product Designer" fintech OR AI` | 2026-10-06 | Recruiter listings with hidden employers
`site:myworkdayjobs.com "Product Designer" Bengaluru OR Hyderabad OR Pune OR Mumbai` | 2026-10-06 | Mostly non-India or non-design roles
`site:careers.smartrecruiters.com "Product Designer" India` | 2026-10-06 | Returned company careers pages, not role pages
`site:apply.workable.com "Product Designer" India` | 2026-10-06 | Mostly non-India roles and agencies
`"Product Designer" careers Bangalore ... "apply now"` style generic phrases | 2026-10-06 | Return aggregator hub pages (Wellfound, Glassdoor, bebee) with no dated roles
