
export type Project = {
  title: string;
  period: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Context-Aware Medical Q&A",
    period: "Aug 2025 – Feb 2026",
    category: "AI / Machine Learning",
    description:
      "An advanced Retrieval-Augmented Generation pipeline for medical document intelligence, using LlamaIndex, Agno Agent and Qdrant to retrieve relevant medical information and generate context-aware answers.",
    highlights: [
      "Ingested and chunked medical PDFs using LlamaIndex document loaders",
      "Stored document embeddings in Qdrant for semantic similarity search",
      "Used Agno Agent to orchestrate multi-step query workflows",
      "Integrated TinyLlama through Ollama for local answer generation",
      "Optimized retrieval with context reranking",
    ],
    technologies: [
      "Python",
      "LlamaIndex",
      "Qdrant",
      "Agno Agent",
      "Ollama",
      "TinyLlama",
    ],
    featured: true,
  },
  {
    title: "Aviation Cloud Analysis",
    period: "Aug 2024 – Nov 2024",
    category: "Computer Vision",
    description:
      "A Digital Image Processing system that analyzes onboard camera feeds to estimate cloud coverage, density and potential turbulence conditions for aviation-related pilot advisories.",
    highlights: [
      "Estimated cloud coverage and density from camera frames",
      "Applied ML classification for turbulence potential detection",
      "Built an OpenCV image-processing pipeline",
      "Implemented noise filtering, segmentation and contour analysis",
      "Tested the system using aviation-domain image datasets",
    ],
    technologies: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Machine Learning",
      "DIP",
    ],
  },
  {
    title: "Crime Database Management",
    period: "Jul 2023 – Oct 2023",
    category: "Database Management",
    description:
      "A database management application for state-wise and city-wise cybercrime tracking, featuring structured data storage, backend analytics and data visualization.",
    highlights: [
      "Designed a normalized database schema for crime records",
      "Implemented create, read, update and delete operations",
      "Developed queries for regional crime trends and frequency analysis",
      "Created a data visualization frontend for reporting",
      "Used optimized joins and indexed queries for data retrieval",
    ],
    technologies: [
      "SQL",
      "MySQL",
      "DBMS",
      "Java",
      "Backend Development",
    ],
  },
  {
    title: "Formula 1 Fan Hub",
    period: "Jan 2024 – May 2024",
    category: "Web Development",
    description:
      "A responsive Formula 1 fan website featuring race highlights, driver and team information, video content and an e-commerce interface for merchandise.",
    highlights: [
      "Built a responsive interface focused on fan engagement",
      "Integrated a video streaming section for race highlights",
      "Created product browsing and shopping cart functionality",
      "Designed team and driver profile pages",
      "Developed the frontend using HTML, CSS and JavaScript",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "UI/UX",
      "Frontend Development",
    ],
  },
  {
    title: "IoT Stock Prediction",
    period: "Jan 2023 – May 2023",
    category: "Embedded Systems / IoT",
    description:
      "An STM32F4-based embedded inventory monitoring system using Force Sensitive Resistor sensors to track stock levels and communicate status alerts.",
    highlights: [
      "Integrated FSR pressure sensors with the STM32F4 microcontroller",
      "Used ADC readings for sensor measurement and calibration",
      "Mapped weight measurements to stock-level thresholds",
      "Implemented GPIO-controlled LED status indicators",
      "Used UART communication for serial debugging and alerts",
    ],
    technologies: [
      "Embedded C",
      "STM32F4",
      "IoT",
      "ADC",
      "UART",
      "GPIO",
    ],
  },
  {
    title: "Movie Ticket Booking System",
    period: "Aug 2022 – Dec 2022",
    category: "Java / Object-Oriented Programming",
    description:
      "A Java-based movie ticket booking application demonstrating object-oriented programming concepts through movie selection, seat booking and interactive booking confirmations.",
    highlights: [
      "Designed class hierarchies using inheritance and polymorphism",
      "Applied encapsulation to booking and seat management",
      "Created an interactive CLI for movie and showtime selection",
      "Implemented seat selection and booking confirmation",
      "Generated receipt-style booking output",
    ],
    technologies: [
      "Java",
      "OOP",
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
    ],
  },
  {
    title: "OpenBSD Concepts Interactive Dashboard",
    period: "Sep 2023 – Dec 2023",
    category: "Operating Systems / Security",
    description:
      "An interactive Streamlit dashboard demonstrating OpenBSD operating system concepts through educational simulations, security feature explanations and system administration demonstrations.",
    highlights: [
      "Developed a multi-page dashboard covering OpenBSD architecture",
      "Created CPU scheduling and memory allocation simulations",
      "Demonstrated process synchronization and system calls",
      "Explored OpenBSD security features and filesystem operations",
      "Built reusable pages with navigation and visualizations",
    ],
    technologies: [
      "Python",
      "Streamlit",
      "OpenBSD",
      "Operating Systems",
      "Simulation",
      "Data Visualization",
    ],
    github: "https://github.com/sudhakar-1104/OpenBSD",
    featured: true,
  },
];
