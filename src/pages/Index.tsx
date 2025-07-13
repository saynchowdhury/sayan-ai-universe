import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ManifestoSection from '@/components/ManifestoSection';
import FutureVisionSection from '@/components/FutureVisionSection';
import WordsFeedSection from '@/components/WordsFeedSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import AIChatbot from '@/components/AIChatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-cosmic-dark text-foreground">
      <Navigation />
      
      <main id="hero">
        <HeroSection />
        <AboutSection />
        <ManifestoSection />
        <FutureVisionSection />
        <WordsFeedSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

export default Index;
