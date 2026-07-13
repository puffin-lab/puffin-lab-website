export const siteConfig = {
  name: "Puffin Lab",
  tagline:
    "Designing engaging, scalable educational tools at the intersection of HCI and computing education.",
  university: "University of Maine",
  department: "School of Computing and Information Science",
  location: "Orono, Maine",
  email: "zihan.wu@maine.edu",
  directorUrl: "https://www.zihanwu.com",
  github: "https://github.com/placeholder-puffin-lab",
};

export type Project = {
  id: string;
  title: string;
  description: string;
  theme: string;
  status: "Active" | "Completed" | "Planning";
  team: string[];
  years?: string;
  tags?: string[];
  image?: string;
  collaborators?: string;
  funding?: string;
  links?: { label: string; href: string }[];
  publication?: string;
  externalLink?: string;
};

export type NewsItem = {
  id: string;
  date: string;
  headline: string;
  details?: string;
  link?: { label: string; href: string };
};

export type HoverItem = {
  emoji: string;
  label: string;
};

export type Person = {
  id: string;
  name: string;
  role: string;
  affiliation?: string;
  photo?: string;
  interestTag: string;
  hoverItems?: HoverItem[];
  website?: string;
  bio?: string;
  interests?: string[];
  projects?: string[];
  links?: { label: string; href: string }[];
};

export type PeopleSection = {
  title: string;
  people: Person[];
};

export type Collaborator = {
  id: string;
  name: string;
  affiliation: string;
  relationship: string;
  project: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "codetailor",
    title: "CodeTailor",
    description:
      "LLM-powered personalized Parsons puzzles that adapt to each learner's needs, providing engaging support while learning programming.",
    theme: "AI-Supported Learning",
    status: "Active",
    team: ["Xinying Hou", "Zihan Wu", "Xu Wang", "Barbara J. Ericson"],
    years: "2023 – Present",
    tags: ["Parsons Problems", "LLMs", "Personalization"],
    collaborators: "University of Michigan",
    publication: "L@S '24 — Best Paper Nomination",
    links: [{ label: "Paper PDF", href: "#" }],
  },
  {
    id: "sql-puzzles",
    title: "SQL Puzzles",
    description:
      "Evaluating micro Parsons problems with different feedback types as practice for novices learning database querying.",
    theme: "Feedback & Assessment",
    status: "Active",
    team: ["Zihan Wu", "Barbara J. Ericson"],
    years: "2022 – Present",
    tags: ["SQL", "Parsons Problems", "Feedback"],
    publication: "CHI '24",
    links: [{ label: "Paper PDF", href: "#" }],
  },
  {
    id: "ai-programming-tools",
    title: "AI-Supported Programming Learning Tools",
    description:
      "Understanding learner and instructor needs in AI-supported programming environments to inform design of adaptive features and control mechanisms.",
    theme: "AI in Computing Education",
    status: "Active",
    team: ["Zihan Wu", "Yicheng Tang", "Barbara J. Ericson"],
    years: "2024 – Present",
    tags: ["AI", "Programming Education", "Adaptive Control"],
    publication: "AIED 2025",
    links: [{ label: "Paper PDF", href: "#" }],
  },
  {
    id: "regex-scaffolding",
    title: "Regular Expression Scaffolding",
    description:
      "Using micro Parsons problems to scaffold the learning of regular expressions for novice programmers.",
    theme: "Scaffolding & Practice",
    status: "Completed",
    team: ["Zihan Wu", "Barbara J. Ericson", "Christopher Brooks"],
    years: "2021 – 2023",
    tags: ["Regular Expressions", "Parsons Problems"],
    publication: "ITiCSE '23",
    links: [{ label: "Paper PDF", href: "#" }],
  },
];

export const news: NewsItem[] = [
  {
    id: "phd-recruiting",
    date: "2025-09-01",
    headline: "Recruiting PhD students for Fall 2026",
    details:
      "We are looking for motivated PhD students interested in HCI and computing education research.",
    link: { label: "Learn more", href: "/get-involved" },
  },
  {
    id: "aied-2025",
    date: "2025-06-15",
    headline: "Paper accepted to AIED 2025",
    details:
      "Our work on learner and instructor needs in AI-supported programming learning tools will appear at AIED 2025.",
    link: { label: "View publication", href: "https://www.zihanwu.com" },
  },
  {
    id: "lab-launch",
    date: "2025-01-15",
    headline: "Puffin Lab launches at University of Maine",
    details:
      "The lab opens at SCIS, focusing on participation, understanding, feedback, and interaction for novices.",
  },
];

export const director: Person = {
  id: "zihan-wu",
  name: "Zihan Wu",
  role: "Assistant Professor & Lab Director",
  affiliation: "UMaine SCIS",
  interestTag: "HCI × Computing Education",
  website: "https://www.zihanwu.com",
  hoverItems: [
    { emoji: "🐧", label: "Puffins!" },
    { emoji: "☕", label: "Coffee" },
    { emoji: "🎹", label: "Piano" },
    { emoji: "📚", label: "Books" },
  ],
  bio: "Zihan Wu is an Assistant Professor at the University of Maine, School of Computing and Information Science.",
  links: [{ label: "Personal Website", href: "https://www.zihanwu.com" }],
};

export const peopleSections: PeopleSection[] = [
  {
    title: "Lab Director",
    people: [director],
  },
  {
    title: "PhD Students",
    people: [
      {
        id: "phd-placeholder-1",
        name: "Alex Chen",
        role: "PhD Student",
        affiliation: "HCTD Program",
        interestTag: "Adaptive Feedback",
        hoverItems: [
          { emoji: "🐱", label: "Cat parent" },
          { emoji: "🎮", label: "Indie games" },
          { emoji: "🧋", label: "Bubble tea" },
        ],
      },
      {
        id: "phd-placeholder-2",
        name: "Jordan Lee",
        role: "PhD Student",
        affiliation: "HCTD Program",
        interestTag: "AI in Education",
        website: "#",
        hoverItems: [
          { emoji: "🐕", label: "Dog lover" },
          { emoji: "🏔️", label: "Hiking" },
          { emoji: "🎸", label: "Guitar" },
        ],
      },
    ],
  },
  {
    title: "Master's Students",
    people: [
      {
        id: "ms-placeholder-1",
        name: "Sam Rivera",
        role: "MS Student",
        affiliation: "Computer Science",
        interestTag: "UX for Learning",
        hoverItems: [
          { emoji: "🌱", label: "Plants" },
          { emoji: "🎨", label: "Watercolor" },
        ],
      },
    ],
  },
  {
    title: "Undergraduate Researchers",
    people: [
      {
        id: "ug-placeholder-1",
        name: "Taylor Kim",
        role: "Undergraduate Researcher",
        affiliation: "Computer Science",
        interestTag: "Database Education",
        hoverItems: [
          { emoji: "🐰", label: "Pet bunny" },
          { emoji: "⚽", label: "Soccer" },
          { emoji: "🍜", label: "Ramen" },
        ],
      },
      {
        id: "ug-placeholder-2",
        name: "Morgan Patel",
        role: "Undergraduate Researcher",
        affiliation: "HCTD",
        interestTag: "Educational Tools",
        hoverItems: [
          { emoji: "🦜", label: "Parrot" },
          { emoji: "📷", label: "Photography" },
        ],
      },
      {
        id: "ug-placeholder-3",
        name: "Casey Nguyen",
        role: "Undergraduate Researcher",
        affiliation: "Computer Science",
        interestTag: "Programming Feedback",
      },
    ],
  },
];

/** @deprecated Use peopleSections instead */
export const members: Record<string, Person[]> = Object.fromEntries(
  peopleSections
    .filter((s) => s.title !== "Lab Director")
    .map((s) => [s.title, s.people])
);

export const collaborators: Collaborator[] = [
  {
    id: "barbara-ericson",
    name: "Barbara J. Ericson",
    affiliation: "University of Michigan",
    relationship: "PhD Advisor & Research Collaborator",
    project: "CodeTailor, SQL Puzzles, AI Programming Tools",
    link: "#",
  },
  {
    id: "christopher-brooks",
    name: "Christopher Brooks",
    affiliation: "University of Michigan",
    relationship: "Research Collaborator",
    project: "Regular Expression Scaffolding",
    link: "#",
  },
];

export const opportunities = {
  summary: [
    { type: "Undergraduate researchers", status: "Open" },
    { type: "Master's students", status: "Contact us" },
    { type: "PhD recruitment", status: "Recruiting for Fall 2026" },
    { type: "Educator partnerships", status: "Open" },
    { type: "Research studies", status: "No active recruitment" },
  ],
  phdRecruiting: true,
  phdTerm: "Fall 2026",
  phdProgram: "PhD in Computing and Information Science",
  programLink: "https://umaine.edu/computing-information-science/",
};

export const researchOverview = {
  centralQuestions: [
    "How can we design educational tools that engage novices while scaling to large classrooms?",
    "What forms of feedback and scaffolding best support learning in computing?",
    "How should AI be integrated into programming learning environments to benefit both learners and instructors?",
  ],
  approach:
    "We integrate learning theories from computing education research with human-centered design methods from HCI. We create and evaluate educational tools through qualitative lab studies and large-scale classroom or field studies.",
  themes: [
    "AI-Supported Learning",
    "Feedback & Assessment",
    "Scaffolding & Practice",
    "Participatory Design with Educators",
  ],
};

export const aboutLab = {
  what:
    "Puffin Lab (participation, understanding, feedback, and interaction for novices) studies how to design engaging, scalable educational tools for computing, especially for novice learners.",
  why:
    "Computing education faces a dual challenge: keeping learners engaged while ensuring they develop deep understanding. Our work addresses this by designing tools grounded in learning science and validated through rigorous evaluation.",
  approach:
    "We combine qualitative lab studies with large-scale classroom and field studies. We draw on learning theories from computing education and human-centered design methods from HCI.",
  communities:
    "We work with K-12 and university educators, novice programmers, instructors teaching introductory computing courses, and community partners interested in equitable access to computing education.",
};
