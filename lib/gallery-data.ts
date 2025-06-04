export interface GalleryImage {
  id: string
  title: string
  description: string
  year: string
  image: string
  category?: string
  layout?: {
    gridArea: string
    priority: number
  }
}

// Helper function to generate placeholder image URLs with specific dimensions
function getPlaceholderImage(width: number, height: number, text: string): string {
  return `/placeholder.svg?height=${height}&width=${width}&text=${encodeURIComponent(text)}`
}

// Generate gallery data with placeholder images
export const galleryData: GalleryImage[] = [
  // 2025 Images
  {
    id: "2025-1",
    title: "Pre-Pandemic Kickoff",
    description: "The last in-person event before COVID-19 restrictions",
    year: "2025",
    image: "../assets/img/Gallery/2025/1.jpg",
    category: "ceremony",
  },
  {
    id: "2025-2",
    title: "Intensive Coding",
    description: "Participants focused on coding their solutions",
    year: "2025",
    image: "../assets/img/Gallery/2025/2.jpg",
    category: "hacking",
  },
  {
    id: "2025-3",
    title: "Team Discussions",
    description: "Teams discussing project architecture and implementation",
    year: "2025",
    image: "../assets/img/Gallery/2025/3.jpg",
    category: "teams",
  },
  {
    id: "2025-4",
    title: "Inaugural TVH",
    description: "The very first TVH event in South Africa",
    year: "2025",
    image: "../assets/img/Gallery/2025/4.jpg",
    category: "ceremony",
  },
  {
    id: "2025-5",
    title: "First Hackathon Teams",
    description: "The pioneering teams of the first TVH",
    year: "2025",
    image: "../assets/img/Gallery/2025/5.jpg",
    category: "teams",
  },
  {
    id: "2025-6",
    title: "Innovation Showcase",
    description: "The first batch of innovative projects from TVH",
    year: "2025",
    image: "../assets/img/Gallery/2025/6.jpg",
    category: "presentations",
  },
  {
    id: "2025-7",
    title: "Closing Ceremony",
    description: "Celebrating the success of the first TVH",
    year: "2025",
    image: "../assets/img/Gallery/2025/7.jpg",
    category: "ceremony",
  },
  {
    id: "2025-8",
    title: "Closing Ceremony",
    description: "Celebrating the success of the first TVH",
    year: "2025",
    image: "../assets/img/Gallery/2025/8.jpg",
    category: "ceremony",
  },
  {
    id: "2025-9",
    title: "Closing Ceremony",
    description: "Celebrating the success of the first TVH",
    year: "2025",
    image: "../assets/img/Gallery/2025/9.jpg",
    category: "ceremony",
  },
  {
    id: "2025-10",
    title: "Closing Ceremony",
    description: "Celebrating the success of the first TVH",
    year: "2025",
    image: "../assets/img/Gallery/2025/10.jpg",
    category: "ceremony",
  },
  {
    id: "2025-11",
    title: "Closing Ceremony",
    description: "Celebrating the success of the first TVH",
    year: "2025",
    image: "../assets/img/Gallery/2025/11.jpg",
    category: "ceremony",
  },
  {
    id: "2025-12",
    title: "Closing Ceremony",
    description: "Celebrating the success of the first TVH",
    year: "2025",
    image: "../assets/img/Gallery/2025/7.jpg",
    category: "ceremony",
  },
  // 2024 Images
  {
    id: "2024-1",
    title: "Opening Ceremony 2024",
    description:
      "The grand opening of TVH 2024 with university representatives and sponsors",
    year: "2024",
    image: "/assets/img/gallery/IMG_0121.jpg",
    category: "ceremony",
  },
  {
    id: "2024-2",
    title: "Coding Marathon",
    description:
      "Students deep in concentration during the 48-hour coding marathon",
    year: "2018",
    image: "/assets/img/portfolio/18_6.jpg",
    category: "hacking",
  },
  {
    id: "2024-3",
    title: "Team Collaboration",
    description: "Teams working together to solve complex problems",
    year: "2019",
    image: "/assets/img/portfolio/19_1.jpg",
    category: "teams",
  },
  {
    id: "2024-4",
    title: "Workshop Session",
    description: "Integration workshop led by industry experts",
    year: "2019",
    image: "/assets/img/portfolio/19_4.jpg",
    category: "workshops",
  },
  {
    id: "2024-5",
    title: "Project Presentations",
    description: "Teams presenting their final projects to the judges",
    year: "2024",
    image: "/assets/img/gallery/IMG_9990.jpg",
    category: "presentations",
  },
  {
    id: "2024-6",
    title: "Award Ceremony",
    description: "Celebrating the winners of TVH 2024",
    year: "2019",
    image: "/assets/img/portfolio/19_5.jpg",
    category: "ceremony",
  },

  // 2023 Images
  {
    id: "2023-1",
    title: "Opening Day 2023",
    description: "Participants gathering for the kickoff of TVH 2023",
    year: "2023",
    image: "/assets/img/portfolio/23_19.png",
    category: "ceremony",
  },
  {
    id: "2023-2",
    title: "Midnight Coding",
    description: "Late night coding sessions during the hackathon",
    year: "2023",
    image: "/assets/img/portfolio/tvh8.jpg",
    category: "hacking",
  },
  {
    id: "2023-3",
    title: "Mentorship Session",
    description: "Industry mentors providing guidance to participants",
    year: "2023",
    image: "/assets/img/portfolio/5.jpg",
    category: "workshops",
  },
  {
    id: "2023-4",
    title: "Team Brainstorming",
    description: "Creative ideation session among team members",
    year: "2023",
    image: "/assets/img/slide/s4.jpg",
    category: "teams",
  },
  {
    id: "2023-5",
    title: "Final Demos",
    description: "Teams demonstrating their projects to the audience",
    year: "2023",
    image: "/assets/img/portfolio/tvh5.jpg",
    category: "presentations",
  },

  // 2022 Images
  {
    id: "2022-1",
    title: "Award Ceremony",
    description: "Celebrating the achievements of TVH 2024 participants",
    year: "2024",
    image: "/assets/img/Gallery/2024/1.jpg",
    category: "ceremony",
  },
  {
    id: "2022-2",
    title: "Collaborative Coding",
    description: "Students working together on complex coding challenges",
    year: "2024",
    image: "/assets/img/Gallery/2024/2.jpg",
    category: "hacking",
  },
  {
    id: "2022-3",
    title: "",
    description: "",
    year: "2024",
    image: "/assets/img/Gallery/2024/3.jpg",
    category: "workshops",
  },
  {
    id: "2022-4",
    title: "",
    description: "",
    year: "2024",
    image: "/assets/img/Gallery/2024/4.jpg",
    category: "presentations",
  },

  // 2021 Images
  {
    id: "2021-1",
    title: "",
    description: "",
    year: "2024",
    image: "/assets/img/Gallery/2024/5.jpg",
    category: "ceremony",
  },
  {
    id: "2021-2",
    title: "Collaboration",
    description: "Teams collaborating during the hackathon",
    year: "2024",
    image: "/assets/img/Gallery/2024/6.jpg",
    category: "teams",
  },
  {
    id: "2021-3",
    title: "",
    description: "",
    year: "2024",
    image: "/assets/img/Gallery/2024/7.jpg",
    category: "workshops",
  },
  {
    id: "2021-4",
    title: "",
    description: "",
    year: "2024",
    image: "/assets/img/Gallery/2024/8.jpg",
    category: "presentations",
  },

  // 2020 Images
];
