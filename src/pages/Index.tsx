import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PlatformsSection from "@/components/landing/PlatformsSection";
import ScopeSection from "@/components/landing/ScopeSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import WhyN8nSection from "@/components/landing/WhyN8nSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PlatformsSection />
      <ScopeSection />
      <HowItWorksSection />
      <WhyN8nSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
