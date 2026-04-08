import { photographyItems, projectItems } from '../utils/constants';
import { siteConfig } from '../config/seo';

export default function sitemap() {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/photography`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic project detail pages — only included if the project has a slug
  const projectRoutes = projectItems
    .filter((p) => p.slug)
    .map((p) => ({
      url: `${baseUrl}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

  return [...staticRoutes, ...projectRoutes];
}