import { UserCircle, GraduationCap, FileText, Send, MessageCircle, CheckCircle } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      icon: UserCircle,
      title: "Profile Evaluation",
      description: "We assess your academic background and career goals"
    },
    {
      icon: GraduationCap,
      title: "University Admission",
      description: "Get admission in top universities matching your profile"
    },
    {
      icon: FileText,
      title: "Documentation & Filing",
      description: "Expert preparation of all visa documents and forms"
    },
    {
      icon: Send,
      title: "Visa Submission",
      description: "Professional submission of your visa application"
    },
    {
      icon: MessageCircle,
      title: "Interview Guidance",
      description: "Complete preparation for visa interview success"
    },
    {
      icon: CheckCircle,
      title: "Visa Approval",
      description: "Celebrate your approved visa and begin your journey"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#dc2626]/10 px-4 py-2 rounded-full text-[#dc2626] text-sm mb-4" style={{ fontWeight: 600 }}>
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0f1c3f] mb-4" style={{ fontWeight: 700 }}>
            Study Visa Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic and transparent approach to make your visa journey stress-free
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#dc2626]/20 -translate-y-1/2"></div>
          <div className="hidden lg:block absolute top-1/2 left-0 h-1 bg-[#dc2626] -translate-y-1/2 transition-all duration-1000" style={{ width: '0%' }}></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Mobile/Tablet Timeline */}
                  <div className="lg:hidden absolute left-7 top-16 bottom-0 w-0.5 bg-[#dc2626]/20"></div>

                  <div className="flex flex-col items-start lg:items-center text-left lg:text-center relative z-10">
                    {/* Icon Circle */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#dc2626] mb-4">
                        <Icon className="w-8 h-8 text-[#dc2626]" />
                      </div>
                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#0f1c3f] rounded-full flex items-center justify-center text-white text-sm" style={{ fontWeight: 600 }}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl text-[#0f1c3f] mb-2 pl-0 lg:pl-0" style={{ fontWeight: 600 }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed pl-0 lg:pl-0">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#dc2626]/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#dc2626]" />
              </div>
              <h4 className="text-lg text-[#0f1c3f]" style={{ fontWeight: 600 }}>
                Smooth & Organized Processing
              </h4>
            </div>
            <p className="text-gray-600 ml-13">
              Every step is carefully planned and executed to ensure maximum success rate
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#dc2626]/10 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#dc2626]" />
              </div>
              <h4 className="text-lg text-[#0f1c3f]" style={{ fontWeight: 600 }}>
                Regular Status Updates
              </h4>
            </div>
            <p className="text-gray-600 ml-13">
              Stay informed at every stage with timely updates on your application status
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
