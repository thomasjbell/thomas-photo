// src/app/bio/page.jsx
import { generateMetadata as generateSEOMetadata } from "../../utils/seo";
import { pageSEO } from "../../config/seo";
import BioClient from "./BioClient";

export const metadata = generateSEOMetadata(pageSEO.bio);

export default function BioPage() {
  return <BioClient />;
}
