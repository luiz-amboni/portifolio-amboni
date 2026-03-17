import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

export default function CTASection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ threshold: 0.2 });
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('cta-section');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)));
      setParallaxOffset(scrollProgress * 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="cta-section"
      className="relative min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop"
          alt="Background"
          className="w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(200,169,110,0.04) 100%)' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto w-full px-5 md:px-0">
        <h2
          className={`text-4xl sm:text-6xl md:text-[100px] font-bold text-white uppercase tracking-wider leading-none mb-8 md:mb-10 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          VAMOS CRIAR<br />
          ALGO INCRÍVEL
        </h2>

        <div className="space-y-2 mb-10 md:mb-16">
          <p className={`text-[#d0d0d0] text-lg md:text-2xl font-light transition-all duration-700 delay-100 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Transforme sua ideia em realidade digital
          </p>
          <p className={`text-[#d0d0d0] text-lg md:text-2xl font-light transition-all duration-700 delay-200 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            com design inteligente e tecnologia de ponta
          </p>
        </div>

        <a
          href="https://wa.me/5548996815062?text=Olá%20Luiz!%20Gostaria%20de%20conversar%20sobre%20um%20projeto."
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-4 bg-[#0f0f0f]/80 border border-[#c8a96e]/50 rounded-full overflow-hidden hover:scale-105 transition-all duration-700 delay-300 group cursor-pointer shadow-[0_0_40px_rgba(200,169,110,0.2)] ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #c8a96e, #b8945a)' }}>
            <i className="ri-message-3-line text-[#0f0f0f] text-xl md:text-2xl"></i>
          </div>
          <span className="text-white uppercase font-bold tracking-wider px-4 md:px-8 whitespace-nowrap text-sm md:text-base">
            INICIAR PROJETO
          </span>
          <i className="ri-arrow-right-up-line text-[#c8a96e] text-xl md:text-2xl pr-4 md:pr-6"></i>
        </a>
      </div>
    </section>
  );
}
