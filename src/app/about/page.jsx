import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
export default function AboutPage() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen py-12 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-6">
                About Me
              </h1>
              <p className="text-lg text-slate-600 mb-6">
                Hello! Im [Your Name], a professional photographer with over 10
                years of experience capturing lifes most precious moments. My
                journey in photography began when I received my first camera as
                a teenager, and Ive been passionate about visual storytelling
                ever since.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                With a background in fine arts and a keen eye for detail, I
                approach each photography session with creativity and
                professionalism. I believe that great photography goes beyond
                just taking pictures – its about creating an experience and
                preserving memories that will last a lifetime.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                When Im not behind the camera, you can find me exploring new
                locations for shoots, attending photography workshops to refine
                my skills, or spending time with my family and our golden
                retriever.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="bg-slate-900 text-white py-3 px-8 rounded-md hover:bg-slate-800"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-slate-200"></div>
              {/* Replace with actual photographer image in production */}
              {/* <Image src="/photographer.jpg" alt="Photographer" fill style={{ objectFit: 'cover' }} /> */}
            </div>
          </div>

          {/* Credentials and Equipment Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Credentials & Experience
              </h2>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-slate-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Bachelor of Fine Arts in Photography
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-slate-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Member of Professional Photographers Association
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-slate-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Featured in [Photography Magazine]
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-slate-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  10+ years professional experience
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-slate-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Specialized workshops in portrait and wedding photography
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Equipment & Approach
              </h2>
              <p className="text-slate-600 mb-4">
                I use professional-grade equipment to ensure the highest quality
                images for my clients:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-slate-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Full-frame Canon and Sony camera bodies
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-slate-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Premium prime and zoom lenses
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-slate-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Professional lighting equipment
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-slate-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Backup equipment for all sessions
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-slate-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Professional editing software and calibrated monitors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
