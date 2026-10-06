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
const edtech = {
  name: "Sayli Pednekar", title: "Product Designer \u00b7 Edtech & Learning", contact,
  summary: "Product designer (M.S. HCI, Georgia Tech, 2025) who designs learning products end-to-end \u2014 from a 0-to-1, game-based literacy tool for middle schoolers (B2B2C) to a B2B school-management platform for admins and teachers. Currently a product designer on AI systems at Georgia Tech's Financial Services Innovation Lab. Pairs participatory research with students and educators with strong design-systems and prototyping craft across Figma, React, and Cursor.",
  skills: [
    { label: "Design", items: "0-to-1 product design \u00b7 interaction design \u00b7 design systems \u00b7 information architecture \u00b7 responsive design \u00b7 accessibility (WCAG) \u00b7 data visualization" },
    { label: "Research", items: "Participatory / co-design with users \u00b7 user interviews \u00b7 usability & playtesting \u00b7 surveys \u00b7 mixed-methods analysis \u00b7 personas & journey mapping" },
    { label: "Build & Tools", items: "Figma \u00b7 React \u00b7 HTML/CSS \u00b7 Cursor \u00b7 Claude \u00b7 Python \u00b7 Jira" },
  ],
  experience: [
    { head: "Discovery Education \u2014 Product Designer", dates: "Aug 2024 \u2013 Apr 2025", bullets: [
      "Shipped a 0-to-1, standards-aligned, game-based literacy product for middle schoolers, validated through student and educator playtesting and presented to Discovery Education leadership.",
      "Extended the work into an independent venture, Fable Tales, as founding design engineer building metacognition-driven, accessible reading tools.",
      "Defined the concept \u2014 narrative arcs, mission flow, and a strategy-unlock skill tree \u2014 from discovery research and a sharp framing around helping students independently apply reading-comprehension strategies.",
      "Ran two participatory design workshops with students (n=8) and synthesized 8 teacher interviews, a classroom field visit, and 45 survey responses into personas and core UI flows (passage reading, highlighting, reflection prompts, branching).",
    ] },
    { head: "Korangle School Systems \u2014 UX/UI Designer", dates: "Feb 2022 \u2013 Feb 2023", bullets: [
      "Owned end-to-end design as sole designer for a B2B school-management SaaS serving 50+ schools, shipping three modules and cutting admin support tickets by 22% through redesigned search and filtering.",
      "Built the company's first design system (Figma component library + guidelines), ran usability tests with administrators and teachers, and partnered with a four-person engineering team on MVP scope.",
    ] },
    { head: "Arbiter (SimPPL) \u2014 Product Design Consultant", dates: "Apr 2026 \u2013 June 2026", bullets: [
      "Consulted on a multi-agent AI product, designing human-in-the-loop workflows and building interactive prototypes in Claude and Cursor; ran the company's first UX audit across 6 product surfaces and turned 38 findings into a prioritized design roadmap.",
    ] },
    { head: "Georgia Tech Financial Services Innovation Lab \u2014 Product Designer, AI Systems", dates: "May 2024 \u2013 Jul 2026", bullets: [
      "Designed an AI-assisted decision-support tool end-to-end, building a reusable design system and React/Cursor prototypes and cutting analyst review time by 50%.",
    ] },
  ],
  education,
  publications: [
    "S. Pednekar et al. \u201cGuardians of Luminara: A Game-Based Approach to Scaffolding Independent Reading Comprehension.\u201d Poster, HCI International (HCII), 2026.",
  ],
  extra: { header: "Leadership", lead: "\u201cMessy Thoughts to Tangible Takes\u201d \u2014 Founder & Host.",
    body: "Run a weekly designer/researcher discussion group and blog on technology, learning, and design's role in society (Oct 2025 \u2013 Present)." },
};
(async () => { await buildResume(edtech, "/mnt/user-data/outputs/Sayli_Pednekar_Edtech_Resume.docx"); })();
