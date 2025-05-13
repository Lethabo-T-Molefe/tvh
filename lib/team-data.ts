export interface TeamMember {
  id: string
  name: string
  title: string
  department: string
  image: string
  bio: string[]
  email?: string
  linkedin?: string
  twitter?: string
  website?: string
  location?: string
  skills?: string[]
}

// Helper function to generate placeholder image URLs with specific dimensions
function getPlaceholderImage(name: string): string {
  return `/placeholder.svg?height=400&width=400&text=${encodeURIComponent(name.replace(" ", "+"))}`
}

export const teamData: TeamMember[] = [
  // Leadership Team
  {
    id: "member-1",
    name: "Sarah Johnson",
    title: "Executive Director",
    department: "Leadership",
    image: getPlaceholderImage("Sarah Johnson"),
    bio: [
      "Sarah is the visionary leader behind The Varsity Hackathon. With over 10 years of experience in the tech industry and a passion for education, she founded TVH in 2019 to create opportunities for university students to develop practical skills and connect with industry professionals.",
      "Prior to TVH, Sarah worked as a software engineer at Google and later as an innovation consultant for various tech startups. She holds a Master's degree in Computer Science from the University of Cape Town and is a frequent speaker at technology conferences across Africa.",
      "Under her leadership, TVH has grown from a small event with 100 participants to South Africa's premier inter-university hackathon, attracting over 500 students annually.",
    ],
    email: "sarah@tvh.co.za",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    twitter: "https://twitter.com/sarahjohnson",
    website: "https://sarahjohnson.com",
    location: "Cape Town, South Africa",
    skills: ["Leadership", "Strategic Planning", "Public Speaking", "Fundraising", "Community Building"],
  },
  {
    id: "member-2",
    name: "David Nkosi",
    title: "Operations Director",
    department: "Leadership",
    image: getPlaceholderImage("David Nkosi"),
    bio: [
      "David oversees all operational aspects of TVH, ensuring that the event runs smoothly from planning to execution. He joined the TVH team in 2020 after participating as a mentor in the inaugural hackathon.",
      "With a background in event management and a degree in Business Administration from the University of Johannesburg, David brings valuable expertise in logistics, team coordination, and stakeholder management.",
      "He is passionate about creating inclusive environments where innovation can thrive and is committed to making TVH accessible to students from all backgrounds and universities across South Africa.",
    ],
    email: "david@tvh.co.za",
    linkedin: "https://linkedin.com/in/davidnkosi",
    location: "Johannesburg, South Africa",
    skills: ["Event Management", "Operations", "Team Leadership", "Budget Management", "Strategic Planning"],
  },
  {
    id: "member-3",
    name: "Priya Patel",
    title: "Partnerships Director",
    department: "Leadership",
    image: getPlaceholderImage("Priya Patel"),
    bio: [
      "Priya leads TVH's partnerships and sponsorship efforts, building relationships with companies, universities, and organizations that support the hackathon's mission. She joined the leadership team in 2021 after successfully securing major sponsorships as a volunteer.",
      "With a background in marketing and business development, Priya has helped TVH establish partnerships with some of South Africa's leading tech companies and educational institutions. Her strategic approach to partnership development has been instrumental in expanding the resources and opportunities available to hackathon participants.",
      "Priya holds a Bachelor's degree in Marketing from Stellenbosch University and previously worked in corporate partnerships at a major tech accelerator.",
    ],
    email: "priya@tvh.co.za",
    linkedin: "https://linkedin.com/in/priyapatel",
    twitter: "https://twitter.com/priyapatel",
    location: "Durban, South Africa",
    skills: ["Partnership Development", "Negotiation", "Relationship Management", "Strategic Marketing", "Fundraising"],
  },

  // Operations Team
  {
    id: "member-4",
    name: "Thabo Molefe",
    title: "Event Manager",
    department: "Operations",
    image: getPlaceholderImage("Thabo Molefe"),
    bio: [
      "Thabo is responsible for the day-to-day planning and execution of TVH events. He coordinates with venues, vendors, and the logistics team to ensure that everything runs according to plan.",
      "With a background in hospitality management and event planning, Thabo brings attention to detail and excellent problem-solving skills to the team. He has been with TVH since 2021 and has played a key role in scaling the event to accommodate more participants while maintaining a high-quality experience.",
      "Thabo is known for his calm demeanor under pressure and his ability to anticipate and address potential issues before they arise.",
    ],
    email: "thabo@tvh.co.za",
    linkedin: "https://linkedin.com/in/thabomolefe",
    location: "Johannesburg, South Africa",
    skills: ["Event Planning", "Vendor Management", "Crisis Management", "Scheduling", "Budgeting"],
  },
  {
    id: "member-5",
    name: "Lerato Khumalo",
    title: "Participant Coordinator",
    department: "Operations",
    image: getPlaceholderImage("Lerato Khumalo"),
    bio: [
      "Lerato manages the participant experience at TVH, from registration and onboarding to support during the event. She ensures that all participants have the information and resources they need to make the most of their hackathon experience.",
      "As a former TVH participant herself, Lerato understands the challenges and needs of hackathon participants. She uses this insight to continuously improve the participant journey and create a supportive environment for all attendees.",
      "Lerato holds a degree in Psychology from the University of Pretoria and is passionate about creating inclusive spaces where students from all backgrounds can thrive.",
    ],
    email: "lerato@tvh.co.za",
    linkedin: "https://linkedin.com/in/leratokhumalo",
    location: "Pretoria, South Africa",
    skills: ["Community Management", "Customer Service", "Event Coordination", "Problem Solving", "Communication"],
  },

  // Technology Team
  {
    id: "member-6",
    name: "Sipho Ndlovu",
    title: "Technical Director",
    department: "Technology",
    image: getPlaceholderImage("Sipho Ndlovu"),
    bio: [
      "Sipho leads the technology team at TVH, overseeing all technical aspects of the hackathon including infrastructure, tools, and technical challenges. He ensures that participants have access to the resources and support they need to build their projects.",
      "With over 15 years of experience as a software engineer and technical leader, Sipho brings deep expertise in various technologies and a passion for mentoring young developers. He has been with TVH since its inception and has played a crucial role in shaping the technical direction of the hackathon.",
      "Sipho holds a Master's degree in Computer Engineering from the University of the Witwatersrand and has worked at several leading tech companies including Microsoft and Amazon.",
    ],
    email: "sipho@tvh.co.za",
    linkedin: "https://linkedin.com/in/siphondlovu",
    twitter: "https://twitter.com/siphondlovu",
    website: "https://siphondlovu.com",
    location: "Johannesburg, South Africa",
    skills: ["Software Development", "Cloud Infrastructure", "Technical Leadership", "System Architecture", "DevOps"],
  },
  {
    id: "member-7",
    name: "Fatima Ahmed",
    title: "Developer Relations",
    department: "Technology",
    image: getPlaceholderImage("Fatima Ahmed"),
    bio: [
      "Fatima manages relationships with developer communities, technical mentors, and API providers for TVH. She coordinates technical workshops and ensures that participants have access to the tools and knowledge they need during the hackathon.",
      "With a background in software development and community management, Fatima is passionate about making technology accessible to everyone. She joined TVH in 2022 and has significantly expanded the technical resources available to participants.",
      "Fatima is an active contributor to open source projects and regularly speaks at tech meetups and conferences across South Africa.",
    ],
    email: "fatima@tvh.co.za",
    linkedin: "https://linkedin.com/in/fatimaahmed",
    twitter: "https://twitter.com/fatimaahmed",
    location: "Cape Town, South Africa",
    skills: [
      "Developer Relations",
      "Technical Writing",
      "Workshop Facilitation",
      "Community Building",
      "API Integration",
    ],
  },
  {
    id: "member-8",
    name: "Michael van der Merwe",
    title: "Infrastructure Lead",
    department: "Technology",
    image: getPlaceholderImage("Michael van der Merwe"),
    bio: [
      "Michael is responsible for the technical infrastructure that powers TVH, including networking, servers, and development environments. He ensures that participants have reliable internet access, computing resources, and technical support throughout the hackathon.",
      "With expertise in network engineering and cloud infrastructure, Michael has built a robust technical foundation for TVH that can support hundreds of participants simultaneously. He joined the team in 2021 and has continuously improved the technical experience for hackathon participants.",
      "Michael holds certifications in AWS, Azure, and Cisco networking and has a background in IT infrastructure management for large events.",
    ],
    email: "michael@tvh.co.za",
    linkedin: "https://linkedin.com/in/michaelvandermerwe",
    location: "Johannesburg, South Africa",
    skills: ["Network Engineering", "Cloud Infrastructure", "IT Support", "System Administration", "Troubleshooting"],
  },

  // Design Team
  {
    id: "member-9",
    name: "Zoe Mokoena",
    title: "Creative Director",
    department: "Design",
    image: getPlaceholderImage("Zoe Mokoena"),
    bio: [
      "Zoe leads the design team at TVH, overseeing all visual aspects of the hackathon including branding, marketing materials, website design, and event aesthetics. She ensures that TVH presents a cohesive and engaging visual identity across all platforms.",
      "With a background in graphic design and brand strategy, Zoe has helped establish TVH's distinctive visual identity and create memorable experiences for participants. She joined the team in 2020 and has been instrumental in elevating the brand's visual presence.",
      "Zoe holds a degree in Visual Communication from the Red & Yellow Creative School of Business and has worked with several major brands on their visual identity and marketing campaigns.",
    ],
    email: "zoe@tvh.co.za",
    linkedin: "https://linkedin.com/in/zoemokoena",
    twitter: "https://twitter.com/zoemokoena",
    website: "https://zoemokoena.com",
    location: "Cape Town, South Africa",
    skills: ["Graphic Design", "Brand Strategy", "UI/UX Design", "Art Direction", "Visual Storytelling"],
  },
  {
    id: "member-10",
    name: "Jamal Ibrahim",
    title: "UI/UX Designer",
    department: "Design",
    image: getPlaceholderImage("Jamal Ibrahim"),
    bio: [
      "Jamal designs user interfaces and experiences for TVH's digital platforms, including the website, registration system, and participant portal. He focuses on creating intuitive, accessible, and visually appealing digital experiences that enhance the hackathon journey.",
      "With expertise in user-centered design and front-end development, Jamal brings both aesthetic sensibility and technical knowledge to his role. He joined TVH in 2022 and has significantly improved the usability and visual appeal of the hackathon's digital touchpoints.",
      "Jamal holds a degree in Interaction Design from the University of Cape Town and has previously worked with startups and design agencies on various digital products.",
    ],
    email: "jamal@tvh.co.za",
    linkedin: "https://linkedin.com/in/jamalibrahim",
    website: "https://jamalibrahim.com",
    location: "Cape Town, South Africa",
    skills: ["UI Design", "UX Research", "Prototyping", "Interaction Design", "Front-end Development"],
  },

  // Marketing Team
  {
    id: "member-11",
    name: "Nomsa Dlamini",
    title: "Marketing Manager",
    department: "Marketing",
    image: getPlaceholderImage("Nomsa Dlamini"),
    bio: [
      "Nomsa leads the marketing efforts for TVH, developing and implementing strategies to promote the hackathon to students, universities, and industry partners. She oversees all marketing channels including social media, email, content marketing, and campus outreach.",
      "With a background in digital marketing and event promotion, Nomsa has helped TVH reach a wider audience and attract participants from universities across South Africa. She joined the team in 2021 and has consistently increased engagement and registration numbers.",
      "Nomsa holds a degree in Marketing Communications from the University of Johannesburg and has experience marketing educational events and tech conferences.",
    ],
    email: "nomsa@tvh.co.za",
    linkedin: "https://linkedin.com/in/nomsadlamini",
    twitter: "https://twitter.com/nomsadlamini",
    location: "Johannesburg, South Africa",
    skills: ["Digital Marketing", "Social Media Strategy", "Content Creation", "Campaign Management", "Analytics"],
  },
  {
    id: "member-12",
    name: "Alex Chen",
    title: "Content Creator",
    department: "Marketing",
    image: getPlaceholderImage("Alex Chen"),
    bio: [
      "Alex creates engaging content for TVH's marketing channels, including blog posts, social media content, videos, and email newsletters. He tells the stories of TVH participants, sponsors, and the impact of the hackathon on the tech ecosystem in South Africa.",
      "With a background in journalism and digital content creation, Alex brings strong storytelling skills and multimedia expertise to the team. He joined TVH in 2022 and has significantly enhanced the quality and engagement of the hackathon's content.",
      "Alex holds a degree in Media Studies from Rhodes University and has previously worked as a content creator for tech publications and startups.",
    ],
    email: "alex@tvh.co.za",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
    website: "https://alexchen.com",
    location: "Cape Town, South Africa",
    skills: ["Content Writing", "Video Production", "Social Media Content", "Storytelling", "Photography"],
  },

  // Sponsorships Team
  {
    id: "member-13",
    name: "Olivia Botha",
    title: "Sponsorship Manager",
    department: "Sponsorships",
    image: getPlaceholderImage("Olivia Botha"),
    bio: [
      "Olivia manages relationships with TVH's sponsors and partners, developing sponsorship packages, securing funding, and ensuring that sponsors receive value from their involvement with the hackathon. She works closely with the leadership team to align sponsorship opportunities with the hackathon's goals and values.",
      "With a background in business development and corporate partnerships, Olivia has helped TVH secure support from major tech companies, educational institutions, and government agencies. She joined the team in 2021 and has consistently exceeded fundraising targets.",
      "Olivia holds a degree in Business Science from the University of Cape Town and has experience in corporate sponsorships and partnership development for nonprofit organizations.",
    ],
    email: "olivia@tvh.co.za",
    linkedin: "https://linkedin.com/in/oliviabotha",
    location: "Johannesburg, South Africa",
    skills: ["Sponsorship Development", "Relationship Management", "Negotiation", "Proposal Writing", "Fundraising"],
  },

  // Logistics Team
  {
    id: "member-14",
    name: "Emmanuel Okafor",
    title: "Logistics Coordinator",
    department: "Logistics",
    image: getPlaceholderImage("Emmanuel Okafor"),
    bio: [
      "Emmanuel manages the logistics for TVH events, coordinating venue setup, equipment, catering, transportation, and accommodation. He ensures that all physical aspects of the hackathon run smoothly and that participants have a comfortable and productive environment.",
      "With experience in event logistics and supply chain management, Emmanuel brings strong organizational skills and attention to detail to his role. He joined TVH in 2022 and has streamlined many of the operational processes for the hackathon.",
      "Emmanuel holds a diploma in Events Management from the Cape Peninsula University of Technology and has worked on logistics for various large-scale events in South Africa.",
    ],
    email: "emmanuel@tvh.co.za",
    linkedin: "https://linkedin.com/in/emmanuelokafor",
    location: "Johannesburg, South Africa",
    skills: [
      "Event Logistics",
      "Vendor Management",
      "Inventory Control",
      "Transportation Coordination",
      "Risk Management",
    ],
  },

  // Volunteers Team
  {
    id: "member-15",
    name: "Anele Zwane",
    title: "Volunteer Coordinator",
    department: "Volunteers",
    image: getPlaceholderImage("Anele Zwane"),
    bio: [
      "Anele recruits, trains, and manages the volunteer team for TVH events. She ensures that volunteers are well-prepared, assigned to appropriate roles, and supported throughout the hackathon. Her team of volunteers plays a crucial role in creating a positive experience for all participants.",
      "As a former TVH volunteer herself, Anele understands the importance of the volunteer experience and works to create meaningful opportunities for volunteers to contribute and develop their skills. She joined the team in 2022 and has built a strong and dedicated volunteer community.",
      "Anele is currently completing her degree in Human Resources Management at the University of the Western Cape and has experience coordinating volunteers for various community and educational events.",
    ],
    email: "anele@tvh.co.za",
    linkedin: "https://linkedin.com/in/anelezwane",
    location: "Cape Town, South Africa",
    skills: ["Volunteer Management", "Training & Development", "Team Coordination", "Scheduling", "Community Building"],
  },
]
