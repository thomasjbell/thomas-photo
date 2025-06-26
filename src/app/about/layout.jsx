// src/app/about/layout.jsx
import Navbar from "@/components/Navbar";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "About Thomas J Bell | Engineering Student & Photographer",
  description: "Learn about Thomas J Bell, an engineering and materials science student from Milton Keynes who specializes in landscape, wildlife, and automotive photography.",
  keywords: ["Thomas Bell", "photographer", "engineering student", "materials science", "Milton Keynes", "biography"],
  url: "/about",
  image: "/images/thomas-bell.png",
  type: "profile",
});

const breadcrumbItems = [
  { name: "Home", url: "https://www.thomasjbell.co.uk" },
  { name: "About", url: "https://www.thomasjbell.co.uk/about" }
];

export default function AboutLayout({ children }) {
  return (
    <>
      <Navbar />
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  );
}