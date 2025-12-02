import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SpecialOfferSection from "@/components/SpecialOfferSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <TestimonialsSection />
      <SpecialOfferSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
