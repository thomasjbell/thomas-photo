// src/components/StructuredData.jsx
import { siteConfig } from '../config/seo';

export function PersonSchema({ className = "" }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.author,
    "jobTitle": "Photographer & Engineering Student",
    "description": "Amateur photographer specializing in landscape, wildlife, and automotive photography based in Milton Keynes, England.",
    "url": siteConfig.url,
    "image": `${siteConfig.url}/images/thomas-bell.png`,
    "sameAs": [
      siteConfig.social.instagram,
      siteConfig.social.linkedin
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.location.city,
      "addressRegion": siteConfig.location.region,
      "addressCountry": siteConfig.location.country
    },
    "email": siteConfig.email,
    "knowsAbout": [
      "Photography",
      "Landscape Photography", 
      "Wildlife Photography",
      "Automotive Photography",
      "Materials Science",
      "Engineering"
    ]
  };

  return (
    <script
      type="application/ld+json"
      className={className}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}

export function WebsiteSchema({ className = "" }) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "author": {
      "@type": "Person",
      "name": siteConfig.author
    },
    "inLanguage": "en-GB",
    "copyrightYear": new Date().getFullYear(),
    "copyrightHolder": {
      "@type": "Person",
      "name": siteConfig.author
    }
  };

  return (
    <script
      type="application/ld+json"
      className={className}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}

export function BreadcrumbSchema({ items, className = "" }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      className={className}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

export function PhotographyPortfolioSchema({ photos, className = "" }) {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Thomas J Bell Photography Portfolio",
    "description": "A collection of professional photographs including landscapes, wildlife, and automotive photography",
    "creator": {
      "@type": "Person",
      "name": siteConfig.author,
      "url": siteConfig.url
    },
    "dateCreated": "2024",
    "genre": ["Landscape Photography", "Wildlife Photography", "Automotive Photography"],
    "image": photos.slice(0, 10).map(photo => ({ // Limit to first 10 for performance
      "@type": "ImageObject",
      "name": photo.title,
      "url": `${siteConfig.url}${photo.imagePath}`,
      "description": `${photo.title} - Professional photography by ${siteConfig.author}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      className={className}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
    />
  );
}