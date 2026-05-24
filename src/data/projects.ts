export type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
};

import kkbeauty from "../assets/kkbeauty.png";
import reactaim3d from "../assets/reactaim3d.png";
import ajututvus from "../assets/ajututvus.png";
import hobileht from "../assets/hobileht.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "MakeUpByKristiKliimann",
    description:
      "Professional makeup artist website with service listings, portfolio gallery, and contact/booking flow",
    tech: ["React", "Tailwind", "Express", "SQLite"],
    github: "https://github.com/111markus/MakeUpByKristiKliimann",
    live: "https://kristikliimannbeauty.ee/",
    image: kkbeauty,
  },
  {
    id: 2,
    title: "ReactAim 3D",
    description:
      "Browser-based training game with interactive gameplay, leaderboards, and customizable settings",
    tech: ["React", "Three.js", "A-Frame", "Node.js", "Express"],
    github: "https://github.com/111markus/ManguProjekt",
    live: "https://reactaim3d.onrender.com/",
    image: reactaim3d,
  },
  {
    id: 3,
    title: "Ajututvus",
    description:
      "Hackathon project - multiplayer party icebreaker game with room codes and a host control panel",
    tech: ["JavaScript", "FireBase", "HTML", "CSS"],
    github: "https://github.com/111markus/Ajututvus",
    live: "https://vso25laanes.ita.voco.ee/veebiarendus/ajututvus/",
    image: ajututvus,
  },
  {
    id: 4,
    title: "CS2 Hobby Page",
    description:
      "One of my first projects - a personal CS2 statistics hobby page with match history, K/D stats, and gameplay highlight videos",
    tech: ["HTML", "CSS"],
    github: "https://github.com/111markus/hobileht",
    live: "https://vso25laanes.ita.voco.ee/veebiarendus/hobileht/",
    image: hobileht,
  },
];
