export default function Services() {
  const services = [
    {
      id: 1,
      title: "Portrait Photography",
      description:
        "Professional portrait sessions for individuals, couples, and families.",
      icon: "📸",
    },
    {
      id: 2,
      title: "Wedding Photography",
      description:
        "Comprehensive coverage of your special day, from preparation to reception.",
      icon: "💍",
    },
    {
      id: 3,
      title: "Event Photography",
      description:
        "Capture the important moments of your corporate or social events.",
      icon: "🎭",
    },
    {
      id: 4,
      title: "Commercial Photography",
      description: "High-quality product and brand photography for businesses.",
      icon: "🏢",
    },
  ];

  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional photography services tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
