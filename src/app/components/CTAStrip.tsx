import { ArrowRight } from "lucide-react";

interface CTAStripProps {
  text: string;
  buttonText?: string;
}

export function CTAStrip({ text, buttonText = "Apply Now" }: CTAStripProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#dc2626] to-[#b91c1c] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xl sm:text-2xl text-white text-center sm:text-left" style={{ fontWeight: 600 }}>
            {text}
          </p>
          <button
            onClick={scrollToContact}
            className="bg-white text-[#dc2626] px-8 py-3 rounded-lg hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
            style={{ fontWeight: 600 }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
