// src/app/photography/layout.jsx
import Navbar from "@/components/Navbar";
import { BreadcrumbSchema } from "@/components/StructuredData";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";

export const metadata = generateSEOMetadata({
  title: "Photography Portfolio | Professional Photography Gallery",
  description: "Browse through a stunning collection of professional photographs including landscapes, wildlife, and automotive photography by Thomas J Bell from Milton Keynes.",
  keywords: ["photography portfolio", "professional photography", "landscape photos", "wildlife photography", "automotive photography", "photo gallery"],
  url: "/photography",
  image: "/photography/bluebell-wood.png",
});

const breadcrumbItems = [
  { name: "Home", url: "https://www.thomasjbell.co.uk" },
  { name: "Photography", url: "https://www.thomasjbell.co.uk/photography" }
];

export default function PhotographyLayout({ children }) {
  return (
    <>
      <Navbar />
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  );
}