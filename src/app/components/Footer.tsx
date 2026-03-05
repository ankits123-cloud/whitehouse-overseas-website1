import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0f1c3f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl mb-4" style={{ fontWeight: 700 }}>
              White House Overseas
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner for international education. We help students achieve their study abroad dreams with expert guidance and support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#dc2626] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#dc2626] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#dc2626] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontWeight: 600 }}>Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("destinations")} className="text-gray-300 hover:text-[#dc2626] transition-colors">
                  Study Destinations
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-gray-300 hover:text-[#dc2626] transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("process")} className="text-gray-300 hover:text-[#dc2626] transition-colors">
                  Visa Process
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("testimonials")} className="text-gray-300 hover:text-[#dc2626] transition-colors">
                  Success Stories
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-[#dc2626] transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Countries */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontWeight: 600 }}>Popular Countries</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Latvia</li>
              <li>Slovenia</li>
              <li>Georgia</li>
              <li>United Kingdom</li>
              <li>Canada</li>
              <li>Germany</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontWeight: 600 }}>Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm leading-relaxed">
                  SCO 201, Second Floor, Sheetal Mall, D Park, Rohtak 124001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#dc2626] flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <a href="tel:7053791203" className="block hover:text-[#dc2626] transition-colors">
                    7053791203
                  </a>
                  <a href="tel:9350935982" className="block hover:text-[#dc2626] transition-colors">
                    9350935982
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} White House Overseas. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-[#dc2626] transition-colors">Privacy Policy</button>
              <button className="hover:text-[#dc2626] transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
