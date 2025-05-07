// app/about/page.jsx
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-14 bg-primary-50 dark:bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-primary-900 dark:text-primary-50 mb-6">
              About Me
            </h1>
            <p className="text-lg text-primary-600 dark:text-primary-300 mb-6">
              Hello! I'm Thomas, an amateur photographer and outdoor
              enthusiast.
            </p>
            <p className="text-lg text-primary-600 dark:text-primary-300 mb-6">
              I take photos of people, places, and things that inspire me.
              Mainly, I photograph landscapes, birds and cars, but I like to
              explore other subjects as well.
            </p>
            <p className="text-lg text-primary-600 dark:text-primary-300 mb-6">
              When I'm not behind the camera, you can find me walking,
              climbing or creating things. I am a Materials Science Student
              but I love all things science and tech.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="bg-primary-900 text-primary-50 dark:bg-primary-50 dark:text-primary-900 py-3 px-8 rounded-md hover:bg-primary-800 hover:dark:bg-primary-200 transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="relative h-96 lg:h-full rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-primary-200 dark:bg-primary-800"></div>

            <Image
              src="/images/thomas-bell.png"
              alt="Thomas Bell, photographer"
              className="inset-0 object-cover w-full h-full relative"
              width={2560}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}