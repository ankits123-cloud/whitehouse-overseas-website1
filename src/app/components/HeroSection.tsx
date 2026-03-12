import { Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-28 pb-20 bg-[#0f1c3f] text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}

          <div>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Study Abroad <br />
              With <span className="text-[#dc2626]">Trusted Guidance</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              White House Overseas helps students secure admissions in top
              European universities with affordable programs and complete
              visa support.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="tel:7053791203"
                className="flex items-center gap-2 bg-[#dc2626] px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

              <button
                onClick={() => {
                  const el = document.getElementById("destinations");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0f1c3f] transition"
              >
                Explore Destinations
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="flex justify-center">

            <img
              src="/11.png"
              alt="Study Abroad"
              className="w-full max-w-md"
            />

          </div>

        </div>

      </div>

    </section>
  );
}