export const projectCategories = [{ title: "Website & Tools", id: "website-tools" }, { title: "Data", id: "data" }];
export const pipe = (line: string) => line.split("|").map((x) => x.trim());
export const site = {
  name: "Nina Bianca Nailon",
  note: "today:\n- check the file\n- check it again\n- coffee",
  sideNotes: ["made by hand, checked twice", "ask me about goAML", "say hi!"],
  scribbles: { intro: "the only laundering I do is on Sundays", websites: "read the footnotes. always.", data: "KYC = know your ~~customer~~ coffee", ps: "p.s. ~~I skimmed~~ yes, I read the whole policy", connect: "replies subject to ~~my mood~~ enhanced due diligence" },
  quotes: [
    "Fear can hold you prisoner. Hope can set you free. | The Shawshank Redemption",
    "Get busy living, or get busy dying. | The Shawshank Redemption",
    "Hope is a good thing, maybe the best of things. | The Shawshank Redemption",
    "Trust, but verify. | Russian proverb",
    "The best way out is always through. | Robert Frost",
  ],
  title: "AML Compliance Analyst",
  tagline: "Computer engineer turned AML compliance analyst, working across UAE regulatory frameworks.",
  url: "https://ninabiancanailon.com",
  photo: "/photo.jpg" as string | null,
  projects: [
    { slug: "nexusbarrier", title: "NexusBarrier", category: "Website & Tools", summary: "Automated AML transaction monitoring with risk scoring, review workflows and an audit trail.", overview: "NexusBarrier screens transaction streams against 12 detection scenarios, including structuring, sanctions exposure, rapid fund movement and dormant-account reactivation.\n\nEvery alert goes through a documented review workflow with separate roles for L1 analysts, the MLRO and admins. Alerts move from open to under review, escalated, and closed with or without a SAR.\n\nOnly one part of the system is allowed to change an alert's status, so every decision can be traced for an audit.", technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"], year: "2026", github: "https://github.com/THISISNINA/NexusBarrier", link: "https://nexusbarrier.onrender.com/welcome", image: "/projects/nexusbarrier.jpg" },
    { slug: "kilalanin", title: "Kilalanin", category: "Website & Tools", summary: "A compliance screening tool for AML, KYC and KYB checks, with case management built in.", overview: "Kilalanin screens names against sanctions lists, watchlists, press releases and adverse media, then sends any hits through a case workflow.\n\nIt takes daily sanctions updates from OFAC, the UN Security Council, the UK, the US Consolidated Screening List and the UAE Local List, and matches names both exactly and fuzzily.\n\nCases follow a six-step lifecycle and cannot close until every hit has been adjudicated. Escalations go to an MLRO review queue, and the tool never clears or blocks anyone on its own: a person always makes the final call.", technologies: ["Python", "JavaScript", "Docker"], year: "2026", github: "https://github.com/THISISNINA/Kilalanin", link: "https://kilalanin.onrender.com/landing_page/landing_page.html", image: "/projects/kilalanin.jpg" },
    { slug: "global-aml-risk-dashboard", title: "Global AML Risk Dashboard", category: "Data", summary: "A Power BI dashboard that tracks sanctioned exposure and high-risk jurisdictions across a portfolio.", overview: "Built to automate AML monitoring and show where risk is concentrated.\n\nIt tracks the share of capital tied to sanctioned entities, maps transactions by country to highlight high-risk jurisdictions, breaks exposure down by occupation, and charts exposure over time to catch sudden spikes.\n\nThe core risk concentration measure is written in DAX. All data is synthetic.", technologies: ["Power BI", "DAX"], year: "2026", github: "https://github.com/THISISNINA/Global-AML-Risk-Dashboard", image: "/projects/global-aml-risk-dashboard.jpg" },
    { slug: "aml-risk-dashboard", title: "AML Risk Dashboard", category: "Data", summary: "A Power BI dashboard that scores clients by risk and tracks PEP matches.", overview: "Clients are scored High, Medium or Low with DAX logic weighted on PEP status, payment method and transaction value.\n\nFilters for risk level, payment method and transaction size, plus totals for volume and alerts, help a compliance team decide which cases need enhanced due diligence first.\n\nAll data is synthetic.", technologies: ["Power BI", "DAX"], year: "2026", github: "https://github.com/THISISNINA/AML-Risk-Dashboard", image: "/projects/aml-risk-dashboard.jpg" },
    { slug: "credit-card-fraud-analysis", title: "Credit Card Fraud Analysis", category: "Data", summary: "A SQL case study finding fraud patterns in 284,807 card transactions.", overview: "The MySQL import wizard was too slow for a dataset this size, so I loaded it from the command line instead, in under 30 seconds.\n\nFrom there I confirmed the fraud rate (0.19%), found the hours of the day when fraud peaks, and pulled out high-value fraudulent transactions over $1,000.\n\nData: the public Credit Card Fraud Detection dataset on Kaggle.", technologies: ["SQL", "MySQL"], year: "2026", github: "https://github.com/THISISNINA/Credit-Card-Fraud-Analysis-SQL", image: "/projects/credit-card-fraud-analysis.jpg" },
  ] as { slug: string; title: string; category: string; summary: string; overview?: string; technologies?: string[]; year?: string; github?: string; link?: string; image?: string }[],
  linkedin: "https://www.linkedin.com/in/ninabiancanailon/",
  summary: "AML Compliance Analyst with a technical foundation in Computer Engineering and hands-on expertise in UAE regulatory frameworks (Ministry of Economy DNFBPs, DIFC, ADGM, and Free Zones). Leverages strong technical fluency across SQL, database architecture, and QA testing methodologies alongside knowledge of AI-driven applications and compliance tools.",
  industries: ["Ministry of Economy DNFBPs", "DIFC", "ADGM", "UAE Free Zones"],
  skills: ["Client onboarding", "KYC/KYB checks", "Periodic reviews", "Enhanced due diligence", "Screening and monitoring", "Source of wealth/funds verification", "SAR/STR reporting", "goAML", "Refinitiv World-Check", "Dun & Bradstreet", "Prescreening.ai", "Cygnus Scan", "Power BI", "SQL", "Advanced Excel", "Jira", "SharePoint", "Python", "Web development"],
  education: [{ degree: "Bachelor of Science in Computer Engineering", school: "Cebu Institute of Technology - University", year: "2023" }],
  experience: [
    { id: "alpha-omega", role: "AML Compliance Analyst", company: "Alpha Omega Management Consultancy", start_date: "2025-04", currently_working: true, blurb: "AML/CTF compliance for DNFBPs across the UAE mainland, ADGM, DIFC and Free Zones: onboarding, EDD, screening and goAML reporting." },
    { id: "accenture", role: "Associate Software Engineer (QA Engineer)", company: "Accenture Inc.", start_date: "2023-10", end_date: "2025-02", currently_working: false, blurb: "QA engineer testing high-volume data systems, with audit-ready defect tracking in Jira." },
  ],
  certifications: [
    { id: "ica-moe", title: "ICA/MOE Certificate in AML/CFT for Designated Non-Financial Businesses and Professions (DNFBPs)", provider: "International Compliance Association", date: "2025-06" },
    { id: "cdd-vasp", title: "Certified Due Diligence Specialist in Virtual Asset Service Providers (CDD-VASP)", provider: "American Compliance and Business Management Association", date: "2026-05" },
  ],
};
