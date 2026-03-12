import {
  ShieldCheck,
  Eye,
  IndianRupee,
  GraduationCap,
  UserCheck,
  Languages,
  Plane
} from "lucide-react";

export function WhyChooseUs() {

  const features = [
    {
      icon: ShieldCheck,
      title: "No Advance Payment",
      description: "Pay after confirmation for complete peace of mind."
    },
    {
      icon: Eye,
      title: "Transparent Process",
      description: "Clear steps and honest guidance at every stage."
    },
    {
      icon: IndianRupee,
      title: "No Hidden Charges",
      description: "What we commit is exactly what you pay."
    },
    {
      icon: GraduationCap,
      title: "Low Budget Study Options",
      description: "Affordable study abroad programs available."
    },
    {
      icon: UserCheck,
      title: "Weak Profiles Accepted",
      description: "Solutions available even for gap or low percentage students."
    },
    {
      icon: Languages,
      title: "With or Without IELTS",
      description: "Multiple university options based on your profile."
    },
    {
      icon: Plane,
      title: "Pre & Post Departure Support",
      description: "Full assistance before and after reaching abroad."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="text-center mb-16">

          <h2 className="text-5xl sm:text-6xl text-[#0f1c3f] font-bold">
            Why Choose Us
          </h2>

        </div>


        {/* Features */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-7 shadow-md hover:shadow-xl transition border border-gray-100"
              >

                <div className="w-14 h-14 bg-[#dc2626]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-[#dc2626]" />
                </div>

                <h3 className="text-xl text-[#0f1c3f] mb-2 font-semibold">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {feature.description}
                </p>

              </div>
            );

          })}

        </div>


        {/* Bottom Quote */}

        <div className="mt-16 text-center">

          <div className="bg-[#0f1c3f] text-white rounded-xl px-8 py-10">

            <p className="text-2xl font-semibold mb-2">
              From Counselling to Visa Approval
            </p>

            <p className="text-gray-300">
              We stay with you at every step of your study abroad journey.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}