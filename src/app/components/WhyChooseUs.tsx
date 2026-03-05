import { 
  FileCheck, 
  Users, 
  MessageSquare, 
  Eye, 
  IndianRupee, 
  UserCheck, 
  ClipboardList, 
  ShieldCheck,
  Languages
} from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: FileCheck,
      title: "Complete Admission + Visa Support",
      description: "End-to-end assistance for university admission and visa processing"
    },
    {
      icon: ClipboardList,
      title: "Expert Documentation Guidance",
      description: "Professional help with all required documents and paperwork"
    },
    {
      icon: MessageSquare,
      title: "Interview Preparation",
      description: "Mock interviews and coaching to ace your visa interview"
    },
    {
      icon: Eye,
      title: "Transparent Process",
      description: "Clear communication at every step with no hidden surprises"
    },
    {
      icon: IndianRupee,
      title: "Affordable Packages",
      description: "Competitive pricing with flexible payment options"
    },
    {
      icon: UserCheck,
      title: "Dedicated Case Manager",
      description: "Personal advisor assigned to guide you throughout"
    },
    {
      icon: Users,
      title: "Step-by-Step Assistance",
      description: "Comprehensive support from application to departure"
    },
    {
      icon: ShieldCheck,
      title: "No Advance Payment",
      description: "Payment only after visa approval - your security matters"
    },
    {
      icon: Languages,
      title: "Free Language Classes",
      description: "Complimentary language training till visa approval"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#dc2626]/10 px-4 py-2 rounded-full text-[#dc2626] text-sm mb-4" style={{ fontWeight: 600 }}>
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0f1c3f] mb-4" style={{ fontWeight: 700 }}>
            Your Trusted Study Abroad Partner
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive support to make your international education journey smooth and successful
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-[#dc2626]/20 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-[#dc2626]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#dc2626] transition-colors">
                  <Icon className="w-7 h-7 text-[#dc2626] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-[#0f1c3f] mb-2" style={{ fontWeight: 600 }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quote Section */}
        <div className="relative mt-16">
          <div className="bg-gradient-to-r from-[#0f1c3f] to-[#1a2b5a] rounded-2xl p-8 sm:p-12 text-center shadow-xl">
            <div className="text-6xl text-[#dc2626] mb-4">"</div>
            <p className="text-xl sm:text-2xl text-white mb-4 max-w-3xl mx-auto leading-relaxed" style={{ fontWeight: 500 }}>
              From counselling to visa approval — we stay with you
            </p>
            <div className="w-24 h-1 bg-[#dc2626] mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
