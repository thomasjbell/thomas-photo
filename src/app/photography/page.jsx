// src/app/photography/page.jsx
import { generateMetadata as generateSEOMetadata } from "../../utils/seo";
import { pageSEO } from "../../config/seo";
import PhotographyClient from "./PhotographyClient";

export const metadata = generateSEOMetadata(pageSEO.photography);

export default function PhotographyPage() {
  return <PhotographyClient />;
}
