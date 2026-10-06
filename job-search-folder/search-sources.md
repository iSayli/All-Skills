# Job Search Sources

This file defines WHERE to look. No list here is exhaustive. The goal is to cover every group below and to discover more sources, not to scan one group.

## Coverage requirement

Every run must attempt every group in Tiers 1-5 and record the result in the coverage line (see `job-evaluation.md`). Do not stop after one group produces results. Scanning a fixed list of company career boards is not enough. Most new roles show up first on job platforms and through company discovery.

---

## Reading listings (methods, in order)

If one method fails, try the next before calling a source unreachable:

1. Web search and fetch tools
2. Browser tool (built-in browser or Claude in Chrome) for pages the fetch tool can't open or that are JavaScript-heavy
3. Public ATS JSON feeds when they respond (for example Greenhouse `boards-api.greenhouse.io/v1/boards/<slug>/jobs`, Lever `api.lever.co/v0/postings/<slug>`, Ashby `api.ashbyhq.com/posting-api/job-board/<slug>`). They give full text, posted date and salary.

Never log in, create accounts, solve CAPTCHAs, or submit forms. If a source needs a login, read what is publicly visible and mark it "login required" in the coverage line.

---

## Tier 1: Company discovery (find companies, then their roles)

Do not guess company slugs from a fixed list. Discover companies first, then check their careers pages.

- **YC:** Work at a Startup, ycombinator.com/jobs, YC company directory filtered by recent batches (W/S 2024, 2025, 2026) and by industry (AI, fintech, B2B, education)
- **Funding news:** Inc42, Entrackr, YourStory, TechCrunch India, Economic Times Tech, The Ken, Tracxn / Crunchbase lists of recently funded Indian and global startups in AI, fintech, SaaS and edtech
- **VC portfolio job boards and portfolio lists:** Peak XV (Surge), Accel India, Lightspeed India, Elevation, Blume, Nexus, Matrix, Stellaris, Kalaari, A91, Speciale Invest, a16z, Sequoia, General Catalyst, plus any others found
- **Lists of top startups and "best places to work for designers"** in India, and AI / fintech company lists
- **Company mentions** on LinkedIn posts such as "we're hiring a product designer", design newsletters, and design communities

Add every newly discovered relevant company to the Learned section below, with its careers URL.

## Tier 2: Direct company sources

- Company career pages
- ATS boards: Greenhouse, Lever, Ashby, Workable, SmartRecruiters, Workday, Rippling, Recruitee, Teamtailor, Keka, Zoho Recruit, Freshteam, Darwinbox, and any other company career system
- Discover ATS-hosted roles through Google `site:` searches limited to the past week (see `search-queries.md`)

## Tier 2b: Indian-company sources (mandatory; do not skip)

Greenhouse, Lever and Ashby skew toward startups, many of them US-based. Most Indian product companies hire through other systems or their own pages. Cover these explicitly so the results aren't dominated by one kind of company.

**Indian ATS and career systems** (find roles via Google `site:` searches, since many pages are public even when the platform's own search needs a login):
- Keka (`*.keka.com/careers`), Zoho Recruit (`*.zohorecruit.com`, `*.zohorecruit.in`), Darwinbox (`*.darwinbox.in`, `*.darwinbox.com`), Freshteam (`*.freshteam.com/jobs`), Greythr, Pocket HRMS, Skillate, Recruiterflow, Hirect, plus any others found
- Companies' own careers pages (for example `careers.<company>.com`, `<company>.com/careers`, `jobs.<company>.com`)

**Indian job platforms**
- Naukri (public job listing pages found through Google), Instahyre (public job pages), Cutshort, Hirect, Foundit, Indeed India, LinkedIn India, Wellfound India

**Indian company discovery.** Check careers pages for design openings at established and growing Indian product companies, and discover more. Starting points by domain (treat these as a seed list, verify each is actually hiring, and keep finding others):
- Fintech: Razorpay, PhonePe, CRED, Groww, Zerodha, Juspay, Cashfree, Setu, Pine Labs, Paytm, Slice, Jupiter, Fi, Navi, KreditBee, BharatPe, Perfios, Signzy, Yubi, M2P, Zeta, Open, Niyo, Jar
- AI / B2B SaaS: Sarvam, Krutrim, Observe.ai, Freshworks, Zoho, Postman, Chargebee, BrowserStack, CleverTap, MoEngage, Uniphore, Yellow.ai, Gupshup, Haptik, Darwinbox, LeadSquared, Whatfix, Rocketlane, SpotDraft, Atlan, Hasura, Sprinklr
- Edtech: PhysicsWallah, upGrad, Eruditus, Unacademy, Teachmint, Classplus, Cuemath, Scaler, Masai, Leap, SpeakX, Seekho
- Plus: Indian unicorns and soonicorns, GCC / global capability centers of product companies in Bangalore, Hyderabad, Pune and NCR with product design teams, and Indian startups from the VC portfolios above

**Mix check.** The coverage line must show how many candidates came from Indian-company sources versus ATS-only global startups. If Indian-company sources produced almost nothing, say whether that is real or because the sources couldn't be read.

## Tier 3: Job platforms (always attempt; these carry the freshest listings)

- LinkedIn Jobs (public, logged-out search; use the past-24-hours and past-week filters)
- Naukri, Indeed, Glassdoor, Foundit
- Wellfound, Cutshort, Instahyre, Hirect
- Y Combinator Work at a Startup
- Otta / Welcome to the Jungle, Himalayas, Remote boards that hire in India
- Other Indian and international boards found during research

## Tier 4: Design-specific sources

- UX Jobs, Dribbble Jobs, Behance Jobs, Designer Hangout, Designer Jobs boards
- Design community job channels and newsletters (public pages only)
- Accessibility, civic tech and edtech job boards for those niches

## Tier 5: Google discovery

Use Google, restricted to the past 24 hours and past week where possible, to find roles not on the major boards:

- ATS pages via `site:` searches
- Startup career pages and small boards
- University and startup ecosystem pages
- Industry-specific boards (fintech, edtech, AI, accessibility)

---

## Source preference when a job appears in several places

1. Direct company careers page
2. Company's ATS / application page
3. Job board
4. Aggregator

Always report the direct application URL when one exists.

---

## Rules

- Verify a role is still open on the company's own page before reporting it, and take the posted date from there.
- Aggregators often show stale or reposted listings. Don't trust their dates over the company's.
- Do not restrict research to the sources named here.
- If a new source repeatedly produces relevant roles, add it to Learned sources. If a source repeatedly produces only stale, duplicate or irrelevant roles, note it under Low-yield sources.

---

## Learned sources (Cowork maintains this section)

Add entries as: `Source | URL | What it's good for | Date added | Yield note`

Only append. Do not edit the tiers above unless I ask.

(none yet)

## Discovered companies (Cowork maintains this section)

Add entries as: `Company | Careers URL | Domain | How found | Date added | Design roles seen`

(none yet)

## Low-yield sources (Cowork maintains this section)

Add entries as: `Source | Why it's low-yield | Date`

(none yet)
