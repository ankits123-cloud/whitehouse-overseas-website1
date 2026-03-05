import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white/95 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
  <img src="/whitehouse logo.png" alt="logo" className="h-12 w-auto" />

  <div className="leading-tight">
    <p className="font-bold text-lg text-gray-900">
      White House Overseas
    </p>
    <p className="text-sm text-red-500">
      Study Abroad Consultancy
    </p>
  </div>
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("destinations")} className="text-[#0f1c3f] hover:text-[#dc2626] transition-colors">
              Destinations
            </button>
            <button onClick={() => scrollToSection("services")} className="text-[#0f1c3f] hover:text-[#dc2626] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("process")} className="text-[#0f1c3f] hover:text-[#dc2626] transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-[#0f1c3f] hover:text-[#dc2626] transition-colors">
              Success Stories
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-[#0f1c3f] hover:text-[#dc2626] transition-colors">
              Contact
            </button>
            <a
              href="tel:7053791203"
              className="flex items-center gap-2 bg-[#dc2626] text-white px-6 py-2 rounded-lg hover:bg-[#b91c1c] transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#0f1c3f]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection("destinations")} className="block w-full text-left py-2 text-[#0f1c3f] hover:text-[#dc2626]">
              Destinations
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left py-2 text-[#0f1c3f] hover:text-[#dc2626]">
              Services
            </button>
            <button onClick={() => scrollToSection("process")} className="block w-full text-left py-2 text-[#0f1c3f] hover:text-[#dc2626]">
              Process
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="block w-full text-left py-2 text-[#0f1c3f] hover:text-[#dc2626]">
              Success Stories
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left py-2 text-[#0f1c3f] hover:text-[#dc2626]">
              Contact
            </button>
            <a
              href="tel:7053791203"
              className="flex items-center justify-center gap-2 bg-[#dc2626] text-white px-6 py-2 rounded-lg hover:bg-[#b91c1c] transition-colors shadow-md"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
