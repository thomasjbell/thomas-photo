// app/photography/layout.jsx
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Thomas J Bell | Photography photography",
  description:
    "Browse through a collection of stunning photographs including landscapes, wildlife, and automotive photography by Thomas J Bell.",
  keywords:
    "photography photography, Thomas Bell, landscape photos, wildlife photography, automotive photography",
  openGraph: {
    title: "Photography photography | Thomas J Bell",
    description:
      "Browse through a collection of stunning photographs including landscapes, wildlife, and automotive photography",
    url: "https://thomasjbell.co.uk/photography",
    siteName: "Thomas J Bell Photography",
    images: [
      {
        url: "/photography/bluebell-wood.png",
        width: 1200,
        height: 630,
        alt: "Thomas J Bell Photography photography",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function photographyLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
