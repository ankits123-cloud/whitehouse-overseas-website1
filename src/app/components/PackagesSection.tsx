import { Check, Star, ShieldCheck } from "lucide-react";

export function PackagesSection() {
  const benefits = [
    "Admission + Visa Handling",
    "Flight Ticket Assistance",
    "Affordable Payment Plans",
    "No Hidden Charges",
    "Limited Seats Per Intake"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#dc2626]/10 px-4 py-2 rounded-full text-[#dc2626] text-sm mb-4" style={{ fontWeight: 600 }}>
            Packages & Benefits
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0f1c3f] mb-4" style={{ fontWeight: 700 }}>
            Affordable & Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete packages designed to make your study abroad journey affordable and stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Benefits List */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#dc2626]/10 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-[#dc2626]" />
              </div>
              <h3 className="text-2xl text-[#0f1c3f]" style={{ fontWeight: 600 }}>
                Package Includes
              </h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#dc2626] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Highlight */}
          <div className="bg-gradient-to-br from-[#dc2626] to-[#b91c1c] rounded-2xl p-8 sm:p-10 shadow-xl text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl" style={{ fontWeight: 600 }}>
                  Special Offer
                </h3>
              </div>

              <div className="mb-8">
                <p className="text-white/90 text-lg mb-4">
                  Deal In Packages Only
                </p>
                <div className="mb-6">
                  <p className="text-sm text-white/80 mb-2">Packages Starting From</p>
                  <p className="text-5xl sm:text-6xl mb-2" style={{ fontWeight: 700 }}>
                    ₹2 Lakhs
                  </p>
                  <p className="text-white/90">All-inclusive packages tailored to your needs</p>
                </div>
              </div>

              <div className="space-y-4 border-t border-white/20 pt-6">
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">No Advance Payment Required</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">All Payment After Visa Approval</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg">100% Transparent Process</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full mt-8 bg-white text-[#dc2626] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-lg text-lg"
                style={{ fontWeight: 600 }}
              >
                Get Package Details
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-[#dc2626]/20 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-[#0f1c3f]" style={{ fontWeight: 600 }}>Visa Success Focused</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-[#dc2626]/20 text-center">
            <div className="text-3xl mb-2">💯</div>
            <p className="text-[#0f1c3f]" style={{ fontWeight: 600 }}>Transparent Process</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-[#dc2626]/20 text-center">
            <div className="text-3xl mb-2">🔒</div>
            <p className="text-[#0f1c3f]" style={{ fontWeight: 600 }}>No Advance Payment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
