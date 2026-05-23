export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "MakeUpByKristiKliimann",
    description:
      "Professional makeup artist website with service listings, portfolio gallery, and contact/booking flow",
    tech: ["React", "Tailwind", "Express", "SQLite"],
    github: "https://github.com/111markus/MakeUpByKristiKliimann",
  },
  {
    id: 2,
    title: "ReactAim 3D",
    description:
      "Browser-based training game with interactive gameplay, leaderboards, and customizable settings",
    tech: ["React", "Three.js", "A-Frame", "Node.js", "Express"],
    github: "https://github.com/111markus/ManguProjekt",
  },
  {
    id: 3,
    title: "Ajututvus",
    description:
      "Hackathon project — multiplayer party icebreaker game with room codes and a host control panel",
    tech: ["JavaScript", "FireBase", "HTML", "CSS"],
    github: "https://github.com/111markus/Ajututvus",
  },
  {
    id: 4,
    title: "CS2 Hobby Page",
    description:
      "One of my first projects — a personal CS2 statistics hobby page with match history, K/D stats, and gameplay highlight videos",
    tech: ["HTML", "CSS"],
    github: "https://github.com/111markus/hobileht",
  },
];
