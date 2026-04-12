export const siteConfig = {
  name: "Thomas J Bell",
  description: "Personal portfolio of Thomas J Bell — photographer, engineer, and creative based in Milton Keynes, England.",
  url: "https://www.thomasjbell.co.uk",
  author: "Thomas J Bell",
  email: "thomas@thomasjbell.co.uk",
  social: {
    instagram: "https://www.instagram.com/thomas.j.bell/",
    linkedin: "https://www.linkedin.com/in/thomasbell2/",
  },
  location: {
    city: "Milton Keynes",
    region: "Buckinghamshire",
    country: "GB",
    coordinates: {
      lat: "52.0406",
      lng: "-0.7594",
    },
  },
};

export const defaultSEO = {
  title: "Thomas J Bell | Photographer, Engineer & Creative",
  description: "Personal portfolio of Thomas J Bell - photographer, engineer, and creative based in Milton Keynes, England. Showcasing landscape, wildlife, and automotive photography alongside engineering and Blender projects.",
  keywords: [
    "Thomas J Bell",
    "photography",
    "Milton Keynes",
    "landscape photography",
    "wildlife photography",
    "automotive photography",
    "Blender",
    "3D art",
    "engineering",
    "portfolio",
    "Buckinghamshire",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/background.png",
        width: 1200,
        height: 630,
        alt: "Thomas J Bell — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@thomas_j_bell",
  },
};

// Per-page SEO overrides — import and spread these into generateMetadata calls
export const pageSEO = {
  home: {
    title: "Thomas J Bell | Photographer, Engineer & Creative",
    description: "Welcome to the portfolio of Thomas J Bell - photographer, engineer, animator, and creative based in Milton Keynes.",
    keywords: ["portfolio", "personal website", "photographer", "engineer"],
  },
  photography: {
    title: "Photography",
    description: "A curated collection of landscape, wildlife, and automotive photography by Thomas J Bell.",
    keywords: ["photography portfolio", "landscape", "wildlife", "automotive", "Milton Keynes photographer"],
    url: "/photography",
  },
  projects: {
    title: "Projects",
    description: "Engineering, web development, and 3D art projects by Thomas J Bell - from Next.js websites to Blender renders.",
    keywords: ["projects", "Blender", "3D art", "Next.js", "web development", "engineering"],
    url: "/projects",
  },
  bio: {
    title: "Bio",
    description: "About Thomas J Bell - engineering student, photographer, animator, and creative based in Milton Keynes, Buckinghamshire.",
    keywords: ["about", "bio", "engineering student", "photographer"],
    url: "/about",
  },
};