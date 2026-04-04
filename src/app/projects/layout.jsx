// src/app/projects/layout.jsx
import Navbar from "@/components/Navbar";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Thomas J Bell | Projects",
  description:
    "Browse a selection of projects by Thomas J Bell, including 3D animation and web development projects.",
  keywords: [
    "web development",
    "home projects",
    "blender projects",
    "3d rendering"
  ],
  url: "/projects",
  image: "/projects/equalab-equations.png",
});

const breadcrumbItems = [
  { name: "Home", url: "https://www.thomasjbell.co.uk" },
  { name: "Photography", url: "https://www.thomasjbell.co.uk/photography" },
];

export default function ProjectsLayout({ children }) {
  return (
    <>
      <Navbar />
     
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  );
}
