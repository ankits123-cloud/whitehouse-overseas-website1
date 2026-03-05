import { ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-28 pb-16 bg-gradient-to-br from-[#0f1c3f] via-[#1a2b5a] to-[#0f1c3f] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#dc2626] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <div className="inline-block bg-[#dc2626] px-4 py-2 rounded-full text-sm mb-4">
              ✈️ Your Gateway to International Education
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight" style={{ fontWeight: 700 }}>
              Turn Your Study Abroad Dream Into{" "}
              <span className="text-[#dc2626]">Reality</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Admission + Visa + Complete Guidance — All in One Place
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#dc2626]" />
                <span>Europe Study Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#dc2626]" />
                <span>High Visa Success Rate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="bg-[#dc2626] text-white px-8 py-4 rounded-lg hover:bg-[#b91c1c] transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                style={{ fontWeight: 600 }}
              >
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={scrollToContact}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#0f1c3f] transition-all flex items-center gap-2"
                style={{ fontWeight: 600 }}
              >
                Book Free Consultation
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/20">
              <div className="text-center sm:text-left">
                <p className="text-2xl text-[#dc2626]" style={{ fontWeight: 700 }}>₹2 Lakhs+</p>
                <p className="text-sm text-gray-300">Packages Start From</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl text-[#dc2626]" style={{ fontWeight: 700 }}>No Advance</p>
                <p className="text-sm text-gray-300">Payment Required</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-2xl text-[#dc2626]" style={{ fontWeight: 700 }}>Pay After</p>
                <p className="text-sm text-gray-300">Visa Approval</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Happy International Student"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c3f]/50 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl">
              <p className="text-4xl text-[#0f1c3f] mb-1" style={{ fontWeight: 700 }}>500+</p>
              <p className="text-sm text-gray-600">Visa Approvals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
