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

LinkedIn guest search API | `https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords=..&location=..&f_TPR=r86400&start=0` (detail: `/jobs-guest/jobs/api/jobPosting/<id>`) | Public, no login. About 20 listings per query with company, location and LinkedIn date. Fastest freshness pass; detail endpoint returns the JD and experience level | 2026-10-06 | Highest discovery volume, but LinkedIn dates are often reposts and roughly half the shortlisted roles were not on the company's own board. Always verify on the company page. Rate limit: 429 after about 10 fast requests, so pace at about 3 s apart.
Ashby posting API with pay | `https://api.ashbyhq.com/posting-api/job-board/<slug>?includeCompensation=true` | `publishedAt`, location, workplaceType and salary tier in one call. Best source of date truth. Slugs are often hyphenated (`coram-ai`, not `coramai`) | 2026-10-06 | High. Corrected 5 LinkedIn "this week" dates to 49-108 days.
Greenhouse job detail | `https://boards-api.greenhouse.io/v1/boards/<slug>/jobs/<id>` | Full JD plus `first_published`. Some Indian companies use odd slugs (`razorpaysoftwareprivatelimited`, `envoyglobalinc`). EU boards (`boards-api.eu.greenhouse.io`) return 502 through this environment's proxy; read the `job-boards.eu.greenhouse.io/<slug>` page instead | 2026-10-06 | High for date and JD.
Playwright Chromium (browser method) | `require('/opt/node22/lib/node_modules/playwright')`, `executablePath: '/opt/pw-browsers/chromium'`, `--no-sandbox` | Renders JS career pages (Pinpoint, Keka, Phenom, Zoho, custom). Read page text and anchor hrefs, no login | 2026-10-06 | Works. Needed for Lyzr, Jupiter, Runable, Codewalla, athenahealth.
Phenom career sites | e.g. `careers.athenahealth.com/us/en/job/<req>` | JSON-LD `datePosted` readable with plain curl | 2026-10-06 | Good for company date.
SmartRecruiters posting API | `https://api.smartrecruiters.com/v1/companies/<CompanyId>/postings/<postingId>` | `releasedDate`, location, full JD. The cross-company search endpoint returns 404 | 2026-10-06 | Good once the posting id is known (e.g. Nielsen).
YC jobs pages | `ycombinator.com/jobs/location/india`, `/jobs/role/designer`, `/companies/<slug>/jobs` | Embedded `data-page` JSON gives minExperience, visa, salaryRange, relative createdAt. Works with curl | 2026-10-06 | Medium. Most India YC design roles were over 90 days old.
Keka board detection | `https://<slug>.keka.com/careers/` | 200 means the board exists, 302 means it does not. Render with Playwright to list roles (Jupiter, Skydo, Truemeds, Signzy, Niyo, Mintifi are on Keka) | 2026-10-06 | Good for confirming a role is or is not on an Indian company's own board.
Wellfound role pages | `wellfound.com/role/l/product-designer/<city>` | Readable through WebFetch (curl gets 403): company, salary, experience, relative age | 2026-10-06 | Medium. Ages are repost-prone.
Peak XV portfolio board | `careers.peakxv.com/jobs/<company>` | Portfolio jobs board (Consider platform). Job list did not render through fetch; try Playwright | 2026-10-06 | Untested with a browser.

## Discovered companies (Cowork maintains this section)

Add entries as: `Company | Careers URL | Domain | How found | Date added | Design roles seen`

Lyzr AI | https://careers.lyzr.ai/ | Enterprise AI agents | LinkedIn India search | 2026-10-06 | Product Designer (UI/UX), Bengaluru, 2-4 yrs (verified, 2026-09-15)
athenahealth India | https://careers.athenahealth.com/us/en/c/product-ux-jobs | Healthcare software GCC (Bengaluru) | LinkedIn India search | 2026-10-06 | UX Designer (2-4 yrs) (verified); also Lead UX Designer, Lead UX Design Researcher
StarRez | https://job-boards.greenhouse.io/starrez | Student-housing SaaS (Hyderabad) | LinkedIn India search | 2026-10-06 | Product Designer, Hyderabad, 5+ yrs
Envoy Global | https://job-boards.greenhouse.io/envoyglobalinc | Immigration SaaS (Hyderabad) | LinkedIn India search | 2026-10-06 | Product Designer, Hyderabad, 2-4 yrs
Bjak | https://jobs.ashbyhq.com/bjakcareer | Insurance and fintech (SEA, India postings) | Ashby site: search | 2026-10-06 | Product Designer (UI/UX) and UI Designer - AI Neobank, India; board has 3,000+ roles, many per-country duplicates
AiPrise | https://jobs.ashbyhq.com/aiprise | KYB / KYC / AML compliance AI (YC S22) | YC jobs, Ashby search | 2026-10-06 | Product Designer II, Bengaluru, INR 25-35L (2026-08-10, stale)
Ema | https://jobs.ashbyhq.com/ema | Agentic AI employees (Bengaluru) | Ashby site: search | 2026-10-06 | Product designer (2026-07-24, stale)
Atlys | https://jobs.ashbyhq.com/atlys | AI-first visa / travel (Delhi) | Wellfound | 2026-10-06 | Product Designer (2026-07-31, stale)
Tekion | https://jobs.ashbyhq.com/tekion | Automotive enterprise software (Bengaluru, Chennai) | LinkedIn India search | 2026-10-06 | Product Designer II (2026-08-14, stale); Senior roles
Coram AI | https://jobs.ashbyhq.com/coram-ai | AI video security (Bangalore) | LinkedIn India search | 2026-10-06 | Product Designer, 5+ yrs (2026-08-18, stale)
Nielsen India | https://careers.smartrecruiters.com/TheNielsenCompany | Media data products GCC (Bengaluru) | LinkedIn India search | 2026-10-06 | Product Designer II (2026-09-02, stale)
Deepgram | https://jobs.ashbyhq.com/deepgram | Voice AI developer platform (US remote) | Ashby feed scan | 2026-10-06 | Product Designer II (US remote, visa unclear)
Cardboard | https://jobs.ashbyhq.com/cardboard | AI video editor (YC W26, Bengaluru / SF) | YC jobs | 2026-10-06 | Founding Designer (2026-06-20, over 90 days)
Jupiter | https://jupiter.keka.com/careers | Neobank (Keka board) | LinkedIn India search | 2026-10-06 | None on the Keka board (LinkedIn listing not on the board)
Skydo | https://skydo.keka.com/careers/ | Cross-border payments for exporters (Keka) | LinkedIn India search | 2026-10-06 | None on the Keka board
Signzy / Niyo / Mintifi / Truemeds | https://<slug>.keka.com/careers/ | Fintech / health on Keka | Keka board probe | 2026-10-06 | Niyo: Visual Designer only (137 days); others none
Stack Wealth | https://stackwealth.in/careers/jobs | AI wealth advisor (YC) | LinkedIn India search | 2026-10-06 | Page says no jobs currently available
EnKash | https://www.enkash.com/careers | Spend-management fintech (Mumbai / Pune) | LinkedIn India search | 2026-10-06 | UI/UX Designer (AI-Native), unverified
Leadrat | https://leadrat.com/careers | Real-estate AI CRM (Hyderabad) | LinkedIn India search | 2026-10-06 | Product Designer 4-8 yrs, unverified
Ionic Wealth | https://www.ionicwealth.com/careers | Wealth platform (Bengaluru) | LinkedIn India search | 2026-10-06 | Product Designer 3-5 yrs, unverified
XenonStack | https://talent.xenonstack.com/jobs/Careers | Agentic AI foundry (Zoho Recruit board) | LinkedIn India search | 2026-10-06 | Product Designer - AI Experiences, not on the Zoho board
iDream Education (iPrep) | https://www.idreameducation.org/ | Edtech (Gurgaon) | LinkedIn India search | 2026-10-06 | Product Designer 1-3 yrs, unverified
Codewalla | https://www.codewalla.com/jobs | AI-native product studio (Chennai) | Web search | 2026-10-06 | Product Designer on LinkedIn only; company jobs page lists engineering roles only
Runable | https://runable.com/careers | SMB AI platform (Bangalore) | LinkedIn India search | 2026-10-06 | Product Designer on LinkedIn only; careers page lists engineering roles
Nava | (none found) | AI-native GPU cloud (Bengaluru) | LinkedIn India search | 2026-10-06 | Product Designer 3-8 yrs, unverified
Candescent | (Workday / own site, not located) | Digital banking software (Bengaluru) | LinkedIn batch 2 | 2026-10-06 | Product Designer - Fi Admin (6+ yrs); Product Designer - Design Systems (4-6 yrs)
ABCD (Aditya Birla Capital Digital) | (not located) | Financial services digital (Maharashtra) | LinkedIn batch 2 | 2026-10-06 | Product Designer; Associate Product Designer (manager-leaning text)
Ionic / Seismic / JazzX AI / Emergent / MaxIQ (Gyaan) / GreytHR / Cornerstone OnDemand / Guidewire / Thermo Fisher | (not located) | B2B SaaS and AI in India | LinkedIn batches | 2026-10-06 | Mostly 4+ yrs or senior; Cornerstone 2-5 yrs (INR 6-10L estimate)
Moniepoint | https://job-boards.eu.greenhouse.io/moniepoint | African fintech with India-remote design roles | Greenhouse scan | 2026-10-06 | Staff Product Designer, Remote India (2026-08-27, staff level)
Peak XV Surge portfolio, Inc42 / Entrackr / Tracxn funding lists | see Tier 1 | Discovery lists | Web search | 2026-10-06 | Arivihan (AI edtech, Series A, Indore), Seeds Fincap, Linux Laboratories surfaced as funded; no design roles checked yet

## Low-yield sources (Cowork maintains this section)

Add entries as: `Source | Why it's low-yield | Date`

Cutshort | Dominated by recruiter listings (Staffnixcom, Talent Pro, Gravity, Peak Hire) with hidden employers and "Tier 1 design institute only" rules; named-company roles were mostly stale | 2026-10-06
Instahyre | Curl returns 403; Google results were mostly old or closed listings | 2026-10-06
Indeed India | Returns 401 to logged-out fetch | 2026-10-06
Glassdoor, Behance, Himalayas, startup.jobs, WeWorkRemotely | 403 to logged-out fetch | 2026-10-06
Naukri, Foundit | Pages are JS shells with no listing text through fetch; `site:naukri.com/job-listings` returned no job pages | 2026-10-06
Hirect, Designer Hangout, UX Jobs Board | Unreachable or board unavailable | 2026-10-06
Otta / Welcome to the Jungle | Login wall | 2026-10-06
Workable jobs API | 429 rate limit; `site:apply.workable.com` returned mostly non-India or agencies | 2026-10-06
Google `site:` for Darwinbox, Keka, Freshteam, Zoho Recruit | Darwinbox: no hits. Keka: only marketing pages. Freshteam / Zoho: small companies and agencies, no Indian product-company design roles | 2026-10-06
YC India design roles | Nearly all over 90 days old (only AiPrise within range) | 2026-10-06
LinkedIn as a date source | Dates shift on repost (Tekion, Coram, StarRez, Envoy, Cardboard, Ema, Atlys); use only to discover, never to date | 2026-10-06
