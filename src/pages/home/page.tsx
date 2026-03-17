import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SpecialtiesSection from './components/SpecialtiesSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from '../../components/WhatsAppButton';

export default function HomePage() {
  return (
    <main className="relative bg-[#0a0a0a]">
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
