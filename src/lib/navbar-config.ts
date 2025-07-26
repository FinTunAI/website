// Configuration for navbar scroll behavior
// Adjust these values based on your actual component heights

export const SECTION_CONFIG = {
  // Hero section with GoogleGeminiEffect (black background)
  hero: {
    height: () => window.innerHeight,
    navbarState: "white" as const, // White navbar on black background
  },

  // StackedSlider section
  stackedSlider: {
    height: 800, // Adjust this value based on your component
    navbarState: "dark" as const, // Assuming light background
  },

  // ServiceCards section
  serviceCards: {
    height: 1000, // Adjust this value based on your component
    navbarState: "dark" as const, // Assuming light background
  },

  // CompetitiveAdvantages section
  competitiveAdvantages: {
    height: 800, // Adjust this value based on your component
    navbarState: "white" as const, // Assuming dark background
  },

  // LogoMarqueeSection
  logoMarquee: {
    height: 600, // Adjust this value based on your component
    navbarState: "dark" as const, // Assuming light background
  },
}

// Helper function to calculate section boundaries
export const getSectionBoundaries = () => {
  const heroHeight = SECTION_CONFIG.hero.height()
  const stackedSliderEnd = heroHeight + SECTION_CONFIG.stackedSlider.height
  const serviceCardsEnd = stackedSliderEnd + SECTION_CONFIG.serviceCards.height
  const competitiveAdvantagesEnd = serviceCardsEnd + SECTION_CONFIG.competitiveAdvantages.height

  return {
    hero: { start: 0, end: heroHeight },
    stackedSlider: { start: heroHeight, end: stackedSliderEnd },
    serviceCards: { start: stackedSliderEnd, end: serviceCardsEnd },
    competitiveAdvantages: { start: serviceCardsEnd, end: competitiveAdvantagesEnd },
    logoMarquee: { start: competitiveAdvantagesEnd, end: Number.POSITIVE_INFINITY },
  }
}
