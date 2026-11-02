export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Languages for problem-solving and application development.",
    icon: "code",
    skills: ["Python", "Java", "C++", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: "monitor",
    skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "Developing APIs, application logic and backend services.",
    icon: "server",
    skills: ["FastAPI", "REST APIs", "Node.js", "SQLAlchemy"],
  },
  {
    title: "AI & Machine Learning",
    description: "Building intelligent applications and retrieval systems.",
    icon: "brain",
    skills: [
      "LLMs",
      "RAG",
      "LlamaIndex",
      "Ollama",
      "FAISS",
      "Qdrant",
      "OpenCV",
      "Prompt Engineering",
    ],
  },
  {
    title: "Databases & Cloud",
    description: "Working with data storage and cloud infrastructure.",
    icon: "database",
    skills: ["MySQL", "SQLite", "PostgreSQL", "AWS", "Google Cloud", "Azure Blob"],
  },
  {
    title: "Tools & Platforms",
    description: "Development tools and engineering workflows.",
    icon: "wrench",
    skills: ["Git", "GitHub", "Postman", "Jira", "Linux", "VS Code"],
  },
];