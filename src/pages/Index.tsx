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
import ProgressBar from "@/components/ProgressBar";
import BackToTop from "@/components/BackToTop";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <LoadingScreen /> Removed */}
      <ProgressBar />
      <Navigation />
      <Hero />
      <InfoSection />
      {/* <NewsSection /> Removed */}
      <TrailerSection />
      <GallerySection />
      <CreditsSection />
      <FAQSection />
      <RequirementsSection />
      <DownloadSection />
      <Footer />
      <ChatBot />
      <BackToTop />
      <SocialLinks />
    </div>
  );
};
export default Index;
