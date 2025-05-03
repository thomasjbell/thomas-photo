import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional photography services tailored to your needs.
          </p>
        </div>

        <Services />

        {/* Additional Service Details */}
        <div className="mt-16 grid grid-cols-1 gap-8">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Portrait Photography
            </h2>
            <p className="text-gray-600 mb-6">
              My portrait photography sessions are designed to capture the
              essence of who you are. Whether its individual portraits, family
              sessions, or professional headshots, I create a comfortable
              environment that brings out your natural expressions.
            </p>
            <div className="mt-6">
              <h3 className="font-bold text-gray-800 mb-2">
                Packages Include:
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Pre-session consultation</li>
                <li>1-2 hour photo session</li>
                <li>Multiple outfit changes</li>
                <li>Indoor and/or outdoor settings</li>
                <li>Professional editing of all final images</li>
                <li>Online gallery for easy sharing and ordering</li>
                <li>Options for prints, albums, and digital files</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Wedding Photography
            </h2>
            <p className="text-gray-600 mb-6">
              Your wedding day is one of the most important days of your life,
              and Im dedicated to capturing every special moment. From the
              nervous anticipation before the ceremony to the joyful celebration
              at the reception, I document the full story of your day.
            </p>
            <div className="mt-6">
              <h3 className="font-bold text-gray-800 mb-2">
                Packages Include:
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Engagement photo session</li>
                <li>Full day coverage (8-10 hours)</li>
                <li>Second photographer option</li>
                <li>Complete coverage of ceremony and reception</li>
                <li>Artistic and journalistic styles</li>
                <li>Professional editing of all images</li>
                <li>Online gallery for sharing with friends and family</li>
                <li>Custom wedding album options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
