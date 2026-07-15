export const siteConfig = {
  name: "Puffin Lab",
  tagline:
    "Participation, Understanding, Feedback, and Interaction for Novices",
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
  interestTag?: string;
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
    id: "characater-programming-tool",
    title: "AI helpers with Personalities",
    description:
      "Understanding how 'personal' characteristics of AI assistants affect student learning.",
    theme: "AI-Supported Learning",
    status: "Active",
    team: ["Natalie Olsen", "Zihan Wu"],
    years: "2026 – Present",
    tags: ["LLMs", "Personalization"]
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
  photo: "/images/zihan_profile.jpg",
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
    title: "Faculty",
    people: [director],
  },
  {
    title: "Graduate Students",
    people: [
      {
        id: "example-phd-1",
        name: "Firstname Lastname",
        role: "PhD Student",
        affiliation: "Computer Science, SCIS",
        interestTag: "Adaptive Feedback",
        hoverItems: [
          { emoji: "🐱", label: "Cat parent" },
          { emoji: "🎮", label: "Indie games" },
          { emoji: "🧋", label: "Bubble tea" },
        ],
      },
    ],
  },
  {
    title: "Undergraduate Researchers",
    people: [
      {
        id: "example-ug-1",
        name: "Firstname Lastname",
        role: "Undergraduate Student",
        affiliation: "Computer Science, SCIS",
        interestTag: "Adaptive Feedback",
        hoverItems: [
          { emoji: "🐱", label: "Cat parent" },
          { emoji: "🎮", label: "Indie games" },
          { emoji: "🧋", label: "Bubble tea" },
        ],
      },
    ],
  },
];

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
    "We study how to design engaging, scalable educational tools for learners and for the educational community in the AI era, especially in the discipline of computing.",
  why:
    "No matter how AI has changed the content and landscape of learning, it is still a crucial questions to engage people to learn and make sure they are still motivated to do the things they want to do, and AI does not become another barrier that stops them.",
  approach:
    "Like many researchers in the field of human-computer interaction (HCI) and computing education research (CER), we are either (a) trying to advance our knowledge of human in learning, or (b) creating new tools to advance our way to learn. We conduct lab studies, classroom studies and large-scale field studies. We draw on learning theories from computing education and human-centered design methods from HCI.",
};
