export type Education = {
  from: string;
  to: string;
  title: string;
  school: string;
  location: string;
  highlights: string[];
  graduation?: string;
};

export type Experience = {
  from: string;
  to: string;
  title: string;
  company: string;
  description: string;
};

export const personal = {
  name: "Markus Laanes",
  birthDate: "27/04/2005",
  nationality: "Estonian",
  phone: "(+372) 55534290",
  email: "markus.laanes@voco.ee",
  github: "https://github.com/111markus",
  location: "Tartu, Estonia",
  goal: "Front-end development student seeking internship opportunities.",
} as const;

export const languages = [
  { name: "Eesti keel", level: "Emakeel" },
  { name: "Inglise keel", level: "C1 (Cambridge CAE)" },
] as const;

export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React"],
  tools: ["WordPress", "Docker", "Figma", "Git/GitHub"],
  databases: ["MariaDB", "MySQL"],
  other: ["JSON", "Render"],
} as const;

export const education: Education[] = [
  {
    from: "2025",
    to: "Present",
    title: "Junior Software Developer",
    school: "Tartu Vocational College",
    location: "Tartu, Estonia",
    highlights: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "WordPress",
      "Docker",
      "MariaDB/MySQL",
    ],
    graduation: "2028",
  },
  {
    from: "2021",
    to: "2024",
    title: "Keskharidus",
    school: "Jõgevamaa Gümnaasium",
    location: "Jõgeva, Estonia",
    highlights: [
      "Programming I & II",
      "Cybersecurity",
      "Computer graphics",
      "Practical negotiation skills",
    ],
  },
];

export const experience: Experience[] = [
  {
    from: "04/2026",
    to: "Present",
    title: "Event Equipment Installer",
    company: "Funrent Tartu OÜ",
    description:
      "Installed and assembled event and rental equipment for various events and venues.",
  },
  {
    from: "05/2025",
    to: "31/08/2025",
    title: "Trailer Assembly Worker",
    company: "Respo Haagised AS",
    description:
      "Assembled heated trailers and electrical systems, including wiring, electrical components, and control panels.",
  },
  {
    from: "02/12/2024",
    to: "24/03/2025",
    title: "Production Line Worker",
    company: "Vara Saeveski OÜ",
    description:
      "Operated production line equipment, packed products, and assisted with maintenance tasks.",
  },
  {
    from: "06/2023",
    to: "08/2023",
    title: "Customer Service",
    company: "Tõnissoni Söögituba OÜ",
    description: "Provided customer service in a fast-paced environment.",
  },
];
