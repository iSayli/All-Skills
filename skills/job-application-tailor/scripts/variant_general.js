const { buildResume } = require("./build");
const contact = [
  { text: "saylipednekar.com", url: "https://www.saylipednekar.com/" },
  { text: "linkedin.com/in/SayliPednekar", url: "https://www.linkedin.com/in/saylipednekar/" },
  { text: "sayli2402pednekar@gmail.com", url: "mailto:sayli2402pednekar@gmail.com" },
  { text: "8450940260" },
  { text: "Open to relocate" },
];
const education = [
  { school: "Georgia Institute of Technology", degree: "Master of Science in Human Computer Interaction", date: "Aug 2023 \u2013 May 2025" },
  { school: "Mumbai University", degree: "Bachelor of Technology in Computer Engineering", date: "Aug 2019 \u2013 May 2023" },
];
const publications = [
  "S. Pednekar, E. Remillard and W. Rogers, \u201cFinancial Capacity Challenges among Older Adults with Vision Impairment: Technology Implications,\u201d Gerontechnology, 25(3), 2026.",
  "S. Pednekar et al., \u201cGuardians of Luminara: A Game-Based Approach to Scaffolding Independent Reading Comprehension,\u201d Poster, HCI International (HCII), 2026.",
  "S. Pednekar, P. Dhirawani, R. Shah, N. Shekokar and K. Ghag, \u201cVoice-Based Interaction for an Aging Population: A Systematic Review,\u201d 3rd International Conference on Intelligent Communication and Computational Techniques, 2023.",
];
const general = {
  name: "Sayli Pednekar",
  title: "Product Designer",
  contact,
  compact: true,
  order: ["summary", "experience", "education", "skills", "publications"],
  summary: "Product Designer with an HCI/engineering background specializing in building human-centered, decision-support AI tools across edtech, fintech, and accessibility. Experienced in mixed-methods research, rapid AI prototyping, and design systems.",
  experience: [
    {
      head: "Arbiter (SimPPL) \u2014 Product Design Consultant",
      dates: "Apr 2026 \u2013 June 2026",
      bullets: [
        "Shipped a redesigned case-study creation flow and a net-new edit-scope feature for an AI investigation platform used by newsrooms and research organizations (Rappler, Deutsche Welle, Ofcom), cutting search-plan failures from ~46% pre-redesign to near-zero post-launch.",
        "Ran the company's first UX audit (PostHog session replays, click behavior, heatmaps) across 6 product surfaces, synthesizing 38 findings into 5 root-cause clusters that shaped the design roadmap and engineering sprint.",
        "Designed human-in-the-loop workflows that let journalists steer, correct, and verify agent outputs, and built production-grade prototypes in Claude and Cursor.",
      ],
    },
    {
      head: "GT Financial Services Innovation Lab \u2014 Product Designer (AI Systems)",
      dates: "May 2024 \u2013 Jul 2026",
      bullets: [
        "Led end-to-end UX for an AI-assisted credit-agreement analysis tool for small banks, presenting directly to bank stakeholders and reducing review time by 50%.",
        "Redesigned, built, and shipped the lab website (React, Hygraph, Node.js) serving 800+ monthly users, improving Google PageSpeed scores from 36/79/92/64 to 95/100/100/100 (Performance/Accessibility/Best Practices/SEO).",
        "Crafted a design system accommodating uncertain AI outputs, loading states, source-linked citations, and error conditions.",
        "Built a lightweight LLM extraction pipeline and a Figma-to-code workflow for CreditSeer, cutting design-validation cycles with credit analysts from weeks to days.",
      ],
    },
    {
      head: "Discovery Education \u2014 Product Designer | Georgia Tech Sponsored Project",
      dates: "Aug 2024 \u2013 Apr 2025",
      bullets: [
        "Led 0\u21921 design of a B2B2C, standards-aligned, AI-assisted, game-based literacy product addressing reading comprehension issues for middle schoolers.",
        "Conducted research sessions (interviews, co-design workshops, usability testing) with students and teachers.",
        "Published a poster at HCI International 2026 on the game-based approach to scaffolding independent reading comprehension.",
      ],
    },
    {
      head: "Microsoft Accessibility Insights \u2014 UX Designer + Researcher | Georgia Tech Sponsored Project",
      dates: "Aug 2023 \u2013 Dec 2023",
      bullets: [
        "Reduced developer reporting time by 55% by redesigning the tool's information architecture, hierarchy, and data visualizations.",
        "Conducted a mixed-methods study with 7 developers and cognitive walkthroughs with 2 low-vision accessibility experts.",
      ],
    },
    {
      head: "Korangle School Systems \u2014 UX/UI Designer | Startup",
      dates: "Feb 2022 \u2013 Feb 2023",
      bullets: [
        "Shipped 3 end-to-end modules (Vehicle Management, Legacy Data Migration, Fee Payment) as the sole designer for a school-management SaaS platform serving 50+ schools.",
        "Reduced admin support tickets by 22% by improving search, filtering, and navigation across the platform.",
      ],
    },
  ],
  skills: [
    { label: "Design", items: "Product Thinking, Interaction Design, Design Systems (variables, style guides, component libraries), Data Visualization, Responsive Design (desktop + mobile), Accessibility (WCAG)" },
    { label: "Research", items: "User Interviews, Surveys, Inductive and Deductive Data Analysis, Cognitive Walkthroughs, Heuristic Evaluation, Workflow Mapping, Usability & A/B Testing, Qualitative & Quantitative Research" },
    { label: "Dev + Tools", items: "HTML, CSS, JavaScript, React, Next.js, Node.js, Python, Figma, Cursor.ai, Claude, v0, Webflow, Jira, GitHub" },
  ],
  education,
  publications,
};
(async () => { await buildResume(general, "/mnt/user-data/outputs/Sayli_Pednekar_General_Resume.docx"); })();
