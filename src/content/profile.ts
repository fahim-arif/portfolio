// Every fact on the site lives here or in projectsData.ts.
// Source: the owner's brief and docs/resume.pdf. Do not add anything that is
// not in one of those two sources.

export const PROFILE = {
  name: "Fahim Arif",
  title: "Backend & Full-Stack Engineer",
  stack: "Node.js, TypeScript, Python",
  location: "Dhaka, Bangladesh",
  availability: "Remote, with 4+ hours of overlap with US Eastern",
  heroSummary:
    "Senior software engineer building backend services and full-stack products in Node.js and TypeScript, including 3 years on a large video streaming platform.",
  heroRotatingWords: ["REST APIs", "backend services", "full-stack products"],
  about: [
    "I'm a senior software engineer with 7+ years of fully remote experience, building backend services and full-stack products in Node.js and TypeScript, including 3 years on a large video streaming platform.",
    "I design REST APIs, data models and service integrations on PostgreSQL, Redis and AWS. I debug production issues end to end, from API data defects to DRM, ad-insertion and adaptive-streaming failures.",
    "I'm based in Dhaka, Bangladesh, and work remotely with 4+ hours of overlap with US Eastern time.",
  ],
} as const;

export const SKILLS: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Express", "Django", "REST", "BullMQ"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"],
  },
  {
    group: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, Lambda, RDS, Cognito, CloudFront)",
      "Docker",
      "Docker Compose",
      "CI/CD (Azure DevOps)",
    ],
  },
  {
    group: "Video streaming",
    items: [
      "Shaka Player",
      "hls.js",
      "HLS/DASH",
      "DRM (FairPlay, Widevine)",
      "AWS MediaPackage",
      "AWS MediaTailor",
      "EPG",
    ],
  },
  { group: "Frontend", items: ["React", "Next.js", "Redux"] },
  { group: "Testing", items: ["Jest", "Cypress"] },
];

export interface ExperienceEntry {
  company: string;
  role: string;
  employment?: string;
  start: string;
  end: string;
  bullets: string[];
}

// TODO: role titles and bullets must come verbatim from docs/resume.pdf.
// The file was not in the repo when this was written, so roles not given in
// the brief and all bullets are left empty.
export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "FreeCast",
    role: "Senior Software Engineer",
    employment: "Contract",
    start: "Jul 2023",
    end: "Aug 2026",
    bullets: [], // TODO: bullets from docs/resume.pdf
  },
  {
    company: "CUDO B2Work",
    role: "Senior Full Stack Developer",
    employment: "Contract",
    start: "Mar 2023",
    end: "Aug 2023",
    bullets: [], // TODO: bullets from docs/resume.pdf
  },
  {
    company: "Civilized Software",
    role: "", // TODO: role title from docs/resume.pdf
    start: "Feb 2022",
    end: "Mar 2023",
    bullets: [], // TODO: bullets from docs/resume.pdf
  },
  {
    company: "Twomatches.xyz",
    role: "", // TODO: role title from docs/resume.pdf
    employment: "Contract",
    start: "Oct 2021",
    end: "Feb 2022",
    bullets: [], // TODO: bullets from docs/resume.pdf
  },
  {
    company: "Primates Development",
    role: "", // TODO: role title from docs/resume.pdf
    start: "Jun 2019",
    end: "Sep 2021",
    bullets: [], // TODO: bullets from docs/resume.pdf
  },
];

export const EDUCATION = {
  degree: "B.Sc. in Computer Science",
  school: "Chittagong University of Engineering & Technology (CUET)",
  start: "2016",
  end: "2020",
};

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
}

// Name and designation kept exactly as they appeared in projectsData.ts.
// Note: git history (7faea78) shows both quotes originally named "Novawork";
// commit f346989 changed them to "Fahim".
export const TESTIMONIALS: Testimonial[] = [
  {
    // Wording and permission to publish approved by Amos Omokpo (confirmed by
    // the owner on 2026-11-12).
    quote:
      "Collaborating with Fahim has been a game-changer for Twomatches. In an era where digital presence can make or break a brand, Fahim proved to be the reliable developer we were seeking.",
    name: "Amos Omokpo",
    designation: "Staff Engineer, IBM",
  },
  {
    // TODO: verify permission to publish
    quote:
      "Fahim has been a great developer for us. They are reliable, responsive, and deliver high-quality work.",
    name: "Saleem Khan",
    designation: "Shoutt, CEO",
  },
];
