import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";

const caveat = Caveat({ subsets: ["latin"] });
export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background image */}

      <div className="absolute inset-0">
        <Image
          src="/images/background.png"
          alt="Background image"
          className="inset-0 object-cover w-full h-full relative opacity-80"
          width={2560}
          height={100}
        />
      </div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center content-center h-full">
        <div className="text-white max-w-2xl">
          <div className={caveat.className}>
            <h1 className="items-centre text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              THOMAS J BELL
            </h1>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl mb-8">P H O T O G R A P H Y</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="bg-slate-700/60 text-slate-100 hover:bg-slate-800/80 py-3 px-8 rounded-md font-medium text-center"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="bg-slate-700/60 text-slate-100 hover:bg-slate-800/80 py-3 px-8 rounded-md font-medium text-center"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
