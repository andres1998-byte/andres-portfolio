// src/data/experience.js
export const experience = [
  {
    id: "gs",
    company: "Goldman Sachs",
    role: "Software Engineer",
    period: "Oct 2025 – Present",
    location: "Mexico City · Remote",
    website: "https://www.goldmansachs.com/",
    logo: "/logos/gs.svg",
    bullets: [
      "Developed backend tooling to analyze and validate data ingestion pipelines on the Goldman Sachs Data Lake platform, writing diagnostic queries and tracing failures across distributed systems to ensure accurate, timely data availability for downstream Java-based applications.",
      "Investigated and resolved production issues across microservice boundaries by analyzing logs, tracing root causes, and contributing code-level fixes aligned with platform architecture and Java best practices.",
      "Delivered daily technical training sessions on core Java (streams, lambdas, recursion, concurrency), data structures & algorithms (heaps, priority queues, DFS/BFS), and practical debugging techniques including log tracing and exception analysis."
    ],
  },
  {
    id: "trp",
    company: "T. Rowe Price",
    role: "Back End Developer",
    period: "Feb 2024 – Oct 2025",
    location: "Mexico City · Remote",
    website: "https://www.troweprice.com/en/us",
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
    website: "https://www.softtek.com/",
    logo: "/logos/softtek.svg",
    bullets: [
      "Developed a secure front-end form for authenticated Banamex users to update passwords, including old/new password fields and confirmation logic.",
      "Implemented an Autochecker identity-validation feature and enforced strict password-strength rules aligned with security standards."
    ],
  },
  
];
