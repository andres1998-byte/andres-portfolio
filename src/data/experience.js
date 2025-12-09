// src/data/experience.js
export const experience = [
  {
    id: "gs",
    company: "Goldman Sachs (via Infosys)",
    role: "Software Engineer",
    period: "Oct 2025 – Present",
    location: "Mexico City · Remote",
    logo: "/logos/gs.svg",
    bullets: [
      "Support the Data Lake platform by analysing ingestion pipelines, validating dataset integrity, and troubleshooting distributed-system issues.",
      "Perform diagnostics to identify root causes of failed jobs, verify pipeline logic, and ensure accurate and timely data availability for downstream applications.",
      "Teach and mentor Infosys candidates preparing for Goldman Sachs interviews, covering Java (streams, lambdas, concurrency, recursion), data structures (heaps, PQs, DFS/BFS), and real debugging techniques including log analysis and tracing NPEs."
    ],
  },
  {
    id: "trp",
    company: "T. Rowe Price (via Infosys)",
    role: "Back End Developer",
    period: "Feb 2024 – Oct 2025",
    location: "Mexico City · Remote",
    logo: "/logos/trowe.svg",
    bullets: [
      "Developed and corrected core exhibit logic for investment products — implementing business rules, quarterly date-selection, allocation name mappings, and fund-age validations — fixing translation and data-availability issues affecting information displayed on the public T. Rowe Price website.",
      "Delivered deployments to Stage and Production using Jenkins, Docker, and GitLab CI, ensuring stable and reliable releases across financial reporting services.",
      "Participated in two-week sprints and regularly presented completed tickets and technical findings in bi-weekly review sessions with teams across T. Rowe Price.",
      "Upgraded reporting services from Java 11 to Java 17/21 while modernizing Spring Boot, Nitro frameworks, and related dependencies for long-term maintainability.",
      "Debugged backend services using AWS CloudWatch, Splunk, and internal tools; built secure REST APIs using Spring Boot, OAuth2, and Spring Security; worked with AWS Lambda, S3, and API Gateway to support scalable backend processes."
    ],
  },
  {
    id: "softtek",
    company: "Softtek · Client: Banamex",
    role: "Full Stack Developer",
    period: "Aug 2023 – Feb 2024",
    location: "Mexico City",
    logo: "/logos/softtek.svg",
    bullets: [
      "Developed a secure front-end form for authenticated Banamex users to update passwords, including old/new password fields and confirmation logic.",
      "Implemented an Autochecker identity-validation feature and enforced strict password-strength rules aligned with security standards."
    ],
  },
  
];
