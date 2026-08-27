// src/app/projects/page.jsx
import { generateMetadata as generateSEOMetadata } from "../../utils/seo";
import { pageSEO } from "../../config/seo";
import ProjectsClient from "./ProjectsClient";

export const metadata = generateSEOMetadata(pageSEO.projects);

export default function ProjectsPage() {
  return <ProjectsClient />;
}
