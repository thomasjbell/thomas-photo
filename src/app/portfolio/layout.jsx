// app/portfolio/layout.jsx
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Photography Portfolio | Thomas J Bell",
  description: "Browse through a collection of stunning photographs including landscapes, wildlife, and automotive photography by Thomas J Bell.",
  keywords: "photography portfolio, Thomas Bell, landscape photos, wildlife photography, automotive photography",
  openGraph: {
    title: "Photography Portfolio | Thomas J Bell",
    description: "Browse through a collection of stunning photographs including landscapes, wildlife, and automotive photography",
    url: "https://thomasjbell.co.uk/portfolio",
    siteName: "Thomas J Bell Photography", 
    images: [
      {
        url: "/portfolio/bluebell-wood.png",
        width: 1200,
        height: 630,
        alt: "Thomas J Bell Photography Portfolio",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function PortfolioLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}