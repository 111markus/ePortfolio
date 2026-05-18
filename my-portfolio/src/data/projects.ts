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
    title: "Makeup Artist Client Website",
    description:
      "Client project for a makeup artist — responsive landing page + contact flow.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/111markus",
  },
  {
    id: 2,
    title: "Web-based School Game",
    description:
      "A school project game built for the browser. (Replace with repo link when ready.)",
    tech: ["JavaScript", "JSON"],
    github: "https://github.com/111markus",
  },
];
