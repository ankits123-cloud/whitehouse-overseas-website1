import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    marks10: "",
    marks12: "",
    marksGrad: "",
    ieltsPte: "",
    budget: "",
    country: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Hello! I'm ${formData.name} (Age: ${formData.age}).` +
      `\n10th Marks: ${formData.marks10}%` +
      `\n12th Marks: ${formData.marks12}%` +
      (formData.marksGrad ? `\nGraduation Marks: ${formData.marksGrad}%` : "") +
      (formData.ieltsPte ? `\nIELTS/PTE Score: ${formData.ieltsPte}` : "") +
      `\nBudget: ${formData.budget}` +
      `\nPreferred Country: ${formData.country}` +
      `\nContact: ${formData.phone}`;
    const url = `https://wa.me/917053791203?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block bg-[#dc2626]/10 px-4 py-2 rounded-full text-[#dc2626] text-sm mb-4"
            style={{ fontWeight: 600 }}
          >
            Get In Touch
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#0f1c3f] mb-4"
            style={{ fontWeight: 700 }}
          >
            Start Your Journey Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with our expert counsellors and take the first step towards your
            international education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── Contact Info ── */}
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
                    White House Overseas
                    <br />
                    SCO 201, Second Floor, Sheetal Mall,
                    <br />
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
                    <a
                      href="tel:7053791203"
                      className="block text-lg text-gray-700 hover:text-[#dc2626] transition-colors"
                    >
                      7053791203
                    </a>
                    <a
                      href="tel:9350935982"
                      className="block text-lg text-gray-700 hover:text-[#dc2626] transition-colors"
                    >
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

          {/* ── Quick Enquiry Form ── */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl text-[#0f1c3f] mb-6" style={{ fontWeight: 600 }}>
              Quick Enquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1 text-sm font-medium">
                  Name <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent text-sm"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Age */}
              <div>
                <label htmlFor="age" className="block text-gray-700 mb-1 text-sm font-medium">
                  Age <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  min={14}
                  max={60}
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent text-sm"
                  placeholder="Enter your age"
                />
              </div>

              {/* Marks % */}
              <div>
                <label className="block text-gray-700 mb-2 text-sm font-medium">
                  Marks % <span className="text-[#dc2626]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="marks10" className="block text-xs text-gray-500 mb-1">
                      In 10th
                    </label>
                    <input
                      type="number"
                      id="marks10"
                      name="marks10"
                      required
                      min={0}
                      max={100}
                      value={formData.marks10}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent text-sm"
                      placeholder="e.g. 75"
                    />
                  </div>
                  <div>
                    <label htmlFor="marks12" className="block text-xs text-gray-500 mb-1">
                      In 12th
                    </label>
                    <input
                      type="number"
                      id="marks12"
                      name="marks12"
                      required
                      min={0}
                      max={100}
                      value={formData.marks12}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent text-sm"
                      placeholder="e.g. 68"
                    />
                  </div>
                  <div>
                    <label htmlFor="marksGrad" className="block text-xs text-gray-500 mb-1">
                      Graduation (if any)
                    </label>
                    <input
                      type="number"
                      id="marksGrad"
                      name="marksGrad"
                      min={0}
                      max={100}
                      value={formData.marksGrad}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent text-sm"
                      placeholder="e.g. 62"
                    />
                  </div>
                </div>
              </div>

              {/* IELTS/PTE Score */}
              <div>
                <label htmlFor="ieltsPte" className="block text-gray-700 mb-1 text-sm font-medium">
                  IELTS / PTE Score
                </label>
                <input
                  type="text"
                  id="ieltsPte"
                  name="ieltsPte"
                  value={formData.ieltsPte}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent text-sm"
                  placeholder="e.g. IELTS 6.5 / PTE 58 / Not appeared"
                />
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-gray-700 mb-1 text-sm font-medium">
                  Budget <span className="text-[#dc2626]">*</span>
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent text-sm bg-white"
                >
                  <option value="">Select budget range</option>
                  <option value="2-3 Lakhs">₹2 – ₹3 Lakhs</option>
                  <option value="3-5 Lakhs">₹3 – ₹5 Lakhs</option>
                  <option value="5-8 Lakhs">₹5 – ₹8 Lakhs</option>
                  <option value="8-12 Lakhs">₹8 – ₹12 Lakhs</option>
                  <option value="12+ Lakhs">₹12+ Lakhs</option>
                </select>
              </div>

              {/* Preferred Country */}
              <div>
                <label htmlFor="country" className="block text-gray-700 mb-1 text-sm font-medium">
                  Preferred Country <span className="text-[#dc2626]">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent text-sm bg-white"
                >
                  <option value="">Select a country</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Italy">Italy</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Germany">Germany</option>
                  <option value="Finland">Finland</option>
                  <option value="Greece">Greece</option>
                  <option value="Denmark">Denmark</option>
                  <option value="France">France</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Poland">Poland</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Contact Number */}
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-1 text-sm font-medium">
                  Contact Number <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent text-sm"
                  placeholder="Enter your phone number"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#dc2626] text-white px-6 py-4 rounded-lg hover:bg-[#b91c1c] transition-all shadow-md flex items-center justify-center gap-2 mt-2"
                style={{ fontWeight: 600 }}
              >
                <Send className="w-5 h-5" />
                Send Enquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}