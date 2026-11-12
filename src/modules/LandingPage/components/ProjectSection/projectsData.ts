// Only real projects. Facts come from the owner's brief and docs/resume.pdf.
// No metrics, client quotes or confidential details. Empty fields are hidden
// on the page, so a missing fact never shows up as placeholder text.

export interface ProjectLink {
  label: string;
  href: string;
}

export interface CaseStudy {
  problem: string[];
  /** "How I found it" */
  investigation: string[];
  /** "What I changed" */
  changes: string[];
  outcome: string[];
}

export interface Project {
  slug: string;
  title: string;
  /** Shown above the title, e.g. the employer for work case studies. */
  company?: string;
  subtitle: string;
  role?: string;
  period?: string;
  overview: string[];
  caseStudy?: CaseStudy;
  highlights: string[];
  technologies: string[];
  links: ProjectLink[];
  /** Optional screenshot. Cards fall back to a plain dark title tile. */
  image?: { src: string; alt: string; width: number; height: number };
}

const FREECAST = {
  company: "FreeCast",
  role: "Senior Software Engineer (contract)",
  period: "Jul 2023 – Aug 2026",
  links: [{ label: "Visit freecast.com", href: "https://freecast.com/" }],
};

export const projects: Project[] = [
  {
    slug: "vod-platform-api",
    title: "vod-platform-api",
    subtitle:
      "A video-on-demand backend in NestJS, PostgreSQL (Prisma), Redis, BullMQ and Docker Compose.",
    overview: [
      "A video-on-demand backend built with NestJS on PostgreSQL through Prisma, with Redis and BullMQ, and run locally with Docker Compose.",
    ],
    highlights: [
      "Hybrid catalog: movies and series, with seasons and episodes, and separate playable assets per title.",
      "Availability windows by region, plan and licensing period.",
      "Soft unpublish, so taking a title down preserves watch history.",
    ],
    technologies: [
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Docker Compose",
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/fahim-arif/vod-platform-api",
      },
    ],
  },
  {
    ...FREECAST,
    slug: "freecast-playback-debugging",
    title: "Playback debugging",
    subtitle:
      "A DASH ad-insertion codec-string mismatch between MediaPackage and MediaTailor, and FairPlay key-session state corruption in Safari.",
    overview: [],
    caseStudy: {
      problem: [
        "In DASH streams with ad insertion, the codec strings from AWS MediaPackage and AWS MediaTailor did not match.",
        "In Safari, FairPlay playback ran into corrupted EME/MediaKeys state.",
      ],
      investigation: [], // TODO: how I found each issue (not in the brief; check docs/resume.pdf)
      changes: [], // TODO: what I changed to fix each issue (not in the brief; check docs/resume.pdf)
      outcome: [],
    },
    highlights: [],
    technologies: [
      "DASH",
      "AWS MediaPackage",
      "AWS MediaTailor",
      "FairPlay",
      "EME / MediaKeys",
    ],
  },
  {
    ...FREECAST,
    slug: "freecast-backend-performance",
    title: "Backend performance",
    subtitle:
      "Bringing slow Django endpoints down from seconds to a few hundred milliseconds.",
    overview: [],
    caseStudy: {
      problem: ["Some Django endpoints took seconds to respond."],
      investigation: [], // TODO: how I found the slow queries (not in the brief; check docs/resume.pdf)
      changes: [
        "Optimized the slow queries.",
        "Added database indexes.",
        "Fixed N+1 query patterns.",
        "Added Redis caching.",
        "Added pagination.",
      ],
      outcome: [
        "Response times on those endpoints went from seconds to a few hundred milliseconds.",
      ],
    },
    highlights: [],
    technologies: ["Django", "Redis"],
  },
  {
    ...FREECAST,
    slug: "freecast-auth-hardening",
    title: "Auth hardening",
    subtitle:
      "In-memory access tokens, bearer-token origin allowlisting and backend-issued HttpOnly refresh-token cookies.",
    overview: [],
    caseStudy: {
      problem: [], // TODO: what was wrong with the previous token handling (not in the brief; check docs/resume.pdf)
      investigation: [], // TODO: how I found it (not in the brief; check docs/resume.pdf)
      changes: [
        "Access tokens are held in memory.",
        "Requests carrying bearer tokens are checked against an origin allowlist.",
        "The backend issues refresh tokens as HttpOnly cookies.",
      ],
      outcome: [],
    },
    highlights: [],
    technologies: [],
  },
];
