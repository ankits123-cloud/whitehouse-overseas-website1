import { FileText, Plane, BookOpen } from "lucide-react";

export function ServicesSection() {

  const services = [
    {
      icon: FileText,
      title: "Student Visa Assistance",
      points: [
        "Free Counselling – Get expert advice about studying abroad.",
        "Eligibility Check – Evaluation of your academic profile.",
        "Profile Evaluation – Assessment of qualifications and goals.",
        "Country, University & Course Selection Guidance.",
        "Visa File Preparation – Complete documentation support.",
        "Interview Preparation – Mock interviews and guidance.",
        "Application Submission – Accurate and timely submission.",
        "Complete Guidance During the Process."
      ],
      color: "bg-blue-50 text-blue-600"
    },

    {
      icon: Plane,
      title: "Pre & Post-Departure Support",
      points: [
        "Pre-Departure Orientation – Guidance about life abroad.",
        "Packing Checklist – Essential items before travelling.",
        "Flight Ticket Booking – Assistance for affordable flights.",
        "Forex & Travel Guidance – Help with currency and travel docs.",
        "Airport Pickup Arrangements.",
        "Accommodation Assistance.",
        "Job Assistance – Guidance for part-time jobs.",
        "Student Relocation Support."
      ],
      color: "bg-green-50 text-green-600"
    },

    {
      icon: BookOpen,
      title: "Test Preparation",
      points: [
        "IELTS Coaching – Training to achieve required band score.",
        "PTE Coaching – Strategies to score high.",
        "Spoken English Classes – Improve fluency and confidence.",
        "Mock Tests & Speaking Practice."
      ],
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#dc2626]/10 px-4 py-2 rounded-full text-[#dc2626] text-sm mb-4 font-semibold">
            Our Services
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0f1c3f] mb-4 font-bold">
            Complete Support For Study Abroad
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We guide students from counselling to visa approval and settlement abroad
          </p>
        </div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition border border-gray-100"
              >

                <div className={`w-14 h-14 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7"/>
                </div>

                <h3 className="text-xl font-semibold text-[#0f1c3f] mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-2 text-gray-600 text-sm">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-green-600 font-bold">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}

        </div>


        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#0f1c3f] to-[#1a2b5a] rounded-2xl p-10 text-center">

          <h3 className="text-2xl text-white font-semibold mb-4">
            Ready to Start Your Study Abroad Journey?
          </h3>

          <p className="text-gray-200 mb-6">
            Get in touch with our expert counsellors for personalized guidance
          </p>

          <button
            onClick={()=>{
              const element=document.getElementById("contact");
              if(element) element.scrollIntoView({behavior:"smooth"});
            }}
            className="bg-[#dc2626] text-white px-8 py-4 rounded-lg hover:bg-[#b91c1c] transition"
          >
            Get Free Consultation
          </button>

        </div>

      </div>
    </section>
  );
}