// src/utils/seo.js
import { siteConfig, defaultSEO } from '../config/seo';

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  noIndex = false,
}) {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoImage = image || defaultSEO.openGraph.images[0].url;
  const seoUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  
  const allKeywords = [...defaultSEO.keywords, ...keywords].join(', ');

  return {
    metadataBase: new URL(siteConfig.url),
    title: seoTitle,
    description: seoDescription,
    keywords: allKeywords,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: 'en_GB',
      url: seoUrl,
      siteName: siteConfig.name,
      title: seoTitle,
      description: seoDescription,
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      creator: defaultSEO.twitter.creator,
      images: [seoImage],
    },
    alternates: {
      canonical: seoUrl,
    },
  };
}