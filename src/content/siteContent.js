export const site = {
  company: "Skytz Consulting",
  legal: "A brand of Laurasia LLC",
  address: [
    "Laurasia LLC / Skytz Consulting",
    "1309 Coffeen Avenue STE 1200",
    "Sheridan, WY 82801",
    "United States of America",
  ],
  email: "info@skytz-consulting.com",
  phone: "+1 307-429-0181",
  regions: ["Germany", "Switzerland", "United States"],

  // SEO meta for each page (buyer-intent keywords)
  seo: {
    home: {
      title: "Sales Engineer Recruiter | Skytz Consulting – DE · CH · US",
      description:
        "Direct search for Sales Engineers, Technical Sales, and Leadership roles. Specialist recruiter for engineering companies in Germany, Switzerland, and the USA since 2015.",
    },
    hire: {
      title: "Hire Sales Engineers & Technical Sales Leaders | Skytz Consulting",
      description:
        "Executive search for Sales Engineering and commercial leadership roles. 85%+ placements via direct outreach. Engineering companies only.",
    },
    testimonials: {
      title: "Testimonials – Sales Engineering & Leadership Search | Skytz Consulting",
      description:
        "Reference clients include Megger, Happersberger Otopront, SWR. Multi-year recruiting partnerships. Reference calls available.",
    },
    about: {
      title: "About Skytz Consulting – Sales Engineer Headhunter",
      description:
        "Specialist recruitment firm for Sales Engineering and leadership roles. Direct search, not database fishing. Founded 2015.",
    },
    contact: {
      title: "Contact Skytz Consulting – Discuss a Search",
      description:
        "Start a conversation about your Sales Engineering or leadership hiring needs. Direct contact, no forms, no gatekeepers.",
    },
    candidates: {
      title: "For Candidates | Skytz Consulting",
      description:
        "We do not accept speculative CVs. Candidates are approached directly for specific searches where their background is relevant.",
    },
    privacy: {
      title: "Privacy Policy | Skytz Consulting",
      description: "Privacy policy for Skytz Consulting, a brand of Laurasia LLC.",
    },
    terms: {
      title: "Terms & Conditions | Skytz Consulting",
      description: "Terms of use for the Skytz Consulting website.",
    },
  },

  // Proof points - lead with most compelling
  proof: [
    { label: "Clients who came back", value: "95%", subtext: "repeat business" },
    { label: "Placed via direct search", value: "85%+", subtext: "not job boards" },
    { label: "Operating since", value: "2015", subtext: "10 years" },
  ],

  // Hero copy - conversion-optimized
  positioning: {
    headline: "Sales Engineering Search for Companies That Can't Afford a Bad Hire",
    subhead:
      "We place Sales Engineers, Technical Sales leaders, and senior commercial roles for engineering companies. Direct search. Shortlist you can hire from. No database roulette.",
    // Risk-reduction statement
    riskLine: "A bad sales hire costs 6–12 months and a territory. We reduce that risk.",
  },

  // Differentiation - why not another recruiter
  whyUs: [
    {
      title: "We only do this",
      text: "Sales Engineering and technical commercial roles in engineering environments. That's it. No generalist overflow.",
    },
    {
      title: "Direct search, not job boards",
      text: "85%+ of our placements come from candidates we approached directly. We map the market and go find them.",
    },
    {
      title: "We document risks early",
      text: "Compensation misalignment. Relocation hesitation. Cultural fit concerns. You see them before the final round, not after.",
    },
    {
      title: "We say no",
      text: "If the role isn't placeable, the timeline isn't realistic, or we're not the right fit — we tell you upfront.",
    },
  ],

  services: [
    {
      title: "Sales Engineering & Technical Sales",
      bullets: [
        "Sales Engineers / Application Engineers",
        "Technical Sales / Key Account Management",
        "International Sales (direct & channel)",
      ],
    },
    {
      title: "Leadership & Executive Search",
      bullets: [
        "Head of Sales / VP Sales / Commercial Director",
        "Business Unit Leadership",
        "Confidential searches when discretion matters",
      ],
    },
    {
      title: "Selected Technical Roles",
      bullets: [
        "Hard-to-fill engineering profiles",
        "Only where direct search makes sense",
        "Case-by-case evaluation",
      ],
    },
  ],

  approach: [
    {
      step: "1",
      title: "Role calibration",
      text: "We start with the hiring manager. Define success, failure modes, must-have signals — beyond the job description.",
    },
    {
      step: "2",
      title: "Market mapping",
      text: "Where do the right people sit? Competitors, adjacent industries, geo constraints. We build the target list.",
    },
    {
      step: "3",
      title: "Direct outreach",
      text: "Targeted approach, structured qualification, documented risks. No spray-and-pray.",
    },
    {
      step: "4",
      title: "Shortlist delivery",
      text: "Candidates you can actually hire — with reasoning, trade-offs, and risk notes. Not just CVs.",
    },
  ],

  // References with stronger framing
  references: [
    {
      company: "Megger Germany GmbH",
      contact: "Friedrich Enkert, Managing Director",
      highlight: "Partnership since 2015. Multiple executive and sales engineering hires.",
      outcome: "Repeat client — 8+ years",
    },
    {
      company: "Happersberger Otopront",
      contact: "Carlo Happersberger, CEO",
      highlight: "International Sales leadership. Recommendation based on business impact analysis.",
      outcome: "Strategic hire",
    },
    {
      company: "Megger / SebaKMT",
      contact: "Sascha Kuflik, Business Unit Director",
      highlight: "Head of Business Unit search. Multi-stage evaluation with stakeholder alignment.",
      outcome: "Leadership placement",
    },
    {
      company: "SWR Engineering",
      contact: "Dirk Heesen, CEO",
      highlight: "Leadership hiring for expansion. Technical depth + cultural fit focus.",
      outcome: "Growth hire",
    },
    {
      company: "Box02 LLC",
      contact: "Sebastian Wolff, Founder & CEO",
      highlight: "Marketing leadership (performance). Strong integration + ROI orientation.",
      outcome: "Executive placement",
    },
  ],

  // Friction-reducing statements
  friction: {
    noCommitment: "No commitment to start a conversation.",
    noForms: "No forms. Direct email or call.",
    noSpam: "We don't share your information.",
    timeline: "Most searches take 6–12 weeks. We'll tell you if yours is different.",
  },

  cta: {
    primary: { label: "Discuss a Search", to: "/hire" },
    secondary: { label: "See References", to: "/testimonials" },
  },
};
