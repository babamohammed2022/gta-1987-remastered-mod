import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import FAQSection from "@/components/FAQSection";
import RequirementsSection from "@/components/RequirementsSection";
import DownloadSection from "@/components/DownloadSection";
import TrailerSection from "@/components/TrailerSection";
import GallerySection from "@/components/GallerySection";
import CreditsSection from "@/components/CreditsSection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <InfoSection />
      <TrailerSection />
      <GallerySection />
      <CreditsSection />
      <FAQSection />
      <RequirementsSection />
      <DownloadSection />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
