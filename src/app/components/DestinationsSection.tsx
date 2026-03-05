import { GraduationCap, Briefcase, Globe, CheckCircle } from "lucide-react";

export function DestinationsSection() {
  const destinations = [
    {
      name: "Latvia",
      tagline: "Affordable EU Degree Programs",
      highlights: [
        "Bachelor's & Master's Programs",
        "Work While Studying",
        "Globally Recognized Degrees",
        "High Visa Approval Support"
      ],
      icon: "🇱🇻"
    },
    {
      name: "Slovenia",
      tagline: "No IELTS Options Available",
      highlights: [
        "Bachelor's & Master's Programs",
        "Work While Studying",
        "Globally Recognized Degrees",
        "High Visa Approval Support"
      ],
      icon: "🇸🇮"
    },
    {
      name: "Georgia",
      tagline: "Fast Process & Easy Admission",
      highlights: [
        "Bachelor's & Master's Programs",
        "Work While Studying",
        "Globally Recognized Degrees",
        "High Visa Approval Support"
      ],
      icon: "🇬🇪"
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#dc2626]/10 px-4 py-2 rounded-full text-[#dc2626] text-sm mb-4" style={{ fontWeight: 600 }}>
            Study Destinations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0f1c3f] mb-4" style={{ fontWeight: 700 }}>
            Explore Top European Education Opportunities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from premium study destinations with excellent education quality and career prospects
          </p>
        </div>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-4">{dest.icon}</div>
              <h3 className="text-2xl text-[#0f1c3f] mb-2" style={{ fontWeight: 600 }}>
                {dest.name}
              </h3>
              <p className="text-[#dc2626] mb-6" style={{ fontWeight: 500 }}>
                {dest.tagline}
              </p>
              <ul className="space-y-3">
                {dest.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#dc2626]/10 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-[#dc2626]" />
            </div>
            <h4 className="text-lg text-[#0f1c3f] mb-2" style={{ fontWeight: 600 }}>
              Quality Education
            </h4>
            <p className="text-gray-600">Internationally recognized universities and programs</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#dc2626]/10 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-8 h-8 text-[#dc2626]" />
            </div>
            <h4 className="text-lg text-[#0f1c3f] mb-2" style={{ fontWeight: 600 }}>
              Work Opportunities
            </h4>
            <p className="text-gray-600">Part-time work while studying and post-study work visa</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#dc2626]/10 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-[#dc2626]" />
            </div>
            <h4 className="text-lg text-[#0f1c3f] mb-2" style={{ fontWeight: 600 }}>
              Global Recognition
            </h4>
            <p className="text-gray-600">Degrees valued worldwide with excellent career prospects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
