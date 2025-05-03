import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Modern Photography</h3>
            <p className="text-gray-400">
              Professional photography services capturing your most precious
              moments.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-400">
              <p>123 Photography St.</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">
                <a
                  href="mailto:info@modernphotography.com"
                  className="hover:text-white"
                >
                  info@modernphotography.com
                </a>
              </p>
              <p>
                <a href="tel:+1-555-123-4567" className="hover:text-white">
                  (555) 123-4567
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Modern Photography. All rights
            reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Pinterest</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.804 1.604.804 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.027-4.625 4.235 0 1.027.547 2.305 1.422 2.712.132.062.203.034.234-.094l.193-.793c.017-.071.009-.132-.049-.202-.288-.35-.521-.995-.521-1.597 0-1.544 1.169-3.038 3.161-3.038 1.72 0 2.924 1.172 2.924 2.848 0 1.894-.957 3.205-2.201 3.205-.687 0-1.201-.568-1.036-1.265.197-.833.58-1.73.58-2.331 0-.537-.288-.986-.886-.986-.702 0-1.268.727-1.268 1.7 0 .621.211 1.04.211 1.04s-.694 2.934-.821 3.479c-.142.605-.086 1.454-.025 2.008-2.603-1.02-4.448-3.553-4.448-6.518 0-3.866 3.135-7 7-7s7 3.134 7 7-3.135 7-7 7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
