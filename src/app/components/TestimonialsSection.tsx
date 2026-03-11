import { Star, Quote } from "lucide-react";

interface TestimonialsSectionProps {
  images: {
    student1: string;
    student2: string;
    visaApproval: string;
  };
}

export function TestimonialsSection({ images }: TestimonialsSectionProps) {

  const testimonials = [
    {
      name: "Priya Sharma",
      destination: "Latvia",
      image: images.student1,
      rating: 5,
      text: "White House Overseas made my dream of studying in Europe come true. The team guided me at every step, from university selection to visa approval."
    },
    {
      name: "Rahul Verma",
      destination: "Slovenia",
      image: images.student2,
      rating: 5,
      text: "Excellent service! The documentation support was top-notch, and I got my visa without any hassle."
    },
    {
      name: "Anjali Patel",
      destination: "Georgia",
      image: images.visaApproval,
      rating: 5,
      text: "Professional and trustworthy consultancy. They handled everything from admission to visa approval."
    },

    // Added Success Stories

    {
      name: "Aman Gupta",
      destination: "Germany",
      image: images.student1,
      rating: 5,
      text: "Very supportive team. They helped me with university selection and visa documentation."
    },
    {
      name: "Neha Singh",
      destination: "Slovakia",
      image: images.student2,
      rating: 5,
      text: "Amazing experience! Their guidance and mock interview sessions helped me clear my visa easily."
    },
    {
      name: "Rohit Kumar",
      destination: "Poland",
      image: images.visaApproval,
      rating: 5,
      text: "Highly recommended consultancy for study abroad. The process was smooth and well managed."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
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


        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

          {testimonials.map((testimonial, index) => (

            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100 relative"
            >

              {/* Quote Icon */}
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


              {/* Student */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#dc2626]"
                />

                <div>
                  <p className="text-[#0f1c3f] font-semibold">
                    {testimonial.name}
                  </p>

                  <p className="text-sm text-gray-600">
                    Studying in {testimonial.destination}
                  </p>
                </div>
              </div>

            </div>

          ))}

        </div>


        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">

          <div className="text-center">
            <div className="w-20 h-20 bg-[#dc2626]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <p className="text-3xl text-[#dc2626] font-bold">500+</p>
            </div>

            <p className="text-xl text-[#0f1c3f] mb-2 font-semibold">
              Visa Approvals
            </p>

            <p className="text-gray-600">
              Successfully processed visas
            </p>
          </div>


          <div className="text-center">
            <div className="w-20 h-20 bg-[#dc2626]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <p className="text-3xl text-[#dc2626] font-bold">95%</p>
            </div>

            <p className="text-xl text-[#0f1c3f] mb-2 font-semibold">
              Success Rate
            </p>

            <p className="text-gray-600">
              High visa approval rate
            </p>
          </div>


          <div className="text-center">
            <div className="w-20 h-20 bg-[#dc2626]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <p className="text-3xl text-[#dc2626] font-bold">1000+</p>
            </div>

            <p className="text-xl text-[#0f1c3f] mb-2 font-semibold">
              Students Guided
            </p>

            <p className="text-gray-600">
              Happy students worldwide
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}