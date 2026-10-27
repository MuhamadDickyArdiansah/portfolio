export interface Projects {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Projects[] = [
  {
    id: "project-1",
    title: "Pilah Money Management",
    description:
      "A personal finance management application for tracking income, expenses, and financial transactions. Designed to help users organize their finances and monitor spending through a simple and intuitive interface.",
    imageUrl: "projects/beranda.png",
    tags: ["TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    featured: true,
  },
  {
    id: "project-2",
    title: "Chili Leaf Classification App",
    description:
      "A machine learning application for classifying chili leaf images into different categories. Combines image classification techniques with a user interface to make model predictions easier to access.",
    imageUrl: "projects/beranda.png",
    tags: ["React Native", "JavaScript", "Python", "Machine Learning"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    featured: true,
  },
];
