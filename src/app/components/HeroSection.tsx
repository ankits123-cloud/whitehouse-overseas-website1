import { ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-28 pb-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-24 left-10 w-72 h-72 bg-indigo-500 blur-3xl rounded-full"></div>
        <div className="absolute bottom-24 right-10 w-96 h-96 bg-purple-500 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}

          <div className="space-y-6 order-2 lg:order-1">

            <div className="hidden lg:inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
              ✈ Your Gateway to International Education
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Turn Your Study Abroad Dream Into
              <span className="block text-indigo-400">
                Reality
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-xl">
              Admission, Visa and complete guidance — everything you need to
              start your international education journey.
            </p>

            {/* FEATURES */}

            <div className="flex flex-wrap gap-5 text-gray-300">

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                Europe Study Experts
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                High Visa Success Rate
              </div>

            </div>

            {/* BUTTONS */}

            <div className="flex gap-4 pt-4">

              <button
                onClick={scrollToContact}
                className="bg-indigo-500 hover:bg-indigo-600 px-8 py-4 rounded-lg flex items-center gap-2 transition shadow-lg"
              >
                Apply Now
                <ArrowRight size={18} />
              </button>

              <button
                onClick={scrollToContact}
                className="border border-white/30 px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
              >
                Free Consultation
              </button>

            </div>

            {/* TRUST STATS */}

            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/20">

              <div>
                <p className="text-2xl font-bold text-indigo-400">
                  ₹2L+
                </p>
                <p className="text-sm text-gray-400">
                  Packages Start
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-indigo-400">
                  No Advance
                </p>
                <p className="text-sm text-gray-400">
                  Payment
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-indigo-400">
                  Pay After
                </p>
                <p className="text-sm text-gray-400">
                  Visa Approval
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">

              <img
                src="./11.png"
                alt="Students"
                className="w-full h-[520px] object-cover hover:scale-105 transition duration-500"
              />

            </div>

            {/* floating card */}

            <div className="absolute -bottom-2 -left-6 md:-bottom-6 bg-white text-black px-6 py-5 rounded-xl shadow-xl">

              <p className="text-3xl font-bold text-indigo-600">
                500+
              </p>

              <p className="text-sm text-gray-600">
                Visa Approvals
              </p>

            </div>

            {/* Mobile gateway text below image */}
            <div className="lg:hidden text-center mt-4">
              <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
                ✈ Your Gateway to International Education
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}