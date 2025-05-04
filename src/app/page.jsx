import Hero from "@/components/Hero";
import BackgroundImage from "./bg.png";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Image src={BackgroundImage} />
      <Hero />
    </div>
  );
}
