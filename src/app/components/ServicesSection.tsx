import { 
  School, 
  FileCheck, 
  Languages, 
  Plane, 
  Home, 
  FileEdit 
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: School,
      title: "University Admission Assistance",
      description: "Complete support in selecting and applying to top universities",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: FileCheck,
      title: "Visa File Preparation",
      description: "Expert documentation and filing for hassle-free visa approval",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Languages,
      title: "Spoken English / IELTS / PTE Training",
      description: "Professional language coaching to meet university requirements",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Plane,
      title: "Travel & Pre-Departure Support",
      description: "Flight booking assistance and pre-departure orientation",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Home,
      title: "Accommodation Guidance",
      description: "Help finding suitable housing near your university",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: FileEdit,
      title: "SOP & Documentation Help",
      description: "Professional SOP writing and document preparation",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#dc2626]/10 px-4 py-2 rounded-full text-[#dc2626] text-sm mb-4" style={{ fontWeight: 600 }}>
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0f1c3f] mb-4" style={{ fontWeight: 700 }}>
            Comprehensive Support for Your Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From application to arrival, we provide complete assistance at every step
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#dc2626]/20"
              >
                <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl text-[#0f1c3f] mb-3" style={{ fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0f1c3f] to-[#1a2b5a] rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl text-white mb-4" style={{ fontWeight: 600 }}>
            Ready to Start Your Study Abroad Journey?
          </h3>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Get in touch with our expert counsellors for personalized guidance
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#dc2626] text-white px-8 py-4 rounded-lg hover:bg-[#b91c1c] transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            style={{ fontWeight: 600 }}
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
