import { Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0f1c3f] text-white py-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              White House Overseas
            </h3>

            <p className="text-gray-300 mb-4">
              Your trusted partner for studying abroad. We help students achieve
              their dream of international education with expert guidance.
            </p>

            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="w-4 h-4" />
              <span>+91 70537 91203</span>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">

              <li className="hover:text-white transition cursor-pointer">
                Destinations
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Services
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Process
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Success Stories
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Contact
              </li>

            </ul>
          </div>


          

        </div>


        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} White House Overseas. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}