// Centralized assets management
export const assets = {
  // Logos
  logos: {
    main: "/assets/img/logo.png",
    secondary: "/assets/img/logo2.png",
    light: "/assets/img/lg.png",
    dark: "/assets/img/lg2.png",
    slide: "/assets/img/slide/slide-1_1.png",
  },

  // Hero section
  hero: {
    background: "/assets/img/hero-bg.jpg",
    background1: "/assets/img/hero-bg1.png",
  },

  // Team members
  team: {
    siviwe: "/assets/img/team/siviwe.png",
    silver: "/assets/img/team/silver.png",
    qeen: "/assets/img/team/qeen.png",
    nonku: "/assets/img/team/nonku.jpg",
    masego: "/assets/img/team/Masego2.jpg",
    dipono: "/assets/img/team/dipono.jpg",
    ayu: "/assets/img/team/ayu.jpg",
    simon: "/assets/img/team/simon.jpg",
    sako: "/assets/img/team/sako.jpg",
    itu: "/assets/img/team/itu.jpg",
  },

  // Slideshow images
  slides: {
    tvh1: "/assets/img/slide/tvh1.jpeg",
    tvh2: "/assets/img/slide/tvh2.png",
    tvh3: "/assets/img/slide/tvh3.png",
    tvh4: "/assets/img/slide/tvh4.png",
    slide1: "/assets/img/slide/slide-1.jpg",
    slide2: "/assets/img/slide/slide-2.jpg",
    slide4: "/assets/img/slide/s4.jpg",
  },

  // Tshwane related images
  tshwane: {
    house: "/assets/img/slide/TshwaneHouse.jpg",
    house2: "/assets/img/slide/Tshwane House2.jpg",
    councilChamber: "/assets/img/slide/Tshwane Council Chamber.jpg",
    jakaranda: "/assets/img/slide/Tshwane-Jakaranda.jpg",
    jakaranda2: "/assets/img/slide/Tshwane-Jakaranda-2.jpg",
    tshwane1: "/assets/img/slide/Tshwane 1.jpg",
  },

  // Pretoria related images
  pretoria: {
    pta1: "/assets/img/slide/PTA1.jpg",
    pta2: "/assets/img/slide/PTA2.jpg",
    pta3: "/assets/img/slide/PTA3.jpg",
    pta4: "/assets/img/slide/PTA4.jpg",
    pta5: "/assets/img/slide/PTA5.jpg",
    pta6: "/assets/img/slide/PTA6.jpg",
    pta7: "/assets/img/slide/PTA7.jpg",
    pta8: "/assets/img/slide/PTA8.jpg",
  },

  // Miscellaneous images
  misc: {
    poster: "/assets/img/poster.png",
    twitter: "/assets/img/tw.png",
    cot: "/assets/img/cot.png",
    index10: "/assets/img/index-10.png",
  },

  // Team icons and UI elements
  icons: {
    watch: "/assets/img/team/watch.png",
    phone: "/assets/img/team/phone.png",
    flickr: "/assets/img/team/flickr.png",
    aws: "/assets/img/team/aws.jpg",
  },

  // Placeholder images for development
  placeholders: {
    person: "/placeholder.svg?height=400&width=400",
    logo: "/placeholder.svg?height=200&width=200",
    wide: "/placeholder.svg?height=400&width=800",
    square: "/placeholder.svg?height=400&width=400",
  },
};

// Placeholder function to use until real images are available
export function getPlaceholder(width: number, height: number): string {
  return `/placeholder.svg?height=${height}&width=${width}`;
}
