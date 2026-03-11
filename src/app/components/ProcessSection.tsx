import { UserCircle, GraduationCap, FileText, Send, MessageCircle, CheckCircle } from "lucide-react";

export function ProcessSection() {

  const steps = [
    {
      icon: UserCircle,
      title: "Profile Assessment",
      description: "We evaluate your academic background and eligibility to find the best study options."
    },
    {
      icon: Send,
      title: "Apply for Offer Letter",
      description: "Our team applies to suitable universities to obtain your official offer letter."
    },
    {
      icon: MessageCircle,
      title: "Interview Guidance",
      description: "Professional guidance and mock interviews to prepare you for the visa interview."
    },
    {
      icon: GraduationCap,
      title: "University Admission",
      description: "Assistance in securing confirmed admission to your chosen university."
    },
    {
      icon: FileText,
      title: "Documentation & Filing",
      description: "Complete support in preparing and organizing all required documents."
    },
    {
      icon: Send,
      title: "Application Submission",
      description: "Accurate submission of your university and visa applications."
    },
    {
      icon: CheckCircle,
      title: "Visa Approval",
      description: "Once approved, we guide you with the next steps for travel and departure."
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">

          <div className="inline-block bg-[#dc2626]/10 px-4 py-2 rounded-full text-[#dc2626] text-sm mb-4 font-semibold">
            Our Process
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0f1c3f] mb-4 font-bold">
            Study Visa Process
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic and transparent approach to make your visa journey stress-free
          </p>

        </div>


        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100 text-center"
              >

                {/* Icon */}
                <div className="relative flex justify-center mb-4">

                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#dc2626]">
                    <Icon className="w-8 h-8 text-[#dc2626]" />
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#0f1c3f] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {index + 1}
                  </div>

                </div>

                {/* Content */}
                <h3 className="text-xl text-[#0f1c3f] mb-2 font-semibold">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

              </div>
            );

          })}

        </div>


        {/* Bottom Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">

            <div className="flex items-center gap-3 mb-2">

              <div className="w-10 h-10 bg-[#dc2626]/10 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#dc2626]" />
              </div>

              <h4 className="text-lg text-[#0f1c3f] font-semibold">
                Smooth & Organized Processing
              </h4>

            </div>

            <p className="text-gray-600 ml-12">
              Every step is carefully planned and executed to ensure maximum success rate
            </p>

          </div>


          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">

            <div className="flex items-center gap-3 mb-2">

              <div className="w-10 h-10 bg-[#dc2626]/10 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-[#dc2626]" />
              </div>

              <h4 className="text-lg text-[#0f1c3f] font-semibold">
                Regular Status Updates
              </h4>

            </div>

            <p className="text-gray-600 ml-12">
              Stay informed at every stage with timely updates on your application status
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}