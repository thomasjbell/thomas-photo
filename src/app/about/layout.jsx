// app/about/layout.jsx
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About Thomas J Bell | Milton Keynes Photographer",
  description: "Learn more about Thomas J Bell, an amateur photographer and materials science student based in Milton Keynes, specializing in landscape, wildlife, and automotive photography.",
  keywords: "Thomas Bell, photographer, Milton Keynes, materials science, landscape photography, wildlife photography",
  openGraph: {
    title: "About Thomas J Bell | Amateur Photographer",
    description: "Learn more about Thomas J Bell, amateur photographer and materials science student from Milton Keynes",
    url: "https://thomasjbell.co.uk/about",
    siteName: "Thomas J Bell Photography",
    images: [
      {
        url: "/images/thomas-bell.png",
        width: 1200,
        height: 630,
        alt: "Thomas J Bell Photographer",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}