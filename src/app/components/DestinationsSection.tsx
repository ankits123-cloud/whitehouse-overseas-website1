import { GraduationCap, Briefcase, Globe, CheckCircle } from "lucide-react";

export function DestinationsSection() {

  const countries = [
  { name: "Germany", flag: "🇩🇪" },
  { name: "Finland", flag: "🇫🇮" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "Georgia", flag: "🇬🇪" },
  { name: "Cyprus", flag: "🇨🇾" },
  { name: "Latvia", flag: "🇱🇻" },
  { name: "Lithuania", flag: "🇱🇹" },
  { name: "Slovenia", flag: "🇸🇮" },
  { name: "Slovakia", flag: "🇸🇰" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Switzerland", flag: "🇨🇭" },
  { name: "United Kingdom", flag: "🇬🇧" },

  // NEW COUNTRIES
  { name: "Greece", flag: "🇬🇷" },
  { name: "Denmark", flag: "🇩🇰" },
  { name: "France", flag: "🇫🇷" }
];

  return (
    <section id="destinations" className="py-20 bg-[#0f1c3f] relative overflow-hidden">

      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#dc2626] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">

          <div className="inline-block bg-[#dc2626] px-4 py-2 rounded-full text-white text-sm mb-4 font-semibold">
            Study Destinations
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-bold">
            Explore Top European Education Opportunities
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose from premium study destinations with excellent education quality and career prospects
          </p>

        </div>


        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

          {countries.map((country, index) => (

            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-[#dc2626]/50 group cursor-pointer"
            >

              <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-110 transition-transform">
                {country.flag}
              </div>

              <p className="text-white text-sm sm:text-base font-medium">
                {country.name}
              </p>

            </div>

          ))}

        </div>


        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

          <div>
            <p className="text-4xl sm:text-5xl text-[#dc2626] mb-2 font-bold">
              15+
            </p>
            <p className="text-white text-lg">Countries</p>
          </div>

          <div>
            <p className="text-4xl sm:text-5xl text-[#dc2626] mb-2 font-bold">
              100+
            </p>
            <p className="text-white text-lg">Partner Universities</p>
          </div>

          <div>
            <p className="text-4xl sm:text-5xl text-[#dc2626] mb-2 font-bold">
              50+
            </p>
            <p className="text-white text-lg">Course Options</p>
          </div>

        </div>

      </div>
    </section>
  );
}