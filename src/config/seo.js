// src/config/seo.js
export const siteConfig = {
  name: "Thomas J Bell Photography",
  description: "Professional photography showcasing stunning landscapes, wildlife, and automotive photography by Thomas J Bell based in Milton Keynes, England.",
  url: "https://www.thomasjbell.co.uk",
  author: "Thomas J Bell",
  email: "thomas@thomasjbell.co.uk",
  social: {
    instagram: "https://www.instagram.com/thomas.j.bell/",
    linkedin: "https://www.linkedin.com/in/thomasbell2/"
  },
  location: {
    city: "Milton Keynes",
    region: "Buckinghamshire",
    country: "GB",
    coordinates: {
      lat: "52.0406",
      lng: "-0.7594"
    }
  }
};

export const defaultSEO = {
  title: "Thomas J Bell Photography | Milton Keynes Photographer",
  description: "Professional photography showcasing stunning landscapes, wildlife, and automotive photography by Thomas J Bell based in Milton Keynes, England.",
  keywords: ["photography", "Milton Keynes", "landscape photography", "wildlife photography", "automotive photography", "Thomas Bell", "photographer", "Buckinghamshire"],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/background.png',
        width: 1200,
        height: 630,
        alt: 'Thomas J Bell Photography Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@thomas_j_bell',
  },
};