import Portfolio from "@/components/Portfolio";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            My Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my best photographic work across various categories.
          </p>
        </div>

        <Portfolio />
      </div>
    </div>
  );
}
