import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SpecialtiesSection from './components/SpecialtiesSection';
import ProjectsSection from './components/ProjectsSection';
import ProofSection from './components/ProofSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SiteHeader from '../../components/SiteHeader';
import ScrollProgressBar from '../../components/ScrollProgressBar';
import WhatsAppButton from '../../components/WhatsAppButton';
import BackToTopButton from '../../components/BackToTopButton';

export default function HomePage() {
  return (
    <div className="relative bg-[#0a0a0a]">
      <ScrollProgressBar />
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <ProjectsSection />
      <ProofSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </div>
  );
}
