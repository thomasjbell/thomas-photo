// app/about/layout.jsx
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About Thomas J Bell | About Me",
  description:
    "Learn more about Thomas J Bell, an amateur photographer and materials science student based in Milton Keynes, specializing in landscape, wildlife, and automotive photography.",
  keywords:
    "Thomas Bell, photographer, Milton Keynes, materials science, landscape photography, wildlife photography",
  openGraph: {
    title: "About Thomas J Bell | Curriculum Vitae",
    description:
      "Learn more about Thomas J Bell, amateur photographer and materials science student from Milton Keynes",
    url: "https://thomasjbell.co.uk/cv",
    siteName: "Thomas J Bell Photography",

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
