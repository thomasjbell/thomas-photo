export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Bride",
      content:
        "The photos from our wedding day are absolutely stunning! Every important moment was captured beautifully.",
      avatar: "/avatar1.jpg",
    },
    {
      id: 2,
      name: "Mark Williams",
      role: "Marketing Director",
      content:
        "The product photography exceeded our expectations. Our online sales have increased by 30% since updating our images.",
      avatar: "/avatar2.jpg",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Family Portrait Client",
      content:
        "Our family portraits are treasures well cherish forever. The photographer made everyone feel comfortable and captured our personalities perfectly.",
      avatar: "/avatar3.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what my clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
                  {/* Replace with actual avatar images in production */}
                  {/* <Image src={testimonial.avatar} alt={testimonial.name} fill style={{ objectFit: 'cover' }} /> */}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-800 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
