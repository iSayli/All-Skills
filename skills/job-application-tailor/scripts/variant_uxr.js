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
const uxr = {
  name: "Sayli Pednekar", title: "UX Researcher \u00b7 Mixed-Methods & Product Strategy", contact,
  compact: true, order: ["summary", "experience", "skills", "education", "publications"],
  summary: "Mixed-methods UX researcher with a computer-engineering and HCI background turning qualitative and quantitative evidence into product strategy, scoping, and design decisions. One to three years across fintech, edtech, journalism, and accessibility \u2014 owning study planning, generative and evaluative research, and synthesis \u2014 with engineering fluency to work directly with data and technical constraints.",
  experience: [
    { head: "Arbiter (SimPPL) \u2014 Product Design Consultant", dates: "Apr 2026 \u2013 June 2026", bullets: [
      "Redesigned the case study creation flow for an AI investigation platform used by newsrooms and research organizations (Rappler, Deutsche Welle, Ofcom), cutting search-plan failures from ~46% pre-redesign to near-zero post-launch, verified via a 90-day PostHog analysis.",
      "Ran the company's first UX audit across 6 surfaces (38 findings \u2192 5 root-cause clusters) via PostHog analysis, then built a 100+ point observational interview framework and pilot usability evaluations to separate content confusion from design confusion.",
    ] },
    { head: "Georgia Tech Financial Services Innovation Lab \u2014 Product Designer, AI Systems", dates: "May 2024 \u2013 Jul 2026", bullets: [
      "Shipped an AI-assisted credit-agreement decision-support tool that cut analyst review time by 50%.",
      "Redesigned, built, and shipped the lab's website (800+ monthly users) in React with Hygraph, lifting PageSpeed Performance/Accessibility/Best Practices/SEO from 36/79/92/64 to 95/100/100/100.",
      "Led research planning and feature scoping with a PM and faculty supervisors \u2014 study plans and workflow aligned with KYC, AML, CCPA, and UDAAP \u2014 presenting directly to bank stakeholders.",
      "Planned generative interviews with underwriters, credit heads, and loan officers and synthesized 15+ syndicated credit agreements via Jobs-to-be-Done with ML engineers to define covenant variables.",
    ] },
    { head: "Discovery Education \u2014 Product Designer", dates: "Aug 2024 \u2013 Apr 2025", bullets: [
      "Shipped a 0-to-1, standards-aligned literacy product for middle schoolers, validated through student and educator playtesting.",
      "Built the concept through discovery research, 8 teacher interviews, a field visit, 45 survey responses, and two participatory workshops with students (n=8).",
    ] },
    { head: "IxDA \u2014 UX Researcher", dates: "Jan 2024 \u2013 Apr 2024", bullets: [
      "Led a five-researcher study on how interface design shapes news trust among young adults \u2014 designed a Qualtrics survey (700+ cleaned responses) and 10 semi-structured interviews, ran thematic analysis, and presented at the IxDA Atlanta seminar.",
    ] },
    { head: "Microsoft Accessibility Insights (Georgia Tech) \u2014 UX Designer & Researcher", dates: "Aug 2023 \u2013 Dec 2023", bullets: [
      "Redesigned an accessibility-testing tool's IA and data visualizations, cutting developer reporting time by 55% (presented at AccessU 2024).",
      "Backed the redesign with a mixed-methods learnability study with 7 developers and cognitive walkthroughs with 2 low-vision experts.",
    ] },
    { head: "Korangle School Systems \u2014 UX/UI Designer", dates: "Feb 2022 \u2013 Feb 2023", bullets: [
      "Cut admin support tickets by 22% by refining information architecture and search based on user interviews and moderated usability tests with administrators and teachers.",
      "Partnered with the founder and a four-person engineering team to scope the MVP and translate technical constraints into prioritized product decisions.",
    ] },
  ],
  skills: [
    { label: "Research Methods", items: "Generative & evaluative research \u00b7 user interviews \u00b7 usability testing (moderated & unmoderated) \u00b7 surveys \u00b7 participatory & co-design \u00b7 field studies \u00b7 cognitive walkthroughs \u00b7 heuristic evaluation \u00b7 A/B testing" },
    { label: "Analysis & Strategy", items: "Thematic & affinity analysis \u00b7 inductive/deductive coding \u00b7 survey & quantitative analysis \u00b7 behavioral analytics \u00b7 Jobs-to-be-Done \u00b7 journey & empathy mapping \u00b7 research planning \u00b7 MVP scoping & prioritization \u00b7 stakeholder storytelling" },
    { label: "Tools & Technical", items: "Qualtrics \u00b7 PostHog \u00b7 Figma \u00b7 Python \u00b7 React / HTML / CSS \u00b7 Cursor \u00b7 Claude \u00b7 Jira \u00b7 GitHub \u2014 engineering background for working directly with data and technical constraints" },
  ],
  education, publications,
};
(async () => { await buildResume(uxr, "/mnt/user-data/outputs/Sayli_Pednekar_UX_Researcher_Resume.docx"); })();
