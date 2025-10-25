import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import VisionSection from './components/VisionSection';
import ContactSection from './components/ContactSection';
export default function Home() {
  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection/>
      <VisionSection />
      <Footer />
    </div>
  );
}
