const { buildResume } = require("./build");
const contact = [
  { text: "Open to relocate" },
  { text: "sayli2402pednekar@gmail.com", url: "mailto:sayli2402pednekar@gmail.com" },
  { text: "8450940260" },
  { text: "linkedin.com/in/SayliPednekar", url: "https://linkedin.com/in/SayliPednekar" },
  { text: "saylipednekar.com", url: "https://saylipednekar.com" },
];
const education = [
  { school: "Georgia Institute of Technology", degree: "M.S., Human-Computer Interaction", date: "May 2025" },
  { school: "Mumbai University", degree: "B.Tech, Computer Engineering", date: "May 2023" },
];
const publications = [
  "S. Pednekar, E. Remillard, W. Rogers. \u201cFinancial Capacity Challenges among Older Adults with Vision Impairment.\u201d Gerontechnology, 2026.",
  "S. Pednekar et al. \u201cGuardians of Luminara: A Game-Based Approach to Scaffolding Independent Reading Comprehension.\u201d Poster, HCI International (HCII), 2026.",
  "S. Pednekar, P. Dhirawani, R. Shah, N. Shekokar, K. Ghag. \u201cVoice-Based Interaction for an Aging Population: A Systematic Review.\u201d 3rd Intl. Conf. on Intelligent Communication & Computational Techniques (IEEE), 2023.",
];
const gtLabMid = {
  head: "Georgia Tech Financial Services Innovation Lab \u2014 Product Designer, AI Systems", dates: "May 2024 \u2013 Jul 2026",
  bullets: [
    "Shipped an AI-assisted credit-agreement decision-support tool used by credit analysts and underwriters that cut review time by 50%.",
    "Redesigned, built, and shipped the lab's website (800+ monthly users) in React with Hygraph, lifting Google PageSpeed scores from 36/79/92/64 to 95/100/100/100 (Performance/Accessibility/Best Practices/SEO).",
    "Aligned design strategy and a compliance roadmap with a PM against KYC, AML, CCPA, and UDAAP requirements, presenting directly to bank stakeholders; ran interviews with underwriters, credit heads, and loan officers to reduce cognitive load and centralize fragmented data.",
    "Synthesized 15+ syndicated credit agreements using Jobs-to-be-Done to define covenant variables, authored annotation schemas with users that engineering and ML later used as reference, and cut design-validation cycles from weeks to days by building a lightweight LLM extraction pipeline and a Figma-to-code workflow.",
  ],
};
const korangleMid = {
  head: "Korangle School Systems \u2014 UX/UI Designer", dates: "Feb 2022 \u2013 Feb 2023",
  bullets: [
    "Owned end-to-end design as sole designer for a school-management SaaS serving 50+ schools, shipping three modules and cutting admin support tickets by 22%.",
    "Built the company's first design system (Figma component library + usage guidelines) and partnered with a four-person engineering team on MVP scope and roadmap.",
  ],
};
const arbiterMid = {
  head: "Arbiter (SimPPL) \u2014 Product Design Consultant", dates: "Apr 2026 \u2013 June 2026",
  bullets: [
    "Redesigned the case study creation flow for an AI investigation platform used by newsrooms and research organizations (Rappler, Deutsche Welle, Ofcom), cutting search-plan failures from ~46% pre-redesign to near-zero post-launch.",
    "Ran the company's first UX audit across 6 surfaces, turning 38 findings into 5 root-cause clusters that shaped the roadmap.",
    "Designed human-in-the-loop workflows \u2014 query refinement, intent validation, confirmation diffs \u2014 so users could steer, correct, and verify AI outputs before acting on them.",
  ],
};
const microsoft = {
  head: "Microsoft Accessibility Insights (Georgia Tech) \u2014 UX Designer & Researcher", dates: "Aug 2023 \u2013 Dec 2023",
  bullets: [
    "Redesigned an accessibility-testing tool's information architecture and data visualizations, cutting developer reporting time by 55%, backed by a mixed-methods study with 7 developers and cognitive walkthroughs with 2 low-vision experts.",
  ],
};
const mid = {
  name: "Sayli Pednekar", title: "Product Designer \u00b7 Fintech & AI Systems", contact, compact: true,
  summary: "Product designer with a computer-engineering and HCI background and deep fintech focus \u2014 AI-assisted credit and lending analysis, and decision-support tools for credit analysts and underwriters, designed within real regulatory constraints (KYC, AML, UDAAP). Roughly three years spent turning complex financial workflows into clear, trustworthy interfaces; builds working React and Cursor prototypes and publishes research on accessible digital finance.",
  skills: [
    { label: "Product & Design", items: "Decision-support & workflow design \u00b7 design systems \u00b7 interaction design \u00b7 information architecture \u00b7 data visualization \u00b7 responsive design \u00b7 accessibility (WCAG)" },
    { label: "Research & Domain", items: "User interviews \u00b7 usability testing \u00b7 mixed-methods analysis \u00b7 workflow mapping \u00b7 regulatory-aware design (KYC, AML, CCPA, UDAAP) \u00b7 financial decision workflows" },
    { label: "AI & Build", items: "Human-in-the-loop AI UX \u00b7 React \u00b7 Next.js \u00b7 HTML/CSS \u00b7 Python \u00b7 Figma \u00b7 Cursor \u00b7 Claude \u00b7 PostHog \u00b7 Jira" },
  ],
  experience: [gtLabMid, arbiterMid, korangleMid, microsoft], education, publications,
};
const junior = {
  name: "Sayli Pednekar", title: "Product Designer \u00b7 Fintech", contact,
  summary: "HCI-trained product designer (M.S. HCI, Georgia Tech, 2025) focused on fintech \u2014 AI-assisted credit and lending tools, decision-support interfaces, and accessibility research in digital finance. Executes end-to-end from wireframes to high-fidelity prototypes with a rigorous eye for design systems, information architecture, and WCAG; a computer-engineering foundation bridges design and code.",
  skills: [
    { label: "Design", items: "Wireframing & high-fidelity prototyping \u00b7 interaction design \u00b7 information architecture \u00b7 design systems \u00b7 data visualization \u00b7 responsive design \u00b7 accessibility (WCAG)" },
    { label: "Research", items: "User interviews \u00b7 usability testing \u00b7 mixed-methods analysis \u00b7 workflow mapping \u00b7 heuristic evaluation \u00b7 cognitive walkthroughs" },
    { label: "Domain & Build", items: "Financial decision workflows \u00b7 regulatory-aware design (KYC, AML, CCPA, UDAAP) \u00b7 React \u00b7 HTML/CSS \u00b7 Python \u00b7 Figma \u00b7 Cursor \u00b7 Claude" },
  ],
  experience: [ gtLabMid, { ...arbiterMid, bullets: [arbiterMid.bullets[0]] }, korangleMid, microsoft ], education, publications,
};
(async () => {
  await buildResume(mid, "/mnt/user-data/outputs/Sayli_Pednekar_Fintech_Resume.docx");
  await buildResume(junior, "/mnt/user-data/outputs/Sayli_Pednekar_Fintech_Analyst_Resume.docx");
})();
