// Centralized assets management
export const assets = {
  // Logos
  logos: {
    main: "/images/tvh-logo.svg",
    light: "/images/tvh-logo-light.svg",
    dark: "/images/tvh-logo-dark.svg",
    icon: "/images/tvh-icon.svg",
  },

  // Hero section
  hero: {
    mainImage: "/images/hero-image.png",
    backgroundPattern: "/images/hero-pattern.svg",
    decoration1: "/images/decoration-1.svg",
    decoration2: "/images/decoration-2.svg",
  },

  // About section
  about: {
    image1: "/images/about-1.jpg",
    image2: "/images/about-2.jpg",
    icon1: "/images/idea-icon.svg",
    icon2: "/images/team-icon.svg",
    icon3: "/images/code-icon.svg",
  },

  // Timeline section
  timeline: {
    icon1: "/images/timeline-1.svg",
    icon2: "/images/timeline-2.svg",
    icon3: "/images/timeline-3.svg",
    icon4: "/images/timeline-4.svg",
  },

  // Sponsors
  sponsors: {
    sponsor1: "/images/sponsor-1.png",
    sponsor2: "/images/sponsor-2.png",
    sponsor3: "/images/sponsor-3.png",
    sponsor4: "/images/sponsor-4.png",
    sponsor5: "/images/sponsor-5.png",
  },

  // Animations
  animations: {
    confetti: "/animations/confetti.json",
    coding: "/animations/coding.json",
    rocket: "/animations/rocket.json",
  },

  // Social icons
  social: {
    twitter: "/images/social/twitter.svg",
    instagram: "/images/social/instagram.svg",
    facebook: "/images/social/facebook.svg",
    linkedin: "/images/social/linkedin.svg",
  },

  // Placeholder images for development
  placeholders: {
    person: "/placeholder.svg?height=400&width=400",
    logo: "/placeholder.svg?height=200&width=200",
    wide: "/placeholder.svg?height=400&width=800",
    square: "/placeholder.svg?height=400&width=400",
  },
}

// Placeholder function to use until real images are available
export function getPlaceholder(width: number, height: number): string {
  return `/placeholder.svg?height=${height}&width=${width}`
}
