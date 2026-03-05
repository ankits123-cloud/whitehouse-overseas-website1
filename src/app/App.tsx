import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { DestinationsSection } from "./components/DestinationsSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServicesSection";
import { PackagesSection } from "./components/PackagesSection";
import { CountriesSection } from "./components/CountriesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { CTAStrip } from "./components/CTAStrip";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  // Image URLs from Unsplash
  const images = {
    hero: "https://images.unsplash.com/photo-1727875075949-8b36efd25260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50JTIwc3R1ZHlpbmclMjBhYnJvYWQlMjBoYXBweXxlbnwxfHx8fDE3NzI1NTk5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    student1: "https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50JTIwbGFwdG9wJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzcyNTU5OTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    student2: "https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50cyUyMGNsYXNzcm9vbSUyMHN0dWR5aW5nfGVufDF8fHx8MTc3MjU1OTk0NHww&ixlib=rb-4.1.0&q=80&w=1080",
    visaApproval: "https://images.unsplash.com/photo-1567662851835-98c9c2a1180c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBzdHVkZW50JTIwcGFzc3BvcnQlMjB2aXNhJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NzI1NTk5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection heroImage={images.hero} />

      {/* CTA Strip 1 */}
      <CTAStrip text="Limited Seats — Apply Now" />

      {/* Destinations Section */}
      <DestinationsSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* CTA Strip 2 */}
      <CTAStrip text="Free Profile Assessment Today" buttonText="Get Started" />

      {/* Process Section */}
      <ProcessSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Packages Section */}
      <PackagesSection />

      {/* CTA Strip 3 */}
      <CTAStrip text="Secure Your Future in Europe" buttonText="Book Consultation" />

      {/* Countries Section */}
      <CountriesSection />

      {/* Testimonials Section */}
      <TestimonialsSection 
        images={{
          student1: images.student1,
          student2: images.student2,
          visaApproval: images.visaApproval
        }}
      />

      {/* CTA Strip 4 */}
      <CTAStrip text="Talk to an Expert Counsellor" buttonText="Contact Now" />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
