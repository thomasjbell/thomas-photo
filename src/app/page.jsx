// app/page.jsx
import Hero from "@/components/Hero";
import { generateMetadata as generateSEOMetadata } from '../utils/seo';
import { pageSEO } from '../config/seo';

export const metadata = generateSEOMetadata(pageSEO.home);

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
    </div>
  );
}
