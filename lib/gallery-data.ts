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
  // 2024 Images
  {
    id: "2024-1",
    title: "Opening Ceremony 2024",
    description: "The grand opening of TVH 2024 with university representatives and sponsors",
    year: "2024",
    image: "/assets/img/gallery/IMG_0121.jpg",
    category: "ceremony",
  },
  {
    id: "2024-2",
    title: "Coding Marathon",
    description: "Students deep in concentration during the 48-hour coding marathon",
    year: "2024",
    image: "/assets/img/portfolio/18_6.jpg",
    category: "hacking",
  },
  {
    id: "2024-3",
    title: "Team Collaboration",
    description: "Teams working together to solve complex problems",
    year: "2024",
    image: "/assets/img/portfolio/19_1.jpg",
    category: "teams",
  },
  {
    id: "2024-4",
    title: "Workshop Session",
    description: "Integration workshop led by industry experts",
    year: "2024",
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
    year: "2024",
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
    title: "TVH 2022 Launch",
    description: "The official launch of The Varsity Hackathon 2022",
    year: "2022",
    image: getPlaceholderImage(800, 600, "TVH 2022 Launch"),
    category: "ceremony",
  },
  {
    id: "2022-2",
    title: "Collaborative Coding",
    description: "Students working together on complex coding challenges",
    year: "2022",
    image: getPlaceholderImage(800, 600, "Collaborative Coding 2022"),
    category: "hacking",
  },
  {
    id: "2022-3",
    title: "Tech Talk",
    description: "Industry leaders sharing insights with participants",
    year: "2022",
    image: getPlaceholderImage(800, 600, "Tech Talk 2022"),
    category: "workshops",
  },
  {
    id: "2022-4",
    title: "Project Showcase",
    description: "Innovative projects on display at the showcase",
    year: "2022",
    image: getPlaceholderImage(800, 600, "Project Showcase 2022"),
    category: "presentations",
  },

  // 2021 Images
  {
    id: "2021-1",
    title: "Virtual Opening 2021",
    description: "The first virtual TVH due to COVID-19 restrictions",
    year: "2021",
    image: getPlaceholderImage(800, 600, "Virtual Opening 2021"),
    category: "ceremony",
  },
  {
    id: "2021-2",
    title: "Remote Collaboration",
    description: "Teams collaborating remotely during the virtual hackathon",
    year: "2021",
    image: getPlaceholderImage(800, 600, "Remote Collaboration 2021"),
    category: "teams",
  },
  {
    id: "2021-3",
    title: "Online Workshop",
    description: "Virtual workshop on cloud technologies",
    year: "2021",
    image: getPlaceholderImage(800, 600, "Online Workshop 2021"),
    category: "workshops",
  },
  {
    id: "2021-4",
    title: "Virtual Presentations",
    description: "Teams presenting their projects via video conference",
    year: "2021",
    image: getPlaceholderImage(800, 600, "Virtual Presentations 2021"),
    category: "presentations",
  },

  // 2020 Images
  {
    id: "2020-1",
    title: "Pre-Pandemic Kickoff",
    description: "The last in-person event before COVID-19 restrictions",
    year: "2020",
    image: getPlaceholderImage(800, 600, "Pre-Pandemic Kickoff 2020"),
    category: "ceremony",
  },
  {
    id: "2020-2",
    title: "Intensive Coding",
    description: "Participants focused on coding their solutions",
    year: "2020",
    image: getPlaceholderImage(800, 600, "Intensive Coding 2020"),
    category: "hacking",
  },
  {
    id: "2020-3",
    title: "Team Discussions",
    description: "Teams discussing project architecture and implementation",
    year: "2020",
    image: getPlaceholderImage(800, 600, "Team Discussions 2020"),
    category: "teams",
  },

  // 2019 Images
  {
    id: "2019-1",
    title: "Inaugural TVH",
    description: "The very first TVH event in South Africa",
    year: "2019",
    image: getPlaceholderImage(800, 600, "Inaugural TVH 2019"),
    category: "ceremony",
  },
  {
    id: "2019-2",
    title: "First Hackathon Teams",
    description: "The pioneering teams of the first TVH",
    year: "2019",
    image: getPlaceholderImage(800, 600, "First Hackathon Teams 2019"),
    category: "teams",
  },
  {
    id: "2019-3",
    title: "Innovation Showcase",
    description: "The first batch of innovative projects from TVH",
    year: "2019",
    image: getPlaceholderImage(800, 600, "Innovation Showcase 2019"),
    category: "presentations",
  },
  {
    id: "2019-4",
    title: "Closing Ceremony",
    description: "Celebrating the success of the first TVH",
    year: "2019",
    image: getPlaceholderImage(800, 600, "Closing Ceremony 2019"),
    category: "ceremony",
  },
]
