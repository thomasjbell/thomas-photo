// src/app/sitemap.js
import { photographyItems } from '../utils/constants';
import { siteConfig } from '../config/seo';

export default function sitemap() {
  const baseUrl = siteConfig.url;
  
  // Static pages with their priorities and change frequencies
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/photography`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return [...routes];
}