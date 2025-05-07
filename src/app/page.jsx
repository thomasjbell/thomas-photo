// app/page.jsx
import Hero from "@/components/Hero";

export const metadata = {
  title: "Thomas J Bell Photography | Milton Keynes Photographer",
  description: "Amateur photography portfolio showcasing landscapes, wildlife, and automotive photography by Thomas J Bell based in Milton Keynes, England.",
  keywords: "photography, Milton Keynes, landscape photography, wildlife photography, automotive photography, Thomas Bell",
  openGraph: {
    title: "Thomas J Bell Photography",
    description: "Amateur photography showcasing stunning landscapes, wildlife, and automotive photography",
    url: "https://thomasjbell.co.uk",
    siteName: "Thomas J Bell Photography",
    images: [
      {
        url: "/images/background.png", 
        width: 1200,
        height: 630,
        alt: "Thomas J Bell Photography",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
    </div>
  );
}