export interface Projects {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageSize: string;
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
    imageSize: "w-lg",
    tags: ["TypeScript", "Tailwind CSS"],
    liveUrl: "https://front-end-terra-petto.vercel.app/",

    githubUrl: "https://github.com/example/project",
    featured: true,
  },
  {
    id: "project-2",
    title: "Chili Leaf Classification App",
    description:
      "A machine learning application for classifying chili leaf images into different categories. Combines image classification techniques with a user interface to make model predictions easier to access.",
    imageUrl: "projects/cercospora.jpeg",
    imageSize: "w-30",
    tags: ["React Native", "JavaScript", "Python", "Machine Learning"],
    liveUrl: "https://front-end-terra-petto.vercel.app/",

    githubUrl: "https://github.com/example/project",
    featured: true,
  },

  {
    id: "project-3",
    title: "Website TerraPetto Pet Care",
    description:
      "A pet care website designed to provide information about pet care services through a clean and user-friendly interface. Built to deliver an intuitive browsing experience and make service information easily accessible to pet owners.",
    imageUrl: "projects/terrapetto.png",
    imageSize: "w-lg",
    tags: ["TypeScript", "Tailwind CSS", "MongoDB", "Express.js"],
    liveUrl: "https://front-end-terra-petto.vercel.app/",
    githubUrl: "https://github.com/MuhamadDickyArdiansah/front-end-TerraPetto",
    featured: true,
  },

  {
    id: "project-4",
    title: "Dixy.ai - AI Chat",
    description:
      "An AI-powered chat application built using the IBM Granite API to generate intelligent responses through a conversational interface. Developed with a focus on clean UI design, responsive layouts, and seamless interaction with AI capabilities.",
    imageUrl: "projects/dixy.png",
    imageSize: "w-lg",
    tags: ["TypeScript", "Tailwind CSS", "IBM Granite API"],
    liveUrl: "https://front-end-terra-petto.vercel.app/",

    githubUrl: "YOUR_GITHUB_URL",
    featured: true,
  },
];
