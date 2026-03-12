import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {

  const testimonials = [
    {
      name: "Priya Sharma",
      destination: "Latvia",
      rating: 5,
      text: "White House Overseas made my dream of studying in Europe come true. The team guided me at every step, from university selection to visa approval."
    },
    {
      name: "Rahul Verma",
      destination: "Slovenia",
      rating: 5,
      text: "Excellent service! The documentation support was top-notch, and I got my visa without any hassle."
    },
    {
      name: "Anjali Patel",
      destination: "Georgia",
      rating: 5,
      text: "Professional and trustworthy consultancy. They handled everything from admission to visa approval."
    },
    {
      name: "Aman Gupta",
      destination: "Germany",
      rating: 5,
      text: "Very supportive team. They helped me with university selection and visa documentation."
    },
    {
      name: "Neha Singh",
      destination: "Slovakia",
      rating: 5,
      text: "Amazing experience! Their guidance and mock interview sessions helped me clear my visa easily."
    },
    {
      name: "Rohit Kumar",
      destination: "Poland",
      rating: 5,
      text: "Highly recommended consultancy for study abroad. The process was smooth and well managed."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#dc2626]/10 px-4 py-2 rounded-full text-[#dc2626] text-sm mb-4 font-semibold">
            Success Stories
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0f1c3f] mb-4 font-bold">
            What Our Students Say
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from students who achieved their study abroad dreams with us
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          {testimonials.map((testimonial, index) => (

            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100 relative"
            >

              {/* Quote */}
              <div className="absolute top-6 right-6 text-[#dc2626]/10">
                <Quote className="w-12 h-12" fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#dc2626] fill-[#dc2626]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-[#0f1c3f] font-semibold">
                  {testimonial.name}
                </p>

                <p className="text-sm text-gray-600">
                  Studying in {testimonial.destination}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}