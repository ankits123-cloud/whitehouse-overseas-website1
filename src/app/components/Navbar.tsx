import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

export function Navbar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-2">

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">

          {/* LOGO */}

          <div className="flex items-center">

            <img
              src="/whitehouse logo.png"
              alt="logo"
              className="h-16 md:h-24 w-auto -ml-4"
            />

            <div className="leading-tight ml-1">

              <p className="text-lg md:text-3xl font-extrabold text-gray-900 whitespace-nowrap">
                White House Overseas
              </p>
<p className="text-[10px] text-gray-500 tracking-wide -ml-1">
                Study Abroad Consultancy
              </p>

            </div>

          </div>


          {/* DESKTOP MENU */}

          <div className="hidden md:flex items-center space-x-8">

            <button
              onClick={() => scrollToSection("destinations")}
              className="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              Destinations
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("process")}
              className="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              Process
            </button>

            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              Success Stories
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-indigo-600 transition font-medium"
            >
              Contact
            </button>

            <a
              href="tel:7053791203"
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow-md font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>

          </div>


          {/* MOBILE MENU BUTTON */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-800"
          >

            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}

          </button>

        </div>


        {/* MOBILE MENU */}

        {mobileMenuOpen && (

          <div className="md:hidden mt-4 pb-4 space-y-3">

            <button
              onClick={() => scrollToSection("destinations")}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600 font-medium"
            >
              Destinations
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600 font-medium"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("process")}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600 font-medium"
            >
              Process
            </button>

            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600 font-medium"
            >
              Success Stories
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600 font-medium"
            >
              Contact
            </button>

            <a
              href="tel:7053791203"
              className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow-md font-semibold"
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