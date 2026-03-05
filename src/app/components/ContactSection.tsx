import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    country: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a server
    const whatsappMessage = `Hello! I'm ${formData.name}. I'm interested in studying in ${formData.country}. ${formData.message}. Please contact me at ${formData.phone}.`;
    const whatsappUrl = `https://wa.me/917053791203?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#dc2626]/10 px-4 py-2 rounded-full text-[#dc2626] text-sm mb-4" style={{ fontWeight: 600 }}>
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0f1c3f] mb-4" style={{ fontWeight: 700 }}>
            Start Your Journey Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with our expert counsellors and take the first step towards your international education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Office Address */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#dc2626]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#dc2626]" />
                </div>
                <div>
                  <h3 className="text-xl text-[#0f1c3f] mb-2" style={{ fontWeight: 600 }}>
                    Office Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    White House Overseas<br />
                    SCO 201, Second Floor, Sheetal Mall,<br />
                    D Park, Rohtak 124001
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#dc2626]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#dc2626]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl text-[#0f1c3f] mb-3" style={{ fontWeight: 600 }}>
                    Phone Numbers
                  </h3>
                  <div className="space-y-2">
                    <a href="tel:7053791203" className="block text-lg text-gray-700 hover:text-[#dc2626] transition-colors">
                      7053791203
                    </a>
                    <a href="tel:9350935982" className="block text-lg text-gray-700 hover:text-[#dc2626] transition-colors">
                      9350935982
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:7053791203"
                className="flex items-center justify-center gap-3 bg-[#0f1c3f] text-white px-6 py-4 rounded-lg hover:bg-[#1a2b5a] transition-all shadow-md"
                style={{ fontWeight: 600 }}
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/917053791203"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-lg hover:bg-[#20bd5a] transition-all shadow-md"
                style={{ fontWeight: 600 }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl text-[#0f1c3f] mb-6" style={{ fontWeight: 600 }}>
              Quick Enquiry Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-gray-700 mb-2">
                  Preferred Country *
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent"
                >
                  <option value="">Select a country</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="UK">United Kingdom</option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent resize-none"
                  placeholder="Tell us about your study plans..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#dc2626] text-white px-6 py-4 rounded-lg hover:bg-[#b91c1c] transition-all shadow-md flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                <Send className="w-5 h-5" />
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
