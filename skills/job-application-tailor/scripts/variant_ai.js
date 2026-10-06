const { buildResume } = require("./build");
const contact = [
  { text: "Open to relocate" },
  { text: "sayli2402pednekar@gmail.com", url: "mailto:sayli2402pednekar@gmail.com" },
  { text: "8450940260" },
  { text: "linkedin.com/in/SayliPednekar", url: "https://linkedin.com/in/SayliPednekar" },
  { text: "saylipednekar.com", url: "https://saylipednekar.com" },
];
const skills = [
  { label: "AI & Product", items: "Human-in-the-loop & agentic workflow design \u00b7 AI UX patterns (uncertainty, source citations, confirmation diffs, failure states) \u00b7 prompt design \u00b7 design systems \u00b7 interaction design \u00b7 information architecture \u00b7 data visualization" },
  { label: "Research", items: "Usability testing \u00b7 user interviews \u00b7 mixed-methods analysis \u00b7 heuristic evaluation \u00b7 cognitive walkthroughs \u00b7 workflow mapping" },
  { label: "Build & Tools", items: "React \u00b7 Next.js \u00b7 HTML/CSS \u00b7 JavaScript \u00b7 Python \u00b7 Figma \u00b7 Cursor \u00b7 Claude \u00b7 v0 \u00b7 PostHog \u00b7 Git \u00b7 Jira" },
];
const arbiter = {
  head: "Arbiter (SimPPL) \u2014 Product Design Consultant", dates: "Apr 2026 \u2013 June 2026",
  bullets: [
    "Redesigned the case study creation flow for an AI investigation platform used by newsrooms and research organizations (Rappler, Deutsche Welle, Ofcom), cutting search-plan failures from ~46% pre-redesign to near-zero post-launch.",
    "Ran the company's first UX audit across 6 product surfaces, turning 38 findings into 5 root-cause clusters that shaped the design roadmap.",
    "Designed human-in-the-loop workflows \u2014 AI query refinement, intent validation, entity configuration, and a net-new edit-scope feature \u2014 so journalists could steer, correct, and verify agent outputs before generation.",
    "Built production-grade interactive prototypes in Claude and Cursor implementing multi-state generation, version history, confirmation diffs, and failure-state handling, replacing static Figma handoff as the engineering spec.",
  ],
};
const gtLab = {
  head: "Georgia Tech Financial Services Innovation Lab \u2014 Product Designer, AI Systems", dates: "May 2024 \u2013 Jul 2026",
  bullets: [
    "Shipped an AI-assisted credit-agreement decision-support tool that cut analyst review time by 50%.",
    "Redesigned, built, and shipped the lab's website (800+ monthly users) in React with Hygraph, lifting Google PageSpeed scores from 36/79/92/64 to 95/100/100/100 (Performance/Accessibility/Best Practices/SEO).",
    "Led end-to-end UX for the credit tool, mapping a complex analyst review workflow into a structured decision-support interface and building a data-driven design system for uncertain AI outputs.",
    "Cut design-validation cycles from weeks to days by building the CreditSeer workflows directly \u2014 a lightweight LLM extraction pipeline (GPT prompts plus annotation schemas authored with analysts and underwriters) and a Figma-to-code path \u2014 later used by engineering and ML as reference.",
  ],
};
const discovery = {
  head: "Discovery Education \u2014 Product Designer", dates: "Aug 2024 \u2013 Apr 2025",
  bullets: [
    "Shipped a 0-to-1, standards-aligned literacy product for middle schoolers, validated through student and educator playtesting and presented to Discovery Education leadership.",
    "Built the concept through discovery research and two participatory design workshops with students (n=8).",
  ],
};
const korangle = {
  head: "Korangle School Systems \u2014 UX/UI Designer", dates: "Feb 2022 \u2013 Feb 2023",
  bullets: [
    "Owned end-to-end design as sole designer for a school-management SaaS serving 50+ schools, shipping three modules and cutting admin support tickets by 22% through redesigned search and filtering.",
    "Built and maintained the company's first design system \u2014 a Figma component library with usage guidelines.",
  ],
};
const education = [
  { school: "Georgia Institute of Technology", degree: "M.S., Human-Computer Interaction", date: "May 2025" },
  { school: "Mumbai University", degree: "B.Tech, Computer Engineering", date: "May 2023" },
];
const extra = {
  header: "Leadership", lead: "\u201cMessy Thoughts to Tangible Takes\u201d \u2014 Founder & Host.",
  body: "Run a weekly designer/researcher discussion group and blog on technology, internet trends, and design's role in society (Oct 2025 \u2013 Present).",
};
const mid = {
  name: "Sayli Pednekar", title: "Product Designer (AI Systems)", contact,
  summary: "Product designer with a computer-engineering and HCI background who closes the loop on AI systems: builds working React, Cursor, and Claude prototypes fast, tests them with real users \u2014 analysts, underwriters, journalists \u2014 and folds what breaks straight back into the design. Roughly three years across fintech, journalism, and SaaS turning agentic systems into interfaces people can steer and trust.",
  skills, experience: [arbiter, gtLab, discovery, korangle], education, extra,
};
const junior = {
  name: "Sayli Pednekar", title: "Product Designer (AI Systems)", contact,
  summary: "HCI-trained product designer (M.S. HCI, Georgia Tech, 2025) who builds AI-powered tools end-to-end \u2014 prototyping fast in React and Cursor, testing with real users, and folding what she learns straight back into the design. Designs human-in-the-loop workflows for agentic systems where users steer, correct, and verify AI outputs, with a computer-engineering foundation that bridges design and code.",
  skills, experience: [arbiter, gtLab, discovery, korangle], education, extra,
};
(async () => {
  await buildResume(mid, "/mnt/user-data/outputs/Sayli_Pednekar_AI_Systems_Resume.docx");
  await buildResume(junior, "/mnt/user-data/outputs/Sayli_Pednekar_AI_Systems_Junior_Resume.docx");
})();
